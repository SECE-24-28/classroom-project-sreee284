import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const operators = ['Airtel', 'Jio', 'VI', 'BSNL'];
  const popularPlans = [99, 149, 199, 249, 299, 399];

  return (
    <div className="home">
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
          <div className="section-header">
            <h2>Quick Recharge</h2>
            <p>Enter your details and recharge instantly</p>
          </div>
          
          <div className="recharge-form card">
            <div className="form-group">
              <label>Mobile Number</label>
              <input 
                type="tel" 
                className="form-control"
                placeholder="Enter 10-digit mobile number" 
                maxLength="10"
              />
            </div>
            
            <div className="form-group">
              <label>Select Operator</label>
              <div className="operators">
                {operators.map((operator, index) => (
                  <button key={index} className="operator-btn" type="button">
                    {operator}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="form-group">
              <label>Select Amount (₹)</label>
              <div className="amounts">
                {popularPlans.map((amount, index) => (
                  <button key={index} className="amount-btn" type="button">
                    ₹{amount}
                  </button>
                ))}
              </div>
              <input 
                type="number" 
                className="form-control mt-10"
                placeholder="Or enter custom amount"
              />
            </div>
            
            <button className="btn btn-primary recharge-btn">
              Proceed to Recharge
            </button>
          </div>
        </div>
      </section>

      {/* Popular Plans */}
      <section className="plans-section">
        <div className="container">
          <div className="section-header">
            <h2>Popular Recharge Plans</h2>
            <p>Best selling plans for all operators</p>
          </div>
          
          <div className="plans-grid">
            {[
              { amount: 299, data: '2GB/day', validity: '28 days', calls: 'Unlimited' },
              { amount: 399, data: '2GB/day', validity: '56 days', calls: 'Unlimited' },
              { amount: 499, data: '2.5GB/day', validity: '56 days', calls: 'Unlimited' },
              { amount: 599, data: '3GB/day', validity: '84 days', calls: 'Unlimited' },
            ].map((plan, index) => (
              <div key={index} className="plan-card card">
                <div className="plan-header">
                  <h3>₹{plan.amount}</h3>
                  <span className="plan-badge">Popular</span>
                </div>
                <div className="plan-details">
                  <p>📊 {plan.data}</p>
                  <p>📅 {plan.validity}</p>
                  <p>📞 {plan.calls} Calls</p>
                </div>
                <button className="btn btn-primary">Select Plan</button>
              </div>
            ))}
          </div>
          
          <div className="view-all">
            <Link to="/plans" className="btn btn-outline">View All Plans →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;