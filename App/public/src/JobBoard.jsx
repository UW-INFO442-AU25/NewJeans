import React from 'react';
import './JobBoard.css';

function JobBoard({ onNavigateHome, onNavigateToJobDescription }) {
  return (
    <div className="job-board-container">
      <nav className="navigation-bar">
        <div className="nav-inner">
          <div className="nav-left">
            <div className="logo" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
              Visa<span style={{ fontWeight: 900 }}>Path</span>
            </div>
            <div className="nav-links-desktop">
              <div className="nav-link">
                <div className="link-text">Job Board</div>
              </div>
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-button-wrapper">
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="main-content">
        <aside className="sidebar">
          <div className="filter-header">
            <div className="filter-title-row">
              <div className="filter-title">Refine Your Search</div>
              <div className="clear-all">Clear All</div>
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
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">CPT/OPT Friendly</div>
              </label>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Requires Sponsorship</div>
              </label>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Full-Time (H-1B Eligible)</div>
              </label>
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
                  <div className="search-placeholder-small">City, State, Country</div>
                </div>
              </div>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Remote</div>
              </label>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Hybrid</div>
              </label>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">In-Person</div>
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
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Internship</div>
              </label>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Part-Time</div>
              </label>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Full-Time</div>
              </label>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Contract</div>
              </label>
            </div>

            <div className="filter-divider"></div>

            <div className="filter-group">
              <div className="filter-group-header">
                <div className="filter-group-title">Experience Level</div>
                <svg className="chevron-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#767676" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Entry-Level / New Grad (0 – 1 years)</div>
              </label>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Mid-Level (2 – 4 years)</div>
              </label>
              <label className="checkbox-item">
                <div className="checkbox"></div>
                <div className="checkbox-label">Senior-Level (5+ years)</div>
              </label>
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
                <div className="salary-slider-track"></div>
                <div className="salary-slider-range"></div>
                <div className="salary-slider-handles">
                  <div className="salary-handle-wrapper salary-handle-min">
                    <svg className="salary-handle" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="8" fill="#B7B7B7"/>
                    </svg>
                    <div className="salary-label">$15,000</div>
                  </div>
                  <div className="salary-handle-wrapper salary-handle-max">
                    <svg className="salary-handle" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="8" fill="#B7B7B7"/>
                    </svg>
                    <div className="salary-label">$75,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="content-area">
          <div className="search-section">
            <div className="main-search-bar">
              <div className="main-search-content">
                <svg className="search-icon-main" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="search-placeholder-main">Search Job Titles, Employers, Key Words</div>
              </div>
            </div>
            <p className="search-description">
              Navigate your career journey with confidence. Search our database of jobs from employers who actively sponsor H-1B, OPT, CPT, and other work visas for international students.
            </p>
            <div className="results-count"># Results</div>
          </div>

          <div className="jobs-list">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="job-card">
                <div className="job-card-content" onClick={onNavigateToJobDescription} style={{ cursor: 'pointer' }}>
                  <div className="job-header">
<<<<<<< HEAD
                    <img className="job-logo" src="https://api.builder.io/api/v1/image/assets/TEMP/8d21d9c52c0bf24a42bddaffbfa1dd59c0948119?width=202" alt="" />
=======
                    <img className="job-logo" src="https://api.builder.io/api/v1/image/assets/TEMP/e83b21893337804f974f8a34f903748129405d9e?width=190" alt="" />
>>>>>>> 2c5d62273433117c3689010bb74c6c157e73950e
                    <div className="job-info">
                      <div className="job-info-text">
                        <div className="job-role">{index === 1 ? "Intern, Innovation - Designer (Spring 2026)" : "Role"}</div>
                        <div className="job-company">{index === 1 ? "Delta Air Lines" : "Company"}</div>
                      </div>
                      <div className="job-badges">
                        <span className="job-badge">H-1B</span>
                        <span className="job-badge">L-1</span>
                        <span className="job-badge">O-1</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-details-grid">
                    <div className="job-detail">
                      <div className="job-icon-wrapper">
                        <svg className="job-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 16.5C12 13.5 15 10.8137 15 7.5C15 4.18629 12.3137 1.5 9 1.5C5.68629 1.5 3 4.18629 3 7.5C3 10.8137 6 13.5 9 16.5Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="job-detail-text">Location</div>
                    </div>
                    <div className="job-detail">
                      <div className="job-icon-wrapper">
                        <svg className="job-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1003_615)">
                            <path d="M12.75 10.875V8.62081C12.75 8.4862 12.75 8.41889 12.7295 8.35947C12.7114 8.30693 12.6818 8.25907 12.6429 8.21936C12.5989 8.17445 12.5387 8.14435 12.4183 8.08415L9 6.37499M3 7.12499V12.2299C3 12.5089 3 12.6483 3.04351 12.7705C3.08198 12.8784 3.14468 12.9761 3.22678 13.0561C3.31966 13.1465 3.44645 13.2046 3.70001 13.3208L8.50001 15.5208C8.68394 15.6051 8.7759 15.6473 8.87171 15.6639C8.9566 15.6787 9.0434 15.6787 9.12829 15.6639C9.2241 15.6473 9.31606 15.6051 9.49999 15.5208L14.3 13.3208C14.5535 13.2046 14.6803 13.1465 14.7732 13.0561C14.8553 12.9761 14.918 12.8784 14.9565 12.7705C15 12.6483 15 12.5089 15 12.23V7.12499M1.5 6.37499L8.73167 2.75915C8.83006 2.70996 8.87925 2.68536 8.93085 2.67568C8.97655 2.66711 9.02345 2.66711 9.06915 2.67568C9.12075 2.68536 9.16994 2.70996 9.26833 2.75915L16.5 6.37499L9.26833 9.99082C9.16994 10.04 9.12075 10.0646 9.06915 10.0743C9.02345 10.0829 8.97655 10.0829 8.93085 10.0743C8.87925 10.0646 8.83006 10.04 8.73167 9.99082L1.5 6.37499Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1003_615">
                              <rect width="18" height="18" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="job-detail-text">Years of Experience</div>
                    </div>
                    <div className="job-detail">
                      <div className="job-icon-wrapper">
                        <svg className="job-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1003_620)">
                            <path d="M9 4.5V9L12 10.5M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1003_620">
                              <rect width="18" height="18" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="job-detail-text">Full-Time</div>
                    </div>
                    <div className="job-detail">
                      <div className="job-icon-wrapper">
                        <svg className="job-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.75 15.75V10.2C6.75 9.77995 6.75 9.56993 6.83175 9.4095C6.90365 9.26837 7.01839 9.15364 7.15951 9.08173C7.31994 8.99999 7.52996 8.99999 7.95 8.99999H10.05C10.47 8.99999 10.6801 8.99999 10.8405 9.08173C10.9816 9.15364 11.0963 9.26837 11.1683 9.4095C11.25 9.56993 11.25 9.77995 11.25 10.2V15.75M8.26327 2.073L3.17654 6.02934C2.83652 6.29381 2.6665 6.42604 2.54402 6.59164C2.43552 6.73833 2.3547 6.90359 2.30552 7.07929C2.25 7.27764 2.25 7.49302 2.25 7.92379V13.35C2.25 14.1901 2.25 14.6101 2.41349 14.931C2.5573 15.2132 2.78677 15.4427 3.06901 15.5865C3.38988 15.75 3.80992 15.75 4.65 15.75H13.35C14.1901 15.75 14.6101 15.75 14.931 15.5865C15.2132 15.4427 15.4427 15.2132 15.5865 14.931C15.75 14.6101 15.75 14.1901 15.75 13.35V7.92379C15.75 7.49302 15.75 7.27764 15.6945 7.07929C15.6453 6.90359 15.5645 6.73833 15.456 6.59164C15.3335 6.42604 15.1635 6.29381 14.8235 6.02934L9.73673 2.073C9.47324 1.86806 9.34149 1.76559 9.19601 1.7262C9.06765 1.69145 8.93235 1.69145 8.80399 1.7262C8.65851 1.76559 8.52677 1.86806 8.26327 2.073Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="job-detail-text">Remote</div>
                    </div>
                    <div className="job-detail">
                      <div className="job-icon-wrapper">
                        <svg className="job-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 12C4.5 13.6569 5.84315 15 7.5 15H10.5C12.1569 15 13.5 13.6569 13.5 12C13.5 10.3431 12.1569 9 10.5 9H7.5C5.84315 9 4.5 7.65685 4.5 6C4.5 4.34315 5.84315 3 7.5 3H10.5C12.1569 3 13.5 4.34315 13.5 6M9 1.5V16.5" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="job-detail-text">Salary</div>
                    </div>
                  </div>
                </div>
                <div className="job-actions">
                  <button className="bookmark-button">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.75 5.85C3.75 4.58988 3.75 3.95982 3.99524 3.47852C4.21095 3.05516 4.55516 2.71095 4.97852 2.49524C5.45982 2.25 6.08988 2.25 7.35 2.25H10.65C11.9101 2.25 12.5402 2.25 13.0215 2.49524C13.4448 2.71095 13.789 3.05516 14.0048 3.47852C14.25 3.95982 14.25 4.58988 14.25 5.85V15.75L9 12.75L3.75 15.75V5.85Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="btn-primary apply-btn">Apply</button>
                </div>
              </div>
            ))}
          </div>

          <div className="view-more">
            <div className="view-more-link">View More Results</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default JobBoard;
