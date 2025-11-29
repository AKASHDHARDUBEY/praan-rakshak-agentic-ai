import React from 'react';
import Layout from '../components/Layout';

const BusinessModel = () => {
    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-6">Business Model & Strategy</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Subscription Plans */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Subscription Plans</h2>
                    <div className="space-y-6">
                        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                            <h3 className="text-lg font-bold text-blue-800">Tier-1 Cities</h3>
                            <p className="text-3xl font-bold text-gray-800 mt-2">₹24 Lakhs <span className="text-sm font-normal text-gray-500">/ year</span></p>
                            <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                <li className="flex items-center">✅ Full AI Predictive Suite</li>
                                <li className="flex items-center">✅ Unlimited Staff Accounts</li>
                                <li className="flex items-center">✅ Real-time Disease Monitoring</li>
                                <li className="flex items-center">✅ 24/7 Priority Support</li>
                            </ul>
                        </div>

                        <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                            <h3 className="text-lg font-bold text-green-800">Tier-2 Cities</h3>
                            <p className="text-3xl font-bold text-gray-800 mt-2">₹15 Lakhs <span className="text-sm font-normal text-gray-500">/ year</span></p>
                            <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                <li className="flex items-center">✅ Core Prediction Engine</li>
                                <li className="flex items-center">✅ Up to 50 Staff Accounts</li>
                                <li className="flex items-center">✅ Weekly Reports</li>
                                <li className="flex items-center">✅ Standard Support</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* GTM Strategy */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Go-To-Market Strategy</h2>
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center mb-2">
                                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded uppercase mr-2">Phase 1</span>
                                <h3 className="font-bold text-gray-800">Pilot Launch</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Launch in select Tier-2 cities to gather feedback and refine the prediction algorithms with real-world data.</p>
                        </div>
                        <div>
                            <div className="flex items-center mb-2">
                                <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded uppercase mr-2">Phase 2</span>
                                <h3 className="font-bold text-gray-800">Expansion</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Expand to Tier-1 cities targeting high-density population centers and hospitals with history of resource crunches.</p>
                        </div>
                        <div>
                            <div className="flex items-center mb-2">
                                <span className="bg-pink-100 text-pink-800 text-xs font-bold px-2 py-1 rounded uppercase mr-2">Target Audience</span>
                                <h3 className="font-bold text-gray-800">Key Stakeholders</h3>
                            </div>
                            <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                                <li>Private & Public Hospitals</li>
                                <li>Hospital Administrators</li>
                                <li>Government Health Departments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BusinessModel;
