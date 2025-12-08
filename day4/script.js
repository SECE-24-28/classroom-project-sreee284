// Global JavaScript functionality for QuickRecharge website

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Utility functions
const Utils = {
    // Format phone number
    formatPhoneNumber: function(value) {
        return value.replace(/\D/g, '').slice(0, 10);
    },
    
    // Validate email
    validateEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Validate phone number
    validatePhone: function(phone) {
        return /^[6-9]\d{9}$/.test(phone);
    },
    
    // Format currency
    formatCurrency: function(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(amount);
    },
    
    // Show loading state
    showLoading: function(button, text = 'Loading...') {
        const originalText = button.innerHTML;
        button.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i>${text}`;
        button.disabled = true;
        return originalText;
    },
    
    // Hide loading state
    hideLoading: function(button, originalText) {
        button.innerHTML = originalText;
        button.disabled = false;
    },
    
    // Show notification
    showNotification: function(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
            type === 'success' ? 'bg-green-500 text-white' : 
            type === 'error' ? 'bg-red-500 text-white' : 
            'bg-blue-500 text-white'
        }`;
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas ${
                    type === 'success' ? 'fa-check-circle' : 
                    type === 'error' ? 'fa-exclamation-circle' : 
                    'fa-info-circle'
                } mr-2"></i>
                <span>${message}</span>
                <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
};

// Recharge service simulation
const RechargeService = {
    operators: {
        mobile: ['airtel', 'jio', 'vi', 'bsnl'],
        dth: ['tata-sky', 'airtel-dth', 'dish-tv', 'sun-direct'],
        data: ['airtel', 'jio', 'vi', 'bsnl']
    },
    
    plans: {
        mobile: [
            { amount: 199, validity: '28 days', data: '1.5GB/day', description: 'Unlimited calls + SMS' },
            { amount: 299, validity: '28 days', data: '2GB/day', description: 'Unlimited calls + SMS' },
            { amount: 399, validity: '56 days', data: '2GB/day', description: 'Unlimited calls + SMS' },
            { amount: 599, validity: '84 days', data: '2GB/day', description: 'Unlimited calls + SMS' },
            { amount: 999, validity: '84 days', data: '3GB/day', description: 'Unlimited calls + SMS' }
        ],
        dth: [
            { amount: 299, validity: '30 days', data: 'Basic Pack', description: '150+ channels' },
            { amount: 499, validity: '30 days', data: 'Premium Pack', description: '250+ channels' },
            { amount: 799, validity: '30 days', data: 'Sports Pack', description: '300+ channels + Sports' },
            { amount: 1299, validity: '30 days', data: 'Ultimate Pack', description: '400+ channels + HD' }
        ],
        data: [
            { amount: 99, validity: '28 days', data: '1GB', description: '3G/4G data' },
            { amount: 199, validity: '28 days', data: '3GB', description: '3G/4G data' },
            { amount: 299, validity: '28 days', data: '6GB', description: '3G/4G data' },
            { amount: 499, validity: '28 days', data: '12GB', description: '3G/4G data' }
        ]
    },
    
    // Simulate recharge API call
    processRecharge: function(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 95% success rate
                if (Math.random() > 0.05) {
                    resolve({
                        success: true,
                        transactionId: 'TXN' + Date.now(),
                        message: 'Recharge successful!',
                        data: data
                    });
                } else {
                    reject({
                        success: false,
                        message: 'Recharge failed. Please try again.',
                        error: 'NETWORK_ERROR'
                    });
                }
            }, 2000 + Math.random() * 2000); // 2-4 seconds delay
        });
    },
    
    // Get operator info
    getOperatorInfo: function(operator) {
        const operatorData = {
            'airtel': { name: 'Airtel', color: '#E31E24' },
            'jio': { name: 'Jio', color: '#0066CC' },
            'vi': { name: 'Vi', color: '#9C1A7A' },
            'bsnl': { name: 'BSNL', color: '#1B5E20' },
            'tata-sky': { name: 'Tata Sky', color: '#0066CC' },
            'airtel-dth': { name: 'Airtel Digital TV', color: '#E31E24' },
            'dish-tv': { name: 'Dish TV', color: '#FF6600' },
            'sun-direct': { name: 'Sun Direct', color: '#FFD700' }
        };
        return operatorData[operator] || { name: operator, color: '#666666' };
    }
};

// Local storage management
const Storage = {
    // User session
    setUser: function(userData) {
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(userData));
    },
    
    getUser: function() {
        if (localStorage.getItem('userLoggedIn') === 'true') {
            return JSON.parse(localStorage.getItem('userData') || '{}');
        }
        return null;
    },
    
    clearUser: function() {
        localStorage.removeItem('userLoggedIn');
        localStorage.removeItem('userData');
    },
    
    // Wallet balance
    setWalletBalance: function(balance) {
        localStorage.setItem('walletBalance', balance.toString());
    },
    
    getWalletBalance: function() {
        return parseFloat(localStorage.getItem('walletBalance') || '500');
    },
    
    // Transaction history
    addTransaction: function(transaction) {
        const transactions = this.getTransactions();
        transactions.unshift({
            ...transaction,
            id: Date.now(),
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('transactions', JSON.stringify(transactions.slice(0, 50))); // Keep last 50
    },
    
    getTransactions: function() {
        return JSON.parse(localStorage.getItem('transactions') || '[]');
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a protected page
    const protectedPages = ['dashboard.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage) && !Storage.getUser()) {
        window.location.href = 'login.html';
        return;
    }
    
    // Initialize wallet balance display
    const walletElements = document.querySelectorAll('[id*="Balance"]');
    walletElements.forEach(element => {
        if (element.textContent.includes('500')) {
            element.textContent = Storage.getWalletBalance().toFixed(2);
        }
    });
});

// Export for global use
window.Utils = Utils;
window.RechargeService = RechargeService;
window.Storage = Storage;