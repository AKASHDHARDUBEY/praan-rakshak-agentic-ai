const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    predictedPatientCount: { type: Number, required: true },
    diseaseType: { type: String, required: true }, // e.g., 'Respiratory', 'Burn Injuries'
    confidenceScore: { type: Number }, // 0-100
    contributingFactors: [{ type: String }], // e.g., ['Diwali Pollution', 'Winter Smog']
    recommendedActions: [{ type: String }] // e.g., 'Increase Oxygen Supply', 'Call extra staff'
});

module.exports = mongoose.model('Prediction', predictionSchema);
