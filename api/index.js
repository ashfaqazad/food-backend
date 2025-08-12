// require('dotenv').config();
require('dotenv').config({ path: __dirname + '/../.env' });


const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoDB = require('../config/db');

// Routes
const CreateUser = require('../routes/CreateUser');
const DisplyData = require('../routes/DisplyData');
const OrderData = require('../routes/OrderData');

// Middleware
app.use(express.json());
app.use(cookieParser());


app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));


// app.use(cors({
//     origin: process.env.CLIENT_URL || "http://localhost:3000",
//     credentials: true
// }));

// Connect DB
mongoDB();

// Routes
app.use('/api', CreateUser);
app.use('/api', DisplyData);
app.use('/api', OrderData);

// Export for Vercel
module.exports = app;

// Local server run
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

















// require('dotenv').config();

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const mongoDB = require('../config/db');

// const CreateUser = require('../routes/CreateUser');
// const DisplyData = require('../routes/DisplyData');
// const OrderData = require('../routes/OrderData');

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//     origin: process.env.CLIENT_URL || "http://localhost:3000",
//     credentials: true
// }));

// mongoDB();

// app.use('/api', CreateUser);
// app.use('/api', DisplyData);
// app.use('/api', OrderData);

// // Vercel ko direct listen nahi karna hota, isliye export karo
// module.exports = app;



// if (process.env.NODE_ENV !== 'production') {
//     const port = process.env.PORT || 4000;
//     app.listen(port, () => {
//         console.log(`Server running on port ${port}`);
//     });
// }










// // // In your main app file (e.g., index.js)
// // const express = require('express');
// // const app = express();
// // const port = 4000;
// // const cors = require('cors');
// // const dotenv = require('dotenv');
// // const mongoDB = require('../config/db');  // Import the mongoDB function
// // const CreateUser = require('../routes/CreateUser'); // Update the path as needed
// // const DisplyData = require('../routes/DisplyData'); // Update the path as needed
// // const OrderData = require('../routes/OrderData'); // Update the path as needed

// // const cookieParser = require('cookie-parser');

// // dotenv.config();

// // app.use(express.json());
// // app.use(cookieParser());
// // app.use(cors({
// //     origin: "http://localhost:3000",
// //     credentials: true
// // }));

// // // Connect to MongoDB
// // mongoDB();

// // // Use the route files
// // app.use('/api', CreateUser);  // Ensure the routes in CreateUser are prefixed with /api
// // app.use('/api', DisplyData);  // Ensure the routes in DisplyData are prefixed with /api
// // app.use('/api', OrderData);   // Corrected from './api' to '/api'

// // app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`);
// // });
