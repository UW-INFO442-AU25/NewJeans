import React, { useState, useMemo, useEffect } from 'react';
import './JobBoard.css';
import NavBar from './components/NavBar';
import jobs from './data/jobs.json';
import JobCard from './components/JobCard';
import SearchBar from './components/SearchBar';

function JobBoard({ onNavigateHome, onNavigateToJobDescription, initialSearchQuery = '' }) {
  const [visaFilters, setVisaFilters] = useState([]); // e.g. ['H-1B']
  const [locationQuery, setLocationQuery] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [jobTypeFilters, setJobTypeFilters] = useState([]);
  const [experienceFilters, setExperienceFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || '');
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    setSearchQuery(initialSearchQuery || '');
  }, [initialSearchQuery]);

  // When the search query changes, reset visibleCount: if query is empty show the first page, otherwise show all matches
  useEffect(() => {
    if (!searchQuery || searchQuery.trim() === '') {
      setVisibleCount(10);
    } else {
      // show all when searching
      setVisibleCount(Number.POSITIVE_INFINITY);
    }
  }, [searchQuery]);

  const visaOptions = ['H-1B', 'L-1', 'O-1', 'OPT', 'CPT'];
  const jobTypeOptions = ['Internship', 'Part-Time', 'Full-Time', 'Contract'];
  const experienceOptions = ['Entry-Level', 'Mid-Level', 'Senior-Level'];

  const toggleInArray = (arr, setArr, value) => {
    setArr((prev) => {
      if (prev.includes(value)) return prev.filter((x) => x !== value);
      return [...prev, value];
    });
  };

  const clearAll = () => {
    setVisaFilters([]);
    setLocationQuery('');
    setRemoteOnly(false);
    setJobTypeFilters([]);
    setExperienceFilters([]);
    setSalaryMin(salaryBounds.overallMin);
    setSalaryMax(salaryBounds.overallMax);
  };

  // Parse salary strings into an annual numeric range { min, max } in USD.
  const parseSalaryRange = (salaryStr) => {
    if (!salaryStr || typeof salaryStr !== 'string') return { min: null, max: null };
    const s = salaryStr.replace(/\s/g, '');
    // Hourly rates like "$40/hr" or "$50/hr"
    const hourlyMatch = s.match(/\$?([0-9,]+)\/?hr/i);
    if (hourlyMatch) {
      const hourly = Number(hourlyMatch[1].replace(/,/g, ''));
      const annual = Math.round(hourly * 2080); // 40h * 52 weeks
      return { min: annual, max: annual };
    }
    // Ranges like "$70,000-$90,000"
    const rangeMatch = s.match(/\$?([0-9,]+)\-\$?([0-9,]+)/);
    if (rangeMatch) {
      const min = Number(rangeMatch[1].replace(/,/g, ''));
      const max = Number(rangeMatch[2].replace(/,/g, ''));
      return { min, max };
    }
    // Single amount like "$70000"
    const singleMatch = s.match(/\$?([0-9,]+)/);
    if (singleMatch) {
      const v = Number(singleMatch[1].replace(/,/g, ''));
      return { min: v, max: v };
    }
    return { min: null, max: null };
  };

  // derive global salary bounds from data
  const salaryBounds = useMemo(() => {
    const mins = [];
    const maxs = [];
    for (const job of jobs) {
      const r = parseSalaryRange(job.salary || '');
      if (r.min != null) mins.push(r.min);
      if (r.max != null) maxs.push(r.max);
    }
    const overallMin = mins.length ? Math.min(...mins) : 0;
    const overallMax = maxs.length ? Math.max(...maxs) : 200000;
    return { overallMin, overallMax };
  }, []);

  const [salaryMin, setSalaryMin] = useState(salaryBounds.overallMin);
  const [salaryMax, setSalaryMax] = useState(salaryBounds.overallMax);

  const setSalaryMinSafe = (v) => {
    const val = Number(v);
    if (val <= salaryMax) setSalaryMin(val);
    else setSalaryMin(salaryMax);
  };

  const setSalaryMaxSafe = (v) => {
    const val = Number(v);
    if (val >= salaryMin) setSalaryMax(val);
    else setSalaryMax(salaryMin);
  };

  // Helper: check if any attribute of the job (including nested arrays/objects)
  // contains the query string (case-insensitive).
  const jobMatchesQuery = (job, q) => {
    if (!q || q.trim() === '') return true;
    const needle = q.toLowerCase();
    const parts = [];

    const collect = (val) => {
      if (val == null) return;
      if (Array.isArray(val)) {
        val.forEach(collect);
      } else if (typeof val === 'object') {
        Object.values(val).forEach(collect);
      } else {
        parts.push(String(val));
      }
    };

    collect(job);
    const hay = parts.join(' ').toLowerCase();
    return hay.includes(needle);
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // searchQuery should match any attribute of the job object
      if (!jobMatchesQuery(job, searchQuery)) return false;
      if (visaFilters.length > 0) {
        const matchesVisa = job.visaTypes && job.visaTypes.some((v) => visaFilters.includes(v));
        if (!matchesVisa) return false;
      }
      if (locationQuery && !job.location.toLowerCase().includes(locationQuery.toLowerCase())) return false;
      if (remoteOnly && !job.remote) return false;
      if (jobTypeFilters.length > 0 && !jobTypeFilters.includes(job.employmentType)) return false;
      if (experienceFilters.length > 0 && !experienceFilters.includes(job.experience)) return false;
      // Salary filter: parse job salary and require overlap between job range and selected range
      const jobRange = parseSalaryRange(job.salary || '');
      if (jobRange.min != null && jobRange.max != null) {
        if (jobRange.max < salaryMin) return false;
        if (jobRange.min > salaryMax) return false;
      }
      return true;
    });
  }, [searchQuery, visaFilters, locationQuery, remoteOnly, jobTypeFilters, experienceFilters, salaryMin, salaryMax]);

  // determine which jobs to actually render depending on visibleCount and whether a query exists
  const displayedJobs = (searchQuery && searchQuery.trim() !== '')
    ? filteredJobs
    : filteredJobs.slice(0, visibleCount);

  const hasMore = (filteredJobs.length > displayedJobs.length);

  return (
    <div className="job-board-container">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={null}
      />

      <div className="main-content">
        <aside className="sidebar">
          <div className="filter-header">
            <div className="filter-title-row">
              <div className="filter-title">Refine Your Search</div>
              <div className="clear-all" onClick={clearAll} style={{ cursor: 'pointer' }}>Clear All</div>
            </div>
            <div className="filter-divider"></div>
          </div>

          <div className="filter-section">
            <div className="filter-group">
              <div className="filter-group-header">
                <div className="filter-group-title">Visas & Status</div>
                <svg className="chevron-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#767676" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {visaOptions.map((v) => (
                <label key={v} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={visaFilters.includes(v)}
                    onChange={() => toggleInArray(visaFilters, setVisaFilters, v)}
                  />
                  <div className="checkbox-label">{v}</div>
                </label>
              ))}
            </div>

            <div className="filter-divider"></div>

            <div className="filter-group">
              <div className="filter-group-header">
                <div className="filter-group-title">Location</div>
                <svg className="chevron-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#767676" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="location-search">
                <div className="location-search-content">
                  <svg className="search-icon-small" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 15.75L11.2501 11.25M12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75C4.6005 12.75 2.25 10.3995 2.25 7.5C2.25 4.6005 4.6005 2.25 7.5 2.25C10.3995 2.25 12.75 4.6005 12.75 7.5Z" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    className="location-input"
                    placeholder="City, State, Country"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%' }}
                  />
                </div>
              </div>
              <label className="checkbox-item">
                <input type="checkbox" checked={remoteOnly} onChange={() => setRemoteOnly(!remoteOnly)} />
                <div className="checkbox-label">Remote only</div>
              </label>
            </div>

            <div className="filter-divider"></div>

            <div className="filter-group">
              <div className="filter-group-header">
                <div className="filter-group-title">Job Type</div>
                <svg className="chevron-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#767676" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {jobTypeOptions.map((jt) => (
                <label key={jt} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={jobTypeFilters.includes(jt)}
                    onChange={() => toggleInArray(jobTypeFilters, setJobTypeFilters, jt)}
                  />
                  <div className="checkbox-label">{jt}</div>
                </label>
              ))}
            </div>

            <div className="filter-divider"></div>

            <div className="filter-group">
              <div className="filter-group-header">
                <div className="filter-group-title">Experience Level</div>
                <svg className="chevron-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#767676" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {experienceOptions.map((ex) => (
                <label key={ex} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={experienceFilters.includes(ex)}
                    onChange={() => toggleInArray(experienceFilters, setExperienceFilters, ex)}
                  />
                  <div className="checkbox-label">{ex}</div>
                </label>
              ))}
            </div>

            <div className="filter-divider"></div>

            <div className="filter-group">
              <div className="filter-group-header">
                <div className="filter-group-title">Industry</div>
                <svg className="chevron-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#767676" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Technology</div>
              </label>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Finance</div>
              </label>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Engineering</div>
              </label>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Healthcare</div>
              </label>
            </div>

            <div className="filter-divider"></div>

            <div className="filter-group">
              <div className="filter-group-header">
                <div className="filter-group-title">Salary</div>
                <svg className="chevron-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#767676" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="salary-slider-wrapper">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div className="salary-label">Min: ${salaryMin.toLocaleString()}</div>
                  <div className="salary-label">Max: ${salaryMax.toLocaleString()}</div>
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <input
                    type="range"
                    min={salaryBounds.overallMin}
                    max={salaryBounds.overallMax}
                    value={salaryMin}
                    onChange={(e) => setSalaryMinSafe(e.target.value)}
                    aria-label="Minimum salary"
                    style={{ flex: 1 }}
                  />
                  <input
                    type="range"
                    min={salaryBounds.overallMin}
                    max={salaryBounds.overallMax}
                    value={salaryMax}
                    onChange={(e) => setSalaryMaxSafe(e.target.value)}
                    aria-label="Maximum salary"
                    style={{ flex: 1 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="content-area">
          <div className="search-section">
            <SearchBar
              initialValue={searchQuery}
              onSubmit={(q) => setSearchQuery(q)}
            />
            <p className="search-description">
              Navigate your career journey with confidence. Search our database of jobs from employers who actively sponsor H-1B, OPT, CPT, and other work visas for international students.
            </p>
            <div className="results-count">{displayedJobs.length} Results</div>
          </div>

          <div className="jobs-list">
            {displayedJobs.length === 0 ? (
              <div style={{ padding: 24, color: '#767676' }}>No jobs match your filters.</div>
            ) : (
              displayedJobs.map((job) => (
                <JobCard key={job.id} job={job} onClick={() => onNavigateToJobDescription(job.id)} />
              ))
            )}
          </div>

          <div className="view-more">
            {hasMore ? (
              <button
                className="view-more-link"
                onClick={() => setVisibleCount((v) => (Number.isFinite(v) ? v + 10 : 10 + 10))}
              >
                View More Results
              </button>
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
}

export default JobBoard;
