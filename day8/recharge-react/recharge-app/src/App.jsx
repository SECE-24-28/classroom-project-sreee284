import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  // State for recharge form
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rechargeMessage, setRechargeMessage] = useState('');
  const [rechargeSuccess, setRechargeSuccess] = useState(false);
  
  // Operators data
  const operators = [
    { id: 'airtel', name: 'Airtel', color: '#E40A0A' },
    { id: 'jio', name: 'Jio', color: '#00B0A6' },
    { id: 'vi', name: 'VI', color: '#6D04B5' },
    { id: 'bsnl', name: 'BSNL', color: '#FF671F' }
  ];
  
  // Amount options
  const amounts = [99, 149, 199, 249, 299, 399];
  
  // Handle recharge
  const handleRecharge = () => {
    if (mobileNumber.length !== 10) {
      setRechargeMessage('Please enter a valid 10-digit mobile number');
      setRechargeSuccess(false);
      return;
    }
    
    if (!selectedOperator) {
      setRechargeMessage('Please select an operator');
      setRechargeSuccess(false);
      return;
    }
    
    const finalAmount = selectedAmount || customAmount;
    if (!finalAmount || finalAmount < 10) {
      setRechargeMessage('Please select or enter a valid amount (minimum ₹10)');
      setRechargeSuccess(false);
      return;
    }
    
    setIsLoading(true);
    setRechargeMessage('');
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setRechargeSuccess(true);
      setRechargeMessage(`Recharge of ₹${finalAmount} successful for ${mobileNumber}!`);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setMobileNumber('');
        setSelectedOperator('');
        setSelectedAmount('');
        setCustomAmount('');
        setRechargeMessage('');
      }, 3000);
    }, 1500);
  };
  
  // Handle plan selection
  const handlePlanSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setRechargeMessage('');
  };

  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Fast Mobile Recharge in Seconds</h1>
              <p>Recharge any prepaid mobile with best offers and instant activation</p>
              <div className="hero-stats">
                <div className="stat">
                  <h3>50K+</h3>
                  <p>Happy Users</p>
                </div>
                <div className="stat">
                  <h3>₹10M+</h3>
                  <p>Recharged</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recharge Form */}
        <section className="recharge-section">
          <div className="container">
            <h2>Quick Recharge</h2>
            <div className="recharge-form">
              <div className="form-group">
                <label>Mobile Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter 10-digit number" 
                  maxLength="10"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                />
              </div>
              
              <div className="form-group">
                <label>Select Operator</label>
                <div className="operator-buttons">
                  {operators.map((operator) => (
                    <button
                      key={operator.id}
                      type="button"
                      className={`operator-btn ${selectedOperator === operator.id ? 'selected' : ''}`}
                      onClick={() => setSelectedOperator(operator.id)}
                    >
                      {operator.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label>Select Amount (₹)</label>
                <div className="amount-buttons">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`amount-btn ${selectedAmount === amount ? 'selected' : ''}`}
                      onClick={() => setSelectedAmount(amount)}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <input 
                  type="number" 
                  placeholder="Or enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(e.target.value || '');
                  }}
                />
              </div>
              
              <button 
                className="recharge-now-btn"
                onClick={handleRecharge}
                disabled={!mobileNumber || !selectedOperator || !(selectedAmount || customAmount)}
              >
                {isLoading ? 'Processing...' : 'Recharge Now'}
              </button>
              
              {rechargeMessage && (
                <div className={`recharge-message ${rechargeSuccess ? 'success' : 'error'}`}>
                  {rechargeMessage}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Popular Plans */}
        <section className="plans-section">
          <div className="container">
            <h2>Popular Recharge Plans</h2>
            <p className="section-subtitle">Best selling plans for all operators</p>
            
            <div className="plans-grid">
              {/* Plan 1 */}
              <div className="plan-card">
                <div className="plan-header">
                  <h3>₹299</h3>
                  <span className="plan-badge">Popular</span>
                </div>
                <div className="plan-details">
                  <p>28 Days Validity</p>
                  <p>2GB/day Data</p>
                  <p>Unlimited Calls</p>
                  <p>100 SMS/day</p>
                </div>
                <button 
                  className="plan-select-btn" 
                  onClick={() => handlePlanSelect(299)}
                >
                  Select Plan
                </button>
              </div>
              
              {/* Plan 2 */}
              <div className="plan-card">
                <div className="plan-header">
                  <h3>₹399</h3>
                  <span className="plan-badge">Value</span>
                </div>
                <div className="plan-details">
                  <p>56 Days Validity</p>
                  <p>2GB/day Data</p>
                  <p>Unlimited Calls</p>
                  <p>100 SMS/day</p>
                </div>
                <button 
                  className="plan-select-btn"
                  onClick={() => handlePlanSelect(399)}
                >
                  Select Plan
                </button>
              </div>
              
              {/* Plan 3 */}
              <div className="plan-card">
                <div className="plan-header">
                  <h3>₹499</h3>
                  <span className="plan-badge">Best Seller</span>
                </div>
                <div className="plan-details">
                  <p>56 Days Validity</p>
                  <p>2.5GB/day Data</p>
                  <p>Unlimited Calls</p>
                  <p>100 SMS/day</p>
                </div>
                <button 
                  className="plan-select-btn"
                  onClick={() => handlePlanSelect(499)}
                >
                  Select Plan
                </button>
              </div>
              
              {/* Plan 4 */}
              <div className="plan-card">
                <div className="plan-header">
                  <h3>₹599</h3>
                  <span className="plan-badge">Premium</span>
                </div>
                <div className="plan-details">
                  <p>84 Days Validity</p>
                  <p>3GB/day Data</p>
                  <p>Unlimited Calls</p>
                  <p>100 SMS/day</p>
                </div>
                <button 
                  className="plan-select-btn"
                  onClick={() => handlePlanSelect(599)}
                >
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2>Why Choose RechargeNow</h2>
            <p className="section-subtitle">We provide the best recharge experience</p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">Instant</div>
                <h3>Instant Recharge</h3>
                <p>Get your recharge activated within seconds</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">Secure</div>
                <h3>100% Secure</h3>
                <p>Bank-level security for all transactions</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">Offers</div>
                <h3>Best Offers</h3>
                <p>Exclusive cashback and discount offers</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">All Networks</div>
                <h3>All Operators</h3>
                <p>Support for Airtel, Jio, VI, BSNL & more</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>RechargeNow</h3>
              <p>Fast, secure mobile recharge with best offers</p>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <a href="/">Mobile Recharge</a>
              <a href="/">DTH Recharge</a>
              <a href="/">Electricity Bill</a>
              <a href="/">Water Bill</a>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <a href="/">About Us</a>
              <a href="/">Contact</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms & Conditions</a>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <a href="/">Help Center</a>
              <a href="/">FAQs</a>
              <a href="/">Live Chat</a>
              <a href="/">Call: 1800-123-456</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 RechargeNow. All rights reserved.</p>
            <div className="social-icons">
              <span>FB</span>
              <span>TW</span>
              <span>IG</span>
              <span>IN</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;