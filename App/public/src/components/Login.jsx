import React, { useState } from 'react';
import './Login.css';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login({ onLogin = () => {}, onNavigateHome = () => {} }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegister) {
        // Create new account
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const firebaseUser = userCredential.user;
        const user = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.email.split('@')[0]
        };
        onLogin(user);
      } else {
        // Sign in existing user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const firebaseUser = userCredential.user;
        const user = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.email.split('@')[0]
        };
        onLogin(user);
      }
    } catch (err) {
      // Handle Firebase auth errors
      console.error('Firebase Auth Error:', err);
      switch (err.code) {
        case 'auth/user-not-found':
          setError('No account found with this email');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password');
          break;
        case 'auth/email-already-in-use':
          setError('Email already in use');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/operation-not-allowed':
          setError('Email/Password sign-in is not enabled. Please contact support.');
          break;
        case 'auth/invalid-credential':
          setError('Invalid credentials. Please check your email and password.');
          break;
        default:
          setError(`Authentication failed: ${err.message || 'Please try again.'}`);
      }
    } finally {
      setLoading(false);
    }
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
                    <button className="btn-primary" type="submit" disabled={loading}>
                      {loading ? 'Please wait...' : (isRegister ? 'Create account' : 'Sign in')}
                    </button>
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
