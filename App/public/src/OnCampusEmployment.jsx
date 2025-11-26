import React, { useState, useEffect } from 'react';
import './OnCampusEmployment.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function OnCampusEmployment({ onNavigateHome, onNavigateJobBoard, onNavigateEmployerBoard, onNavigateLogin, onNavigateStudentResources }) {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (videoOpen) {
      // prevent background scroll while modal is open
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
    return undefined;
  }, [videoOpen]);
  return (
    <div className="on-campus-employment-container">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        onNavigateEmployerBoard={onNavigateEmployerBoard}
        onNavigateLogin={onNavigateLogin}
        onNavigateStudentResources={onNavigateStudentResources}
      />

      <section className="on-campus-hero">
      </section>

      <section className="on-campus-what-section">
        <h2 className="on-campus-section-title">What is On-Campus Employment?</h2>
        <div className="on-campus-what-content">
          <div className="on-campus-video-placeholder">
            {/* Use the actual YouTube thumbnail and open an inline modal player. */}
            <button
              type="button"
              className="video-thumb-button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play On-Campus Employment video"
            >
              <img
                src="https://img.youtube.com/vi/vgjP88xICjk/maxresdefault.jpg"
                alt="On-Campus Employment Video Thumbnail"
                className="on-campus-video-img"
              />
            </button>
          </div>
          <div className="on-campus-what-description">
            <p>
              On-campus employment is work that F-1 students whose status is Active in SEVIS may apply for. On-campus employment is specific to work that takes place on campus or at an off-campus location that is educationally affiliated with the school. Examples of on-campus employment include working at a university bookstore or cafeteria.
            </p>
            <p>
              Active F-1 students may apply for on-campus employment up to 30 days before the start of classes. In order to apply, talk to your DSO. If approved, your DSO will provide you with a letter of approval. Take this letter from your DSO and a letter of approval from your employer to apply for a Social Security Number (SSN). All students who wish to work must apply for a Social Security Number.
            </p>
            <p>
              If you participate in on-campus employment, you may not work more than 20 hours per week when school is in session.
            </p>
            <p>
              The on-campus employment process may vary slightly by school, so be sure to check your university's international student website for the most accurate and detailed guidance.
            </p>
          </div>
        </div>
      </section>

      {videoOpen && (
        <div
          className="video-modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setVideoOpen(false)}
        >
          <div className="video-modal-inner" onClick={e => e.stopPropagation()}>
            <button
              className="video-modal-close"
              aria-label="Close video"
              onClick={() => setVideoOpen(false)}
            >
              ×
            </button>
            <div className="video-iframe-wrapper">
              <iframe
                title="On-Campus Employment Video"
                src="https://www.youtube.com/embed/vgjP88xICjk?autoplay=1&rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <section className="on-campus-checklist-section">
        <h2 className="on-campus-checklist-title">On-Campus Employment Document Checklist</h2>

        <div className="on-campus-task-group">
          <div className="on-campus-task-header">
            <div className="on-campus-task-checkbox"></div>
            <h3 className="on-campus-task-title">Confirm Eligibility</h3>
          </div>
          <div className="on-campus-subtask">
            <div className="on-campus-subtask-connector">
              <div className="on-campus-subtask-line-top"></div>
              <div className="on-campus-subtask-checkbox"></div>
              <div className="on-campus-subtask-line-bottom"></div>
            </div>
            <p className="on-campus-subtask-text">You must hold valid F-1 student status and be enrolled full-time during the academic term</p>
          </div>
          <div className="on-campus-subtask">
            <div className="on-campus-subtask-connector">
              <div className="on-campus-subtask-line-top"></div>
              <div className="on-campus-subtask-checkbox"></div>
              <div className="on-campus-subtask-line-bottom"></div>
            </div>
            <p className="on-campus-subtask-text">Employment must be on your school's campus or at an affiliated location</p>
          </div>
        </div>

        <div className="on-campus-task-group">
          <div className="on-campus-task-header">
            <div className="on-campus-task-checkbox"></div>
            <h3 className="on-campus-task-title">Receive an Offer Letter</h3>
          </div>
          <div className="on-campus-subtask">
            <div className="on-campus-subtask-connector">
              <div className="on-campus-subtask-line-top"></div>
              <div className="on-campus-subtask-checkbox"></div>
              <div className="on-campus-subtask-line-bottom"></div>
            </div>
            <p className="on-campus-subtask-text">Get a written job offer from your on-campus department or employer</p>
          </div>
          <div className="on-campus-subtask">
            <div className="on-campus-subtask-connector">
              <div className="on-campus-subtask-line-top"></div>
              <div className="on-campus-subtask-checkbox"></div>
              <div className="on-campus-subtask-line-bottom"></div>
            </div>
            <p className="on-campus-subtask-text">Check that the position is designated as "on-campus" and not offsite</p>
          </div>
        </div>

        <div className="on-campus-task-group">
          <div className="on-campus-task-header">
            <div className="on-campus-task-checkbox"></div>
            <h3 className="on-campus-task-title">Complete Form I-9 (Employment Eligibility Verification)</h3>
          </div>
          <div className="on-campus-subtask">
            <div className="on-campus-subtask-connector">
              <div className="on-campus-subtask-line-top"></div>
              <div className="on-campus-subtask-checkbox"></div>
              <div className="on-campus-subtask-line-bottom"></div>
            </div>
            <p className="on-campus-subtask-text">Contact your Designated School Official (DSO) to confirm eligibility for on-campus work</p>
          </div>
          <div className="on-campus-subtask">
            <div className="on-campus-subtask-connector">
              <div className="on-campus-subtask-line-top"></div>
              <div className="on-campus-subtask-checkbox"></div>
              <div className="on-campus-subtask-line-bottom"></div>
            </div>
            <p className="on-campus-subtask-text">Submit I-9 documents to your campus HR or hiring department</p>
          </div>
        </div>

        <div className="on-campus-task-group">
          <div className="on-campus-task-header">
            <div className="on-campus-task-checkbox"></div>
            <h3 className="on-campus-task-title">Apply for a Social Security Number (SSN)</h3>
          </div>
          <div className="on-campus-subtask on-campus-subtask-multiline">
            <div className="on-campus-subtask-connector">
              <div className="on-campus-subtask-line-top"></div>
              <div className="on-campus-subtask-checkbox"></div>
              <div className="on-campus-subtask-line-bottom"></div>
            </div>
            <p className="on-campus-subtask-text">Bring the following to the Social Security Administration:
• Passport
• Form I-20
• I-94 Record
• Job offer letter signed by your DSO</p>
          </div>
        </div>

        <div className="on-campus-task-group">
          <div className="on-campus-task-header">
            <div className="on-campus-task-checkbox"></div>
            <h3 className="on-campus-task-title">Fill Out Form W-4 (Tax Withholding Form)</h3>
          </div>
          <div className="on-campus-subtask">
            <div className="on-campus-subtask-connector">
              <div className="on-campus-subtask-line-top"></div>
              <div className="on-campus-subtask-checkbox"></div>
              <div className="on-campus-subtask-line-bottom"></div>
            </div>
            <p className="on-campus-subtask-text">Complete your W-4 form to determine how much tax is withheld from your paycheck</p>
          </div>
          <div className="on-campus-subtask">
            <div className="on-campus-subtask-connector">
              <div className="on-campus-subtask-line-top"></div>
              <div className="on-campus-subtask-checkbox"></div>
              <div className="on-campus-subtask-line-bottom"></div>
            </div>
            <p className="on-campus-subtask-text">Your campus HR office can guide you through this step.</p>
          </div>
        </div>

        <div className="on-campus-task-group">
          <div className="on-campus-task-header">
            <div className="on-campus-task-checkbox"></div>
            <h3 className="on-campus-task-title">Start Employment</h3>
          </div>
          <div className="on-campus-subtask">
            <div className="on-campus-subtask-connector">
              <div className="on-campus-subtask-line-top"></div>
              <div className="on-campus-subtask-checkbox"></div>
              <div className="on-campus-subtask-line-bottom"></div>
            </div>
            <p className="on-campus-subtask-text">Begin working on/after EAD start date</p>
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

export default OnCampusEmployment;
