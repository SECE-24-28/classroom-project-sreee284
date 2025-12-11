import './RechargeForm.css';
import { useState } from 'react';

function RechargeForm() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [operator, setOperator] = useState('airtel');
  const [amount, setAmount] = useState('');

  const popularAmounts = [49, 99, 149, 199, 299, 399, 499];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length === 10) {
      alert(`Recharge of ₹${amount} for ${mobileNumber} (${operator}) successful!`);
      setMobileNumber('');
      setAmount('');
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  return (
    <div className="recharge-form-container">
      <div className="form-header">
        <h2>Quick Recharge</h2>
        <p>Recharge your mobile in seconds</p>
      </div>
      
      <form className="recharge-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
            placeholder="Enter 10-digit number"
            maxLength="10"
            required
          />
        </div>

        <div className="form-group">
          <label>Select Operator</label>
          <div className="operator-buttons">
            {[
              { id: 'airtel', name: 'Airtel', color: '#E40A0A' },
              { id: 'jio', name: 'Jio', color: '#00B0A6' },
              { id: 'vi', name: 'VI', color: '#6D04B5' },
              { id: 'bsnl', name: 'BSNL', color: '#FF671F' },
            ].map((op) => (
              <button
                key={op.id}
                type="button"
                className={`operator-btn ${operator === op.id ? 'active' : ''}`}
                style={{ backgroundColor: operator === op.id ? op.color : 'transparent' }}
                onClick={() => setOperator(op.id)}
              >
                {op.name}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Select Amount</label>
          <div className="amount-buttons">
            {popularAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                className={`amount-btn ${amount === amt.toString() ? 'active' : ''}`}
                onClick={() => setAmount(amt.toString())}
              >
                ₹{amt}
              </button>
            ))}
          </div>
          <div className="custom-amount">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Or enter custom amount"
              min="1"
            />
            <span className="currency">₹</span>
          </div>
        </div>

        <button type="submit" className="recharge-btn">
          <span className="btn-icon">⚡</span>
          Recharge Now
        </button>
      </form>

      <div className="form-footer">
        <div className="feature">
          <span>✅</span> Instant activation
        </div>
        <div className="feature">
          <span>🛡️</span> 100% secure
        </div>
        <div className="feature">
          <span>📱</span> No extra charges
        </div>
      </div>
    </div>
  );
}

export default RechargeForm;