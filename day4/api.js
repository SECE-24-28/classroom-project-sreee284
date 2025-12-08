// Mock API Service for QuickRecharge
class MockAPI {
    constructor() {
        this.baseURL = 'https://69329e02e5a9e342d27007eb.mockapi.io/api/plans';
        this.endpoints = {
            plans: '/PlanDetails',
            operators: '/operators',
            transactions: '/transactions'
        };
        this.fallbackData = null;
        this.loadFallbackData();
    }

    // Load fallback data
    async loadFallbackData() {
        try {
            const response = await fetch('./mockdata.json');
            this.fallbackData = await response.json();
        } catch (error) {
            console.warn('Could not load fallback data:', error);
        }
    }

    // Generic API call method with fallback
    async apiCall(endpoint, options = {}) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.warn('API call failed, using fallback data:', error);
            return this.getFallbackData(endpoint);
        }
    }

    // Get fallback data based on endpoint
    getFallbackData(endpoint) {
        if (!this.fallbackData) {
            return this.getHardcodedData(endpoint);
        }
        
        if (endpoint.includes('PlanDetails')) {
            return this.fallbackData.plans;
        }
        if (endpoint.includes('operators')) {
            return this.fallbackData.operators;
        }
        return [];
    }

    // Hardcoded fallback data
    getHardcodedData(endpoint) {
        if (endpoint.includes('PlanDetails')) {
            return [
                { id: 1, amount: 199, validity: '28 Days', data: '1.5GB/Day', calls: 'Unlimited Calls', sms: '100 SMS/Day' },
                { id: 2, amount: 299, validity: '28 Days', data: '2GB/Day', calls: 'Unlimited Calls', sms: '100 SMS/Day' },
                { id: 3, amount: 399, validity: '56 Days', data: '2GB/Day', calls: 'Unlimited Calls', sms: '100 SMS/Day' },
                { id: 4, amount: 599, validity: '84 Days', data: '2GB/Day', calls: 'Unlimited Calls', sms: '100 SMS/Day' }
            ];
        }
        return [];
    }

    // Get all plans
    async getPlans() {
        return await this.apiCall(this.endpoints.plans);
    }

    // Get plans by operator
    async getPlansByOperator(operator) {
        const plans = await this.getPlans();
        return plans.filter(plan => plan.operator === operator);
    }

    // Create transaction
    async createTransaction(transactionData) {
        return await this.apiCall(this.endpoints.transactions, {
            method: 'POST',
            body: JSON.stringify(transactionData)
        });
    }

    // Get transaction history
    async getTransactions(userId) {
        return await this.apiCall(`${this.endpoints.transactions}?userId=${userId}`);
    }

    // Simulate recharge process
    async processRecharge(rechargeData) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Simulate 95% success rate
        if (Math.random() > 0.05) {
            return {
                success: true,
                transactionId: 'TXN' + Date.now(),
                message: 'Recharge successful!',
                data: rechargeData,
                timestamp: new Date().toISOString()
            };
        } else {
            throw new Error('Recharge failed. Please try again.');
        }
    }
}

// Create global instance
window.mockAPI = new MockAPI();

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MockAPI;
}