require('dotenv').config({ path: __dirname + '/../.env' });

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoDB = require('../config/db');

const app = express();

// Import Routes
const CreateUser = require('../routes/CreateUser');
const DisplyData = require('../routes/DisplyData');
const OrderData = require('../routes/OrderData');

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS Configuration
app.use(cors({
    origin: process.env.CLIENT_URL || "https://fastfood.bedarimillat.com",
    credentials: true
}));

// Connect Database
mongoDB();

// Routes
app.use('/api', CreateUser);
app.use('/api', DisplyData);
app.use('/api', OrderData);

// Export for Vercel
module.exports = app;

// Local Development Server
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
