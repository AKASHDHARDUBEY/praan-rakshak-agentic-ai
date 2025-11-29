const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true }, // e.g., 'Diwali 2025'
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    type: { type: String, enum: ['Festival', 'Pollution Spike', 'Epidemic'], required: true },
    description: { type: String }
});

module.exports = mongoose.model('Event', eventSchema);
