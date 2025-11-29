const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff');

// GET all staff
router.get('/', async (req, res) => {
    try {
        const staff = await Staff.find();
        res.json(staff);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new staff
router.post('/', async (req, res) => {
    const newStaff = new Staff(req.body);
    try {
        const savedStaff = await newStaff.save();
        res.status(201).json(savedStaff);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
