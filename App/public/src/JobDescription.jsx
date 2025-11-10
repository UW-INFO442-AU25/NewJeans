import React from 'react';
import './JobDescription.css';

function JobDescription({ onNavigateJobBoard, onNavigateHome }) {
  return (
    <div className="job-description-page">
      <nav className="navigation-bar">
        <div className="nav-inner">
          <div className="nav-left">
            <div className="logo" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
              Visa<span style={{ fontWeight: 900 }}>Path</span>
            </div>
            <div className="nav-links-desktop">
              <div className="nav-link" onClick={onNavigateJobBoard} style={{ cursor: 'pointer' }}>
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

      <div className="job-description-container">
        <div className="job-description-content">
          <button className="back-to-jobs" onClick={onNavigateJobBoard}>
            <svg className="back-arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5384A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="back-text">Back to Jobs</span>
          </button>

          <div className="job-header-section">
            <div className="job-main-info">
              <div className="job-header-details">
                <img className="company-logo-large" src="https://api.builder.io/api/v1/image/assets/TEMP/8d21d9c52c0bf24a42bddaffbfa1dd59c0948119?width=202" alt="Company logo" />
                <div className="job-title-section">
                  <div className="job-title-text">
                    <h1 className="job-position-title">Intern, Innovation - Designer (Spring 2026)</h1>
                    <div className="company-name-text">Delta Air Lines</div>
                  </div>
                  <div className="visa-type-badges">
                    <span className="visa-type-badge">H-1B</span>
                  </div>
                </div>
              </div>
              <div className="job-metadata-grid">
                <div className="metadata-item">
                  <div className="metadata-icon-wrapper">
                    <svg className="metadata-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 16.5C12 13.5 15 10.8137 15 7.5C15 4.18629 12.3137 1.5 9 1.5C5.68629 1.5 3 4.18629 3 7.5C3 10.8137 6 13.5 9 16.5Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="metadata-text">Location</div>
                </div>
                <div className="metadata-item">
                  <div className="metadata-icon-wrapper">
                    <svg className="metadata-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_607_14602)">
                        <path d="M12.75 10.875V8.62082C12.75 8.48621 12.75 8.41891 12.7295 8.35949C12.7114 8.30694 12.6818 8.25908 12.6429 8.21937C12.5989 8.17447 12.5387 8.14437 12.4183 8.08417L9 6.375M3 7.125V12.23C3 12.5089 3 12.6484 3.04351 12.7705C3.08198 12.8784 3.14468 12.9761 3.22678 13.0561C3.31966 13.1465 3.44645 13.2046 3.70001 13.3208L8.50001 15.5208C8.68394 15.6051 8.7759 15.6473 8.87171 15.6639C8.9566 15.6787 9.0434 15.6787 9.12829 15.6639C9.2241 15.6473 9.31606 15.6051 9.49999 15.5208L14.3 13.3208C14.5535 13.2046 14.6803 13.1465 14.7732 13.0561C14.8553 12.9761 14.918 12.8784 14.9565 12.7705C15 12.6484 15 12.5089 15 12.23V7.125M1.5 6.375L8.73167 2.75917C8.83006 2.70997 8.87925 2.68538 8.93085 2.6757C8.97655 2.66712 9.02345 2.66712 9.06915 2.6757C9.12075 2.68538 9.16994 2.70997 9.26833 2.75917L16.5 6.375L9.26833 9.99084C9.16994 10.04 9.12075 10.0646 9.06915 10.0743C9.02345 10.0829 8.97655 10.0829 8.93085 10.0743C8.87925 10.0646 8.83006 10.04 8.73167 9.99084L1.5 6.375Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_607_14602">
                          <rect width="18" height="18" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="metadata-text">Years of Experience</div>
                </div>
                <div className="metadata-item">
                  <div className="metadata-icon-wrapper">
                    <svg className="metadata-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_607_14606)">
                        <path d="M9 4.5V9L12 10.5M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_607_14606">
                          <rect width="18" height="18" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="metadata-text">Full-Time</div>
                </div>
                <div className="metadata-item">
                  <div className="metadata-icon-wrapper">
                    <svg className="metadata-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12C4.5 13.6569 5.84315 15 7.5 15H10.5C12.1569 15 13.5 13.6569 13.5 12C13.5 10.3431 12.1569 9 10.5 9H7.5C5.84315 9 4.5 7.65685 4.5 6C4.5 4.34315 5.84315 3 7.5 3H10.5C12.1569 3 13.5 4.34315 13.5 6M9 1.5V16.5" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="metadata-text">Salary</div>
                </div>
                <div className="metadata-item">
                  <div className="metadata-icon-wrapper">
                    <svg className="metadata-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.75 15.75V10.2C6.75 9.77996 6.75 9.56994 6.83175 9.40951C6.90365 9.26839 7.01839 9.15365 7.15951 9.08174C7.31994 9 7.52996 9 7.95 9H10.05C10.47 9 10.6801 9 10.8405 9.08174C10.9816 9.15365 11.0963 9.26839 11.1683 9.40951C11.25 9.56994 11.25 9.77996 11.25 10.2V15.75M8.26327 2.07301L3.17654 6.02936C2.83652 6.29382 2.6665 6.42605 2.54402 6.59165C2.43552 6.73834 2.3547 6.9036 2.30552 7.0793C2.25 7.27765 2.25 7.49303 2.25 7.9238V13.35C2.25 14.1901 2.25 14.6101 2.41349 14.931C2.5573 15.2132 2.78677 15.4427 3.06901 15.5865C3.38988 15.75 3.80992 15.75 4.65 15.75H13.35C14.1901 15.75 14.6101 15.75 14.931 15.5865C15.2132 15.4427 15.4427 15.2132 15.5865 14.931C15.75 14.6101 15.75 14.1901 15.75 13.35V7.9238C15.75 7.49303 15.75 7.27765 15.6945 7.0793C15.6453 6.9036 15.5645 6.73834 15.456 6.59165C15.3335 6.42605 15.1635 6.29382 14.8235 6.02936L9.73673 2.07301C9.47324 1.86807 9.34149 1.7656 9.19601 1.72621C9.06765 1.69146 8.93235 1.69146 8.80399 1.72621C8.65851 1.7656 8.52677 1.86807 8.26327 2.07301Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="metadata-text">Remote</div>
                </div>
              </div>
            </div>
            <div className="job-actions-section">
              <button className="bookmark-button-large">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 5.85C3.75 4.58988 3.75 3.95982 3.99524 3.47852C4.21095 3.05516 4.55516 2.71095 4.97852 2.49524C5.45982 2.25 6.08988 2.25 7.35 2.25H10.65C11.9101 2.25 12.5402 2.25 13.0215 2.49524C13.4448 2.71095 13.789 3.05516 14.0048 3.47852C14.25 3.95982 14.25 4.58988 14.25 5.85V15.75L9 12.75L3.75 15.75V5.85Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-primary apply-button-top">Apply</button>
            </div>
          </div>

          <div className="job-sections">
            <div className="job-info-card">
              <h2 className="section-heading">About the Role</h2>
              <p className="section-description">As a business unit, Delta Innovation incubates and invents human-centered solutions that delight customers and empower employees. The Delta Innovation team continually looks to embrace new technologies and processes that push the boundaries of innovation in the travel industry. To further this objective, we are seeking an Innovation Designer Intern to join our team. We are looking for someone who is passionate about developing human-centered solutions for real-world, large-scale problems that impact the lives of our customers and employees, ultimately resulting in sustaining Delta Air Lines' market leadership and growth.</p>
            </div>

            <div className="job-info-card">
              <h2 className="section-heading">As An Innovation Design Intern, You Will</h2>
              <p className="section-description"> Develop and guide the passenger/employee experience and visual design throughout the travel journey (at home, at the gate, in-flight, in-airport, etc.) including service recovery experiences and processes.
 Use your technical and functional know-how to ensure our various passenger/employee experience projects are successful
 Establish and foster relationships with stakeholders for collaboration and alignment needed to drive results
 Use data (new and existing) to propose and deliver innovative solutions to continually improve products/services that put the "human first"
 Work with a multidisciplinary team of business strategists and technical engineers to create and develop thoughtful, holistic ideas
 Create wireframes, maps, and flows for various experience concepts
 Prototype experiences and services using innovative tools and techniques
 Benchmark airline, travel, and non-travel endemic experiences and best practices</p>
            </div>

            <div className="job-info-card">
              <h2 className="section-heading">Qualifications</h2>
              <p className="section-description"> Undergraduate student with experience and interest in UI/UX/VR or other design fields/areas
 A deep knowledge of wire-framing and experience with Figma
 Self-starter with the ability to work independently and collaboratively
 Curiosity and willingness to explore topics beyond the surface
 Good communication skills and creative thinking with excellent storytelling capabilities, providing appropriate business, design, customer and cultural context
 Flexibility and organizational skills to multi-task and reprioritize multiple projects and stakeholder needs
 Attention to detail and ability to deliver within tight deadlines
 Ability to understand key features of a topic without having the benefit of exhaustive knowledge or detail
 Ability to thrive in ambiguous situations, with minimal direct guidance.
 Demonstrates that privacy is a priority when handling personal data.
 Embraces a diverse set of people, thinking and styles.
 Consistently makes safety and security, of self and others, the priority.
Consistently prioritizes safety and security of self, others, and personal data.
Embraces diverse people, thinking, and styles.
Possesses a high school diploma, GED, or high school equivalency.
Is at least 18 years of age and has authorization to work in the United States.</p>
            </div>

            <div className="job-info-card">
              <h2 className="section-heading">Additional Information</h2>
              <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <button className="btn-primary apply-button-bottom">Apply</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="logo">
                Visa<span style={{ fontWeight: 900 }}>Path</span>
              </div>
              <div className="footer-paragraph">
                <p className="footer-desc">Connecting international students with U.S. employers who sponsor work visas.</p>
              </div>
            </div>
            <div className="footer-column footer-column-students">
              <div className="footer-heading">
                <h5 className="footer-heading-text">Students</h5>
              </div>
              <div className="footer-list">
                <div className="footer-list-item">
                  <div className="footer-link" onClick={onNavigateJobBoard} style={{ cursor: 'pointer' }}>Job Board</div>
                </div>
                <div className="footer-list-item">
                  <div className="footer-link">Employer Board</div>
                </div>
                <div className="footer-list-item">
                  <div className="footer-link">Visa Resources</div>
                </div>
              </div>
            </div>
            <div className="footer-column footer-column-employers">
              <div className="footer-heading">
                <h5 className="footer-heading-text">Employers</h5>
              </div>
              <div className="footer-list">
                <div className="footer-list-item">
                  <div className="footer-link">Post a Job</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright-paragraph">
              <p className="footer-copyright-text">© 2025 VisaPath. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default JobDescription;
