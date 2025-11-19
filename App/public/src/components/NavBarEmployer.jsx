import React from 'react';
import '../App.css';

function NavBarEmployer({ onNavigateHome, onNavigateDashboard, onNavigateProfile, onSignOut, userName = 'Employer', className = '' }) {
  return (
    <nav className={("navigation-bar " + className).trim()}>
      <div className="nav-inner">
        <div className="nav-left">
          <div className="logo" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
            Visa<span style={{ fontWeight: 900 }}>Path</span>
          </div>

          <div className="nav-links-desktop">
            <div className="nav-link">
              <div className="link-text" onClick={onNavigateDashboard} style={{ cursor: 'pointer' }}>Dashboard</div>
            </div>
            <div className="nav-link">
              <div className="link-text">Employer Profile</div>
            </div>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-link greeting">Hi, {userName.split(' ')[0]}</div>
          <div className="nav-button-wrapper">
            <button className="btn-secondary" onClick={onSignOut}>Sign Out</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarEmployer;
