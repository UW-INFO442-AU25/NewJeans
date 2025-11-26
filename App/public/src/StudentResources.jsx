import React from 'react';
import './StudentResources.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function StudentResources({ onNavigateHome, onNavigateJobBoard, onNavigateEmployerBoard, onNavigateLogin, onNavigateToCPT = () => {}, onNavigateToOPT = () => {}, onNavigateToOnCampus = () => {}, onNavigateToOffCampus = () => {}, onNavigateToInternationalOrg = () => {}, onNavigateToH1BGuide = () => {}, user = null, onSignOut = () => {} }) {
  return (
    <div className="student-resources-container">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        onNavigateLogin={onNavigateLogin}
        role={user ? 'student' : 'guest'}
        onSignOut={onSignOut}
        userName={user ? user.name : ''}
      />

      <section className="resources-hero">
        <div className="resources-hero-content">
        </div>
      </section>

      <section className="employment-resources-section">
        <div className="resources-content">
          <div className="resources-header">
            <div className="resources-header-text">
              <h2 className="resources-section-title">F/M Student Employment Resources</h2>
              <p className="resources-section-description">
                F/M students' ability to work and train in the United States is limited by law. Students cannot start work or paid/unpaid practical training until they have the proper authorization. The following types of employment and practical training may be available to F-1 students:
              </p>
            </div>
          </div>

          <div className="resources-grid">
            <div className="resource-card">
              <h3 className="resource-card-title">On-Campus Employment</h3>
              <p className="resource-card-description">
                In most cases, on-campus employment is work that directly supports the student body (for example, working at a school bookstore, cafeteria, or residence hall).
              </p>
              <button className="resource-card-button" onClick={onNavigateToOnCampus}>Learn More</button>
            </div>

            <div className="resource-card">
              <h3 className="resource-card-title">Off-Campus Employment</h3>
              <p className="resource-card-description">
                Off-campus employment is for individual students with severe financial hardship, emergent circumstances (Special Student Relief)
              </p>
              <button className="resource-card-button" onClick={onNavigateToOffCampus}>Learn More</button>
            </div>

            <div className="resource-card">
              <h3 className="resource-card-title">Curricular Practical Training (CPT)</h3>
              <p className="resource-card-description">
                CPT is training that is an integral (i.e., required) part of the student's curriculum. It is authorized by the DSO.
              </p>
              <button className="resource-card-button" onClick={onNavigateToCPT}>Learn More</button>
            </div>

            <div className="resource-card">
              <h3 className="resource-card-title">Optional Practical Training (OPT)</h3>
              <p className="resource-card-description">
                OPT allows postsecondary students to get practical training in their field of study. Types: Pre-completion OPT, Post-completion OPT, 24-month Extension of OPT (STEM OPT), Cap-Gap OPT Extension
              </p>
              <button className="resource-card-button" onClick={onNavigateToOPT}>Learn More</button>
            </div>

            <div className="resource-card">
              <h3 className="resource-card-title">Internship with an International Organization</h3>
              <p className="resource-card-description">
                This is work with an organization covered by the <span className="underline-text">International Organizations Immunities Act</span>. Internships with an international organization must be authorized by USCIS through the issuance of an Employee Authorization Document (EAD).
              </p>
              <button className="resource-card-button" onClick={onNavigateToInternationalOrg}>Learn More</button>
            </div>

            <div className="resource-card">
              <h3 className="resource-card-title">F-1 to H-1B Transition Guide</h3>
              <p className="resource-card-description">
                This guide provides essential information for F-1 students transitioning to H-1B status through a Change of Status (COS) petition.
              </p>
              <button className="resource-card-button" onClick={onNavigateToH1BGuide}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <Footer 
        onNavigateJobBoard={onNavigateJobBoard} 
        onNavigateEmployerBoard={onNavigateEmployerBoard} 
        onNavigateHome={onNavigateHome} 
      />
    </div>
  );
}

export default StudentResources;
