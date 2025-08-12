import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Debug: Environment variable check
console.log("🔍 Environment Variable Check");
if (!process.env.DATABASE) {
  console.error("❌ DATABASE env variable is missing!");
} else {
  console.log("✅ DATABASE env variable found (hidden for security)");
}

// MongoDB Connection
console.log("📡 Connecting to MongoDB...");
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// Test route
app.get("/", (req, res) => {
  console.log("📥 GET / request received");
  res.send("Server is running fine!");
});

// Example API route
app.get("/api/test", (req, res) => {
  console.log("📥 GET /api/test request received");
  res.json({ status: "ok", message: "API is working" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.message);
  res.status(500).json({ error: err.message });
});

// Serverless export for Vercel
export default app;








// require('dotenv').config({ path: __dirname + '/../.env' });

// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const mongoDB = require('../config/db');

// const app = express();

// // Import Routes
// const CreateUser = require('../routes/CreateUser');
// const DisplyData = require('../routes/DisplyData');
// const OrderData = require('../routes/OrderData');

// // Middleware
// app.use(express.json());
// app.use(cookieParser());

// // CORS Configuration
// app.use(cors({
//     origin: process.env.CLIENT_URL || "https://fastfood.bedarimillat.com",
//     credentials: true
// }));

// // Connect Database
// mongoDB();

// // Routes
// app.use('/api', CreateUser);
// app.use('/api', DisplyData);
// app.use('/api', OrderData);

// // Export for Vercel
// module.exports = app;

// // Local Development Server
// if (process.env.NODE_ENV !== 'production') {
//     const port = process.env.PORT || 4000;
//     app.listen(port, () => {
//         console.log(`Server running on port ${port}`);
//     });
// }
