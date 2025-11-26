import React from 'react';
import '../App.css';

function NavBarStudent({ onNavigateHome, onNavigateJobBoard, onNavigateProfile, onNavigateStudentResources = () => {}, onSignOut, userName = 'Student', className = '' }) {
  return (
    <nav className={("navigation-bar " + className).trim()}>
      <div className="nav-inner">
        <div className="nav-left">
          <div className="logo" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
            Visa<span style={{ fontWeight: 900 }}>Path</span>
          </div>

          <div className="nav-links-desktop">
            <div className="nav-link">
              <div className="link-text" onClick={onNavigateJobBoard} style={{ cursor: 'pointer' }}>Job Board</div>
            </div>
            <div className="nav-link">
              <div className="link-text" onClick={onNavigateStudentResources} style={{ cursor: 'pointer' }}>Student Resources</div>
            </div>
            <div className="nav-link">
              <div className="link-text" onClick={onNavigateProfile} style={{ cursor: 'pointer' }}>Profile</div>
            </div>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-button-wrapper">
            <button className="btn-secondary" onClick={onSignOut}>Sign Out</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarStudent;
