import React, { useState, useEffect } from 'react';
import './OffCampusEmployment.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function OffCampusEmployment({ onNavigateHome, onNavigateJobBoard, onNavigateEmployerBoard, onNavigateLogin, onNavigateStudentResources }) {
  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      const saved = localStorage.getItem('offCampusChecklist');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('offCampusChecklist', JSON.stringify(checkedItems));
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
    <div className="off-campus-employment-container">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        onNavigateEmployerBoard={onNavigateEmployerBoard}
        onNavigateLogin={onNavigateLogin}
        onNavigateStudentResources={onNavigateStudentResources}
      />

      <section className="off-campus-hero">
      </section>

      <section className="off-campus-what-section">
        <h2 className="off-campus-section-title">What is Off-Campus Employment?</h2>
        <div className="off-campus-what-content">
          <div className="off-campus-video-placeholder">
            {/* Thumbnail links to the video in a new tab (safe fallback). */}
            <a
              href="https://youtu.be/vgjP88xICjk?si=yKFQnsEadCt6f9nG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Off-Campus Employment video in a new tab"
            >
              <img
                src="https://img.youtube.com/vi/vgjP88xICjk/hqdefault.jpg"
                alt="Off-Campus Employment Video Thumbnail"
                className="off-campus-video-img"
              />
            </a>
          </div>
          <div className="off-campus-what-description">
            <p>
              Off-campus employment is work that that takes place outside of a school campus. Off-campus employment is only available to F-1 students who have completed at least one full academic year of their program of study, and who have an economic hardship that qualifies for the Department of Homeland Security's emergent circumstances.
            </p>
            <p>
              To apply for off-campus employment, you must explain your economic hardship situation and receive approval to work from your DSO. If your DSO determines that the situation applies, he or she will recommend you and give you an updated Form I-20, "Certificate of Eligibility for Nonimmigrant Status."
            </p>
          </div>
        </div>
      </section>

      <section className="off-campus-checklist-section">
        <h2 className="off-campus-checklist-title">Off-Campus Employment Document Checklist</h2>

        <div className="off-campus-task-group">
          <div className="off-campus-task-header">
            <div
              className={`off-campus-task-checkbox ${checkedItems['task-1'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-1')}
            >
              {checkedItems['task-1'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="off-campus-task-title">Confirm Eligibility</h3>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-1-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-1-sub-1')}
              >
                {checkedItems['task-1-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">You must have completed at least one full academic year in valid F-1 status</p>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-1-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-1-sub-2')}
              >
                {checkedItems['task-1-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">You must demonstrate severe economic hardship caused by unforeseen circumstances beyond your control (e.g., loss of financial support, currency devaluation, tuition increase)</p>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-1-sub-3'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-1-sub-3')}
              >
                {checkedItems['task-1-sub-3'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">Employment must not interfere with your full-time student status</p>
          </div>
        </div>

        <div className="off-campus-task-group">
          <div className="off-campus-task-header">
            <div
              className={`off-campus-task-checkbox ${checkedItems['task-2'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-2')}
            >
              {checkedItems['task-2'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="off-campus-task-title">Meet with Your DSO</h3>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-2-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-2-sub-1')}
              >
                {checkedItems['task-2-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">Explain your economic hardship situation and provide supporting documents (e.g., bank statements, sponsor letters, proof of changed financial circumstances)</p>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-2-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-2-sub-2')}
              >
                {checkedItems['task-2-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">If your DSO approves, they will recommend you for off-campus work authorization in SEVIS and issue an updated Form I-20</p>
          </div>
        </div>

        <div className="off-campus-task-group">
          <div className="off-campus-task-header">
            <div
              className={`off-campus-task-checkbox ${checkedItems['task-3'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-3')}
            >
              {checkedItems['task-3'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="off-campus-task-title">Receive Updated Form I-20</h3>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-3-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-3-sub-1')}
              >
                {checkedItems['task-3-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">Verify that the new I-20 includes your off-campus employment recommendation on page 2</p>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-3-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-3-sub-2')}
              >
                {checkedItems['task-3-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">Sign your I-20 and keep a copy for your records</p>
          </div>
        </div>

        <div className="off-campus-task-group">
          <div className="off-campus-task-header">
            <div
              className={`off-campus-task-checkbox ${checkedItems['task-4'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-4')}
            >
              {checkedItems['task-4'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="off-campus-task-title">Complete Form I-765</h3>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-4-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-4-sub-1')}
              >
                {checkedItems['task-4-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">Fill out Form I-765 and submit it to USCIS within 30 days of your DSO recommendation</p>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-4-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-4-sub-2')}
              >
                {checkedItems['task-4-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">Choose the correct eligibility code: (c)(3)(iii) for economic hardship</p>
          </div>
        </div>

        <div className="off-campus-task-group">
          <div className="off-campus-task-header">
            <div
              className={`off-campus-task-checkbox ${checkedItems['task-5'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-5')}
            >
              {checkedItems['task-5'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="off-campus-task-title">Submit Application to USCIS</h3>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-5-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-5-sub-1')}
              >
                {checkedItems['task-5-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">Mail or file online (recommended)</p>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-5-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-5-sub-2')}
              >
                {checkedItems['task-5-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">Wait for the USCIS receipt notice (Form I-797) to confirm your application was received</p>
          </div>
        </div>

        <div className="off-campus-task-group">
          <div className="off-campus-task-header">
            <div
              className={`off-campus-task-checkbox ${checkedItems['task-6'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-6')}
            >
              {checkedItems['task-6'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="off-campus-task-title">Wait for Approval</h3>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-6-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-6-sub-1')}
              >
                {checkedItems['task-6-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">Do not begin work while your I-765 is pending</p>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-6-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-6-sub-2')}
              >
                {checkedItems['task-6-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">You will receive your EAD card (Form I-766) showing authorized work dates once approved</p>
          </div>
        </div>

        <div className="off-campus-task-group">
          <div className="off-campus-task-header">
            <div
              className={`off-campus-task-checkbox ${checkedItems['task-7'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-7')}
            >
              {checkedItems['task-7'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="off-campus-task-title">Apply for a Social Security Number (SSN)</h3>
          </div>
          <div className="off-campus-subtask off-campus-subtask-multiline">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-7-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-7-sub-1')}
              >
                {checkedItems['task-7-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">Bring the following to the Social Security Administration:
Passport
Form I-20
I-94 Record
Job offer letter signed by your DSO</p>
          </div>
        </div>

        <div className="off-campus-task-group">
          <div className="off-campus-task-header">
            <div
              className={`off-campus-task-checkbox ${checkedItems['task-8'] ? 'checked' : ''}`}
              onClick={() => toggleCheck('task-8')}
            >
              {checkedItems['task-8'] && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#FEFEFE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="off-campus-task-title">Begin Off-Campus Employment</h3>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-8-sub-1'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-8-sub-1')}
              >
                {checkedItems['task-8-sub-1'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">You may begin working only after receiving your EAD card and the start date on the card has arrived</p>
          </div>
          <div className="off-campus-subtask">
            <div className="off-campus-subtask-connector">
              <div className="off-campus-subtask-line-top"></div>
              <div
                className={`off-campus-subtask-checkbox ${checkedItems['task-8-sub-2'] ? 'checked' : ''}`}
                onClick={() => toggleCheck('task-8-sub-2')}
              >
                {checkedItems['task-8-sub-2'] && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="off-campus-subtask-line-bottom"></div>
            </div>
            <p className="off-campus-subtask-text">You may work up to 20 hours per week during academic terms and full-time during breaks</p>
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

export default OffCampusEmployment;
