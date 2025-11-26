import React, { useState } from 'react';
import './OPT.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function OPT({ onNavigateHome, onNavigateJobBoard, onNavigateEmployerBoard, onNavigateLogin, onNavigateStudentResources, user = null, onSignOut = () => {} }) {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="opt-page-container">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        onNavigateEmployerBoard={onNavigateEmployerBoard}
        onNavigateLogin={onNavigateLogin}
        onNavigateStudentResources={onNavigateStudentResources}
        role={user ? 'student' : 'guest'}
        onSignOut={onSignOut}
        userName={user ? user.name : ''}
      />

      <section className="opt-hero">
        <div className="opt-hero-content">
        </div>
      </section>

      <section className="opt-what-section">
        <h2 className="opt-section-title">What is OPT?</h2>
        <div className="opt-what-content">
          <div className="opt-video-placeholder">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/b3c3fd1cd00e0aa42c2a2b552dc17d05ea9b9013?width=892" 
              alt="OPT Video Placeholder" 
              className="opt-video-img"
            />
          </div>
          <div className="opt-what-description">
            <p>
              Optional practical training is one type of work permission available for eligible F-1 students. It allows students to get real-world work experience related to their field of study.
            </p>
            <p>
              While a Designated School Official (DSO) recommends OPT in SEVIS, it is the student who must apply for the work permit with the U.S. Citizenship and Immigration Service (USCIS). If the OPT is approved, USCIS will issue an Employment Authorization Document (EAD). The student must not begin working before the start date on the EAD.
            </p>
          </div>
        </div>
      </section>

      <section className="opt-eligibility-section">
        <h2 className="opt-eligibility-title">OPT Eligibility</h2>
        <div className="opt-eligibility-text">
          A student is eligible for OPT if:
          <br />
          The student has been a full-time student for one academic year in an SEVP-certified:
          <br />
          College
          <br />
          University
          <br />
          Conservatory
          <br />
          Seminary
          <br />
          The student is not studying English as a Second Language.
          <br />
          The student's proposed employment relates to the student's major area of study. For more information see <span className="opt-eligibility-underline">SEVP Policy Guidance: Practical Training – Determining a Direct Relationship between Employment and a Student's Major Area of Study</span>.
          <br />
          The student has not used all optional practical training available at the current level of study.
          <br />
          The student has not been authorized for 12 months or more of full-time Curricular Practical Training (CPT).
        </div>
      </section>

      <section className="opt-types-section">
        <h2 className="opt-types-title">Type of OPT</h2>
        <div className="opt-types-table">
          <div className="opt-type-row">
            <div className="opt-type-header-card">
              <h3 className="opt-type-header-title">OPT</h3>
            </div>
            <div className="opt-type-content-card">
              <p className="opt-type-content-text">
                12 months of Regular OPT is available for each higher level of study. For example, a student may have 12 months for a bachelor's degree and another 12 months for a master's degree.
                <br /><br />
                Pre-Completion OPT: Any portion of OPT used before the student's Program End Date. It may be part-time or full-time.
                <br />
                Post-Completion OPT: Any portion of OPT used after the student's Program End Date. It must be at least 20 hours per week or full-time.
              </p>
            </div>
          </div>

          <div className="opt-type-row">
            <div className="opt-type-header-card">
              <h3 className="opt-type-header-title">24-month (STEM) OPT Extension</h3>
            </div>
            <div className="opt-type-content-card">
              <p className="opt-type-content-text">
                For students who majored in designated Science, Technology, Engineering, and Math (STEM) degrees approved by DHS. This type of OPT is a 24-month extension of OPT.
              </p>
            </div>
          </div>

          <div className="opt-type-row">
            <div className="opt-type-header-card">
              <h3 className="opt-type-header-title">Cap-Gap OPT Extension</h3>
            </div>
            <div className="opt-type-content-card">
              <p className="opt-type-content-text">
                For students whose prospective employers filed a qualifying H-1B-cap subject petition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="opt-timeline-section">
        <h2 className="opt-timeline-title">OPT Timeline Overview</h2>
        <div className="opt-timeline-container">
          <svg className="opt-timeline-curve" viewBox="0 0 1169 342" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1138_8959)">
              <path d="M26.5006 227.132C79.1544 252.675 201.794 300.842 271.121 289.165C357.781 274.569 379.171 199.399 513 181.884C646.828 164.369 745.006 225.307 848.668 137.366C952.33 49.4242 1002.79 -8.23047 1142.1 4.17623" stroke="#1D3A4D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <filter id="filter0_d_1138_8959" x="0" y="0" width="1168.6" height="341.459" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="24"/>
                <feGaussianBlur stdDeviation="12"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.203922 0 0 0 0 0.662745 0 0 0 0.3 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1138_8959"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1138_8959" result="shape"/>
              </filter>
            </defs>
          </svg>

          <div className="opt-timeline-dot" style={{ left: '36px', top: '323px' }}>
            <div className="opt-timeline-dot-outer"></div>
            <div className="opt-timeline-dot-inner"></div>
          </div>
          <div className="opt-timeline-dot" style={{ left: '256px', top: '385px' }}>
            <div className="opt-timeline-dot-outer"></div>
            <div className="opt-timeline-dot-inner"></div>
          </div>
          <div className="opt-timeline-dot" style={{ left: '490px', top: '280px' }}>
            <div className="opt-timeline-dot-outer"></div>
            <div className="opt-timeline-dot-inner"></div>
          </div>
          <div className="opt-timeline-dot" style={{ left: '748px', top: '280px' }}>
            <div className="opt-timeline-dot-outer"></div>
            <div className="opt-timeline-dot-inner"></div>
          </div>
          <div className="opt-timeline-dot" style={{ left: '941px', top: '166px' }}>
            <div className="opt-timeline-dot-outer"></div>
            <div className="opt-timeline-dot-inner"></div>
          </div>
          <div className="opt-timeline-dot" style={{ left: '1152px', top: '96px' }}>
            <div className="opt-timeline-dot-outer"></div>
            <div className="opt-timeline-dot-inner"></div>
          </div>

          <div className="opt-timeline-step opt-step-1">
            <div className="opt-step-number">1</div>
            <p className="opt-step-text">Secure an internship or job offer by browsing VisaPath's curated job board</p>
          </div>

          <div className="opt-timeline-step opt-step-2">
            <div className="opt-step-number">2</div>
            <p className="opt-step-text">Meet with your academic adviser or department</p>
          </div>

          <div className="opt-timeline-step opt-step-3">
            <div className="opt-step-number">3</div>
            <p className="opt-step-text">Register for CPT Credit</p>
          </div>

          <div className="opt-timeline-step opt-step-4">
            <div className="opt-step-number">4</div>
            <p className="opt-step-text">Submit CPT Request to ISS</p>
          </div>

          <div className="opt-timeline-step opt-step-5">
            <div className="opt-step-number">5</div>
            <p className="opt-step-text">Department & ISS Review</p>
          </div>

          <div className="opt-timeline-step opt-step-6">
            <div className="opt-step-number">6</div>
            <p className="opt-step-text">Begin Work!</p>
          </div>
        </div>
      </section>

      <section className="opt-checklist-section">
        <h2 className="opt-checklist-title">OPT Document Checklist</h2>

        <div className="opt-task-group">
          <div className="opt-task-header" onClick={() => toggleCheck('task-1')} style={{ cursor: 'pointer' }}>
            <div className={`opt-task-checkbox ${checkedItems['task-1'] ? 'checked' : ''}`}>
              {checkedItems['task-1'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="opt-task-title">Secure Job Offer</h3>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-1-sub-1')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-1-sub-1'] ? 'checked' : ''}`}>
                {checkedItems['task-1-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Find an internship/job related to your major through VisaPath</p>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-1-sub-2')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-1-sub-2'] ? 'checked' : ''}`}>
                {checkedItems['task-1-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Ensure role duties relate to your academic program</p>
          </div>
        </div>

        <div className="opt-task-group">
          <div className="opt-task-header" onClick={() => toggleCheck('task-2')} style={{ cursor: 'pointer' }}>
            <div className={`opt-task-checkbox ${checkedItems['task-2'] ? 'checked' : ''}`}>
              {checkedItems['task-2'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="opt-task-title">Request OPT with Your School</h3>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-2-sub-1')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-2-sub-1'] ? 'checked' : ''}`}>
                {checkedItems['task-2-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Complete school's OPT request process</p>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-2-sub-2')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-2-sub-2'] ? 'checked' : ''}`}>
                {checkedItems['task-2-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Confirm Pre-Completion or Post-Completion OPT</p>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-2-sub-3')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-2-sub-3'] ? 'checked' : ''}`}>
                {checkedItems['task-2-sub-3'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Select desired OPT start date range</p>
          </div>
        </div>

        <div className="opt-task-group">
          <div className="opt-task-header" onClick={() => toggleCheck('task-3')} style={{ cursor: 'pointer' }}>
            <div className={`opt-task-checkbox ${checkedItems['task-3'] ? 'checked' : ''}`}>
              {checkedItems['task-3'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="opt-task-title">Receive Updated I-20 with OPT Recommendation</h3>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-3-sub-1')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-3-sub-1'] ? 'checked' : ''}`}>
                {checkedItems['task-3-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">DSO enters OPT request in SEVIS</p>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-3-sub-2')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-3-sub-2'] ? 'checked' : ''}`}>
                {checkedItems['task-3-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Receive new I-20 with OPT recommendation</p>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-3-sub-3')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-3-sub-3'] ? 'checked' : ''}`}>
                {checkedItems['task-3-sub-3'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Sign your I-20 immediately</p>
          </div>
        </div>

        <div className="opt-task-group">
          <div className="opt-task-header" onClick={() => toggleCheck('task-4')} style={{ cursor: 'pointer' }}>
            <div className={`opt-task-checkbox ${checkedItems['task-4'] ? 'checked' : ''}`}>
              {checkedItems['task-4'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="opt-task-title">Prepare & Submit Form I-765 to USCIS</h3>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-4-sub-1')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-4-sub-1'] ? 'checked' : ''}`}>
                {checkedItems['task-4-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Complete Form I-765 (online/paper)</p>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-4-sub-2')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-4-sub-2'] ? 'checked' : ''}`}>
                {checkedItems['task-4-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Upload signed OPT I-20 (all pages)</p>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-4-sub-3')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-4-sub-3'] ? 'checked' : ''}`}>
                {checkedItems['task-4-sub-3'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Pay required filing fee</p>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-4-sub-4')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-4-sub-4'] ? 'checked' : ''}`}>
                {checkedItems['task-4-sub-4'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Submit within 30 days of DSO recommendation</p>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-4-sub-5')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-4-sub-5'] ? 'checked' : ''}`}>
                {checkedItems['task-4-sub-5'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Save/track the receipt number</p>
          </div>
        </div>

        <div className="opt-task-group">
          <div className="opt-task-header" onClick={() => toggleCheck('task-5')} style={{ cursor: 'pointer' }}>
            <div className={`opt-task-checkbox ${checkedItems['task-5'] ? 'checked' : ''}`}>
              {checkedItems['task-5'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="opt-task-title">Wait for USCIS Decision</h3>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-5-sub-1')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-5-sub-1'] ? 'checked' : ''}`}>
                {checkedItems['task-5-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Monitor case progress</p>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-5-sub-2')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-5-sub-2'] ? 'checked' : ''}`}>
                {checkedItems['task-5-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Respond to RFE if issued</p>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-5-sub-3')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-5-sub-3'] ? 'checked' : ''}`}>
                {checkedItems['task-5-sub-3'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Receive EAD card upon approval</p>
          </div>
        </div>

        <div className="opt-task-group">
          <div className="opt-task-header" onClick={() => toggleCheck('task-6')} style={{ cursor: 'pointer' }}>
            <div className={`opt-task-checkbox ${checkedItems['task-6'] ? 'checked' : ''}`}>
              {checkedItems['task-6'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="opt-task-title">Start Employment + Report Within 10 Days</h3>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-6-sub-1')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-6-sub-1'] ? 'checked' : ''}`}>
                {checkedItems['task-6-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Begin working on/after EAD start date</p>
          </div>
          <div className="opt-subtask" onClick={() => toggleCheck('task-6-sub-2')} style={{ cursor: 'pointer' }}>
            <div className="opt-subtask-connector">
              <div className="opt-subtask-line-top"></div>
              <div className={`opt-subtask-checkbox ${checkedItems['task-6-sub-2'] ? 'checked' : ''}`}>
                {checkedItems['task-6-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="opt-subtask-line-bottom"></div>
            </div>
            <p className="opt-subtask-text">Report employer via SEVP Portal or to DSO</p>
          </div>
        </div>
      </section>

      <Footer 
        onNavigateJobBoard={onNavigateJobBoard} 
        onNavigateEmployerBoard={onNavigateEmployerBoard} 
        onNavigateHome={onNavigateHome}
        onNavigateStudentResources={onNavigateStudentResources}
      />
    </div>
  );
}

export default OPT;
