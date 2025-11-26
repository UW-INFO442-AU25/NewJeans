import React, { useState, useEffect } from "react";
import JobBoard from "./JobBoard";
import EmployerBoard from "./EmployerBoard";
import Profile from "./Profile";
import JobDescription from "./JobDescription";
import JobCreation from "./JobCreation";
import StudentResources from "./StudentResources";
import CPT from "./CPT";
import OPT from "./OPT";
import OnCampusEmployment from "./OnCampusEmployment";
import OffCampusEmployment from "./OffCampusEmployment";
import InternationalOrganization from "./InternationalOrganization";
import F1ToH1BGuide from "./F1ToH1BGuide";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from './components/Login';
import SearchBar from "./components/SearchBar";
import jobs from './data/jobs.json';
import CompanyCard from './components/CompanyCard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [initialSearchQuery, setInitialSearchQuery] = useState('');
  // persisted saved jobs (array of job ids)
  const [savedJobIds, setSavedJobIds] = useState(() => {
    try {
      const raw = localStorage.getItem('savedJobIds');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('savedJobIds', JSON.stringify(savedJobIds));
    } catch (e) {
      // ignore
    }
  }, [savedJobIds]);

  const toggleSavedJob = (jobId) => {
    setSavedJobIds((prev) => {
      if (prev.includes(jobId)) return prev.filter((id) => id !== jobId);
      return [...prev, jobId];
    });
  };

  const navigateToJobBoard = () => {
    setCurrentPage('job-board');
  };

  const navigateToEmployerBoard = () => {
    setCurrentPage('employer-board');
  };

  const navigateToJobBoardWithQuery = (query) => {
    setInitialSearchQuery(query || '');
    setCurrentPage('job-board');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  const navigateToProfile = () => {
    setCurrentPage('profile');
  };

  const navigateToJobDescription = (jobId) => {
    setSelectedJobId(jobId);
    setCurrentPage('job-description');
  };

  const navigateToJobCreation = () => {
    setCurrentPage('job-creation');
  };

  const navigateToLogin = () => {
    setCurrentPage('login');
  };

  const navigateToStudentResources = () => {
    setCurrentPage('student-resources');
  };

  const navigateToCPT = () => {
    setCurrentPage('cpt');
  };

  const navigateToOPT = () => {
    setCurrentPage('opt');
  };

  const navigateToOnCampus = () => {
    setCurrentPage('on-campus');
  };

  const navigateToOffCampus = () => {
    setCurrentPage('off-campus');
  };

  const navigateToInternationalOrg = () => {
    setCurrentPage('international-org');
  };

  const navigateToH1BGuide = () => {
    setCurrentPage('h1b-guide');
  };

  const handleLogin = (userObj) => {
    setUser(userObj);
    setCurrentPage('home');
  };

  const handleSignOut = () => {
    setUser(null);
    setCurrentPage('home');
  };

  if (currentPage === 'job-board') {
    return <JobBoard onNavigateHome={navigateToHome} onNavigateJobBoard={navigateToJobBoard} onNavigateEmployerBoard={navigateToEmployerBoard} onNavigateToJobDescription={navigateToJobDescription} onNavigateProfile={navigateToProfile} onNavigateLogin={navigateToLogin} onNavigateStudentResources={navigateToStudentResources} initialSearchQuery={initialSearchQuery} savedJobIds={savedJobIds} onToggleSave={toggleSavedJob} user={user} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'profile') {
    return <Profile onNavigateHome={navigateToHome} onNavigateJobBoard={navigateToJobBoard} onNavigateEmployerBoard={navigateToEmployerBoard} onNavigateToJobDescription={navigateToJobDescription} onNavigateLogin={navigateToLogin} onNavigateStudentResources={navigateToStudentResources} onNavigateProfile={navigateToProfile} savedJobIds={savedJobIds} onToggleSave={toggleSavedJob} onSignOut={handleSignOut} user={user} />;
  }

  if (currentPage === 'job-description') {
    const job = jobs.find((j) => j.id === selectedJobId) || null;
    return <JobDescription job={job} onNavigateHome={navigateToHome} onNavigateJobBoard={navigateToJobBoard} onNavigateEmployerBoard={navigateToEmployerBoard} onNavigateLogin={navigateToLogin} onNavigateStudentResources={navigateToStudentResources} isSaved={savedJobIds.includes(selectedJobId)} onToggleSave={toggleSavedJob} user={user} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'job-creation') {
    return <JobCreation onNavigateHome={navigateToHome} onNavigateLogin={navigateToLogin} user={user} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'employer-board') {
    return <EmployerBoard onNavigateHome={navigateToHome} onNavigateJobBoard={navigateToJobBoard} onNavigateProfile={navigateToProfile} onNavigateStudentResources={() => setCurrentPage('student-resources')} onNavigateLogin={navigateToLogin} user={user} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'login') {
    return (
      <div className="desktop-container">
        <NavBar
          onNavigateHome={navigateToHome}
          onNavigateJobBoard={navigateToJobBoard}
          onNavigateProfile={navigateToProfile}
          onNavigateLogin={navigateToLogin}
          onNavigateStudentResources={navigateToStudentResources}
          role={user ? 'student' : 'guest'}
          onSignOut={handleSignOut}
          userName={user ? user.name : ''}
        />
        <Login onLogin={handleLogin} onNavigateHome={navigateToHome} />
        <Footer onNavigateJobBoard={navigateToJobBoard} onNavigateEmployerBoard={navigateToEmployerBoard} onNavigateHome={navigateToHome} onNavigateStudentResources={navigateToStudentResources} />
      </div>
    );
  }

  if (currentPage === 'student-resources') {
    return <StudentResources onNavigateHome={navigateToHome} onNavigateJobBoard={navigateToJobBoard} onNavigateEmployerBoard={navigateToEmployerBoard} onNavigateLogin={navigateToLogin} onNavigateToCPT={navigateToCPT} onNavigateToOPT={navigateToOPT} onNavigateToOnCampus={navigateToOnCampus} onNavigateToOffCampus={navigateToOffCampus} onNavigateToInternationalOrg={navigateToInternationalOrg} onNavigateToH1BGuide={navigateToH1BGuide} user={user} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'cpt') {
    return <CPT onNavigateHome={navigateToHome} onNavigateJobBoard={navigateToJobBoard} onNavigateEmployerBoard={navigateToEmployerBoard} onNavigateLogin={navigateToLogin} onNavigateStudentResources={navigateToStudentResources} user={user} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'opt') {
    return <OPT onNavigateHome={navigateToHome} onNavigateJobBoard={navigateToJobBoard} onNavigateEmployerBoard={navigateToEmployerBoard} onNavigateLogin={navigateToLogin} onNavigateStudentResources={navigateToStudentResources} user={user} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'on-campus') {
    return <OnCampusEmployment onNavigateHome={navigateToHome} onNavigateJobBoard={navigateToJobBoard} onNavigateEmployerBoard={navigateToEmployerBoard} onNavigateLogin={navigateToLogin} onNavigateStudentResources={navigateToStudentResources} user={user} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'off-campus') {
    return <OffCampusEmployment onNavigateHome={navigateToHome} onNavigateJobBoard={navigateToJobBoard} onNavigateEmployerBoard={navigateToEmployerBoard} onNavigateLogin={navigateToLogin} onNavigateStudentResources={navigateToStudentResources} user={user} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'international-org') {
    return <InternationalOrganization onNavigateHome={navigateToHome} onNavigateJobBoard={navigateToJobBoard} onNavigateEmployerBoard={navigateToEmployerBoard} onNavigateLogin={navigateToLogin} onNavigateStudentResources={navigateToStudentResources} user={user} onSignOut={handleSignOut} />;
  }

  if (currentPage === 'h1b-guide') {
    return <F1ToH1BGuide onNavigateHome={navigateToHome} onNavigateJobBoard={navigateToJobBoard} onNavigateEmployerBoard={navigateToEmployerBoard} onNavigateLogin={navigateToLogin} onNavigateStudentResources={navigateToStudentResources} user={user} onSignOut={handleSignOut} />;
  }

  return (
    <div className="desktop-container">
        <NavBar
          onNavigateHome={navigateToHome}
          onNavigateJobBoard={navigateToJobBoard}
          onNavigateProfile={navigateToProfile}
          onNavigateLogin={navigateToLogin}
          onNavigateStudentResources={navigateToStudentResources}
          role={user ? 'student' : 'guest'}
          onSignOut={handleSignOut}
          userName={user ? user.name : ''}
        />

        <section className="hero-section">
          <div className="hero-content-wrapper">
            <div className="hero-text-content">
              <div className="hero-text-group">
                <h1 className="hero-title">Your Bridge to Visa Sponsorship</h1>
                <p className="hero-description">
                  Connecting international students with U.S. employers who
                  sponsor work visas. Find transparency, opportunity, and
                  guidance in your career journey.
                </p>
              </div>
              <div className="hero-search-area">
                <SearchBar
                  initialValue={''}
                  onSubmit={(q) => navigateToJobBoardWithQuery(q)}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="featured-section">
          <div className="section-header">
            <div className="section-header-content">
              <div className="section-label">Featured Employers</div>
              <h2 className="section-title">Top companies actively sponsoring international talent</h2>
            </div>
            <div className="section-header-button">
              <button className="btn-primary" onClick={navigateToEmployerBoard}>View Employers</button>
            </div>
          </div>
          <div className="company-cards">
            {(() => {
              // build employer profiles aggregated from jobs and pick top 3 by open positions
              const companyMap = {};
              jobs.forEach((job) => {
                const name = job.company || 'Unknown';
                if (!companyMap[name]) {
                  companyMap[name] = {
                    name,
                    industry: job.industry || 'Technology',
                    location: job.location || 'Remote',
                    openPositions: 0,
                    visaTypes: new Set(),
                  };
                }
                companyMap[name].openPositions += 1;
                if (job.visaTypes && Array.isArray(job.visaTypes)) {
                  job.visaTypes.forEach((v) => companyMap[name].visaTypes.add(v));
                }
              });

              const employers = Object.values(companyMap).map((c) => ({ ...c, visaTypes: Array.from(c.visaTypes) }));
              employers.sort((a, b) => b.openPositions - a.openPositions);
              const top3 = employers.slice(0, 3);

              return top3.map((employer) => (
                <CompanyCard key={employer.name} employer={employer} />
              ));
            })()}
          </div>
        </section>

        <section className="how-it-works-section">
           <div className="tools-header centered-text">
            <div className="section-label">How this works</div>
            <h2 className="section-title centered">4 simple steps to find your ideal employers</h2>
          </div>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="step-name">Research</div>
              <p className="step-desc">Review detailed sponsorship policies, company culture, and available positions.</p>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="step-name">Search</div>
              <p className="step-desc">Filter employers by visa type, location, industry, and company size to find perfect matches.</p>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M16 18L18 20L22 16M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="step-name">Apply</div>
              <p className="step-desc">Connect with employers confident in their visa sponsorship commitment.</p>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2L14 5M14 5L11 8M14 5H6.8C5.11984 5 4.27976 5 3.63803 5.32698C3.07354 5.6146 2.6146 6.07354 2.32698 6.63803C2 7.27976 2 8.11984 2 9.8V15.5C2 15.9644 2 16.1966 2.02567 16.3916C2.2029 17.7378 3.26222 18.7971 4.60842 18.9743C4.80337 19 5.03558 19 5.5 19M10 19H17.2C18.8802 19 19.7202 19 20.362 18.673C20.9265 18.3854 21.3854 17.9265 21.673 17.362C22 16.7202 22 15.8802 22 14.2V8.5C22 8.03558 22 7.80337 21.9743 7.60842C21.7971 6.26222 20.7378 5.2029 19.3916 5.02567C19.1966 5 18.9644 5 18.5 5M10 19L13 22M10 19L13 16" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="step-name">Repeat</div>
              <p className="step-desc">Continuously refine your search, stay updated, and explore new opportunities as they arise.</p>
            </div>
          </div>
        </section>

        <section className="featured-section">
          <div className="tools-header centered-text">
            <div className="section-label">Empowering Your Career</div>
            <h2 className="section-title centered">We provide the tools and information you need to navigate visa sponsorship with confidence</h2>
          </div>
          <div className="tools-cards">
            <div className="tool-card">
              <div className="tool-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22M2.50002 9H21.5M2.5 15H21.5" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="tool-content">
                <div className="tool-title">Searchable Database</div>
                <p className="tool-desc">Filter employers by visa type, location, industry, and more. Find companies that match your needs.</p>
              </div>
            </div>
            <div className="tool-card">
              <div className="tool-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="tool-content">
                <div className="tool-title">Educational Resources</div>
                <p className="tool-desc">Comprehensive guides for students and employers on visa processes and requirements.</p>
              </div>
            </div>
            <div className="tool-card">
              <div className="tool-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M16 13H8M16 17H8M10 9H8M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="tool-content">
                <div className="tool-title">Document Prep & Checklist Tool</div>
                <p className="tool-desc">Helping students manage essential visa and work authorization documents (I-20, EAD, etc.).</p>
              </div>
            </div>
          </div>
        </section>

        <Footer onNavigateJobBoard={navigateToJobBoard} onNavigateEmployerBoard={navigateToEmployerBoard} onNavigateHome={navigateToHome} onNavigateStudentResources={navigateToStudentResources} />
    </div>
  );
}

export default App;
