import './Login.css';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    
    setLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      setLoading(false);
      
      if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful!');
        window.location.href = '/';
      } else {
        setError('Invalid email or password. Try: user@example.com / password123');
      }
    }, 1500);
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-card">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Sign in to your RechargeNow account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                disabled={loading}
              />
            </div>
            
            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                />
                <span>Remember me</span>
              </label>
              
              <a href="/forgot-password" className="forgot-link">
                Forgot password?
              </a>
            </div>
            
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          
          <div className="login-divider">
            <span>Or continue with</span>
          </div>
          
          <div className="social-login">
            <button className="social-btn google" disabled={loading}>
              <span className="social-icon">G</span> Google
            </button>
            <button className="social-btn facebook" disabled={loading}>
              <span className="social-icon">F</span> Facebook
            </button>
          </div>
          
          <div className="signup-link">
            Don't have an account? <a href="/signup">Create account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;