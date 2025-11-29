import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Predictions = () => {
    const [predictions, setPredictions] = useState([]);
    const [selectedPrediction, setSelectedPrediction] = useState(null);

    useEffect(() => {
        // Mock Prediction Data
        // This simulates the output from our Python AI Engine.
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
            {/* Page Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">AI Predictions & Alerts</h1>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    System Active
                </span>
            </div>

            {/* Predictions List */}
            <div className="space-y-6">
                {predictions.map((pred, index) => (
                    <div key={pred._id} className={`border-l-4 p-6 rounded-lg shadow-md transition transform hover:scale-[1.01] ${index === 0 ? 'bg-red-50 border-red-500' : 'bg-white border-purple-500'}`}>
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-xl font-bold text-gray-800">{pred.diseaseType} Surge</h3>
                                    {index === 0 && <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded animate-pulse font-bold">IMMEDIATE ATTENTION</span>}
                                </div>
                                <p className="text-gray-500 mt-1">Expected Date: <span className="font-semibold text-gray-700">{new Date(pred.date).toLocaleDateString()}</span></p>
                            </div>
                            <div className="text-right">
                                <span className={`text-3xl font-bold ${index === 0 ? 'text-red-600' : 'text-purple-600'}`}>{pred.predictedPatientCount}</span>
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Expected Patients</p>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Contributing Factors */}
                            <div>
                                <p className="font-semibold text-gray-700 text-sm uppercase tracking-wide mb-2">Contributing Factors</p>
                                <div className="flex flex-wrap gap-2">
                                    {pred.contributingFactors.map((factor, idx) => (
                                        <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">{factor}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Recommended Actions */}
                            <div className={`p-4 rounded-lg ${index === 0 ? 'bg-red-100' : 'bg-yellow-50'}`}>
                                <p className={`font-semibold text-sm uppercase tracking-wide mb-2 ${index === 0 ? 'text-red-800' : 'text-yellow-800'}`}>Recommended Actions</p>
                                <ul className={`list-disc list-inside text-sm ${index === 0 ? 'text-red-700' : 'text-yellow-700'}`}>
                                    {pred.recommendedActions.map((action, idx) => (
                                        <li key={idx} className="mb-1">{action}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Footer & Action Button */}
                        <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                            <span className="text-sm text-gray-500">Confidence Score: <span className="font-bold text-gray-800">{pred.confidenceScore}%</span></span>
                            <button
                                onClick={() => setSelectedPrediction(pred)}
                                className={`px-6 py-2 rounded-lg text-sm font-medium text-white transition shadow-md ${index === 0 ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700'}`}
                            >
                                View Detailed Report
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Detailed Report Modal */}
            {selectedPrediction && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-xl">
                            <h2 className="text-2xl font-bold text-gray-800">Detailed Report: {selectedPrediction.diseaseType}</h2>
                            <button onClick={() => setSelectedPrediction(null)} className="text-gray-400 hover:text-gray-600 text-3xl leading-none">&times;</button>
                        </div>

                        <div className="p-8 space-y-8">
                            {/* Key Stats */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 text-center">
                                    <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">Projected Impact</p>
                                    <p className="text-4xl font-bold text-blue-800 mt-2">{selectedPrediction.predictedPatientCount}</p>
                                    <p className="text-sm text-blue-600 mt-1">Patients Expected</p>
                                </div>
                                <div className="bg-purple-50 p-5 rounded-lg border border-purple-100 text-center">
                                    <p className="text-sm text-purple-600 font-semibold uppercase tracking-wide">Confidence Level</p>
                                    <p className="text-4xl font-bold text-purple-800 mt-2">{selectedPrediction.confidenceScore}%</p>
                                    <p className="text-sm text-purple-600 mt-1">AI Certainty</p>
                                </div>
                            </div>

                            {/* Resource Requirements */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Resource Requirements</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1 font-medium text-gray-700">
                                            <span>Doctors Needed</span>
                                            <span>12</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1 font-medium text-gray-700">
                                            <span>Nursing Staff</span>
                                            <span>25</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1 font-medium text-gray-700">
                                            <span>ICU Beds</span>
                                            <span>8</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Analysis */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Timeline Analysis</h3>
                                <div className="border-l-2 border-gray-200 ml-3 space-y-6">
                                    <div className="relative pl-8">
                                        <div className="absolute -left-2 top-1.5 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Today</p>
                                        <p className="font-medium text-gray-800">Early Warning Signals Detected</p>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute -left-2 top-1.5 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">T-minus 5 Days</p>
                                        <p className="font-medium text-gray-800">Recommended Stock Re-supply</p>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute -left-2 top-1.5 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">{new Date(selectedPrediction.date).toLocaleDateString()}</p>
                                        <p className="font-bold text-red-600 text-lg">Predicted Peak Surge</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end space-x-4 rounded-b-xl">
                            <button onClick={() => setSelectedPrediction(null)} className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition">Close</button>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-md transition">Export PDF Report</button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default Predictions;
