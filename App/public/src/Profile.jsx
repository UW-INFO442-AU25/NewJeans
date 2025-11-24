import React, { useState } from 'react';
import './Profile.css';
import NavBar from './components/NavBar';

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

function Profile({ onNavigateHome, onNavigateJobBoard }) {
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
        className="logged-in"
        leftChildren={(
          <div className="nav-links-desktop">
            <div className="nav-link">
              <div className="link-text" onClick={onNavigateJobBoard} style={{ cursor: 'pointer' }}>Job Board</div>
            </div>
            <div className="nav-link">
              <div className="link-text">Student Resources</div>
            </div>
            <div className="nav-link">
              <div className="link-text">Profile</div>
            </div>
          </div>
        )}
        rightChildren={(
          <>
            <div className="user-greeting">
              <div className="greeting-hello">Hello,</div>
              <div className="greeting-name">John Doe</div>
            </div>
            <button className="btn-primary sign-out-btn">Sign Out</button>
          </>
        )}
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
            <button className="btn-primary profile-edit-btn">Edit</button>
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
              
              <div className="upload-progress-bar">
                <div className="upload-progress-fill"></div>
                <div className="upload-progress-label">25%</div>
              </div>

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
            <div className="saved-jobs-search-bar">
              <div className="saved-jobs-search-content">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="search-placeholder">Search Job Titles, Employers, Key Words</span>
              </div>
            </div>
          </div>

          <div className="saved-jobs-list">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="saved-job-card">
                <div className="saved-job-content">
                  <div className="saved-job-header">
                    <div className="saved-job-logo"></div>
                    <div className="saved-job-info">
                      <div className="saved-job-title">Role</div>
                      <div className="saved-job-company">Company</div>
                      <div className="saved-job-badges">
                        <span className="saved-job-badge">H-1B</span>
                        <span className="saved-job-badge">L-1</span>
                        <span className="saved-job-badge">O-1</span>
                      </div>
                    </div>
                  </div>
                  <div className="saved-job-details">
                    <div className="saved-job-detail">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 16.5C12 13.5 15 10.8137 15 7.5C15 4.18629 12.3137 1.5 9 1.5C5.68629 1.5 3 4.18629 3 7.5C3 10.8137 6 13.5 9 16.5Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Location</span>
                    </div>
                    <div className="saved-job-detail">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_999_357)">
                          <path d="M12.75 10.8749V8.62075C12.75 8.48614 12.75 8.41883 12.7295 8.35941C12.7114 8.30687 12.6818 8.25901 12.6429 8.21929C12.5989 8.17439 12.5387 8.14429 12.4183 8.08409L9 6.37493M3 7.12493V12.2299C3 12.5088 3 12.6483 3.04351 12.7704C3.08198 12.8784 3.14468 12.9761 3.22678 13.056C3.31966 13.1464 3.44645 13.2046 3.70001 13.3208L8.50001 15.5208C8.68394 15.6051 8.7759 15.6472 8.87171 15.6638C8.9566 15.6786 9.0434 15.6786 9.12829 15.6638C9.2241 15.6472 9.31606 15.6051 9.49999 15.5208L14.3 13.3208C14.5535 13.2046 14.6803 13.1464 14.7732 13.056C14.8553 12.9761 14.918 12.8784 14.9565 12.7704C15 12.6483 15 12.5088 15 12.2299V7.12493M1.5 6.37493L8.73167 2.75909C8.83006 2.7099 8.87925 2.6853 8.93085 2.67562C8.97655 2.66705 9.02345 2.66705 9.06915 2.67562C9.12075 2.6853 9.16994 2.7099 9.26833 2.75909L16.5 6.37493L9.26833 9.99076C9.16994 10.04 9.12075 10.0646 9.06915 10.0742C9.02345 10.0828 8.97655 10.0828 8.93085 10.0742C8.87925 10.0646 8.83006 10.04 8.73167 9.99076L1.5 6.37493Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                      </svg>
                      <span>Years of Experience</span>
                    </div>
                    <div className="saved-job-detail">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_999_362)">
                          <path d="M9 4.5V9L12 10.5M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                      </svg>
                      <span>Full-Time</span>
                    </div>
                    <div className="saved-job-detail">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 15.75V10.2C6.75 9.78001 6.75 9.56999 6.83175 9.40956C6.90365 9.26843 7.01839 9.1537 7.15951 9.08179C7.31994 9.00005 7.52996 9.00005 7.95 9.00005H10.05C10.47 9.00005 10.6801 9.00005 10.8405 9.08179C10.9816 9.1537 11.0963 9.26843 11.1683 9.40956C11.25 9.56999 11.25 9.78001 11.25 10.2V15.75M8.26327 2.07306L3.17654 6.0294C2.83652 6.29387 2.6665 6.4261 2.54402 6.5917C2.43552 6.73839 2.3547 6.90365 2.30552 7.07935C2.25 7.2777 2.25 7.49308 2.25 7.92385V13.35C2.25 14.1901 2.25 14.6102 2.41349 14.931C2.5573 15.2133 2.78677 15.4427 3.06901 15.5866C3.38988 15.75 3.80992 15.75 4.65 15.75H13.35C14.1901 15.75 14.6101 15.75 14.931 15.5866C15.2132 15.4427 15.4427 15.2133 15.5865 14.931C15.75 14.6102 15.75 14.1901 15.75 13.35V7.92385C15.75 7.49308 15.75 7.2777 15.6945 7.07935C15.6453 6.90365 15.5645 6.73839 15.456 6.5917C15.3335 6.4261 15.1635 6.29387 14.8235 6.02941L9.73673 2.07306C9.47324 1.86812 9.34149 1.76565 9.19601 1.72626C9.06765 1.69151 8.93235 1.69151 8.80399 1.72626C8.65851 1.76565 8.52677 1.86812 8.26327 2.07306Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Remote</span>
                    </div>
                    <div className="saved-job-detail">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 12C4.5 13.6569 5.84315 15 7.5 15H10.5C12.1569 15 13.5 13.6569 13.5 12C13.5 10.3431 12.1569 9 10.5 9H7.5C5.84315 9 4.5 7.65685 4.5 6C4.5 4.34315 5.84315 3 7.5 3H10.5C12.1569 3 13.5 4.34315 13.5 6M9 1.5V16.5" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Salary</span>
                    </div>
                  </div>
                </div>
                <div className="saved-job-actions">
                  <button className="bookmark-btn active">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.34961 3.25H10.6504C11.2964 3.25 11.721 3.25083 12.0459 3.27734C12.3592 3.30295 12.4912 3.3479 12.5674 3.38672C12.8025 3.50655 12.9935 3.6975 13.1133 3.93262C13.1521 4.0088 13.1971 4.14075 13.2227 4.4541C13.2492 4.779 13.25 5.20357 13.25 5.84961V14.0264L9.49609 11.8818C9.22706 11.7281 8.90449 11.7089 8.62207 11.8242L8.50391 11.8818L4.75 14.0264V5.84961C4.75 5.20357 4.75083 4.779 4.77734 4.4541C4.80295 4.14075 4.8479 4.0088 4.88672 3.93262C5.00655 3.6975 5.1975 3.50655 5.43262 3.38672C5.5088 3.3479 5.64075 3.30295 5.9541 3.27734C6.279 3.25083 6.70357 3.25 7.34961 3.25Z" fill="#FEFEFE" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="btn-primary apply-btn">Apply</button>
                </div>
              </div>
            ))}
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

export default Profile;
