const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff');

// GET /api/staff
// Get a list of all staff members
router.get('/', async (req, res) => {
    try {
        const staffMembers = await Staff.find();
        res.json(staffMembers);
    } catch (err) {
        console.error("Error fetching staff:", err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// POST /api/staff
// Register a new staff member
router.post('/', async (req, res) => {
    const newStaff = new Staff(req.body);
    try {
        const savedStaff = await newStaff.save();
        res.status(201).json(savedStaff);
    } catch (err) {
        console.error("Error adding staff:", err);
        res.status(400).json({ message: 'Failed to add staff member' });
    }
});

module.exports = router;
