import React, { useState } from 'react';
import './Profile.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const VISA_TYPES = {
  'F-1': {
    label: 'F-1 (Student Visa)',
    workAuth: ['CPT', 'OPT', 'STEM OPT'],
    documentTitle: 'Curricular Practical Training (CPT) Document',
    documents: ['Passport', 'I-20', 'I-94', 'EAD Card']
  },
  'H-1B': {
    label: 'H-1B (Specialty Occupation)',
    workAuth: ['H-1B Approved', 'H-1B Transfer', 'H-1B Extension'],
    documentTitle: 'H-1B Work Authorization Document',
    documents: ['Passport', 'I-129 Approval', 'I-94', 'H-1B Visa']
  },
  'L-1': {
    label: 'L-1 (Intracompany Transfer)',
    workAuth: ['L-1A (Manager)', 'L-1B (Specialized Knowledge)'],
    documentTitle: 'L-1 Work Authorization Document',
    documents: ['Passport', 'I-129 Approval', 'I-94', 'L-1 Visa']
  },
  'O-1': {
    label: 'O-1 (Extraordinary Ability)',
    workAuth: ['O-1A (Sciences/Business)', 'O-1B (Arts)'],
    documentTitle: 'O-1 Work Authorization Document',
    documents: ['Passport', 'I-129 Approval', 'I-94', 'O-1 Visa']
  },
  'OPT': {
    label: 'OPT (Optional Practical Training)',
    workAuth: ['Post-Completion OPT', 'STEM OPT Extension'],
    documentTitle: 'OPT Work Authorization Document',
    documents: ['Passport', 'I-20', 'I-94', 'EAD Card']
  },
  'TN': {
    label: 'TN (NAFTA Professional)',
    workAuth: ['TN Status'],
    documentTitle: 'TN Work Authorization Document',
    documents: ['Passport', 'TN Approval Letter', 'I-94']
  }
};

const CHECKLIST_BY_VISA = {
  'F-1': {
    'CPT': [
      {
        task: 'Secure Job Offer',
        subtasks: [
          'Find an internship/job related to your major through VisaPath',
          'Ensure role duties relate to your academic program'
        ]
      },
      {
        task: 'Meet with Academic Adviser',
        subtasks: [
          'Register for CPT credit course',
          'Confirm credit units meet ISS requirements'
        ]
      },
      {
        task: 'Prepare CPT Materials for MyISSS',
        subtasks: [
          'Offer letter PDF ready',
          'Employer address confirmed',
          'Start & end dates confirmed',
          'Supervisor/contact person details ready',
          'CPT course enrollment proof uploaded',
          'Academic Department Approver contact included'
        ]
      },
      {
        task: 'Submit CPT Request in MyISSS',
        subtasks: [
          'Submit full application online',
          'Review submission status regularly',
          'Respond to ISS/department follow-ups'
        ]
      },
      {
        task: 'Begin CPT Employment',
        subtasks: [
          'Start work on or after the CPT start date',
          'Track hours & maintain student status',
          'Stop work by CPT end date',
          'Re-apply if extending into next quarter'
        ]
      }
    ],
    'OPT': [
      {
        task: 'Consult with International Student Office',
        subtasks: [
          'Attend OPT workshop or orientation',
          'Confirm eligibility for OPT'
        ]
      },
      {
        task: 'Obtain Recommendation from Academic Adviser',
        subtasks: [
          'Request I-20 endorsement for OPT',
          'Ensure your I-20 is valid'
        ]
      },
      {
        task: 'Apply for OPT with USCIS',
        subtasks: [
          'Complete Form I-765',
          'Gather required documents (passport copy, I-20, photos)',
          'Mail application to USCIS',
          'Pay application fee'
        ]
      },
      {
        task: 'Receive EAD Card',
        subtasks: [
          'Wait for USCIS processing (typically 90-120 days)',
          'Track application status online',
          'Receive EAD card in mail'
        ]
      },
      {
        task: 'Begin OPT Employment',
        subtasks: [
          'Start work on or after EAD start date',
          'Report employment to ISS within 10 days',
          'Keep unemployment under 90 days total',
          'Maintain updated information in SEVIS'
        ]
      }
    ],
    'STEM OPT': [
      {
        task: 'Verify STEM Degree Eligibility',
        subtasks: [
          'Confirm your degree is on the STEM-designated degree list',
          'Check that your employer is E-Verify enrolled'
        ]
      },
      {
        task: 'Complete Form I-983 Training Plan',
        subtasks: [
          'Work with employer to complete the training plan',
          'Obtain all required signatures'
        ]
      },
      {
        task: 'Apply for STEM OPT Extension',
        subtasks: [
          'Get new I-20 with STEM recommendation',
          'Complete Form I-765',
          'Submit application before current OPT expires',
          'Pay application fee'
        ]
      },
      {
        task: 'Maintain STEM OPT Status',
        subtasks: [
          'Report employment changes within 10 days',
          'Submit I-983 evaluations every 12 months',
          'Keep unemployment under 60 days',
          'Maintain E-Verify employment'
        ]
      }
    ]
  },
  'H-1B': {
    'H-1B Approved': [
      {
        task: 'Employer Files Petition',
        subtasks: [
          'Employer files Form I-129 with USCIS',
          'Labor Condition Application (LCA) approved',
          'All required documentation submitted'
        ]
      },
      {
        task: 'Wait for USCIS Decision',
        subtasks: [
          'Track case status online',
          'Respond to any RFEs (Requests for Evidence)',
          'Receive I-797 approval notice'
        ]
      },
      {
        task: 'Visa Stamping (if outside U.S.)',
        subtasks: [
          'Schedule visa interview at U.S. consulate',
          'Gather required documents',
          'Attend interview and obtain visa stamp'
        ]
      },
      {
        task: 'Begin H-1B Employment',
        subtasks: [
          'Start work on approved start date',
          'Keep copies of all H-1B documents',
          'Notify employer of any address changes'
        ]
      }
    ],
    'H-1B Transfer': [
      {
        task: 'New Employer Files Transfer Petition',
        subtasks: [
          'New employer submits I-129 petition',
          'Continue working for current employer until transfer approved (if applicable)',
          'Gather all current H-1B documentation'
        ]
      },
      {
        task: 'Maintain Status During Transfer',
        subtasks: [
          'Track transfer petition status',
          'Can start work for new employer once petition filed (portability)',
          'Keep copies of receipt notices'
        ]
      },
      {
        task: 'Complete Transfer',
        subtasks: [
          'Receive approval notice from USCIS',
          'Begin work at new employer',
          'Update address with USCIS if needed'
        ]
      }
    ],
    'H-1B Extension': [
      {
        task: 'Prepare Extension Application',
        subtasks: [
          'Employer files extension petition before current H-1B expires',
          'Gather updated employment documentation',
          'File LCA if needed'
        ]
      },
      {
        task: 'Submit Extension Petition',
        subtasks: [
          'File Form I-129 extension',
          'Receive receipt notice',
          'Can continue working for up to 240 days while pending'
        ]
      },
      {
        task: 'Receive Extension Approval',
        subtasks: [
          'Track case status',
          'Respond to any RFEs',
          'Receive I-797 extension approval'
        ]
      }
    ]
  },
  'L-1': {
    'L-1A (Manager)': [
      {
        task: 'Verify Eligibility Requirements',
        subtasks: [
          'Confirm 1 year employment with foreign company',
          'Verify managerial/executive role',
          'Confirm qualifying relationship between U.S. and foreign entity'
        ]
      },
      {
        task: 'Employer Files L-1A Petition',
        subtasks: [
          'Employer submits Form I-129 with L supplement',
          'Provide organizational charts and job descriptions',
          'Include evidence of qualifying employment'
        ]
      },
      {
        task: 'Obtain L-1A Approval and Visa',
        subtasks: [
          'Receive I-797 approval notice',
          'Schedule visa interview (if applicable)',
          'Obtain L-1A visa stamp'
        ]
      },
      {
        task: 'Begin L-1A Employment',
        subtasks: [
          'Enter U.S. and begin work',
          'Maintain managerial duties as described in petition',
          'Keep all L-1A documentation'
        ]
      }
    ],
    'L-1B (Specialized Knowledge)': [
      {
        task: 'Document Specialized Knowledge',
        subtasks: [
          'Gather evidence of specialized knowledge',
          'Prepare detailed job description',
          'Confirm 1 year employment abroad'
        ]
      },
      {
        task: 'File L-1B Petition',
        subtasks: [
          'Employer submits I-129 with L supplement',
          'Include specialized knowledge documentation',
          'Provide evidence of intra-company transfer'
        ]
      },
      {
        task: 'Complete L-1B Process',
        subtasks: [
          'Receive petition approval',
          'Obtain visa stamp if needed',
          'Begin employment in U.S.'
        ]
      }
    ]
  },
  'O-1': {
    'O-1A (Sciences/Business)': [
      {
        task: 'Gather Evidence of Extraordinary Ability',
        subtasks: [
          'Collect awards and recognition documentation',
          'Obtain expert letters of recommendation',
          'Document major contributions to field',
          'Compile media coverage and publications'
        ]
      },
      {
        task: 'Prepare O-1A Petition',
        subtasks: [
          'Employer or agent files Form I-129',
          'Include consultation letter from peer group',
          'Prepare detailed itinerary',
          'Submit comprehensive evidence package'
        ]
      },
      {
        task: 'Obtain O-1A Approval',
        subtasks: [
          'USCIS reviews petition',
          'Respond to any RFEs',
          'Receive I-797 approval notice'
        ]
      },
      {
        task: 'Begin O-1A Employment',
        subtasks: [
          'Obtain visa stamp if outside U.S.',
          'Enter U.S. and begin work',
          'Maintain documentation of continued extraordinary achievement'
        ]
      }
    ],
    'O-1B (Arts)': [
      {
        task: 'Document Distinction in Arts',
        subtasks: [
          'Gather evidence of distinction',
          'Collect reviews, publicity, awards',
          'Obtain letters from experts in field',
          'Document lead or starring roles'
        ]
      },
      {
        task: 'File O-1B Petition',
        subtasks: [
          'Employer/agent submits Form I-129',
          'Include consultation from labor organization',
          'Provide detailed work itinerary',
          'Submit distinction evidence'
        ]
      },
      {
        task: 'Complete O-1B Process',
        subtasks: [
          'Receive approval notice',
          'Obtain visa if needed',
          'Begin artistic employment in U.S.'
        ]
      }
    ]
  },
  'OPT': {
    'Post-Completion OPT': [
      {
        task: 'Complete Degree Requirements',
        subtasks: [
          'Finish all academic requirements',
          'Confirm graduation date with registrar',
          'Meet with international student advisor'
        ]
      },
      {
        task: 'Apply for OPT',
        subtasks: [
          'Get OPT recommendation on I-20',
          'Complete Form I-765',
          'Submit application within 30-day window',
          'Pay USCIS fee'
        ]
      },
      {
        task: 'Receive Work Authorization',
        subtasks: [
          'Track application status',
          'Receive EAD card',
          'Note start and end dates'
        ]
      },
      {
        task: 'Maintain OPT Status',
        subtasks: [
          'Find employment related to degree',
          'Report job to school within 10 days',
          'Track unemployment days (max 90)',
          'Keep school updated on employment changes'
        ]
      }
    ],
    'STEM OPT Extension': [
      {
        task: 'Verify STEM Eligibility',
        subtasks: [
          'Confirm STEM-designated degree',
          'Ensure employer is E-Verify enrolled',
          'Check current OPT status'
        ]
      },
      {
        task: 'Complete Form I-983',
        subtasks: [
          'Work with employer on training plan',
          'Get all signatures',
          'Submit to designated school official'
        ]
      },
      {
        task: 'Apply for 24-Month Extension',
        subtasks: [
          'Get STEM I-20 recommendation',
          'File I-765 before current OPT expires',
          'Include I-983 and employer documentation',
          'Pay application fee'
        ]
      },
      {
        task: 'Maintain STEM OPT',
        subtasks: [
          'Report employment within 10 days',
          'Submit I-983 evaluations every 12 months',
          'Maximum 60 days unemployment',
          'Keep E-Verify employment'
        ]
      }
    ]
  },
  'TN': {
    'TN Status': [
      {
        task: 'Verify TN Eligibility',
        subtasks: [
          'Confirm Canadian or Mexican citizenship',
          'Verify profession is on TN list',
          'Ensure you meet education/credential requirements'
        ]
      },
      {
        task: 'Gather Required Documents',
        subtasks: [
          'Obtain job offer letter from U.S. employer',
          'Collect proof of citizenship',
          'Gather educational credentials',
          'Prepare professional licenses if required'
        ]
      },
      {
        task: 'Apply for TN Status',
        subtasks: [
          'Apply at port of entry (Canadians)',
          'File I-129 if Mexican citizen',
          'Present all documentation',
          'Pay application fee'
        ]
      },
      {
        task: 'Begin TN Employment',
        subtasks: [
          'Receive I-94 with TN status',
          'Start work with U.S. employer',
          'Maintain documentation',
          'Apply for extension before expiration if needed'
        ]
      }
    ]
  }
};

import JobCardStyle2 from './components/JobCardStyle2';
import PassportUpload from './components/PassportUpload';
import jobs from './data/jobs.json';

function Profile({ onNavigateHome, onNavigateJobBoard, onNavigateProfile = () => {}, onNavigateEmployerBoard = () => {}, onNavigateToJobDescription, onNavigateStudentResources = () => {}, savedJobIds = [], onToggleSave = () => {}, onSignOut = () => {}, user = null }) {
  const [selectedVisa, setSelectedVisa] = useState('');
  const [selectedWorkAuth, setSelectedWorkAuth] = useState('');
  const [visaDropdownOpen, setVisaDropdownOpen] = useState(false);
  const [workAuthDropdownOpen, setWorkAuthDropdownOpen] = useState(false);
  const [checkedTasks, setCheckedTasks] = useState({});
  const [checkedSubtasks, setCheckedSubtasks] = useState({});

  const handleVisaSelect = (visaKey) => {
    setSelectedVisa(visaKey);
    setSelectedWorkAuth('');
    setVisaDropdownOpen(false);
    setCheckedTasks({});
    setCheckedSubtasks({});
  };

  const handleWorkAuthSelect = (workAuth) => {
    setSelectedWorkAuth(workAuth);
    setWorkAuthDropdownOpen(false);
    setCheckedTasks({});
    setCheckedSubtasks({});
  };

  const toggleTaskCheck = (taskIndex) => {
    setCheckedTasks(prev => ({
      ...prev,
      [taskIndex]: !prev[taskIndex]
    }));
  };

  const toggleSubtaskCheck = (taskIndex, subtaskIndex) => {
    const key = `${taskIndex}-${subtaskIndex}`;
    setCheckedSubtasks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const currentVisaData = selectedVisa ? VISA_TYPES[selectedVisa] : null;
  const currentChecklist = selectedVisa && selectedWorkAuth 
    ? CHECKLIST_BY_VISA[selectedVisa]?.[selectedWorkAuth] || []
    : [];

  return (
    <div className="profile-container">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        onNavigateEmployerBoard={onNavigateEmployerBoard}
        onNavigateProfile={onNavigateProfile}
        onNavigateStudentResources={onNavigateStudentResources}
        role={user ? 'student' : 'guest'}
        onSignOut={onSignOut}
        userName={user ? user.name : ''}
        className="logged-in"
      />

      <div className="profile-content">
        <div className="profile-header-section">
          <div className="profile-header">
            <div className="profile-user-info">
              <div className="profile-avatar"></div>
              <div className="profile-user-details">
                <div className="profile-user-name">John Doe</div>
                <div className="profile-user-email">johndoe@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2 className="profile-section-title">Personal Information</h2>
            <div className="profile-form-grid two-columns">
              <div className="form-field">
                <div className="form-label-row">
                  <label className="form-label">First Name</label>
                  <span className="required-asterisk">*</span>
                </div>
                <input type="text" className="form-input" placeholder="First Name" />
              </div>
              <div className="form-field">
                <div className="form-label-row">
                  <label className="form-label">Last Name</label>
                  <span className="required-asterisk">*</span>
                </div>
                <input type="text" className="form-input" placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2 className="profile-section-title">Contact Information</h2>
            <div className="profile-form-grid two-columns">
              <div className="form-field">
                <div className="form-label-row">
                  <label className="form-label">Email Address</label>
                  <span className="required-asterisk">*</span>
                </div>
                <input type="email" className="form-input" placeholder="example@email.com" />
              </div>
              <div className="form-field">
                <label className="form-label">LinkedIn URL (optional)</label>
                <input type="text" className="form-input" placeholder="LinkedIn" />
              </div>
              <div className="form-field">
                <label className="form-label">Portfolio URL (optional)</label>
                <input type="text" className="form-input" placeholder="Portfolio" />
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2 className="profile-section-title">Visa and Work Authorization</h2>
            <div className="profile-form-grid two-columns">
              <div className="form-field">
                <div className="form-label-row">
                  <label className="form-label">Visa Type</label>
                  <span className="required-asterisk">*</span>
                </div>
                <div className="dropdown-wrapper">
                  <div 
                    className="form-select" 
                    onClick={() => setVisaDropdownOpen(!visaDropdownOpen)}
                  >
                    <span className="form-select-placeholder">
                      {selectedVisa ? VISA_TYPES[selectedVisa].label : 'Select Visa Type'}
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {visaDropdownOpen && (
                    <div className="dropdown-menu">
                      {Object.keys(VISA_TYPES).map((visaKey) => (
                        <div 
                          key={visaKey}
                          className="dropdown-item"
                          onClick={() => handleVisaSelect(visaKey)}
                        >
                          {VISA_TYPES[visaKey].label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-field">
                <div className="form-label-row">
                  <label className="form-label">Work Authorization Status</label>
                  <span className="required-asterisk">*</span>
                </div>
                <div className="dropdown-wrapper">
                  <div 
                    className="form-select"
                    onClick={() => currentVisaData && setWorkAuthDropdownOpen(!workAuthDropdownOpen)}
                    style={{ opacity: currentVisaData ? 1 : 0.5, cursor: currentVisaData ? 'pointer' : 'not-allowed' }}
                  >
                    <span className="form-select-placeholder">
                      {selectedWorkAuth || (currentVisaData ? 'Select Work Authorization' : 'Select visa type first')}
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {workAuthDropdownOpen && currentVisaData && (
                    <div className="dropdown-menu">
                      {currentVisaData.workAuth.map((workAuth) => (
                        <div 
                          key={workAuth}
                          className="dropdown-item"
                          onClick={() => handleWorkAuthSelect(workAuth)}
                        >
                          {workAuth}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {currentVisaData && selectedWorkAuth && (
          <>
            <div className="cpt-document-section">
              <h2 className="cpt-section-title">{currentVisaData.documentTitle}</h2>
              
              {/* Dynamic combined progress (passport + checklist) */}
              <div className="upload-progress-bar combined">
                {/* We'll compute simple percentage from checked tasks + subtasks */}
                {(() => {
                  const totalTasks = currentChecklist.length;
                  const totalSubtasks = currentChecklist.reduce((acc, t) => acc + t.subtasks.length, 0);
                  const completedTasks = Object.values(checkedTasks).filter(Boolean).length;
                  const completedSubtasks = Object.values(checkedSubtasks).filter(Boolean).length;
                  const rawPercent = totalTasks + totalSubtasks === 0 ? 0 : Math.round(((completedTasks + completedSubtasks) / (totalTasks + totalSubtasks)) * 100);
                  return (
                    <>
                      <div className="upload-progress-fill" style={{ width: rawPercent + '%' }} />
                      <div className="upload-progress-label">{rawPercent}% Checklist</div>
                    </>
                  );
                })()}
              </div>

              {/* Passport Upload with manual override to 100% */}
              <PassportUpload progressPath={`passportProgress/${selectedVisa}/${selectedWorkAuth}`} />

              <div className="document-cards">
                {currentVisaData.documents.map((doc, index) => {
                  const statuses = ['missing', 'needs-update', 'verified', 'not-accepted'];
                  const statusLabels = ['Upload', 'Needs Update', 'Verified', 'Not Accepted'];
                  const status = statuses[index % statuses.length];
                  const statusLabel = statusLabels[index % statusLabels.length];
                  
                  return (
                    <div key={doc} className={`document-card ${status}`}>
                      <div className="document-card-content">
                        <div className="document-title">{doc}</div>
                        {status !== 'missing' && (
                          <div className="document-file">
                            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.50001 0H12.25V1.71429H3.50001C3.03588 1.71429 2.59076 1.8949 2.26257 2.21639C1.93439 2.53788 1.75001 2.97391 1.75001 3.42857V20.5714C1.75001 21.0261 1.93439 21.4621 2.26257 21.7836C2.59076 22.1051 3.03588 22.2857 3.50001 22.2857H17.5C17.9641 22.2857 18.4092 22.1051 18.7374 21.7836C19.0656 21.4621 19.25 21.0261 19.25 20.5714V8.57143H21V20.5714C21 21.4807 20.6312 22.3528 19.9749 22.9958C19.3185 23.6388 18.4282 24 17.5 24H3.50001C2.57175 24 1.68152 23.6388 1.02514 22.9958C0.368763 22.3528 1.52588e-05 21.4807 1.52588e-05 20.5714V3.42857C1.52588e-05 2.51926 0.368763 1.64719 1.02514 1.00421C1.68152 0.361224 2.57175 0 3.50001 0Z" fill="currentColor"/>
                              <path d="M12.25 6V0L21 8.57143H14.875C14.1788 8.57143 13.5111 8.30051 13.0188 7.81827C12.5265 7.33604 12.25 6.68198 12.25 6Z" fill="currentColor"/>
                            </svg>
                            <span className="document-filename">{doc.replace(/ /g, '_')}.pdf</span>
                          </div>
                        )}
                        {status === 'missing' && <div className="document-status">missing</div>}
                      </div>
                      <button className={`document-action-btn ${status}-btn`}>{statusLabel}</button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="checklist-section">
              <h2 className="checklist-title">{selectedWorkAuth} Checklist</h2>
              <div className="checklist-container">
                {currentChecklist.map((taskGroup, taskIndex) => (
                  <div key={taskIndex} className="checklist-task-group">
                    <div 
                      className="task-item"
                      onClick={() => toggleTaskCheck(taskIndex)}
                    >
                      <div className={`task-checkbox ${checkedTasks[taskIndex] ? 'checked' : ''}`}></div>
                      <div className="task-title">{taskGroup.task}</div>
                    </div>
                    {taskGroup.subtasks.map((subtask, subtaskIndex) => (
                      <div 
                        key={subtaskIndex} 
                        className="subtask-item"
                        onClick={() => toggleSubtaskCheck(taskIndex, subtaskIndex)}
                      >
                        <div className="subtask-line-container">
                          {subtaskIndex === 0 && <div className="subtask-top-line"></div>}
                          <div className={`subtask-checkbox ${checkedSubtasks[`${taskIndex}-${subtaskIndex}`] ? 'checked' : ''}`}></div>
                          {subtaskIndex < taskGroup.subtasks.length - 1 && <div className="subtask-bottom-line"></div>}
                        </div>
                        <div className="subtask-title">{subtask}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="saved-jobs-section">
          <div className="saved-jobs-header">
            <h2 className="saved-jobs-title">Saved Jobs</h2>
          </div>

          <div className="saved-jobs-list">
            {savedJobIds && savedJobIds.length > 0 ? (
              savedJobIds.map((jobId) => {
                const job = jobs.find((j) => j.id === jobId);
                if (!job) return null;
                return (
                  <JobCardStyle2
                    key={job.id}
                    job={job}
                    onClick={() => onNavigateToJobDescription && onNavigateToJobDescription(job.id)}
                    isSaved={true}
                    onToggleSave={onToggleSave}
                  />
                );
              })
            ) : (
              <div className="no-saved-jobs">You have no saved jobs yet.</div>
            )}
          </div>
        </div>
      </div>

  <Footer onNavigateJobBoard={onNavigateJobBoard} onNavigateEmployerBoard={onNavigateEmployerBoard} onNavigateHome={onNavigateHome} onNavigateStudentResources={onNavigateStudentResources} />
    </div>
  );
}

export default Profile;
