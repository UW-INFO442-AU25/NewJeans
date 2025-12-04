import React, { useState } from 'react';
import './F1ToH1BGuide.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function F1ToH1BGuide({ onNavigateHome, onNavigateJobBoard, onNavigateEmployerBoard, onNavigateLogin, onNavigateStudentResources }) {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheckbox = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="f1-h1b-guide-page">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        onNavigateEmployerBoard={onNavigateEmployerBoard}
        onNavigateLogin={onNavigateLogin}
        onNavigateStudentResources={onNavigateStudentResources}
      />

      <div className="guide-hero-section">
        <div className="hero-content-wrapper">
        </div>
      </div>

      <div className="guide-main-content">
        <div className="process-overview-section">
          <h2 className="section-heading">The F-1 to H-1B Process Overview</h2>
          <div className="overview-grid">
            <iframe 
              className="video-placeholder" 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/ixmZOpuiTzE" 
              title="F-1 to H-1B Transition Guide" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
            <div className="overview-text-content">
              <p>Changing from an F-1 student visa to an H-1B work visa involves several key steps:</p>
              
              <p><strong>1. Find H-1B Sponsorship</strong>: Secure a job offer from a U.S. employer willing to sponsor you for an H-1B visa. The position should qualify as a <span className="underlined-text">specialty occupation</span>, typically requiring at least a bachelor's degree.</p>
              
              <p><strong>2. H-1B Registration and Selection</strong>: Employers register candidates for the annual H-1B lottery, usually in March. If selected, they can proceed with filing a petition.</p>
              
              <p><strong>3. Labor Condition Application (LCA)</strong>: The employer <span className="underlined-text">files an LCA with the Department of Labor</span>, agreeing to pay the prevailing wage for both the occupation and location.</p>
              
              <p><strong>4. H-1B Petition Filing</strong>: After LCA approval, the employer files  <span className="underlined-text">Form I-129, Petition for a Nonimmigrant Worker</span> with USCIS requesting a change of status from F-1 to H-1B.</p>
              
              <p><strong>5. Cap Gap Period</strong>: If the applicant's F-1 status expires before their H-1B begins, they may qualify for the cap gap extension (detailed below).</p>
              
              <p><strong>6. Transition to H-1B Status</strong>: If approved, the foreign national's status automatically changes to <span className="underlined-text">H-1B</span> on the start date (typically October 1).</p>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-section-wrapper">
        <div className="timeline-section-content">
          <h2 className="timeline-title">H-1B Fiscal Year Timeline</h2>

          <div className="timeline-items-container">
            <div className="timeline-item" onClick={() => toggleCheckbox('timeline-1')} style={{ cursor: 'pointer' }}>
              <div className="timeline-item-content">
                <div className={`timeline-checkbox ${checkedItems['timeline-1'] ? 'checked' : ''}`}>
                  {checkedItems['timeline-1'] && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#5384A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <p className="timeline-item-text">
                  <strong>March:</strong> H-1B registration period (exact dates announced annually by USCIS)
                </p>
              </div>
            </div>

            <div className="timeline-item" onClick={() => toggleCheckbox('timeline-2')} style={{ cursor: 'pointer' }}>
              <div className="timeline-item-content">
                <div className={`timeline-checkbox ${checkedItems['timeline-2'] ? 'checked' : ''}`}>
                  {checkedItems['timeline-2'] && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#5384A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <p className="timeline-item-text">
                  <strong>Late March/Early April:</strong> Lottery selections announced
                </p>
              </div>
            </div>

            <div className="timeline-item" onClick={() => toggleCheckbox('timeline-3')} style={{ cursor: 'pointer' }}>
              <div className="timeline-item-content">
                <div className={`timeline-checkbox ${checkedItems['timeline-3'] ? 'checked' : ''}`}>
                  {checkedItems['timeline-3'] && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#5384A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <p className="timeline-item-text">
                  <strong>April 1 to June 30:</strong> Filing period for selected H-1B petitions
                </p>
              </div>
            </div>

            <div className="timeline-item" onClick={() => toggleCheckbox('timeline-4')} style={{ cursor: 'pointer' }}>
              <div className="timeline-item-content">
                <div className={`timeline-checkbox ${checkedItems['timeline-4'] ? 'checked' : ''}`}>
                  {checkedItems['timeline-4'] && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#5384A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <p className="timeline-item-text">
                  <strong>April to September:</strong> USCIS processing of H-1B petitions
                </p>
              </div>
            </div>

            <div className="timeline-item" onClick={() => toggleCheckbox('timeline-5')} style={{ cursor: 'pointer' }}>
              <div className="timeline-item-content">
                <div className={`timeline-checkbox ${checkedItems['timeline-5'] ? 'checked' : ''}`}>
                  {checkedItems['timeline-5'] && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#5384A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <p className="timeline-item-text">
                  <strong>October 1:</strong> H-1B employment start date (beginning of fiscal year)
                </p>
              </div>
            </div>

            <div className="timeline-item" onClick={() => toggleCheckbox('timeline-6')} style={{ cursor: 'pointer' }}>
              <div className="timeline-item-content">
                <div className={`timeline-checkbox ${checkedItems['timeline-6'] ? 'checked' : ''}`}>
                  {checkedItems['timeline-6'] && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#5384A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <p className="timeline-item-text">
                  <strong>Until April 1 (following year):</strong> Cap gap extension period under new regulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-main-content">
        <div className="cap-gap-intro-section">
          <h2 className="section-heading">Understanding the H-1B Cap Gap Extension</h2>
          <p className="section-description cap-gap-description">The "cap gap" refers to the time between when the employee's F-1 Optional Practical Training (OPT) expires and their H-1B status begins on October 1. Without special provisions, many students would face a lapse in legal status during this transition. We've included specific guidance for both international students and HR professionals to help ensure a smooth transition.</p>
        </div>
      </div>

      <div className="eligibility-section-wrapper">
        <div className="eligibility-section-content">
          <h2 className="section-heading">Eligibility for Cap Gap Extension</h2>
          <div className="eligibility-text-content">
            <p>To qualify for a cap gap extension, your H-1B petition must meet these requirements: Be properly and timely filed for a cap-subject position, request a change of status (not consular processing), be filed during the H-1B filing period (beginning April 1), and be filed while you're still in F-1 status—including during your academic program, during authorized post-completion OPT, or during your 60-day grace period after completing studies or OPT.</p>
            
            <p>Your H-1B petition must be based on a valid, selected registration for the same fiscal year.</p>
            <p>Simply being selected in the lottery is not enough. Your employer must file the complete H-1B petition for you to qualify.</p>
            
            <p><strong>For HR Managers</strong>: File H-1B petitions well before your employee's OPT expiration date. If filing during their grace period, note they will not be authorized to work during the cap gap.</p>
            
            <p><strong>For F-1 Students</strong>: Confirm that your employer is filing for a change of status, not consular processing, as only change of status qualifies for cap gap.</p>
          </div>
        </div>
      </div>

      <div className="guide-main-content">
        <div className="work-auth-section">
          <h2 className="section-heading">Work Authorization During Cap Gap</h2>
          <p className="section-description">Your ability to work during the cap gap period depends on your status when the H-1B petition was filed.</p>
          
          <div className="work-auth-table-container">
            <div className="table-header-row">
              <div className="table-header-cell-left">If your employer filed your H-1B petition while:</div>
              <div className="table-header-cell-right">Then:</div>
            </div>
            
            <div className="table-body-row">
              <div className="table-body-cell-left">You were on active OPT or STEM OPT</div>
              <div className="table-body-cell-right">Your work authorization automatically extends until your H-1B starts or until April 1, whichever comes first</div>
            </div>
            
            <div className="table-body-row">
              <div className="table-body-cell-left">You were in your 60-day grace period after OPT</div>
              <div className="table-body-cell-right">Your F-1 status extends but you CANNOT work during the cap gap period</div>
            </div>
          </div>
        </div>
      </div>

      <div className="proof-section-wrapper">
        <div className="proof-section-content">
          <h2 className="section-heading">Proof of Work Authorization</h2>
          <div className="proof-text-content">
            <p>The cap-gap extension of OPT is automatic for eligible students. You will not receive a new Employment Authorization Document (EAD) for this extension period.</p>
            
            <p>Your proof of continued employment authorization is an updated Form I-20 ("Certificate of Eligibility for Nonimmigrant Student Status") showing the OPT extension, issued by your Designated School Official (DSO). While this updated I-20 isn't technically required to continue working, it serves as important evidence of your authorization.</p>
          </div>
        </div>
      </div>

      <div className="checklist-section-wrapper">
        <div className="checklist-section-content">
          <h2 className="checklist-section-title">Cap Gap I-20 Document Checklist</h2>
          
          <div className="checklist-main-task">
            <div className="main-task-header">
              <div className={`main-task-checkbox ${checkedItems['task-1'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-1')}></div>
              <h3 className="main-task-title">Confirm H-1B Petition Filing</h3>
            </div>
          </div>
          <div className="checklist-subtasks">
            <div className="subtask-item">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-1-sub-1'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-1-sub-1')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Your employer must file an H-1B petition on your behalf</p>
            </div>
            <div className="subtask-item">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-1-sub-2'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-1-sub-2')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Confirm that the petition was filed before your OPT or STEM OPT end date</p>
            </div>
            <div className="subtask-item">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-1-sub-3'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-1-sub-3')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Ensure your employer filed "change of status" (COS) — cap-gap only applies to COS cases</p>
            </div>
          </div>

          <div className="checklist-main-task">
            <div className="main-task-header">
              <div className={`main-task-checkbox ${checkedItems['task-2'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-2')}></div>
              <h3 className="main-task-title">Gather Proof of Filing</h3>
            </div>
          </div>
          <div className="checklist-subtasks">
            <div className="subtask-item subtask-multiline subtask-height-144">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-2-sub-1'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-2-sub-1')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Provide your DSO with at least one of the following:
Copy of the H-1B petition package
FedEx/UPS/USPS mailing receipt showing it was delivered
USCIS online account screenshot (if available)</p>
            </div>
          </div>

          <div className="checklist-main-task">
            <div className="main-task-header">
              <div className={`main-task-checkbox ${checkedItems['task-3'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-3')}></div>
              <h3 className="main-task-title">Request Cap-Gap I-20 from Your DSO</h3>
            </div>
          </div>
          <div className="checklist-subtasks">
            <div className="subtask-item">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-3-sub-1'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-3-sub-1')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Contact your Designated School Official immediately after filing</p>
            </div>
            <div className="subtask-item">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-3-sub-2'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-3-sub-2')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Explain that you are requesting a Cap-Gap I-20 for continued F-1 status and work authorization</p>
            </div>
            <div className="subtask-item">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-3-sub-3'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-3-sub-3')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Send your proof of filing directly to the DSO</p>
            </div>
          </div>

          <div className="checklist-main-task">
            <div className="main-task-header">
              <div className={`main-task-checkbox ${checkedItems['task-4'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-4')}></div>
              <h3 className="main-task-title">Receive Initial Cap-Gap I-20</h3>
            </div>
          </div>
          <div className="checklist-subtasks">
            <div className="subtask-item subtask-multiline subtask-height-80">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-4-sub-1'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-4-sub-1')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Your DSO will issue an updated Form I-20 showing:
Cap-gap extension of status
Continued employment authorization through June 1 (initial stage)</p>
            </div>
            <div className="subtask-item">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-4-sub-2'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-4-sub-2')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Review and sign your new I-20</p>
            </div>
          </div>

          <div className="checklist-main-task">
            <div className="main-task-header">
              <div className={`main-task-checkbox ${checkedItems['task-5'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-5')}></div>
              <h3 className="main-task-title">Provide USCIS Receipt (Form I-797C)</h3>
            </div>
          </div>
          <div className="checklist-subtasks">
            <div className="subtask-item">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-5-sub-1'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-5-sub-1')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Once your employer receives the H-1B Receipt Notice, obtain a copy</p>
            </div>
            <div className="subtask-item">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-5-sub-2'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-5-sub-2')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Return to your DSO and submit the I-797C notice</p>
            </div>
          </div>

          <div className="checklist-main-task">
            <div className="main-task-header">
              <div className={`main-task-checkbox ${checkedItems['task-6'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-6')}></div>
              <h3 className="main-task-title">Receive Final Cap-Gap I-20</h3>
            </div>
          </div>
          <div className="checklist-subtasks">
            <div className="subtask-item subtask-multiline subtask-height-80">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-6-sub-1'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-6-sub-1')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Your DSO will issue a second updated I-20 showing:
Continued F-1 status through September 30
Employment authorization extension
H-1B petition details on page 2</p>
            </div>
          </div>

          <div className="checklist-main-task">
            <div className="main-task-header">
              <div className={`main-task-checkbox ${checkedItems['task-7'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-7')}></div>
              <h3 className="main-task-title">Use Your Cap-Gap I-20 for Verification</h3>
            </div>
          </div>
          <div className="checklist-subtasks">
            <div className="subtask-item subtask-multiline subtask-height-158">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-7-sub-1'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-7-sub-1')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">You will need this I-20 for:
Employment verification (I-9 compliance)
Driver's license renewal (varies by state)
Proof of legal status for government or financial services
Travel advisories (note: cap-gap travel is risky — most students avoid international travel)</p>
            </div>
          </div>

          <div className="checklist-main-task">
            <div className="main-task-header">
              <div className={`main-task-checkbox ${checkedItems['task-8'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-8')}></div>
              <h3 className="main-task-title">Understand EAD Rules During Cap-Gap</h3>
            </div>
          </div>
          <div className="checklist-subtasks">
            <div className="subtask-item">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-8-sub-1'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-8-sub-1')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">You will NOT receive a new EAD card during the cap-gap period</p>
            </div>
            <div className="subtask-item">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-8-sub-2'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-8-sub-2')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">Your final cap-gap I-20 + expired EAD serves as valid work authorization until 9/30</p>
            </div>
            <div className="subtask-item">
              <div className="subtask-indicator">
                <div className="connector-line-top"></div>
                <div className={`subtask-checkbox ${checkedItems['task-8-sub-3'] ? 'checked' : ''}`} onClick={() => toggleCheckbox('task-8-sub-3')}></div>
                <div className="connector-line-bottom"></div>
              </div>
              <p className="subtask-description">HR must accept this combination for I-9 verification</p>
            </div>
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

export default F1ToH1BGuide;
