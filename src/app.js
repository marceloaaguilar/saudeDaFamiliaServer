const express       = require('express');
const asaasRoutes   = require('./routes/asaasRoutes');
const cors          = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/api/asaas', asaasRoutes);

module.exports = app;