import React, { useState, useEffect } from 'react';
import './InternationalOrganization.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function InternationalOrganization({ onNavigateHome, onNavigateJobBoard, onNavigateEmployerBoard, onNavigateLogin, onNavigateStudentResources }) {
  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      const saved = localStorage.getItem('intlOrgChecklist');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('intlOrgChecklist', JSON.stringify(checkedItems));
    } catch (e) {
      // ignore
    }
  }, [checkedItems]);

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="intl-org-container">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        onNavigateLogin={onNavigateLogin}
        onNavigateStudentResources={onNavigateStudentResources}
      />

      <section className="intl-org-hero">
        <div className="intl-org-hero-content">
          <h1 className="intl-org-hero-title">Internship with an International Organization</h1>
        </div>
      </section>

      <section className="intl-org-what-section">
        <h2 className="intl-org-section-title">What is Internship with an International Organization?</h2>
        <div className="intl-org-what-content">
          <div className="intl-org-video-placeholder">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/b3c3fd1cd00e0aa42c2a2b552dc17d05ea9b9013?width=892" 
              alt="Video Placeholder" 
              className="intl-org-video-img"
            />
          </div>
          <div className="intl-org-what-description">
            <p>
              This type of off-campus employment allows F-1 students to work for recognized international organizations such as the United Nations, World Bank, IMF, WHO, or similar bodies, with authorization from USCIS.
            </p>
            <p className="intl-org-requirements-intro">The internship must:</p>
            <ul className="intl-org-requirements-list">
              <li>Be in the United States.</li>
              <li>Be with a public international organization that falls within the International Organization Immunities Act, as defined in 22 U.S.C. § 288 59 Stat. 669.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="intl-org-checklist-section">
        <h2 className="intl-org-checklist-title">Off-Campus Employment Document Checklist</h2>

        <div className="intl-org-task-group">
          <div className="intl-org-task-header">
            <div
              className={`intl-org-task-checkbox ${checkedItems['task-1'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-1')}
            >
              {checkedItems['task-1'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="intl-org-task-title">Confirm Eligibility</h3>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-1-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-1-sub-1')}
              >
                {checkedItems['task-1-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">You must hold valid F-1 status and be in good academic standing</p>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-1-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-1-sub-2')}
              >
                {checkedItems['task-1-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">The organization must appear on the official U.S. Department of State list of recognized international organizations</p>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-1-sub-3'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-1-sub-3')}
              >
                {checkedItems['task-1-sub-3'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">Employment must be directly with that organization (not a contractor)</p>
          </div>
        </div>

        <div className="intl-org-task-group">
          <div className="intl-org-task-header">
            <div
              className={`intl-org-task-checkbox ${checkedItems['task-2'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-2')}
            >
              {checkedItems['task-2'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="intl-org-task-title">Obtain a Job Offer</h3>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-2-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-2-sub-1')}
              >
                {checkedItems['task-2-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">Secure a written job offer from the international organization</p>
          </div>
          <div className="intl-org-subtask intl-org-subtask-multiline">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-2-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-2-sub-2')}
              >
                {checkedItems['task-2-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <div className="intl-org-subtask-text">
              <p>The offer should include:</p>
              <ul className="intl-org-offer-details">
                <li>Official letterhead and signature</li>
                <li>Job title and description</li>
                <li>Start and end dates</li>
                <li>Location of employment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="intl-org-task-group">
          <div className="intl-org-task-header">
            <div
              className={`intl-org-task-checkbox ${checkedItems['task-3'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-3')}
            >
              {checkedItems['task-3'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="intl-org-task-title">Meet with Your DSO</h3>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-3-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-3-sub-1')}
              >
                {checkedItems['task-3-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">Discuss your internship offer with your Designated School Official (DSO)</p>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-3-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-3-sub-2')}
              >
                {checkedItems['task-3-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">Confirm that the position qualifies under "Internship with an International Organization"</p>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-3-sub-3'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-3-sub-3')}
              >
                {checkedItems['task-3-sub-3'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">Your DSO will issue a recommendation letter and prepare your Form I-20 with authorization details</p>
          </div>
        </div>

        <div className="intl-org-task-group">
          <div className="intl-org-task-header">
            <div
              className={`intl-org-task-checkbox ${checkedItems['task-4'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-4')}
            >
              {checkedItems['task-4'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="intl-org-task-title">Receive Updated Form I-20</h3>
          </div>
          <div className="intl-org-subtask intl-org-subtask-multiline">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-4-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-4-sub-1')}
              >
                {checkedItems['task-4-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <div className="intl-org-subtask-text">
              <p>Verify that the new I-20 includes:</p>
              <ul className="intl-org-offer-details">
                <li>The name of the international organization</li>
                <li>Dates and nature of the internship</li>
              </ul>
            </div>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-4-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-4-sub-2')}
              >
                {checkedItems['task-4-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">Sign your I-20 and keep a copy for your records</p>
          </div>
        </div>

        <div className="intl-org-task-group">
          <div className="intl-org-task-header">
            <div
              className={`intl-org-task-checkbox ${checkedItems['task-5'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-5')}
            >
              {checkedItems['task-5'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="intl-org-task-title">File Form I-765</h3>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-5-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-5-sub-1')}
              >
                {checkedItems['task-5-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">Fill out Form I-765 and submit it to USCIS within 30 days of your DSO recommendation</p>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-5-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-5-sub-2')}
              >
                {checkedItems['task-5-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">Choose the correct eligibility code: (c)(3)(ii) — "Internship with an International Organization"</p>
          </div>
        </div>

        <div className="intl-org-task-group">
          <div className="intl-org-task-header">
            <div
              className={`intl-org-task-checkbox ${checkedItems['task-6'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-6')}
            >
              {checkedItems['task-6'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="intl-org-task-title">Submit Application to USCIS</h3>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-6-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-6-sub-1')}
              >
                {checkedItems['task-6-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">Mail or file online (recommended)</p>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-6-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-6-sub-2')}
              >
                {checkedItems['task-6-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">Wait for the USCIS receipt notice (Form I-797) to confirm your application was received</p>
          </div>
        </div>

        <div className="intl-org-task-group">
          <div className="intl-org-task-header">
            <div
              className={`intl-org-task-checkbox ${checkedItems['task-7'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-7')}
            >
              {checkedItems['task-7'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="intl-org-task-title">Wait for USCIS Approval</h3>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-7-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-7-sub-1')}
              >
                {checkedItems['task-7-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">After submission, USCIS will send a receipt notice (Form I-797)</p>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-7-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-7-sub-2')}
              >
                {checkedItems['task-7-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">Wait for the Employment Authorization Document (EAD) to arrive</p>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-7-sub-3'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-7-sub-3')}
              >
                {checkedItems['task-7-sub-3'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">You cannot start working until you have received the EAD and the start date has begun</p>
          </div>
        </div>

        <div className="intl-org-task-group">
          <div className="intl-org-task-header">
            <div
              className={`intl-org-task-checkbox ${checkedItems['task-8'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-8')}
            >
              {checkedItems['task-8'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="intl-org-task-title">Apply for a Social Security Number (SSN)</h3>
          </div>
          <div className="intl-org-subtask intl-org-subtask-multiline">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-8-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-8-sub-1')}
              >
                {checkedItems['task-8-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <div className="intl-org-subtask-text">
              <p>Bring the following to the Social Security Administration:</p>
              <ul className="intl-org-offer-details">
                <li>Passport</li>
                <li>Form I-20</li>
                <li>I-94 Record</li>
                <li>Job offer letter signed by your DSO</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="intl-org-task-group">
          <div className="intl-org-task-header">
            <div
              className={`intl-org-task-checkbox ${checkedItems['task-9'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-9')}
            >
              {checkedItems['task-9'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="intl-org-task-title">Begin Internship</h3>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-9-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-9-sub-1')}
              >
                {checkedItems['task-9-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">You may begin working only after receiving your EAD card and the start date on the card has arrived</p>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-9-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-9-sub-2')}
              >
                {checkedItems['task-9-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">You may work up to 20 hours per week during academic terms and full-time during breaks</p>
          </div>
          <div className="intl-org-subtask">
            <div className="intl-org-subtask-connector">
              <div className="intl-org-subtask-line-top"></div>
              <div
                className={`intl-org-subtask-checkbox ${checkedItems['task-9-sub-3'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-9-sub-3')}
              >
                {checkedItems['task-9-sub-3'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="intl-org-subtask-line-bottom"></div>
            </div>
            <p className="intl-org-subtask-text">The work must remain directly for the international organization named on your I-20</p>
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

export default InternationalOrganization;
