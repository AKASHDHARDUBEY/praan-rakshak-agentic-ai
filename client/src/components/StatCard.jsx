import React from 'react';

// Reusable Card for Dashboard Statistics
// Displays an icon, a title, and a value.
const StatCard = ({ title, value, icon, color }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 transition hover:shadow-lg">
            <div className={`p-3 rounded-full ${color} text-white`}>
                <span className="text-xl">{icon}</span>
            </div>
            <div>
                <p className="text-gray-500 text-sm font-medium">{title}</p>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );
};

export default StatCard;
