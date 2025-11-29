import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', path: '/' },
        { name: 'Inventory', path: '/inventory' },
        { name: 'Staffing', path: '/staffing' },
        { name: 'Predictions', path: '/predictions' },
    ];

    return (
        <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-blue-400">Praan Rakshak</h1>
            </div>
            <nav className="mt-6">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`block py-3 px-6 hover:bg-gray-800 ${location.pathname === item.path ? 'bg-gray-800 border-l-4 border-blue-500' : ''
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
