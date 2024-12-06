const { createCustomer, listCustomers, createPayment, createSubscription } = require('../services/asaasService');

exports.createCustomer = async (req, res) => {
    try {
        const customerData = req.body;
        const response = await createCustomer(customerData);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.listCustomers = async (req, res) => {
    try {
        const params = req.query;
        const response = await listCustomers(params);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createPayment = async (req, res) => {
    try {
        const paymentData = req.body;
        const response = await createPayment(paymentData);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createSubscription = async (req,res) => {
    try {
        const subscriptionData = req.body;
        const response = await createSubscription(subscriptionData);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
