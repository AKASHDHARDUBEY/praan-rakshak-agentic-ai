const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');

// GET /api/inventory
// Fetch all inventory items from the database
router.get('/', async (req, res) => {
    try {
        const items = await Inventory.find();
        res.json(items);
    } catch (err) {
        // Log the error for debugging
        console.error("Error fetching inventory:", err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// POST /api/inventory
// Add a new item to the inventory
router.post('/', async (req, res) => {
    // Basic validation: check if required fields are present
    const { itemName, quantity } = req.body;
    if (!itemName || !quantity) {
        return res.status(400).json({ message: 'Item name and quantity are required' });
    }

    const newItem = new Inventory(req.body);
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        console.error("Error adding inventory:", err);
        res.status(400).json({ message: 'Failed to add item' });
    }
});

module.exports = router;
