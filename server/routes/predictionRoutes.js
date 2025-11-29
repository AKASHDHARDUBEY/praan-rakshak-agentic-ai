const express = require('express');
const router = express.Router();
const Prediction = require('../models/Prediction');

// GET all predictions
router.get('/', async (req, res) => {
    try {
        const predictions = await Prediction.find().sort({ date: 1 });
        res.json(predictions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
