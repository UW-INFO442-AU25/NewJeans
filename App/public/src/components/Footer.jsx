import React from 'react';

function Footer({ onNavigateJobBoard = () => {}, onNavigateHome = () => {} }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="logo">Visa<span style={{ fontWeight: 900 }}>Path</span></div>
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
                    <div className="footer-link">Visa Resources</div>
                </div>
              <div className="footer-list-item">
                <div className="footer-link" onClick={onNavigateJobBoard} style={{ cursor: 'pointer' }}>Job Board</div>
              </div>
              <div className="footer-list-item">
                <div className="footer-link">Employer Board</div>
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
  );
}

export default Footer;
