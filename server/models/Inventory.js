const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    category: { type: String, enum: ['Medicine', 'Equipment', 'Supplies'], required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true }, // e.g., 'boxes', 'units', 'liters'
    threshold: { type: Number, required: true }, // Low stock alert level
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inventory', inventorySchema);
