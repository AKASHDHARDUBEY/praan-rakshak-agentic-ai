const mongoose = require('mongoose');

// Schema for tracking hospital supplies
// We need to keep track of quantity and set a threshold for low-stock alerts.
const inventorySchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    category: { type: String, required: true }, // e.g., 'Medicine', 'Equipment', 'PPE'
    quantity: { type: Number, required: true },
    unit: { type: String, required: true }, // e.g., 'boxes', 'units', 'kg'
    threshold: { type: Number, default: 10 } // Alert when stock drops below this
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

module.exports = mongoose.model('Inventory', inventorySchema);
