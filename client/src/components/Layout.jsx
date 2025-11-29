import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar />
            <div className="flex-1 ml-64">
                <header className="bg-white shadow p-4 flex justify-between items-center relative">
                    <h2 className="text-xl font-semibold text-gray-800">Hospital Management Dashboard</h2>
                    <div className="relative">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center space-x-4 focus:outline-none hover:bg-gray-50 p-2 rounded transition"
                        >
                            <span className="text-gray-600 font-medium">Admin User</span>
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                A
                            </div>
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                                <div className="border-t border-gray-100 my-1"></div>
                                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Sign out</a>
                            </div>
                        )}
                    </div>
                </header>
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
