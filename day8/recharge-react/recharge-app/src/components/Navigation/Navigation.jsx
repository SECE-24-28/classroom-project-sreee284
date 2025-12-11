import './Navigation.css';

function Navigation() {
  const operators = [
    { id: 1, name: 'Airtel', icon: '🔴', color: '#E40A0A' },
    { id: 2, name: 'Jio', icon: '🟢', color: '#00B0A6' },
    { id: 3, name: 'VI', icon: '🔵', color: '#6D04B5' },
    { id: 4, name: 'BSNL', icon: '🟡', color: '#FF671F' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-header">
        <h2>📱 Mobile Recharge</h2>
        <p>Select your operator</p>
      </div>
      <div className="nav-container">
        {operators.map((operator) => (
          <button
            key={operator.id}
            className="nav-item"
            style={{ borderColor: operator.color }}
          >
            <span className="nav-icon" style={{ color: operator.color }}>
              {operator.icon}
            </span>
            <span className="nav-text">{operator.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;