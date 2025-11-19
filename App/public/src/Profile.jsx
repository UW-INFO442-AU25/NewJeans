import React from 'react';
import './Profile.css';
import NavBar from './components/NavBar';

function Profile({ onNavigateHome, onNavigateJobBoard }) {
  return (
    <div className="profile-container">
      <NavBar
        onNavigateHome={onNavigateHome}
        onNavigateJobBoard={onNavigateJobBoard}
        className="logged-in"
        leftChildren={(
          <div className="nav-links-desktop">
            <div className="nav-link">
              <div className="link-text" onClick={onNavigateJobBoard} style={{ cursor: 'pointer' }}>Job Board</div>
            </div>
            <div className="nav-link">
              <div className="link-text">Student Resources</div>
            </div>
            <div className="nav-link">
              <div className="link-text">Profile</div>
            </div>
          </div>
        )}
        rightChildren={(
          <>
            <div className="user-greeting">
              <div className="greeting-hello">Hello,</div>
              <div className="greeting-name">John Doe</div>
            </div>
            <button className="btn-primary sign-out-btn">Sign Out</button>
          </>
        )}
      />

      <div className="profile-content">
        <div className="profile-header-section">
          <div className="profile-header">
            <div className="profile-user-info">
              <div className="profile-avatar"></div>
              <div className="profile-user-details">
                <div className="profile-user-name">John Doe</div>
                <div className="profile-user-email">johndoe@gmail.com</div>
              </div>
            </div>
            <button className="btn-primary profile-edit-btn">Edit</button>
          </div>

          <div className="profile-section">
            <h2 className="profile-section-title">Personal Information</h2>
            <div className="profile-form-grid two-columns">
              <div className="form-field">
                <div className="form-label-row">
                  <label className="form-label">First Name</label>
                  <span className="required-asterisk">*</span>
                </div>
                <input type="text" className="form-input" placeholder="First Name" />
              </div>
              <div className="form-field">
                <div className="form-label-row">
                  <label className="form-label">Last Name</label>
                  <span className="required-asterisk">*</span>
                </div>
                <input type="text" className="form-input" placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2 className="profile-section-title">Contact Information</h2>
            <div className="profile-form-grid two-columns">
              <div className="form-field">
                <div className="form-label-row">
                  <label className="form-label">Email Address</label>
                  <span className="required-asterisk">*</span>
                </div>
                <input type="email" className="form-input" placeholder="example@email.com" />
              </div>
              <div className="form-field">
                <label className="form-label">LinkedIn URL (optional)</label>
                <input type="text" className="form-input" placeholder="LinkedIn" />
              </div>
              <div className="form-field">
                <label className="form-label">Portfolio URL (optional)</label>
                <input type="text" className="form-input" placeholder="Portfolio" />
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2 className="profile-section-title">Visa and Work Authorization</h2>
            <div className="profile-form-grid two-columns">
              <div className="form-field">
                <div className="form-label-row">
                  <label className="form-label">Visa Type</label>
                  <span className="required-asterisk">*</span>
                </div>
                <div className="form-select">
                  <span className="form-select-placeholder">Select Visa Type</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="form-field">
                <div className="form-label-row">
                  <label className="form-label">Work Authorization Status</label>
                  <span className="required-asterisk">*</span>
                </div>
                <div className="form-select">
                  <span className="form-select-placeholder">CPT, OPT, H1B, etc.</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cpt-document-section">
          <h2 className="cpt-section-title">Curricular Practical Training (CPT) Document</h2>
          
          <div className="upload-progress-bar">
            <div className="upload-progress-fill"></div>
            <div className="upload-progress-label">25%</div>
          </div>

          <div className="document-cards">
            <div className="document-card missing">
              <div className="document-card-content">
                <div className="document-title">Passport</div>
                <div className="document-status">missing</div>
              </div>
              <button className="document-action-btn">Upload</button>
            </div>

            <div className="document-card needs-update">
              <div className="document-card-content">
                <div className="document-title">I-20</div>
                <div className="document-file">
                  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.50001 0H12.25V1.71429H3.50001C3.03588 1.71429 2.59076 1.8949 2.26257 2.21639C1.93439 2.53788 1.75001 2.97391 1.75001 3.42857V20.5714C1.75001 21.0261 1.93439 21.4621 2.26257 21.7836C2.59076 22.1051 3.03588 22.2857 3.50001 22.2857H17.5C17.9641 22.2857 18.4092 22.1051 18.7374 21.7836C19.0656 21.4621 19.25 21.0261 19.25 20.5714V8.57143H21V20.5714C21 21.4807 20.6312 22.3528 19.9749 22.9958C19.3185 23.6388 18.4282 24 17.5 24H3.50001C2.57175 24 1.68152 23.6388 1.02514 22.9958C0.368763 22.3528 1.52588e-05 21.4807 1.52588e-05 20.5714V3.42857C1.52588e-05 2.51926 0.368763 1.64719 1.02514 1.00421C1.68152 0.361224 2.57175 0 3.50001 0Z" fill="#ED9B0D"/>
                    <path d="M12.25 6V0L21 8.57143H14.875C14.1788 8.57143 13.5111 8.30051 13.0188 7.81827C12.5265 7.33604 12.25 6.68198 12.25 6Z" fill="#ED9B0D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.38048 13.4639C6.46176 13.5438 6.55831 13.6071 6.66462 13.6503C6.77092 13.6935 6.88488 13.7157 6.99998 13.7157C7.11507 13.7157 7.22903 13.6935 7.33533 13.6503C7.44164 13.6071 7.53819 13.5438 7.61947 13.4639L10.5 10.6405L13.3805 13.4639C13.5448 13.6249 13.7676 13.7153 14 13.7153C14.2323 13.7153 14.4552 13.6249 14.6195 13.4639C14.7838 13.303 14.8761 13.0847 14.8761 12.8571C14.8761 12.6295 14.7838 12.4112 14.6195 12.2502L11.1195 8.82164C11.0382 8.74182 10.9416 8.67849 10.8353 8.63528C10.729 8.59207 10.6151 8.56982 10.5 8.56982C10.3849 8.56982 10.2709 8.59207 10.1646 8.63528C10.0583 8.67849 9.96175 8.74182 9.88047 8.82164L6.38048 12.2502C6.29899 12.3298 6.23434 12.4244 6.19023 12.5286C6.14612 12.6327 6.12341 12.7443 6.12341 12.8571C6.12341 12.9698 6.14612 13.0814 6.19023 13.1856C6.23434 13.2897 6.29899 13.3843 6.38048 13.4639Z" fill="#ED9B0D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 18.8571C10.7321 18.8571 10.9546 18.7668 11.1187 18.606C11.2828 18.4453 11.375 18.2273 11.375 17.9999V11.1428C11.375 10.9155 11.2828 10.6974 11.1187 10.5367C10.9546 10.376 10.7321 10.2856 10.5 10.2856C10.2679 10.2856 10.0454 10.376 9.88128 10.5367C9.71719 10.6974 9.625 10.9155 9.625 11.1428V17.9999C9.625 18.2273 9.71719 18.4453 9.88128 18.606C10.0454 18.7668 10.2679 18.8571 10.5 18.8571Z" fill="#ED9B0D"/>
                  </svg>
                  <span className="document-filename">I_20.pdf</span>
                </div>
              </div>
              <button className="document-action-btn needs-update-btn">Needs Update</button>
            </div>

            <div className="document-card verified">
              <div className="document-card-content">
                <div className="document-title">I-94</div>
                <div className="document-file">
                  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.50003 0H12.25V1.71429H3.50003C3.0359 1.71429 2.59078 1.8949 2.26259 2.21639C1.9344 2.53788 1.75003 2.97391 1.75003 3.42857V20.5714C1.75003 21.0261 1.9344 21.4621 2.26259 21.7836C2.59078 22.1051 3.0359 22.2857 3.50003 22.2857H17.5C17.9641 22.2857 18.4093 22.1051 18.7374 21.7836C19.0656 21.4621 19.25 21.0261 19.25 20.5714V8.57143H21V20.5714C21 21.4807 20.6312 22.3528 19.9749 22.9958C19.3185 23.6388 18.4283 24 17.5 24H3.50003C2.57177 24 1.68153 23.6388 1.02516 22.9958C0.368779 22.3528 3.05176e-05 21.4807 3.05176e-05 20.5714V3.42857C3.05176e-05 2.51926 0.368779 1.64719 1.02516 1.00421C1.68153 0.361224 2.57177 0 3.50003 0Z" fill="#268E4F"/>
                    <path d="M12.25 6V0L21 8.57143H14.875C14.1788 8.57143 13.5111 8.30051 13.0188 7.81827C12.5265 7.33604 12.25 6.68198 12.25 6Z" fill="#268E4F"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.38048 13.4639C6.46176 13.5438 6.55831 13.6071 6.66462 13.6503C6.77092 13.6935 6.88488 13.7157 6.99998 13.7157C7.11507 13.7157 7.22903 13.6935 7.33533 13.6503C7.44164 13.6071 7.53819 13.5438 7.61947 13.4639L10.5 10.6405L13.3805 13.4639C13.5448 13.6249 13.7676 13.7153 14 13.7153C14.2323 13.7153 14.4552 13.6249 14.6195 13.4639C14.7838 13.303 14.8761 13.0847 14.8761 12.8571C14.8761 12.6295 14.7838 12.4112 14.6195 12.2502L11.1195 8.82164C11.0382 8.74182 10.9416 8.67849 10.8353 8.63528C10.729 8.59207 10.6151 8.56982 10.5 8.56982C10.3849 8.56982 10.2709 8.59207 10.1646 8.63528C10.0583 8.67849 9.96175 8.74182 9.88047 8.82164L6.38048 12.2502C6.29899 12.3298 6.23434 12.4244 6.19023 12.5286C6.14612 12.6327 6.12341 12.7443 6.12341 12.8571C6.12341 12.9698 6.14612 13.0814 6.19023 13.1856C6.23434 13.2897 6.29899 13.3843 6.38048 13.4639Z" fill="#268E4F"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 18.8571C10.7321 18.8571 10.9546 18.7668 11.1187 18.606C11.2828 18.4453 11.375 18.2273 11.375 17.9999V11.1428C11.375 10.9155 11.2828 10.6974 11.1187 10.5367C10.9546 10.376 10.7321 10.2856 10.5 10.2856C10.2679 10.2856 10.0454 10.376 9.88128 10.5367C9.71719 10.6974 9.625 10.9155 9.625 11.1428V17.9999C9.625 18.2273 9.71719 18.4453 9.88128 18.606C10.0454 18.7668 10.2679 18.8571 10.5 18.8571Z" fill="#268E4F"/>
                  </svg>
                  <span className="document-filename">I_94.pdf</span>
                </div>
              </div>
              <button className="document-action-btn verified-btn">Verified</button>
            </div>

            <div className="document-card not-accepted">
              <div className="document-card-content">
                <div className="document-title">EAD Card</div>
                <div className="document-file">
                  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.49999 0H12.25V1.71429H3.49999C3.03587 1.71429 2.59075 1.8949 2.26256 2.21639C1.93437 2.53788 1.75 2.97391 1.75 3.42857V20.5714C1.75 21.0261 1.93437 21.4621 2.26256 21.7836C2.59075 22.1051 3.03587 22.2857 3.49999 22.2857H17.5C17.9641 22.2857 18.4092 22.1051 18.7374 21.7836C19.0656 21.4621 19.25 21.0261 19.25 20.5714V8.57143H21V20.5714C21 21.4807 20.6312 22.3528 19.9748 22.9958C19.3185 23.6388 18.4282 24 17.5 24H3.49999C2.57174 24 1.6815 23.6388 1.02512 22.9958C0.368748 22.3528 0 21.4807 0 20.5714V3.42857C0 2.51926 0.368748 1.64719 1.02512 1.00421C1.6815 0.361224 2.57174 0 3.49999 0Z" fill="#C90000"/>
                    <path d="M12.25 6V0L21 8.57143H14.875C14.1788 8.57143 13.5111 8.30051 13.0188 7.81827C12.5266 7.33604 12.25 6.68198 12.25 6Z" fill="#C90000"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.38048 13.4639C6.46176 13.5438 6.55831 13.6071 6.66462 13.6503C6.77092 13.6935 6.88488 13.7157 6.99998 13.7157C7.11507 13.7157 7.22903 13.6935 7.33533 13.6503C7.44164 13.6071 7.53819 13.5438 7.61947 13.4639L10.5 10.6405L13.3805 13.4639C13.5448 13.6249 13.7676 13.7153 14 13.7153C14.2323 13.7153 14.4552 13.6249 14.6195 13.4639C14.7838 13.303 14.8761 13.0847 14.8761 12.8571C14.8761 12.6295 14.7838 12.4112 14.6195 12.2502L11.1195 8.82164C11.0382 8.74182 10.9416 8.67849 10.8353 8.63528C10.729 8.59207 10.6151 8.56982 10.5 8.56982C10.3849 8.56982 10.2709 8.59207 10.1646 8.63528C10.0583 8.67849 9.96175 8.74182 9.88047 8.82164L6.38048 12.2502C6.29899 12.3298 6.23434 12.4244 6.19023 12.5286C6.14612 12.6327 6.12341 12.7443 6.12341 12.8571C6.12341 12.9698 6.14612 13.0814 6.19023 13.1856C6.23434 13.2897 6.29899 13.3843 6.38048 13.4639Z" fill="#C90000"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 18.8571C10.7321 18.8571 10.9546 18.7668 11.1187 18.606C11.2828 18.4453 11.375 18.2273 11.375 17.9999V11.1428C11.375 10.9155 11.2828 10.6974 11.1187 10.5367C10.9546 10.376 10.7321 10.2856 10.5 10.2856C10.2679 10.2856 10.0454 10.376 9.88128 10.5367C9.71719 10.6974 9.625 10.9155 9.625 11.1428V17.9999C9.625 18.2273 9.71719 18.4453 9.88128 18.606C10.0454 18.7668 10.2679 18.8571 10.5 18.8571Z" fill="#C90000"/>
                  </svg>
                  <span className="document-filename">EAD_Card.pdf</span>
                </div>
              </div>
              <button className="document-action-btn not-accepted-btn">Not Accepted</button>
            </div>
          </div>
        </div>

        <div className="saved-jobs-section">
          <div className="saved-jobs-header">
            <h2 className="saved-jobs-title">Saved Jobs</h2>
            <div className="saved-jobs-search-bar">
              <div className="saved-jobs-search-content">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="search-placeholder">Search Job Titles, Employers, Key Words</span>
              </div>
            </div>
          </div>

          <div className="saved-jobs-list">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="saved-job-card">
                <div className="saved-job-content">
                  <div className="saved-job-header">
                    <div className="saved-job-logo"></div>
                    <div className="saved-job-info">
                      <div className="saved-job-title">Role</div>
                      <div className="saved-job-company">Company</div>
                      <div className="saved-job-badges">
                        <span className="saved-job-badge">H-1B</span>
                        <span className="saved-job-badge">L-1</span>
                        <span className="saved-job-badge">O-1</span>
                      </div>
                    </div>
                  </div>
                  <div className="saved-job-details">
                    <div className="saved-job-detail">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 16.5C12 13.5 15 10.8137 15 7.5C15 4.18629 12.3137 1.5 9 1.5C5.68629 1.5 3 4.18629 3 7.5C3 10.8137 6 13.5 9 16.5Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Location</span>
                    </div>
                    <div className="saved-job-detail">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_999_357)">
                          <path d="M12.75 10.8749V8.62075C12.75 8.48614 12.75 8.41883 12.7295 8.35941C12.7114 8.30687 12.6818 8.25901 12.6429 8.21929C12.5989 8.17439 12.5387 8.14429 12.4183 8.08409L9 6.37493M3 7.12493V12.2299C3 12.5088 3 12.6483 3.04351 12.7704C3.08198 12.8784 3.14468 12.9761 3.22678 13.056C3.31966 13.1464 3.44645 13.2046 3.70001 13.3208L8.50001 15.5208C8.68394 15.6051 8.7759 15.6472 8.87171 15.6638C8.9566 15.6786 9.0434 15.6786 9.12829 15.6638C9.2241 15.6472 9.31606 15.6051 9.49999 15.5208L14.3 13.3208C14.5535 13.2046 14.6803 13.1464 14.7732 13.056C14.8553 12.9761 14.918 12.8784 14.9565 12.7704C15 12.6483 15 12.5088 15 12.2299V7.12493M1.5 6.37493L8.73167 2.75909C8.83006 2.7099 8.87925 2.6853 8.93085 2.67562C8.97655 2.66705 9.02345 2.66705 9.06915 2.67562C9.12075 2.6853 9.16994 2.7099 9.26833 2.75909L16.5 6.37493L9.26833 9.99076C9.16994 10.04 9.12075 10.0646 9.06915 10.0742C9.02345 10.0828 8.97655 10.0828 8.93085 10.0742C8.87925 10.0646 8.83006 10.04 8.73167 9.99076L1.5 6.37493Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                      </svg>
                      <span>Years of Experience</span>
                    </div>
                    <div className="saved-job-detail">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_999_362)">
                          <path d="M9 4.5V9L12 10.5M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                      </svg>
                      <span>Full-Time</span>
                    </div>
                    <div className="saved-job-detail">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 15.75V10.2C6.75 9.78001 6.75 9.56999 6.83175 9.40956C6.90365 9.26843 7.01839 9.1537 7.15951 9.08179C7.31994 9.00005 7.52996 9.00005 7.95 9.00005H10.05C10.47 9.00005 10.6801 9.00005 10.8405 9.08179C10.9816 9.1537 11.0963 9.26843 11.1683 9.40956C11.25 9.56999 11.25 9.78001 11.25 10.2V15.75M8.26327 2.07306L3.17654 6.0294C2.83652 6.29387 2.6665 6.4261 2.54402 6.5917C2.43552 6.73839 2.3547 6.90365 2.30552 7.07935C2.25 7.2777 2.25 7.49308 2.25 7.92385V13.35C2.25 14.1901 2.25 14.6102 2.41349 14.931C2.5573 15.2133 2.78677 15.4427 3.06901 15.5866C3.38988 15.75 3.80992 15.75 4.65 15.75H13.35C14.1901 15.75 14.6101 15.75 14.931 15.5866C15.2132 15.4427 15.4427 15.2133 15.5865 14.931C15.75 14.6102 15.75 14.1901 15.75 13.35V7.92385C15.75 7.49308 15.75 7.2777 15.6945 7.07935C15.6453 6.90365 15.5645 6.73839 15.456 6.5917C15.3335 6.4261 15.1635 6.29387 14.8235 6.02941L9.73673 2.07306C9.47324 1.86812 9.34149 1.76565 9.19601 1.72626C9.06765 1.69151 8.93235 1.69151 8.80399 1.72626C8.65851 1.76565 8.52677 1.86812 8.26327 2.07306Z" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Remote</span>
                    </div>
                    <div className="saved-job-detail">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 12C4.5 13.6569 5.84315 15 7.5 15H10.5C12.1569 15 13.5 13.6569 13.5 12C13.5 10.3431 12.1569 9 10.5 9H7.5C5.84315 9 4.5 7.65685 4.5 6C4.5 4.34315 5.84315 3 7.5 3H10.5C12.1569 3 13.5 4.34315 13.5 6M9 1.5V16.5" stroke="#1D3A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Salary</span>
                    </div>
                  </div>
                </div>
                <div className="saved-job-actions">
                  <button className="bookmark-btn active">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.34961 3.25H10.6504C11.2964 3.25 11.721 3.25083 12.0459 3.27734C12.3592 3.30295 12.4912 3.3479 12.5674 3.38672C12.8025 3.50655 12.9935 3.6975 13.1133 3.93262C13.1521 4.0088 13.1971 4.14075 13.2227 4.4541C13.2492 4.779 13.25 5.20357 13.25 5.84961V14.0264L9.49609 11.8818C9.22706 11.7281 8.90449 11.7089 8.62207 11.8242L8.50391 11.8818L4.75 14.0264V5.84961C4.75 5.20357 4.75083 4.779 4.77734 4.4541C4.80295 4.14075 4.8479 4.0088 4.88672 3.93262C5.00655 3.6975 5.1975 3.50655 5.43262 3.38672C5.5088 3.3479 5.64075 3.30295 5.9541 3.27734C6.279 3.25083 6.70357 3.25 7.34961 3.25Z" fill="#FEFEFE" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="btn-primary apply-btn">Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="logo">
                Visa<span style={{ fontWeight: 900 }}>Path</span>
              </div>
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
                  <div className="footer-link" onClick={onNavigateJobBoard} style={{ cursor: 'pointer' }}>Job Board</div>
                </div>
                <div className="footer-list-item">
                  <div className="footer-link">Employer Board</div>
                </div>
                <div className="footer-list-item">
                  <div className="footer-link">Visa Resources</div>
                </div>
              </div>
            </div>
            <div className="footer-column footer-column-employers">
              <div className="footer-heading">
                <h5 className="footer-heading-text">Employers</h5>
              </div>
              <div className="footer-list">
                <div className="footer-list-item">
                  <div className="footer-link">Post a Job</div>
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
    </div>
  );
}

export default Profile;
