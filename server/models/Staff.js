const mongoose = require('mongoose');

// Schema for Hospital Staff
// This helps us manage shifts and see who is currently available.
const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true }, // Doctor, Nurse, Admin, etc.
    specialization: { type: String }, // e.g., 'Cardiology', 'Pediatrics' - optional for some roles
    shift: { type: String, required: true }, // 'Morning', 'Evening', 'Night'
    status: { type: String, default: 'Active' } // 'Active', 'On Leave', 'Off Duty'
}, { timestamps: true });

module.exports = mongoose.model('Staff', staffSchema);
