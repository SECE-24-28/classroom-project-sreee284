import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Mobile Recharge Made Simple</h2>
        <p>Recharge any prepaid mobile in India instantly. Best offers on Airtel, Jio, VI & BSNL</p>
        <div className="hero-stats">
          <div className="stat">
            <h3>Instant</h3>
            <p>Recharge</p>
          </div>
          <div className="stat">
            <h3>Cashback</h3>
            <p>Offers</p>
          </div>
          <div className="stat">
            <h3>24x7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="phone-content">
              <div className="phone-header">RechargeNow</div>
              <div className="phone-recharge">
                <div className="operator-logo">JIO</div>
                <div className="recharge-amount">₹299</div>
                <div className="recharge-success">✓</div>
                <p>Recharge Done!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;