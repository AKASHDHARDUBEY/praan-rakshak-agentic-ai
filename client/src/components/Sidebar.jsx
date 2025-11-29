import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white min-h-screen flex flex-col">
            {/* Logo / Brand Area */}
            <div className="p-6 border-b border-gray-700">
                <h1 className="text-2xl font-bold text-blue-400">Praan Rakshak</h1>
                <p className="text-xs text-gray-400 mt-1">AI Hospital Manager</p>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-4 space-y-2">
                <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Dashboard
                </Link>
                <Link to="/inventory" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Inventory
                </Link>
                <Link to="/staffing" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Staffing
                </Link>
                <Link to="/predictions" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    AI Predictions
                </Link>
                <Link to="/business-model" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    Business Model
                </Link>
            </nav>

            {/* Footer Area (Optional) */}
            <div className="p-4 border-t border-gray-700">
                <p className="text-xs text-gray-500">© 2025 TechWaleYaar</p>
            </div>
        </div>
    );
};

export default Sidebar;
