import React from 'react';
import '../App.css';

function NavBarGuest({ onNavigateHome, onNavigateJobBoard, onNavigateEmployerBoard, onNavigateProfile, onNavigateLogin = () => {}, onNavigateStudentResources = () => {}, className = '' }) {
  return (
    <nav className={("navigation-bar " + className).trim()}>
      <div className="nav-inner">
        <div className="nav-left">
          <div className="logo" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
            Visa<span style={{ fontWeight: 900 }}>Path</span>
          </div>

          <div className="nav-links-desktop">
            <div className="nav-link">
              <div className="link-text" onClick={onNavigateStudentResources} style={{ cursor: 'pointer' }}>Student Resources</div>
            </div>
            <div className="nav-link">
              <div className="link-text" onClick={onNavigateJobBoard} style={{ cursor: 'pointer' }}>Jobs</div>
            </div>
            <div className="nav-link">
              <div className="link-text" onClick={onNavigateEmployerBoard} style={{ cursor: 'pointer' }}>Employers</div>
            </div>
          </div>
        </div>

        <div className="nav-right">
          <>
            <div className="nav-button-wrapper" onClick={onNavigateLogin} style={{ cursor: 'pointer' }}>
              <div className="btn-primary">Get Started</div>
            </div>
          </>
        </div>
      </div>
    </nav>
  );
}

export default NavBarGuest;
