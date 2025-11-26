import React from 'react';
import './F1ToH1BGuide.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function F1ToH1BGuide({ onNavigateHome, onNavigateJobBoard, onNavigateEmployerBoard, onNavigateLogin, onNavigateStudentResources }) {
  return (
    <div className="f1-h1b-guide-container">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        onNavigateLogin={onNavigateLogin}
        onNavigateStudentResources={onNavigateStudentResources}
      />

      <section className="guide-hero">
        <div className="guide-hero-content">
          <h1 className="guide-hero-title">F-1 to H-1B Transition Guide</h1>
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-content">
          <h2 className="guide-section-title">The F-1 to H-1B Process Overview</h2>
          <div className="guide-overview-content">
            <img className="guide-video-placeholder" src="https://api.builder.io/api/v1/image/assets/TEMP/b3c3fd1cd00e0aa42c2a2b552dc17d05ea9b9013?width=892" alt="" />
            <div className="guide-overview-text">
              <p>Changing from an F-1 student visa to an H-1B work visa involves several key steps:</p>
              
              <p><strong>Find H-1B Sponsorship</strong>: Secure a job offer from a U.S. employer willing to sponsor you for an H-1B visa. The position should qualify as a <span className="underline-text">specialty occupation</span>, typically requiring at least a bachelor's degree.</p>
              
              <p><strong>H-1B Registration and Selection</strong>: Employers register candidates for the annual H-1B lottery, usually in March. If selected, they can proceed with filing a petition.</p>
              
              <p><strong>Labor Condition Application (LCA)</strong>: The employer <span className="underline-text">files an LCA with the Department of Labor</span>, agreeing to pay the prevailing wage for both the occupation and location.</p>
              
              <p><strong>H-1B Petition Filing</strong>: After LCA approval, the employer files <span className="underline-text">Form I-129, Petition for a Nonimmigrant Worker</span> with USCIS requesting a change of status from F-1 to H-1B.</p>
              
              <p><strong>Cap Gap Period</strong>: If the applicant's F-1 status expires before their H-1B begins, they may qualify for the cap gap extension (detailed below).</p>
              
              <p><strong>Transition to H-1B Status</strong>: If approved, the foreign national's status automatically changes to <span className="underline-text">H-1B</span> on the start date (typically October 1).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="guide-section-alt">
        <div className="guide-content">
          <h2 className="guide-section-title">H-1B Fiscal Year Timeline</h2>
          <div className="timeline-list">
            <div className="timeline-item">
              <div className="timeline-checkbox"></div>
              <div className="timeline-text">
                <strong>March:</strong> H-1B registration period (exact dates announced annually by USCIS)
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-checkbox"></div>
              <div className="timeline-text">
                <strong>Late March/Early April: </strong>Lottery selections announced
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-checkbox"></div>
              <div className="timeline-text">
                <strong>April 1 to June 30: </strong>Filing period for selected H-1B petitions
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-checkbox"></div>
              <div className="timeline-text">
                <strong>April to September: </strong>USCIS processing of H-1B petitions
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-checkbox"></div>
              <div className="timeline-text">
                <strong>October 1: </strong>H-1B employment start date (beginning of fiscal year)
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-checkbox"></div>
              <div className="timeline-text">
                <strong>Until April 1 (following year): </strong>Cap gap extension period under new regulations
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-content">
          <h2 className="guide-section-title">Understanding the H-1B Cap Gap Extension</h2>
          <p className="guide-text">The "cap gap" refers to the time between when the employee's F-1 Optional Practical Training (OPT) expires and their H-1B status begins on October 1. Without special provisions, many students would face a lapse in legal status during this transition. We've included specific guidance for both international students and HR professionals to help ensure a smooth transition.</p>
        </div>
      </section>

      <section className="guide-section-alt">
        <div className="guide-content">
          <h2 className="guide-section-title">Eligibility for Cap Gap Extension</h2>
          <div className="guide-text">
            <p>To qualify for a cap gap extension, your H-1B petition must meet these requirements:</p>
            <ul>
              <li>Be properly and timely filed for a cap-subject position</li>
              <li>Request a change of status (not consular processing)</li>
              <li>Be filed during the H-1B filing period (beginning April 1)</li>
              <li>Be filed while you're still in F-1 status, including:
                <ul>
                  <li>During your academic program</li>
                  <li>During authorized post-completion OPT</li>
                  <li>During your 60-day grace period after completing studies or OPT</li>
                </ul>
              </li>
            </ul>
            
            <p>Your H-1B petition must be based on a valid, selected registration for the same fiscal year.</p>
            <p>Simply being selected in the lottery is not enough. Your employer must file the complete H-1B petition for you to qualify.</p>
            
            <p><strong>For HR Managers</strong>: File H-1B petitions well before your employee's OPT expiration date. If filing during their grace period, note they will not be authorized to work during the cap gap.</p>
            
            <p><strong>For F-1 Students</strong>: Confirm that your employer is filing for a change of status, not consular processing, as only change of status qualifies for cap gap.</p>
          </div>
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-content">
          <h2 className="guide-section-title">Work Authorization During Cap Gap</h2>
          <p className="guide-text">Your ability to work during the cap gap period depends on your status when the H-1B petition was filed.</p>
          
          <div className="work-auth-table">
            <div className="table-row table-header-row">
              <div className="table-cell table-header-cell">If your employer filed your H-1B petition while:</div>
              <div className="table-cell table-header-cell">Then:</div>
            </div>
            <div className="table-row">
              <div className="table-cell">You were on active OPT or STEM OPT</div>
              <div className="table-cell">Your work authorization automatically extends until your H-1B starts or until April 1, whichever comes first</div>
            </div>
            <div className="table-row">
              <div className="table-cell">You were in your 60-day grace period after OPT</div>
              <div className="table-cell">Your F-1 status extends but you CANNOT work during the cap gap period</div>
            </div>
          </div>
        </div>
      </section>

      <section className="guide-section-alt">
        <div className="guide-content">
          <h2 className="guide-section-title">Proof of Work Authorization</h2>
          <div className="guide-text">
            <p>The cap-gap extension of OPT is automatic for eligible students. You will not receive a new Employment Authorization Document (EAD) for this extension period.</p>
            
            <p>Your proof of continued employment authorization is an updated Form I-20 ("Certificate of Eligibility for Nonimmigrant Student Status") showing the OPT extension, issued by your Designated School Official (DSO). While this updated I-20 isn't technically required to continue working, it serves as important evidence of your authorization.</p>
          </div>
        </div>
      </section>

      <section className="checklist-section">
        <div className="guide-content">
          <h2 className="guide-section-title">Cap Gap I-20 Document Checklist</h2>
          
          <div className="checklist-group">
            <div className="checklist-item-main">
              <div className="checklist-checkbox-main"></div>
              <h3 className="checklist-title">Confirm H-1B Petition Filing</h3>
            </div>
            <div className="checklist-subitems">
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Your employer must file an H-1B petition on your behalf</p>
              </div>
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Confirm that the petition was filed before your OPT or STEM OPT end date</p>
              </div>
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Ensure your employer filed "change of status" (COS) — cap-gap only applies to COS cases</p>
              </div>
            </div>
          </div>

          <div className="checklist-group">
            <div className="checklist-item-main">
              <div className="checklist-checkbox-main"></div>
              <h3 className="checklist-title">Gather Proof of Filing</h3>
            </div>
            <div className="checklist-subitems">
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Provide your DSO with at least one of the following:<br />Copy of the H-1B petition package<br />FedEx/UPS/USPS mailing receipt showing it was delivered<br />USCIS online account screenshot (if available)</p>
              </div>
            </div>
          </div>

          <div className="checklist-group">
            <div className="checklist-item-main">
              <div className="checklist-checkbox-main"></div>
              <h3 className="checklist-title">Request Cap-Gap I-20 from Your DSO</h3>
            </div>
            <div className="checklist-subitems">
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Contact your Designated School Official immediately after filing</p>
              </div>
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Explain that you are requesting a Cap-Gap I-20 for continued F-1 status and work authorization</p>
              </div>
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Send your proof of filing directly to the DSO</p>
              </div>
            </div>
          </div>

          <div className="checklist-group">
            <div className="checklist-item-main">
              <div className="checklist-checkbox-main"></div>
              <h3 className="checklist-title">Receive Initial Cap-Gap I-20</h3>
            </div>
            <div className="checklist-subitems">
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Your DSO will issue an updated Form I-20 showing:<br />Cap-gap extension of status<br />Continued employment authorization through June 1 (initial stage)</p>
              </div>
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Review and sign your new I-20</p>
              </div>
            </div>
          </div>

          <div className="checklist-group">
            <div className="checklist-item-main">
              <div className="checklist-checkbox-main"></div>
              <h3 className="checklist-title">Provide USCIS Receipt (Form I-797C)</h3>
            </div>
            <div className="checklist-subitems">
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Once your employer receives the H-1B Receipt Notice, obtain a copy</p>
              </div>
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Return to your DSO and submit the I-797C notice</p>
              </div>
            </div>
          </div>

          <div className="checklist-group">
            <div className="checklist-item-main">
              <div className="checklist-checkbox-main"></div>
              <h3 className="checklist-title">Receive Final Cap-Gap I-20</h3>
            </div>
            <div className="checklist-subitems">
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Your DSO will issue a second updated I-20 showing:<br />Continued F-1 status through September 30<br />Employment authorization extension<br />H-1B petition details on page 2</p>
              </div>
            </div>
          </div>

          <div className="checklist-group">
            <div className="checklist-item-main">
              <div className="checklist-checkbox-main"></div>
              <h3 className="checklist-title">Use Your Cap-Gap I-20 for Verification</h3>
            </div>
            <div className="checklist-subitems">
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">You will need this I-20 for:<br />Employment verification (I-9 compliance)<br />Driver's license renewal (varies by state)<br />Proof of legal status for government or financial services<br />Travel advisories (note: cap-gap travel is risky — most students avoid international travel)</p>
              </div>
            </div>
          </div>

          <div className="checklist-group">
            <div className="checklist-item-main">
              <div className="checklist-checkbox-main"></div>
              <h3 className="checklist-title">Understand EAD Rules During Cap-Gap</h3>
            </div>
            <div className="checklist-subitems">
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">You will NOT receive a new EAD card during the cap-gap period</p>
              </div>
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">Your final cap-gap I-20 + expired EAD serves as valid work authorization until 9/30</p>
              </div>
              <div className="checklist-subitem">
                <div className="checklist-line-container">
                  <div className="checklist-line-top"></div>
                  <div className="checklist-checkbox-sub"></div>
                  <div className="checklist-line-bottom"></div>
                </div>
                <p className="checklist-subtext">HR must accept this combination for I-9 verification</p>
              </div>
            </div>
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

export default F1ToH1BGuide;
