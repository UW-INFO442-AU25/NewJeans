import React, { useState, useMemo } from 'react';
import './EmployerBoard.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CompanyCard from './components/CompanyCard';
import jobs from './data/jobs.json';

function EmployerBoard({ onNavigateHome, onNavigateJobBoard, onNavigateEmployerBoard = () => {}, onNavigateProfile, onNavigateStudentResources, onNavigateLogin = () => {}, onNavigateToCompanyDetail = () => {}, user = null, onSignOut = () => {} }) {
  const [visaFilters, setVisaFilters] = useState([]);
  const [locationQuery, setLocationQuery] = useState('');
  const [locationTypeFilters, setLocationTypeFilters] = useState([]);
  const [industryFilters, setIndustryFilters] = useState([]);
  const [companySizeFilters, setCompanySizeFilters] = useState([]);
  // track which filter groups are open (true) or collapsed (false)
  const [openGroups, setOpenGroups] = useState({
    visas: true,
    location: true,
    industry: true,
    companySize: true
  });

  const toggleGroup = (groupKey) => {
    setOpenGroups((prev) => ({ ...prev, [groupKey]: !prev[groupKey] }));
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  const visaOptions = ['H-1B', 'L-1', 'O-1', 'OPT', 'CPT'];
  const locationTypeOptions = ['Remote', 'Hybrid', 'In-Person'];
  const industryOptions = ['Technology', 'Finance', 'Engineering', 'Healthcare'];
  const companySizeOptions = ['Small (1–50)', 'Medium (51–500)', 'Large (501+)'];

  const toggleInArray = (arr, setArr, value) => {
    setArr((prev) => {
      if (prev.includes(value)) return prev.filter((x) => x !== value);
      return [...prev, value];
    });
  };

  const clearAll = () => {
    setVisaFilters([]);
    setLocationQuery('');
    setLocationTypeFilters([]);
    setIndustryFilters([]);
    setCompanySizeFilters([]);
  };

  const employerProfiles = useMemo(() => {
    const companyMap = {};
    
    jobs.forEach((job) => {
      const companyName = job.company;
      
      if (!companyMap[companyName]) {
        companyMap[companyName] = {
          name: companyName,
          industry: 'Technology',
          location: job.location,
          openPositions: 0,
          visaTypes: new Set(),
          remote: job.remote,
          companySize: 'Medium (51–500)'
        };
      }
      
      companyMap[companyName].openPositions += 1;
      
      if (job.visaTypes) {
        job.visaTypes.forEach((visa) => {
          companyMap[companyName].visaTypes.add(visa);
        });
      }
    });
    
    return Object.values(companyMap).map((company) => ({
      ...company,
      visaTypes: Array.from(company.visaTypes)
    }));
  }, []);

  const filteredEmployers = useMemo(() => {
    return employerProfiles.filter((employer) => {
      if (searchQuery && searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const searchableText = `${employer.name} ${employer.industry} ${employer.location}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
      }

      if (visaFilters.length > 0) {
        const matchesVisa = employer.visaTypes.some((v) => visaFilters.includes(v));
        if (!matchesVisa) return false;
      }

      if (locationQuery && !employer.location.toLowerCase().includes(locationQuery.toLowerCase())) {
        return false;
      }

      if (locationTypeFilters.length > 0) {
        if (locationTypeFilters.includes('Remote') && !employer.remote) return false;
      }

      if (industryFilters.length > 0 && !industryFilters.includes(employer.industry)) {
        return false;
      }

      if (companySizeFilters.length > 0 && !companySizeFilters.includes(employer.companySize)) {
        return false;
      }

      return true;
    });
  }, [employerProfiles, searchQuery, visaFilters, locationQuery, locationTypeFilters, industryFilters, companySizeFilters]);

  const displayedEmployers = filteredEmployers.slice(0, visibleCount);
  const hasMore = filteredEmployers.length > displayedEmployers.length;

  return (
    <div className="employer-board-container">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        onNavigateEmployerBoard={onNavigateEmployerBoard}
        onNavigateProfile={onNavigateProfile}
        onNavigateStudentResources={onNavigateStudentResources}
        onNavigateLogin={onNavigateLogin}
        role={user ? 'student' : 'guest'}
        onSignOut={onSignOut}
        userName={user ? user.name : ''}
      />

      <div className="employer-main-content">
        <aside className="employer-sidebar">
          <div className="filter-header">
            <div className="filter-title-row">
              <div className="filter-title">Refine Your Search</div>
              <div className="clear-all" onClick={clearAll} style={{ cursor: 'pointer' }}>Clear All</div>
            </div>
            <div className="filter-divider"></div>
          </div>

          <div className="filter-section">
              <div className="filter-group">
              <div className="filter-group-header" onClick={() => toggleGroup('visas')} role="button" tabIndex={0}>
                <div className="filter-group-title">Visas & Status</div>
                <svg className={`chevron-icon ${openGroups.visas ? 'open' : ''}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#767676" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={`filter-group-content ${openGroups.visas ? 'expanded' : 'collapsed'}`}>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={visaFilters.includes('CPT') || visaFilters.includes('OPT')}
                  onChange={() => {
                    if (visaFilters.includes('CPT') || visaFilters.includes('OPT')) {
                      setVisaFilters((prev) => prev.filter((v) => v !== 'CPT' && v !== 'OPT'));
                    } else {
                      setVisaFilters((prev) => [...prev, 'CPT', 'OPT']);
                    }
                  }}
                />
                <div className="checkbox-label">CPT/OPT Friendly</div>
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={visaFilters.includes('L-1') || visaFilters.includes('O-1')}
                  onChange={() => {
                    if (visaFilters.includes('L-1') || visaFilters.includes('O-1')) {
                      setVisaFilters((prev) => prev.filter((v) => v !== 'L-1' && v !== 'O-1'));
                    } else {
                      setVisaFilters((prev) => [...prev, 'L-1', 'O-1']);
                    }
                  }}
                />
                <div className="checkbox-label">Requires Sponsorship</div>
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={visaFilters.includes('H-1B')}
                  onChange={() => toggleInArray(visaFilters, setVisaFilters, 'H-1B')}
                />
                <div className="checkbox-label">Full-Time (H-1B Eligible)</div>
              </label>
              </div>
            </div>

            <div className="filter-divider"></div>

              <div className="filter-group">
              <div className="filter-group-header" onClick={() => toggleGroup('location')} role="button" tabIndex={0}>
                <div className="filter-group-title">Location</div>
                <svg className={`chevron-icon ${openGroups.location ? 'open' : ''}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#767676" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={`filter-group-content ${openGroups.location ? 'expanded' : 'collapsed'}`}>
              <div className="location-search-content">
                <svg className="search-icon-small" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 15.75L11.2501 11.25M12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75C4.6005 12.75 2.25 10.3995 2.25 7.5C2.25 4.6005 4.6005 2.25 7.5 2.25C10.3995 2.25 12.75 4.6005 12.75 7.5Z" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  className="location-input"
                  placeholder="City, State, Country"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '12px', color: '#767676', fontFamily: 'Inter' }}
                />
              </div>
              
              {locationTypeOptions.map((lt) => (
                <label key={lt} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={locationTypeFilters.includes(lt)}
                    onChange={() => toggleInArray(locationTypeFilters, setLocationTypeFilters, lt)}
                  />
                  <div className="checkbox-label">{lt}</div>
                </label>
              ))}
              </div>
            </div>

            <div className="filter-divider"></div>

            <div className="filter-group">
              <div className="filter-group-header" onClick={() => toggleGroup('industry')} role="button" tabIndex={0}>
                <div className="filter-group-title">Industry</div>
                <svg className={`chevron-icon ${openGroups.industry ? 'open' : ''}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#767676" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={`filter-group-content ${openGroups.industry ? 'expanded' : 'collapsed'}`}>
              {industryOptions.map((ind) => (
                <label key={ind} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={industryFilters.includes(ind)}
                    onChange={() => toggleInArray(industryFilters, setIndustryFilters, ind)}
                  />
                  <div className="checkbox-label">{ind}</div>
                </label>
              ))}
              </div>
            </div>

            <div className="filter-divider"></div>

            <div className="filter-group">
              <div className="filter-group-header" onClick={() => toggleGroup('companySize')} role="button" tabIndex={0}>
                <div className="filter-group-title">Company Size</div>
                <svg className={`chevron-icon ${openGroups.companySize ? 'open' : ''}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#767676" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={`filter-group-content ${openGroups.companySize ? 'expanded' : 'collapsed'}`}>
              {companySizeOptions.map((cs) => (
                <label key={cs} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={companySizeFilters.includes(cs)}
                    onChange={() => toggleInArray(companySizeFilters, setCompanySizeFilters, cs)}
                  />
                  <div className="checkbox-label">{cs}</div>
                </label>
              ))}
              </div>
            </div>

            <div className="filter-divider"></div>
            
            <div style={{ height: '100px' }}></div>
          </div>
        </aside>

        <main className="employer-content-area">
          <div className="employer-search-section">
            <div className="employer-header">
              <h1 className="employer-page-title">Find Employers That Sponsor International Students</h1>
            </div>
            
            <div className="employer-search-bar-wrapper">
              <div className="employer-search-bar">
                <div className="employer-search-content">
                  <div className="employer-search-inner">
                    <svg className="search-icon-main" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      className="search-placeholder-main"
                      placeholder="Search Job Titles, Employers, Key Words"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%' }}
                    />
                  </div>
                </div>
              </div>
              <div className="results-count">{filteredEmployers.length} Results</div>
            </div>
          </div>

          <div className="employer-cards-container">
            {displayedEmployers.length === 0 ? (
              <div style={{ padding: 24, color: '#767676' }}>No employers match your filters.</div>
            ) : (
              displayedEmployers.map((employer, index) => (
                <CompanyCard key={`${employer.name}-${index}`} employer={employer} onClick={() => onNavigateToCompanyDetail(employer.name)} />
              ))
            )}
          </div>

          <div className="view-more">
            {hasMore ? (
              <button
                className="view-more-link"
                onClick={() => setVisibleCount((v) => v + 9)}
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

export default EmployerBoard;
