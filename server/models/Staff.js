const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, enum: ['Doctor', 'Nurse', 'Support', 'Admin'], required: true },
    specialization: { type: String }, // e.g., 'Cardiology', 'General'
    shift: { type: String, enum: ['Morning', 'Evening', 'Night'], required: true },
    status: { type: String, enum: ['On Duty', 'Off Duty', 'On Leave'], default: 'Off Duty' }
});

module.exports = mongoose.model('Staff', staffSchema);
