import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin = () => {}, onNavigateHome = () => {} }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Enter an email');
      return;
    }
    const user = { email, name: email.split('@')[0] };
    onLogin(user);
  };

  return (
  <div className="login-page">
    <div className="login-card">
      <div className="login-benefits" >
            <div className="benefits-content">
              <h3 className="benefits-heading">Student Benefits</h3>
              <ul className="benefits-list">
                <li>
                  <span className="checkmark" aria-hidden>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M20 6L9 17l-5-5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Access to a visa-specific job board</span>
                </li>
                <li>
                  <span className="checkmark" aria-hidden>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M20 6L9 17l-5-5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Visa resources and internship opportunities</span>
                </li>
                <li>
                  <span className="checkmark" aria-hidden>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M20 6L9 17l-5-5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Connect with employers who sponsor visas</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="login-container">
            <h2>{isRegister ? 'Sign up' : 'Log in'}</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                {error && <div className="form-error">{error}</div>}
                <div className="login-actions">
                    <button className="btn-primary" type="submit">{isRegister ? 'Create account' : 'Sign in'}</button>
                    <button className="btn-secondary" type="button" onClick={() => setIsRegister(!isRegister)}>{isRegister ? 'Have an account? Log in' : 'Create an account'}</button>
                    <button className="btn-ghost" onClick={onNavigateHome} type="button">Cancel</button>
                </div>
            </form>
      </div>
    </div>
  </div>
  );
}

export default Login;
