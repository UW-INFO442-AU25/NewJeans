import React, { useState } from 'react';
import '../App.css';

function NavBarStudent({ onNavigateHome, onNavigateJobBoard, onNavigateEmployerBoard, onNavigateProfile, onNavigateStudentResources = () => {}, onSignOut, userName = 'Student', className = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
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
            <div className="nav-link">
              <div className="link-text" onClick={onNavigateProfile} style={{ cursor: 'pointer' }}>Profile</div>
            </div>
          <div className="nav-button-wrapper">
            <button className="btn-secondary" onClick={onSignOut}>Sign Out</button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button className="hamburger" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
          <span />
          <span />
          <span />
        </button>

        {menuOpen && (
          <div className="mobile-menu" role="dialog" aria-modal="true">
            <div className="mobile-menu-panel">
              <button className="mobile-close" aria-label="Close menu" onClick={closeMenu}>✕</button>
              <div className="mobile-links">
                <div className="mobile-link" onClick={() => { onNavigateStudentResources(); closeMenu(); }}>Student Resources</div>
                <div className="mobile-link" onClick={() => { onNavigateJobBoard(); closeMenu(); }}>Jobs</div>
                <div className="mobile-link" onClick={() => { onNavigateEmployerBoard(); closeMenu(); }}>Employers</div>
                <div className="mobile-link" onClick={() => { onNavigateProfile(); closeMenu(); }}>Profile</div>
                <div className="mobile-link" onClick={() => { onSignOut(); closeMenu(); }} style={{ marginTop: 16 }}>
                  <div className="btn-secondary">Sign Out</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBarStudent;
