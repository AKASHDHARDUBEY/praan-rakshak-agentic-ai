const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Inventory = require('./models/Inventory');
const Staff = require('./models/Staff');
const Prediction = require('./models/Prediction');
const Event = require('./models/Event');

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/praanrakshak');
        console.log('MongoDB connected for seeding');

        await Inventory.deleteMany({});
        await Staff.deleteMany({});
        await Prediction.deleteMany({});
        await Event.deleteMany({});

        const inventory = await Inventory.insertMany([
            { itemName: 'Oxygen Cylinders', category: 'Equipment', quantity: 150, unit: 'units', threshold: 50 },
            { itemName: 'Paracetamol', category: 'Medicine', quantity: 5000, unit: 'strips', threshold: 1000 },
            { itemName: 'N95 Masks', category: 'Supplies', quantity: 2000, unit: 'units', threshold: 500 },
            { itemName: 'Burn Kits', category: 'Supplies', quantity: 300, unit: 'kits', threshold: 100 },
            { itemName: 'Inhalers', category: 'Medicine', quantity: 400, unit: 'units', threshold: 100 }
        ]);

        const staff = await Staff.insertMany([
            { name: 'Dr. Sharma', role: 'Doctor', specialization: 'Pulmonology', shift: 'Morning', status: 'On Duty' },
            { name: 'Nurse Priya', role: 'Nurse', shift: 'Morning', status: 'On Duty' },
            { name: 'Dr. Verma', role: 'Doctor', specialization: 'Burn Specialist', shift: 'Evening', status: 'Off Duty' },
            { name: 'Nurse Rahul', role: 'Nurse', shift: 'Night', status: 'Off Duty' }
        ]);

        const events = await Event.insertMany([
            { name: 'Diwali 2025', startDate: new Date('2025-10-20'), endDate: new Date('2025-10-25'), type: 'Festival', description: 'Expected surge in burn cases and respiratory issues due to pollution.' },
            { name: 'Winter Smog', startDate: new Date('2025-11-01'), endDate: new Date('2026-01-31'), type: 'Pollution Spike', description: 'High AQI levels leading to respiratory complications.' }
        ]);

        const predictions = await Prediction.insertMany([
            { date: new Date('2025-10-21'), predictedPatientCount: 120, diseaseType: 'Burn Injuries', confidenceScore: 85, contributingFactors: ['Diwali Crackers'], recommendedActions: ['Stock up on Burn Kits', 'Increase Night Shift Staff'] },
            { date: new Date('2025-11-05'), predictedPatientCount: 200, diseaseType: 'Respiratory', confidenceScore: 90, contributingFactors: ['Severe Smog'], recommendedActions: ['Ensure Oxygen Availability', 'Alert Pulmonologists'] }
        ]);

        console.log('Data seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
