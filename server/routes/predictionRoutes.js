const express = require('express');
const router = express.Router();
const Prediction = require('../models/Prediction');

// GET /api/predictions
// Retrieve all AI-generated predictions
// This is used by the dashboard to show upcoming alerts.
router.get('/', async (req, res) => {
    try {
        // Sort by date so the nearest events show up first
        const predictions = await Prediction.find().sort({ date: 1 });
        res.json(predictions);
    } catch (err) {
        console.error("Error fetching predictions:", err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
