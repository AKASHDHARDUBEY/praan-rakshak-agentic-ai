import React from 'react';
import Layout from '../components/Layout';

const BusinessModel = () => {
    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Business Model & Strategy</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Subscription Plans Section */}
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="text-2xl mr-2">💰</span> Subscription Plans
                    </h2>

                    <div className="space-y-6">
                        {/* Tier 1 Plan */}
                        <div className="border border-blue-200 rounded-xl p-6 bg-blue-50 transition hover:shadow-md">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-blue-900">Tier-1 Cities</h3>
                                    <p className="text-sm text-blue-600 mt-1">For large multi-specialty hospitals</p>
                                </div>
                                <span className="bg-blue-200 text-blue-800 text-xs font-bold px-2 py-1 rounded">PREMIUM</span>
                            </div>
                            <p className="text-4xl font-bold text-gray-800 mt-4">₹24 Lakhs <span className="text-sm font-normal text-gray-500">/ year</span></p>

                            <ul className="mt-6 space-y-3 text-sm text-gray-700">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Full AI Predictive Suite</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited Staff Accounts</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Real-time Disease Monitoring</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 Priority Support</li>
                            </ul>
                            <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">Contact Sales</button>
                        </div>

                        {/* Tier 2 Plan */}
                        <div className="border border-green-200 rounded-xl p-6 bg-green-50 transition hover:shadow-md">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-green-900">Tier-2 Cities</h3>
                                    <p className="text-sm text-green-600 mt-1">For regional healthcare centers</p>
                                </div>
                                <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded">STANDARD</span>
                            </div>
                            <p className="text-4xl font-bold text-gray-800 mt-4">₹15 Lakhs <span className="text-sm font-normal text-gray-500">/ year</span></p>

                            <ul className="mt-6 space-y-3 text-sm text-gray-700">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Core Prediction Engine</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 50 Staff Accounts</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Weekly Reports</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Standard Support</li>
                            </ul>
                            <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition">Get Started</button>
                        </div>
                    </div>
                </div>

                {/* GTM Strategy Section */}
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="text-2xl mr-2">🚀</span> Go-To-Market Strategy
                    </h2>

                    <div className="space-y-8 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200"></div>

                        <div className="relative pl-10">
                            <div className="absolute left-2 top-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
                            <div className="flex items-center mb-2">
                                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded uppercase mr-2">Phase 1</span>
                                <h3 className="font-bold text-gray-800">Pilot Launch</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Launch in select Tier-2 cities to gather feedback and refine the prediction algorithms with real-world data.
                                Focus on building case studies and proving ROI.
                            </p>
                        </div>

                        <div className="relative pl-10">
                            <div className="absolute left-2 top-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white"></div>
                            <div className="flex items-center mb-2">
                                <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded uppercase mr-2">Phase 2</span>
                                <h3 className="font-bold text-gray-800">Expansion</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Expand to Tier-1 cities targeting high-density population centers and hospitals with history of resource crunches.
                                Introduce advanced features like real-time IoT integration.
                            </p>
                        </div>

                        <div className="relative pl-10">
                            <div className="absolute left-2 top-1 w-4 h-4 bg-pink-500 rounded-full border-2 border-white"></div>
                            <div className="flex items-center mb-2">
                                <span className="bg-pink-100 text-pink-800 text-xs font-bold px-2 py-1 rounded uppercase mr-2">Target Audience</span>
                                <h3 className="font-bold text-gray-800">Key Stakeholders</h3>
                            </div>
                            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                                <li>Private & Public Hospitals</li>
                                <li>Hospital Administrators</li>
                                <li>Government Health Departments</li>
                                <li>Emergency Response Teams</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BusinessModel;
