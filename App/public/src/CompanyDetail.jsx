import React, { useMemo, useEffect } from 'react';
import './CompanyDetail.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import JobCardStyle2 from './components/JobCardStyle2';
import jobs from './data/jobs.json';

function CompanyDetail({ 
  companyName, 
  onNavigateHome, 
  onNavigateJobBoard, 
  onNavigateEmployerBoard,
  onNavigateProfile,
  onNavigateLogin,
  onNavigateStudentResources,
  onNavigateToJobDescription,
  savedJobIds = [],
  onToggleSave = () => {},
  user = null,
  onSignOut = () => {}
}) {
  const companyJobs = useMemo(() => {
    return jobs.filter((job) => job.company === companyName);
  }, [companyName]);

  const companyData = useMemo(() => {
    if (companyJobs.length === 0) {
      return {
        name: companyName || 'Company Name',
        industry: 'Technology',
        location: 'Remote',
        companySize: 'Medium (51–500)',
        visaTypes: [],
        openPositions: 0,
        description: 'Company description not available.'
      };
    }

    const visaTypesSet = new Set();
    companyJobs.forEach((job) => {
      if (job.visaTypes) {
        job.visaTypes.forEach((v) => visaTypesSet.add(v));
      }
    });

    return {
      name: companyName,
      industry: companyJobs[0].company === 'Aster Labs' ? 'Technology' : 'Technology',
      location: companyJobs[0].location,
      companySize: 'Medium (51–500)',
      visaTypes: Array.from(visaTypesSet),
      openPositions: companyJobs.length,
      description: 'TechCorp Global is a leading technology company specializing in cloud computing, artificial intelligence, and enterprise software solutions. We\'re committed to innovation and building products that make a difference in people\'s lives. Our team of talented engineers and designers work on cutting-edge projects that impact millions of users worldwide.'
    };
  }, [companyJobs, companyName]);

  const handleJobClick = (jobId) => {
    onNavigateToJobDescription(jobId);
  };

  const handleToggleBookmark = (e, jobId) => {
    e.stopPropagation();
    onToggleSave(jobId);
  };

  // ensure when the page mounts or the company changes we start scrolled at the top
  useEffect(() => {
    try {
      // scroll the window (covers most cases)
      if (typeof window !== 'undefined' && window.scrollTo) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }

      // also reset the scroll on the page container if present
      const el = document.querySelector('.company-detail-page');
      if (el) el.scrollTop = 0;
    } catch (e) {
      // no-op on environments without DOM
    }
  }, [companyName]);

  return (
    <div className="company-detail-page">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        onNavigateEmployerBoard={onNavigateEmployerBoard}
        onNavigateProfile={onNavigateProfile}
        onNavigateLogin={onNavigateLogin}
        onNavigateStudentResources={onNavigateStudentResources}
        role={user ? 'student' : 'guest'}
        onSignOut={onSignOut}
        userName={user ? user.name : ''}
      />

      <div className="company-detail-container">
        <div className="company-detail-content">
          <button className="back-to-jobs" onClick={onNavigateEmployerBoard}>
            <svg className="back-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5384A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="back-text">Back to Companies</span>
          </button>

          <div className="company-header">
            <div className="company-main-info">
              <img
                className="job-logo"
                src={`https://via.placeholder.com/95?text=${encodeURIComponent(companyData.name)}`}
                alt={companyData.name}
              />
              <div className="company-info-details">
                <div className="company-title-section">
                  <div className="company-title-group">
                    <h1 className="company-name">{companyData.name}</h1>
                    <div className="company-industry">{companyData.industry}</div>
                  </div>
                  <div className="company-visa-badges">
                    {companyData.visaTypes.map((visa) => (
                      <div key={visa} className="visa-badge">{visa}</div>
                    ))}
                  </div>
                </div>
                <div className="company-meta-info">
                  <div className="meta-item">
                    <div className="meta-icon-wrapper">
                      <svg className="meta-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 16.5C12 13.5 15 10.8137 15 7.5C15 4.18629 12.3137 1.5 9 1.5C5.68629 1.5 3 4.18629 3 7.5C3 10.8137 6 13.5 9 16.5Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="meta-text">{companyData.location}</span>
                  </div>
                  <div className="meta-item">
                    <div className="meta-icon-wrapper">
                      <svg className="meta-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 15.75V5.25C6 4.55252 6 4.20378 6.07667 3.91766C6.28472 3.1412 6.8912 2.53472 7.66766 2.32667C7.95378 2.25 8.30252 2.25 9 2.25C9.69748 2.25 10.0462 2.25 10.3323 2.32667C11.1088 2.53472 11.7153 3.1412 11.9233 3.91766C12 4.20378 12 4.55252 12 5.25V15.75M3.9 15.75H14.1C14.9401 15.75 15.3601 15.75 15.681 15.5865C15.9632 15.4427 16.1927 15.2132 16.3365 14.931C16.5 14.6101 16.5 14.1901 16.5 13.35V7.65C16.5 6.80992 16.5 6.38988 16.3365 6.06901C16.1927 5.78677 15.9632 5.5573 15.681 5.41349C15.3601 5.25 14.9401 5.25 14.1 5.25H3.9C3.05992 5.25 2.63988 5.25 2.31901 5.41349C2.03677 5.5573 1.8073 5.78677 1.66349 6.06901C1.5 6.38988 1.5 6.80992 1.5 7.65V13.35C1.5 14.1901 1.5 14.6101 1.66349 14.931C1.8073 15.2132 2.03677 15.4427 2.31901 15.5865C2.63988 15.75 3.05992 15.75 3.9 15.75Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="meta-text">{companyData.openPositions} open position{companyData.openPositions !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="meta-item">
                    <div className="meta-icon-wrapper">
                      <svg className="meta-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.60082C13.1113 3.15308 13.875 4.29985 13.875 5.625C13.875 6.95015 13.1113 8.09692 12 8.64918M13.5 12.5748C14.6336 13.0878 15.6544 13.9237 16.5 15M1.5 15C2.95987 13.1419 4.94188 12 7.125 12C9.30812 12 11.2901 13.1419 12.75 15M10.5 5.625C10.5 7.48896 8.98896 9 7.125 9C5.26104 9 3.75 7.48896 3.75 5.625C3.75 3.76104 5.26104 2.25 7.125 2.25C8.98896 2.25 10.5 3.76104 10.5 5.625Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="meta-text">{companyData.companySize}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="company-about-section">
            <h2 className="section-heading">About the Company</h2>
            <p className="company-description">{companyData.description}</p>
          </div>
        </div>

        <div className="jobs-section">
          <h2 className="positions-title">{companyData.openPositions} Available Position{companyData.openPositions !== 1 ? 's' : ''}</h2>
          
          <div className="jobs-list">
            {companyJobs.map((job) => (
              <JobCardStyle2
                key={job.id}
                job={job}
                onClick={() => handleJobClick(job.id)}
                isSaved={savedJobIds.includes(job.id)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer 
        onNavigateJobBoard={onNavigateJobBoard} 
        onNavigateEmployerBoard={onNavigateEmployerBoard}
        onNavigateHome={onNavigateHome}
        onNavigateStudentResources={onNavigateStudentResources}
      />
    </div>
  );
}

export default CompanyDetail;
