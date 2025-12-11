import './Header.css';

function Header() {
  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleSignup = () => {
    window.location.href = '/signup';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="/">
              <h1>RechargeNow</h1>
            </a>
          </div>
          
          <nav className="nav-menu">
            <a href="/">Home</a>
            <a href="/">Plans</a>
            <a href="/">Offers</a>
            <a href="/">History</a>
          </nav>
          
          <div className="auth-buttons">
            <button className="btn-login" onClick={handleLogin}>
              Login
            </button>
            <button className="btn-signup" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;