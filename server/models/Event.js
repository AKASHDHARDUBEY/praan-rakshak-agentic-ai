const mongoose = require('mongoose');

// Schema for tracking major events (Festivals, etc.)
// These events are often triggers for patient surges.
const eventSchema = new mongoose.Schema({
    name: { type: String, required: true }, // e.g., 'Diwali'
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    type: { type: String }, // 'Festival', 'Weather Alert', 'Public Gathering'
    description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
