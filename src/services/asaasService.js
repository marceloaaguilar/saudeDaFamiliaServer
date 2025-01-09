const axios = require('axios');
require('dotenv').config();

const asaasApi = axios.create({
    baseURL: process.env.ASAAS_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'access_token': process.env.ASAAS_API_KEY,
    },
});

const createCustomer = async (customerData) => {
    try {
        const response = await asaasApi.post('/customers', customerData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        throw new Error('Falha ao criar cliente');
    }
};

const listCustomers = async (cpfCnpj) => {
    try {
        const response = await asaasApi.get('/customers',{
            params: cpfCnpj
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao listar clientes:', error.response ? error.response.data : error.message);
        throw new Error('Falha ao listar clientes');
    }
};

const createPayment = async (paymentData) => {
    try {
        const response = await asaasApi.post('/payments', paymentData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar pagamento:', error.response ? error.response.data : error.message);
        throw new Error('Falha ao criar pagamento');
    }
};

const createSubscription = async (subscriptionData) => {
    try {
        const response = await asaasApi.post('/subscriptions', subscriptionData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar pagamento:', error.response ? error.response.data : error.message);
        throw new Error('Falha ao criar pagamento');
    }
};

module.exports = {
    createCustomer,
    listCustomers,
    createPayment,
    createSubscription
};
