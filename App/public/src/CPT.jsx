import React, { useState } from 'react';
import './CPT.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function CPT({ onNavigateHome, onNavigateJobBoard, onNavigateEmployerBoard, onNavigateLogin, onNavigateStudentResources, user = null, onSignOut = () => {} }) {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="cpt-page-container">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        onNavigateLogin={onNavigateLogin}
        onNavigateStudentResources={onNavigateStudentResources}
        role={user ? 'student' : 'guest'}
        onSignOut={onSignOut}
        userName={user ? user.name : ''}
      />

      <section className="cpt-hero">
        <div className="cpt-hero-content">
        </div>
      </section>

      <section className="cpt-what-section">
        <h2 className="cpt-section-title">What is CPT?</h2>
        <div className="cpt-what-content">
          <div className="cpt-video-placeholder">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/b3c3fd1cd00e0aa42c2a2b552dc17d05ea9b9013?width=892" 
              alt="CPT Video Placeholder" 
              className="cpt-video-img"
            />
          </div>
          <div className="cpt-what-description">
            <p>
              Curricular Practical Training (CPT) is an opportunity for students on F-1 visas to learn practical skills related to their majors while studying at the University of Washington. CPT serves as a work authorization as students engage in different types of activities related to their major.
            </p>
            <p className="cpt-what-forms-title">These are common forms of CPT:</p>
            <ul className="cpt-what-list">
              <li>Employment directly connected to your major</li>
              <li>A paid or unpaid internship</li>
              <li>A Cooperative (co-op) education experience</li>
              <li>Participation in a Practicum</li>
              <li>On-campus employment that requires additional authorization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cpt-timeline-section">
        <h2 className="cpt-timeline-title">CPT Timeline Overview</h2>
        <div className="cpt-timeline-container">
          <svg className="cpt-timeline-curve" viewBox="0 0 1169 342" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_146_466)">
              <path d="M26.5006 227.132C79.1544 252.675 201.794 300.842 271.121 289.165C357.781 274.569 379.171 199.399 513 181.884C646.828 164.369 745.006 225.307 848.668 137.366C952.33 49.4242 1002.79 -8.23047 1142.1 4.17623" stroke="#1D3A4D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <filter id="filter0_d_146_466" x="0" y="0" width="1168.6" height="341.459" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="24"/>
                <feGaussianBlur stdDeviation="12"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.203922 0 0 0 0 0.662745 0 0 0 0.3 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_146_466"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_146_466" result="shape"/>
              </filter>
            </defs>
          </svg>

          <div className="cpt-timeline-dot" style={{ left: '36px', top: '323px' }}>
            <div className="cpt-timeline-dot-outer"></div>
            <div className="cpt-timeline-dot-inner"></div>
          </div>
          <div className="cpt-timeline-dot" style={{ left: '256px', top: '385px' }}>
            <div className="cpt-timeline-dot-outer"></div>
            <div className="cpt-timeline-dot-inner"></div>
          </div>
          <div className="cpt-timeline-dot" style={{ left: '490px', top: '280px' }}>
            <div className="cpt-timeline-dot-outer"></div>
            <div className="cpt-timeline-dot-inner"></div>
          </div>
          <div className="cpt-timeline-dot" style={{ left: '748px', top: '280px' }}>
            <div className="cpt-timeline-dot-outer"></div>
            <div className="cpt-timeline-dot-inner"></div>
          </div>
          <div className="cpt-timeline-dot" style={{ left: '941px', top: '166px' }}>
            <div className="cpt-timeline-dot-outer"></div>
            <div className="cpt-timeline-dot-inner"></div>
          </div>
          <div className="cpt-timeline-dot" style={{ left: '1152px', top: '96px' }}>
            <div className="cpt-timeline-dot-outer"></div>
            <div className="cpt-timeline-dot-inner"></div>
          </div>

          <div className="cpt-timeline-step cpt-step-1">
            <div className="cpt-step-number">1</div>
            <p className="cpt-step-text">Secure an internship or job offer by browsing VisaPath's curated job board</p>
          </div>

          <div className="cpt-timeline-step cpt-step-2">
            <div className="cpt-step-number">2</div>
            <p className="cpt-step-text">Meet with your academic adviser or department</p>
          </div>

          <div className="cpt-timeline-step cpt-step-3">
            <div className="cpt-step-number">3</div>
            <p className="cpt-step-text">Register for CPT Credit</p>
          </div>

          <div className="cpt-timeline-step cpt-step-4">
            <div className="cpt-step-number">4</div>
            <p className="cpt-step-text">Submit CPT Request to ISS</p>
          </div>

          <div className="cpt-timeline-step cpt-step-5">
            <div className="cpt-step-number">5</div>
            <p className="cpt-step-text">Department & ISS Review</p>
          </div>

          <div className="cpt-timeline-step cpt-step-6">
            <div className="cpt-step-number">6</div>
            <p className="cpt-step-text">Begin Work!</p>
          </div>
        </div>
      </section>

      <section className="cpt-checklist-section">
        <h2 className="cpt-checklist-title">CPT Document Checklist</h2>

        <div className="cpt-task-group">
          <div className="cpt-task-header" onClick={() => toggleCheck('cpt-task-1')} style={{ cursor: 'pointer' }}>
            <div className={`cpt-task-checkbox ${checkedItems['cpt-task-1'] ? 'checked' : ''}`}>
              {checkedItems['cpt-task-1'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="cpt-task-title">Secure Job Offer</h3>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-1-sub-1')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-1-sub-1'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-1-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Find an internship/job related to your major through VisaPath</p>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-1-sub-2')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-1-sub-2'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-1-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Ensure role duties relate to your academic program</p>
          </div>
        </div>

        <div className="cpt-task-group">
          <div className="cpt-task-header" onClick={() => toggleCheck('cpt-task-2')} style={{ cursor: 'pointer' }}>
            <div className={`cpt-task-checkbox ${checkedItems['cpt-task-2'] ? 'checked' : ''}`}>
              {checkedItems['cpt-task-2'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="cpt-task-title">Meet with Academic Adviser</h3>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-2-sub-1')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-2-sub-1'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-2-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Register for CPT credit course</p>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-2-sub-2')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-2-sub-2'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-2-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Confirm credit units meet ISS requirements</p>
          </div>
        </div>

        <div className="cpt-task-group">
          <div className="cpt-task-header" onClick={() => toggleCheck('cpt-task-3')} style={{ cursor: 'pointer' }}>
            <div className={`cpt-task-checkbox ${checkedItems['cpt-task-3'] ? 'checked' : ''}`}>
              {checkedItems['cpt-task-3'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="cpt-task-title">Prepare CPT Materials for MyISSS</h3>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-3-sub-1')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-3-sub-1'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-3-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Offer letter PDF ready</p>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-3-sub-2')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-3-sub-2'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-3-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Employer address confirmed</p>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-3-sub-3')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-3-sub-3'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-3-sub-3'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Start & end dates confirmed</p>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-3-sub-4')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-3-sub-4'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-3-sub-4'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Supervisor/contact person details ready</p>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-3-sub-5')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-3-sub-5'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-3-sub-5'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">CPT course enrollment proof uploaded</p>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-3-sub-6')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-3-sub-6'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-3-sub-6'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Academic Department Approver contact included</p>
          </div>
        </div>

        <div className="cpt-task-group">
          <div className="cpt-task-header" onClick={() => toggleCheck('cpt-task-4')} style={{ cursor: 'pointer' }}>
            <div className={`cpt-task-checkbox ${checkedItems['cpt-task-4'] ? 'checked' : ''}`}>
              {checkedItems['cpt-task-4'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="cpt-task-title">Submit CPT Request in MyISSS</h3>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-4-sub-1')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-4-sub-1'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-4-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Submit full application online</p>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-4-sub-2')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-4-sub-2'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-4-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Review submission status regularly</p>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-4-sub-3')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-4-sub-3'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-4-sub-3'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Respond to ISS/department follow-ups</p>
          </div>
        </div>

        <div className="cpt-task-group">
          <div className="cpt-task-header" onClick={() => toggleCheck('cpt-task-5')} style={{ cursor: 'pointer' }}>
            <div className={`cpt-task-checkbox ${checkedItems['cpt-task-5'] ? 'checked' : ''}`}>
              {checkedItems['cpt-task-5'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="cpt-task-title">Begin CPT Employment</h3>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-5-sub-1')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-5-sub-1'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-5-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Start work on or after the CPT start date</p>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-5-sub-2')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-5-sub-2'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-5-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Track hours & maintain student status</p>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-5-sub-3')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-5-sub-3'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-5-sub-3'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Stop work by CPT end date</p>
          </div>
          <div className="cpt-subtask" onClick={() => toggleCheck('cpt-task-5-sub-4')} style={{ cursor: 'pointer' }}>
            <div className="cpt-subtask-connector">
              <div className="cpt-subtask-line-top"></div>
              <div className={`cpt-subtask-checkbox ${checkedItems['cpt-task-5-sub-4'] ? 'checked' : ''}`}>
                {checkedItems['cpt-task-5-sub-4'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="cpt-subtask-line-bottom"></div>
            </div>
            <p className="cpt-subtask-text">Re-apply if extending into next quarter</p>
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

export default CPT;
