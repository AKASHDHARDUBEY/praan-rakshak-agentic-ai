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

    const [selectedPrediction, setSelectedPrediction] = useState(null);

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
                            <button
                                onClick={() => setSelectedPrediction(pred)}
                                className={`px-4 py-2 rounded text-sm font-medium text-white transition ${index === 0 ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700'}`}
                            >
                                View Detailed Report
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Detailed Report Modal */}
            {selectedPrediction && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-800">Detailed Report: {selectedPrediction.diseaseType}</h2>
                            <button onClick={() => setSelectedPrediction(null)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded">
                                    <p className="text-sm text-blue-600 font-semibold">Projected Impact</p>
                                    <p className="text-3xl font-bold text-blue-800">{selectedPrediction.predictedPatientCount} <span className="text-base font-normal text-blue-600">Patients</span></p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded">
                                    <p className="text-sm text-purple-600 font-semibold">Confidence Level</p>
                                    <p className="text-3xl font-bold text-purple-800">{selectedPrediction.confidenceScore}%</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Resource Requirements</h3>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>Doctors Needed</span>
                                            <span className="font-bold">12</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>Nursing Staff</span>
                                            <span className="font-bold">25</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>ICU Beds</span>
                                            <span className="font-bold">8</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-red-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Timeline Analysis</h3>
                                <div className="border-l-2 border-gray-200 ml-2 space-y-4">
                                    <div className="relative pl-6">
                                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gray-400 rounded-full"></div>
                                        <p className="text-sm text-gray-500">Today</p>
                                        <p className="font-medium">Early Warning Signals Detected</p>
                                    </div>
                                    <div className="relative pl-6">
                                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <p className="text-sm text-gray-500">T-minus 5 Days</p>
                                        <p className="font-medium">Recommended Stock Re-supply</p>
                                    </div>
                                    <div className="relative pl-6">
                                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-red-500 rounded-full"></div>
                                        <p className="text-sm text-gray-500">{new Date(selectedPrediction.date).toLocaleDateString()}</p>
                                        <p className="font-bold text-red-600">Predicted Peak Surge</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end space-x-3">
                            <button onClick={() => setSelectedPrediction(null)} className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">Close</button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Export PDF</button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default Predictions;
