const express = require('express');
const router = express.Router();
const asaasController = require('../controllers/asaasController');

router.post('/customer', asaasController.createCustomer);
router.get('/customers', asaasController.listCustomers);
router.post('/payment', asaasController.createPayment);
router.post('/subscription', asaasController.createSubscription);

module.exports = router;
