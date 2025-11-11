import React, { useState } from 'react';
import './JobCreation.css';

function JobCreation({ onNavigateHome }) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => {
    const steps = [
      { number: 1, name: 'Basic Info' },
      { number: 2, name: 'Role Details' },
      { number: 3, name: 'Requirements' },
      { number: 4, name: 'Additional Info' },
      { number: 5, name: 'Preview' }
    ];

    return (
      <div className="step-indicator">
        {steps.map((step) => (
          <div key={step.number} className={`step-indicator-item ${step.number <= currentStep ? 'active' : 'inactive'}`}>
            <div className="step-circle">
              <div className="step-number">{step.number}</div>
            </div>
            <div className="step-label">{step.name}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-container">
            <div className="form-section-title">Basic Information</div>
            
            <div className="form-row">
              <div className="form-label-wrapper">
                <div className="form-label">Job Title</div>
                <div className="required-indicator">*</div>
              </div>
              <input className="form-input" type="text" placeholder="E.g., Senior Software Engineer, Product Manager" />
            </div>

            <div className="form-row">
              <div className="form-label-wrapper">
                <div className="form-label">Employment Type</div>
                <div className="required-indicator">*</div>
              </div>
              <div className="form-select">
                <div className="form-select-placeholder">Select Employment Type</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="form-row">
              <div className="form-label-wrapper">
                <div className="form-label">Visa Eligibility</div>
                <div className="required-indicator">*</div>
              </div>
              <div className="visa-checkboxes">
                <label className="visa-checkbox">
                  <div className="checkbox-input"></div>
                  <div className="checkbox-label">Visa Type</div>
                </label>
                <label className="visa-checkbox">
                  <div className="checkbox-input"></div>
                  <div className="checkbox-label">Visa Type</div>
                </label>
                <label className="visa-checkbox">
                  <div className="checkbox-input"></div>
                  <div className="checkbox-label">Visa Type</div>
                </label>
                <label className="visa-checkbox">
                  <div className="checkbox-input"></div>
                  <div className="checkbox-label">Visa Type</div>
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-label-wrapper">
                <div className="form-label">Work Arrangement</div>
                <div className="required-indicator">*</div>
              </div>
              <div className="form-select">
                <div className="form-select-placeholder">Select work arrangement</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="form-row">
              <div className="form-label-wrapper">
                <div className="form-label">Location</div>
                <div className="required-indicator">*</div>
              </div>
              <input className="form-input" type="text" placeholder="E.g., New York, NY or Remote" />
            </div>

            <div className="form-row">
              <div className="form-label-wrapper">
                <div className="form-label">Salary Range</div>
              </div>
              <input className="form-input" type="text" placeholder="E.g., $80,000 - $120,000" />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="form-container">
            <div className="form-section-title">About the Role</div>
            
            <div className="form-row full-height">
              <div className="form-label-wrapper">
                <div className="form-label">Position Description</div>
                <div className="required-indicator">*</div>
              </div>
              <textarea className="form-textarea" placeholder="Provide a detailed description of the role, responsibilities, and expectations..."></textarea>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="form-container">
            <div className="form-section-title">Responsibilities and Qualifications</div>
            
            <div className="form-row full-height">
              <div className="form-label-wrapper">
                <div className="form-label">Responsibilities</div>
                <div className="required-indicator">*</div>
              </div>
              <textarea className="form-textarea" placeholder="E.g., Lead design initiatives across multiple projects&#10;&#10;(Use bullet points)"></textarea>
            </div>

            <div className="form-row full-height">
              <div className="form-label-wrapper">
                <div className="form-label">Qualifications</div>
                <div className="required-indicator">*</div>
              </div>
              <textarea className="form-textarea" placeholder="E.g., Bachelor's degree in Computer Science or related field&#10;&#10;(Use bullet points)"></textarea>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="form-container">
            <div className="form-section-title">Additional Information</div>
            
            <div className="form-row full-height">
              <div className="form-label-wrapper">
                <div className="form-label">Additional Information</div>
              </div>
              <textarea className="form-textarea" placeholder="Include benefits, perks, company culture, or any other relevant information..."></textarea>
            </div>

            <div className="form-row">
              <div className="form-label-wrapper">
                <div className="form-label">Application URL or Email</div>
                <div className="required-indicator">*</div>
              </div>
              <input className="form-input" type="text" placeholder="E.g., https://company.com/careers or jobs@company.com" />
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="form-container preview-container">
            <div className="form-section-title">Preview Your Job Listing</div>
            
            <div className="preview-content">
              <div className="preview-job-card">
                <div className="preview-job-header">
                  <img className="preview-company-logo" src="https://api.builder.io/api/v1/image/assets/TEMP/5ddb6a2b36ad941f39478740b91d80ccfb061e77?width=202" alt="Company Logo" />
                  <div className="preview-job-info">
                    <div className="preview-job-text">
                      <div className="preview-job-title">Intern, Innovation - Designer (Spring 2026)</div>
                      <div className="preview-company-name">Delta Air Lines</div>
                    </div>
                    <div className="preview-visa-badges">
                      <span className="preview-visa-badge">H-1B</span>
                    </div>
                  </div>
                  <div className="preview-job-details-grid">
                    <div className="preview-detail-item">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 16.5C12 13.5 15 10.8137 15 7.5C15 4.18629 12.3137 1.5 9 1.5C5.68629 1.5 3 4.18629 3 7.5C3 10.8137 6 13.5 9 16.5Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="preview-detail-text">Location</div>
                    </div>
                    <div className="preview-detail-item">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_607_14433)">
                          <path d="M12.75 10.8752V8.62099C12.75 8.48638 12.75 8.41908 12.7295 8.35966C12.7114 8.30711 12.6818 8.25925 12.6429 8.21954C12.5989 8.17463 12.5387 8.14453 12.4183 8.08433L9 6.37517M3 7.12517V12.2301C3 12.5091 3 12.6485 3.04351 12.7706C3.08198 12.8786 3.14468 12.9763 3.22678 13.0562C3.31966 13.1467 3.44645 13.2048 3.70001 13.321L8.50001 15.521C8.68394 15.6053 8.7759 15.6475 8.87171 15.6641C8.9566 15.6788 9.0434 15.6788 9.12829 15.6641C9.2241 15.6475 9.31606 15.6053 9.49999 15.521L14.3 13.321C14.5535 13.2048 14.6803 13.1467 14.7732 13.0562C14.8553 12.9763 14.918 12.8786 14.9565 12.7706C15 12.6485 15 12.5091 15 12.2301V7.12517M1.5 6.37517L8.73167 2.75933C8.83006 2.71014 8.87925 2.68554 8.93085 2.67586C8.97655 2.66729 9.02345 2.66729 9.06915 2.67586C9.12075 2.68554 9.16994 2.71014 9.26833 2.75933L16.5 6.37517L9.26833 9.99101C9.16994 10.0402 9.12075 10.0648 9.06915 10.0745C9.02345 10.0831 8.97655 10.0831 8.93085 10.0745C8.87925 10.0648 8.83006 10.0402 8.73167 9.99101L1.5 6.37517Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs><clipPath id="clip0_607_14433"><rect width="18" height="18" fill="white"/></clipPath></defs>
                      </svg>
                      <div className="preview-detail-text">Years of Experience</div>
                    </div>
                    <div className="preview-detail-item">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 15.75V10.2C6.75 9.78001 6.75 9.56999 6.83175 9.40956C6.90365 9.26843 7.01839 9.1537 7.15951 9.08179C7.31994 9.00005 7.52996 9.00005 7.95 9.00005H10.05C10.47 9.00005 10.6801 9.00005 10.8405 9.08179C10.9816 9.1537 11.0963 9.26843 11.1683 9.40956C11.25 9.56999 11.25 9.78001 11.25 10.2V15.75M8.26327 2.07306L3.17654 6.0294C2.83652 6.29387 2.6665 6.4261 2.54402 6.5917C2.43552 6.73839 2.3547 6.90365 2.30552 7.07935C2.25 7.2777 2.25 7.49308 2.25 7.92385V13.35C2.25 14.1901 2.25 14.6102 2.41349 14.931C2.5573 15.2133 2.78677 15.4427 3.06901 15.5866C3.38988 15.75 3.80992 15.75 4.65 15.75H13.35C14.1901 15.75 14.6101 15.75 14.931 15.5866C15.2132 15.4427 15.4427 15.2133 15.5865 14.931C15.75 14.6102 15.75 14.1901 15.75 13.35V7.92385C15.75 7.49308 15.75 7.2777 15.6945 7.07935C15.6453 6.90365 15.5645 6.73839 15.456 6.5917C15.3335 6.4261 15.1635 6.29387 14.8235 6.02941L9.73673 2.07306C9.47324 1.86812 9.34149 1.76565 9.19601 1.72626C9.06765 1.69151 8.93235 1.69151 8.80399 1.72626C8.65851 1.76565 8.52677 1.86812 8.26327 2.07306Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="preview-detail-text">Remote</div>
                    </div>
                    <div className="preview-detail-item">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 12C4.5 13.6569 5.84315 15 7.5 15H10.5C12.1569 15 13.5 13.6569 13.5 12C13.5 10.3431 12.1569 9 10.5 9H7.5C5.84315 9 4.5 7.65685 4.5 6C4.5 4.34315 5.84315 3 7.5 3H10.5C12.1569 3 13.5 4.34315 13.5 6M9 1.5V16.5" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="preview-detail-text">Salary</div>
                    </div>
                  </div>
                </div>
                <div className="preview-job-actions">
                  <button className="preview-bookmark-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.75 5.85C3.75 4.58988 3.75 3.95982 3.99524 3.47852C4.21095 3.05516 4.55516 2.71095 4.97852 2.49524C5.45982 2.25 6.08988 2.25 7.35 2.25H10.65C11.9101 2.25 12.5402 2.25 13.0215 2.49524C13.4448 2.71095 13.789 3.05516 14.0048 3.47852C14.25 3.95982 14.25 4.58988 14.25 5.85V15.75L9 12.75L3.75 15.75V5.85Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="preview-apply-btn">Apply</button>
                </div>
              </div>

              <div className="preview-sections">
                <div className="preview-section">
                  <div className="preview-section-title">About the Role</div>
                  <div className="preview-section-content">
                    As a business unit, Delta Innovation incubates and invents human-centered solutions that delight customers and empower employees. The Delta Innovation team continually looks to embrace new technologies and processes that push the boundaries of innovation in the travel industry. To further this objective, we are seeking an Innovation Designer Intern to join our team. We are looking for someone who is passionate about developing human-centered solutions for real-world, large-scale problems that impact the lives of our customers and employees, ultimately resulting in sustaining Delta Air Lines' market leadership and growth.
                  </div>
                </div>

                <div className="preview-section">
                  <div className="preview-section-title">As An Innovation Design Intern, You Will</div>
                  <div className="preview-section-content">
                     • Develop and guide the passenger/employee experience and visual design throughout the travel journey (at home, at the gate, in-flight, in-airport, etc.) including service recovery experiences and processes.
 • Use your technical and functional know-how to ensure our various passenger/employee experience projects are successful
 • Establish and foster relationships with stakeholders for collaboration and alignment needed to drive results
 • Use data (new and existing) to propose and deliver innovative solutions to continually improve products/services that put the "human first"
 • Work with a multidisciplinary team of business strategists and technical engineers to create and develop thoughtful, holistic ideas
 • Create wireframes, maps, and flows for various experience concepts
 • Prototype experiences and services using innovative tools and techniques
 • Benchmark airline, travel, and non-travel endemic experiences and best practices
                  </div>
                </div>

                <div className="preview-section">
                  <div className="preview-section-title">Qualifications</div>
                  <div className="preview-section-content">
                     • Undergraduate student with experience and interest in UI/UX/VR or other design fields/areas
 • A deep knowledge of wire-framing and experience with Figma
 • Self-starter with the ability to work independently and collaboratively
 • Curiosity and willingness to explore topics beyond the surface
 • Good communication skills and creative thinking with excellent storytelling capabilities, providing appropriate business, design, customer and cultural context
 • Flexibility and organizational skills to multi-task and reprioritize multiple projects and stakeholder needs
 • Attention to detail and ability to deliver within tight deadlines
 • Ability to understand key features of a topic without having the benefit of exhaustive knowledge or detail
 • Ability to thrive in ambiguous situations, with minimal direct guidance.
 • Demonstrates that privacy is a priority when handling personal data.
 • Embraces a diverse set of people, thinking and styles.
 • Consistently makes safety and security, of self and others, the priority.
Consistently prioritizes safety and security of self, others, and personal data.
Embraces diverse people, thinking, and styles.
Possesses a high school diploma, GED, or high school equivalency.
Is at least 18 years of age and has authorization to work in the United States.
                  </div>
                </div>

                <div className="preview-section">
                  <div className="preview-section-title">Additional Information</div>
                  <div className="preview-section-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>

                <button className="preview-full-apply-btn">Apply</button>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="job-creation-container">
      <nav className="navigation-bar">
        <div className="nav-inner">
          <div className="nav-left">
            <div className="logo" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
              Visa<span style={{ fontWeight: 900 }}>Path</span>
            </div>
            <div className="nav-links-desktop">
              <div className="nav-link">
                <div className="link-text">Dashboard</div>
              </div>
              <div className="nav-link">
                <div className="link-text">Company Profile</div>
              </div>
            </div>
          </div>
          <div className="nav-right">
            <div className="user-info">
              <div className="greeting-text">Hello,</div>
              <div className="user-name">John Doe</div>
            </div>
            <div className="user-divider"></div>
            <div className="user-role">Company</div>
            <div className="nav-button-wrapper">
              <button className="btn-primary">Sign Out</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="job-creation-content">
        <div className="back-link" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5384A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="back-text">Back to Dashboard</div>
        </div>

        <div className="job-creation-header">
          <div className="job-creation-title">Create a New Job Posting</div>
          <div className="job-creation-subtitle">Fill in the details to post your job opportunity on VisaPath</div>
        </div>

        {renderStepIndicator()}

        <div className="job-creation-form">
          {renderStepContent()}

          <div className="form-navigation">
            {currentStep > 1 && (
              <button className="btn-back" onClick={prevStep}>Back</button>
            )}
            <div style={{ flex: 1 }}></div>
            {currentStep < 5 ? (
              <button className="btn-next" onClick={nextStep}>Next</button>
            ) : (
              <button className="btn-post">Post Job Listing</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCreation;
