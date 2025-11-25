import React from 'react';
import '../App.css';
import NavBarGuest from './NavBarGuest';
import NavBarStudent from './NavBarStudent';

/**
 * NavBar wrapper that can render one of several role-based variants.
 * Props:
 *  - role: 'guest' | 'student' | 'employer' (defaults to 'guest')
 *  - onNavigateHome, onNavigateJobBoard, onNavigateProfile, onNavigateDashboard
 *  - onSignOut, userName
 *  - className
 *  - leftChildren / rightChildren (if provided, preserves old override behavior)
 */
function NavBar({
  role = 'guest',
  onNavigateHome,
  onNavigateJobBoard,
  onNavigateProfile,
  onNavigateDashboard,
  onSignOut,
  userName,
  className = '',
  leftChildren = null,
  rightChildren = null,
  onNavigateLogin = () => {},
  onNavigateStudentResources = () => {},
}) {
  // Preserve existing override behavior when callers pass custom left/right children.
  if (leftChildren || rightChildren) {
    return (
      <nav className={("navigation-bar " + className).trim()}>
        <div className="nav-inner">
          <div className="nav-left">
            <div className="logo" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
              Visa<span style={{ fontWeight: 900 }}>Path</span>
            </div>

            {leftChildren ? (
              leftChildren
            ) : (
              <div className="nav-links-desktop">
                <div className="nav-link" onClick={onNavigateJobBoard} style={{ cursor: 'pointer' }}>
                  <div className="link-text">Job Board</div>
                </div>
              </div>
            )}
          </div>

          <div className="nav-right">
            {rightChildren ? (
              rightChildren
            ) : (
              <>
                <div className="nav-link" onClick={onNavigateProfile} style={{ cursor: 'pointer' }}>
                  <div className="link-text">Log in</div>
                </div>
                <div className="nav-button-wrapper">
                  <button className="btn-primary">Get Started</button>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  }

  // Role-based variants
  if (role === 'student') {
    return (
      <NavBarStudent
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        onNavigateProfile={onNavigateProfile}
        onNavigateStudentResources={onNavigateStudentResources}
        onSignOut={onSignOut}
        userName={userName}
        className={className}
      />
    );
  }

  // Default: guest
  return (
    <NavBarGuest
      onNavigateHome={onNavigateHome}
      onNavigateJobBoard={onNavigateJobBoard}
      onNavigateProfile={onNavigateProfile}
      onNavigateLogin={onNavigateLogin}
      onNavigateStudentResources={onNavigateStudentResources}
      className={className}
    />
  );
}

export default NavBar;
