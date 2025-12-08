# QuickRecharge - Mobile Recharge Platform

A complete mobile recharge web application built with HTML, CSS (Tailwind), and JavaScript.

## Features

### 🏠 Homepage (index.html)
- Modern landing page with hero section
- Service showcase (Mobile, DTH, Data Cards)
- Popular recharge plans display
- Feature highlights
- Responsive design

### 🔐 Authentication
- **Login Page** (login.html) - User sign-in
- **Signup Page** (signup.html) - New user registration
- Local storage-based session management
- Form validation

### 📱 Dashboard (dashboard.html)
- Complete recharge functionality
- Operator selection (Airtel, Jio, Vi, BSNL)
- Mobile number validation
- Plan selection with predefined and custom amounts
- Real-time balance management
- Transaction history
- Special offers section

### 💰 Wallet Management (wallet.html)
- Add money to wallet
- Multiple payment methods (UPI, Card, Net Banking)
- Quick add buttons (₹100, ₹200, ₹500, ₹1000)
- Transaction history
- Balance tracking

### 📋 Plans Page (plans.html)
- Comprehensive plan listings
- Operator-wise filtering
- Categories: Popular Plans, Full Talktime, Data Only
- Detailed plan information

## Technical Stack

- **Frontend**: HTML5, CSS3, Tailwind CSS
- **JavaScript**: Vanilla JS (ES6+)
- **Storage**: Local Storage for data persistence
- **Icons**: Emoji-based icons for lightweight design

## File Structure

```
mockai/
├── index.html          # Homepage
├── login.html          # Login page
├── signup.html         # Registration page
├── dashboard.html      # Main recharge interface
├── wallet.html         # Wallet management
├── plans.html          # Plans showcase
├── style.css           # Custom CSS styles
├── script.js           # Global JavaScript utilities
└── README.md           # Project documentation
```

## Key Features

### 🔒 Security
- Input validation and sanitization
- Phone number format validation
- Email validation
- Secure session management

### 💳 Payment Simulation
- Realistic recharge flow
- Balance deduction
- Transaction success/failure simulation
- Payment method selection

### 📊 Data Management
- Local storage for user data
- Transaction history tracking
- Wallet balance persistence
- Session state management

### 🎨 UI/UX
- Responsive design for all devices
- Modern card-based layout
- Hover effects and transitions
- Loading states and feedback
- Color-coded status indicators

## Getting Started

1. **Clone or download** the project files
2. **Open index.html** in a web browser
3. **Sign up** for a new account or use the login page
4. **Start recharging** from the dashboard

## Usage Flow

1. **Landing Page** → Browse services and plans
2. **Sign Up/Login** → Create account or sign in
3. **Dashboard** → Select operator, enter mobile number, choose plan
4. **Wallet** → Add money if needed
5. **Recharge** → Complete the transaction

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Local Storage Data

The application stores:
- User authentication status
- User profile information
- Wallet balance
- Transaction history
- Session data

## Customization

### Adding New Operators
Edit the operator options in `dashboard.html` and `plans.html`

### Modifying Plans
Update plan data in the JavaScript sections of respective files

### Styling Changes
Modify `style.css` or update Tailwind classes

## Future Enhancements

- Backend API integration
- Real payment gateway
- SMS/Email notifications
- Bill payment features
- Cashback system
- Referral program

## License

This project is for educational and demonstration purposes.

---

**QuickRecharge** - Fast, Secure, Reliable Mobile Recharge Platform