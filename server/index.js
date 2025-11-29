// Main server entry point
// This is where we set up Express, connect to the DB, and register our routes.

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
// Default to port 8000 if not specified (Port 5000 is often taken by AirPlay on Mac)
const PORT = process.env.PORT || 8000;

// Import our API routes
const inventoryRoutes = require('./routes/inventoryRoutes');
const staffRoutes = require('./routes/staffRoutes');
const predictionRoutes = require('./routes/predictionRoutes');

// Middleware setup
app.use(cors()); // Allow cross-origin requests (needed for React frontend)
app.use(express.json()); // Parse incoming JSON payloads

// Database Connection
// We use Mongoose to talk to MongoDB. Make sure your local Mongo instance is running!
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// API Route Registration
// We prefix everything with /api to keep it clean
app.use('/api/inventory', inventoryRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/predictions', predictionRoutes);

// Simple health check route to see if server is alive
app.get('/', (req, res) => {
    res.send('Praan Rakshak API is up and running!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
