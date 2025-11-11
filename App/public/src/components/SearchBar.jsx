import React, { useState, useEffect } from 'react';
import './SearchBar.css';

// SearchBar preserves the existing DOM structure and CSS classes used by the app.
// Props:
// - initialValue: string (optional)
// - onSubmit: function(query) called when user presses Enter or clicks Search
// - onChange: function(query) called on each input change (optional)
function SearchBar({ initialValue = '', onSubmit = () => {}, onChange = null, placeholder = 'Search Job Titles, Employers, Key Words' }) {
  const [value, setValue] = useState(initialValue || '');

  useEffect(() => {
    setValue(initialValue || '');
  }, [initialValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (typeof onChange === 'function') onChange(e.target.value);
  };

  const submit = (e) => {
    if (e) e.preventDefault();
    onSubmit(value.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') submit(e);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div className="main-search-bar">
        <div className="main-search-content">
          <svg className="search-icon-main" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* keep existing placeholder markup/classes so CSS continues to work */}
          <input
            className="search-input-main"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            aria-label={placeholder}
          />
        </div>
      </div>

      <div className="search-button-wrapper">
        <button className="btn-primary btn-search" onClick={submit} type="button">Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
