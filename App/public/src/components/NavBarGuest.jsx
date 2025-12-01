import React, { useState } from 'react';
import '../App.css';

function NavBarGuest({ onNavigateHome, onNavigateJobBoard, onNavigateEmployerBoard, onNavigateProfile, onNavigateLogin = () => {}, onNavigateStudentResources = () => {}, className = '' }) {
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
              <div className="link-text" onClick={onNavigateEmployerBoard} style={{ cursor: 'pointer' }}>Companies</div>
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
                <div className="mobile-link" onClick={() => { onNavigateEmployerBoard(); closeMenu(); }}>Companies</div>
                <div className="mobile-link" onClick={() => { onNavigateLogin(); closeMenu(); }} style={{ marginTop: 16 }}>
                  <div className="btn-primary">Get Started</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBarGuest;
