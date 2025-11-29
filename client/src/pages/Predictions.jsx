import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

const Predictions = () => {
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        // Mock Data
        setPredictions([
            {
                _id: '1',
                date: '2025-10-21',
                predictedPatientCount: 120,
                diseaseType: 'Burn Injuries',
                confidenceScore: 85,
                contributingFactors: ['Diwali Crackers', 'Dry Weather'],
                recommendedActions: ['Stock up on Burn Kits', 'Increase Night Shift Staff', 'Alert Burn Unit']
            },
            {
                _id: '2',
                date: '2025-11-05',
                predictedPatientCount: 200,
                diseaseType: 'Respiratory Issues',
                confidenceScore: 92,
                contributingFactors: ['Severe Smog', 'Crop Burning', 'Low Temperature'],
                recommendedActions: ['Ensure Oxygen Availability', 'Alert Pulmonologists', 'Distribute N95 Masks']
            },
            {
                _id: '3',
                date: '2025-12-15',
                predictedPatientCount: 80,
                diseaseType: 'Viral Fever',
                confidenceScore: 75,
                contributingFactors: ['Seasonal Change', 'High Humidity'],
                recommendedActions: ['Stock Paracetamol', 'Setup Fever Clinic']
            }
        ]);
    }, []);

    return (
        <Layout>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">AI Predictions & Alerts</h1>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">System Active</span>
            </div>

            <div className="space-y-6">
                {predictions.map((pred, index) => (
                    <div key={pred._id} className={`border-l-4 p-6 rounded shadow-lg transition transform hover:scale-[1.01] ${index === 0 ? 'bg-red-50 border-red-500' : 'bg-white border-purple-500'}`}>
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h3 className="text-xl font-bold text-gray-800">{pred.diseaseType} Surge</h3>
                                    {index === 0 && <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded animate-pulse">IMMEDIATE ATTENTION</span>}
                                </div>
                                <p className="text-gray-500 mt-1">Expected Date: <span className="font-semibold">{new Date(pred.date).toLocaleDateString()}</span></p>
                            </div>
                            <div className="text-right">
                                <span className={`text-3xl font-bold ${index === 0 ? 'text-red-600' : 'text-purple-600'}`}>{pred.predictedPatientCount}</span>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Expected Patients</p>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold text-gray-700 text-sm uppercase tracking-wide mb-2">Contributing Factors</p>
                                <div className="flex flex-wrap gap-2">
                                    {pred.contributingFactors.map((factor, idx) => (
                                        <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">{factor}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={`p-3 rounded ${index === 0 ? 'bg-red-100' : 'bg-yellow-50'}`}>
                                <p className={`font-semibold text-sm uppercase tracking-wide mb-2 ${index === 0 ? 'text-red-800' : 'text-yellow-800'}`}>Recommended Actions</p>
                                <ul className={`list-disc list-inside text-sm ${index === 0 ? 'text-red-700' : 'text-yellow-700'}`}>
                                    {pred.recommendedActions.map((action, idx) => (
                                        <li key={idx}>{action}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                            <span className="text-sm text-gray-500">Confidence Score: <span className="font-bold text-gray-800">{pred.confidenceScore}%</span></span>
                            <button className={`px-4 py-2 rounded text-sm font-medium text-white transition ${index === 0 ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700'}`}>
                                View Detailed Report
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Predictions;
