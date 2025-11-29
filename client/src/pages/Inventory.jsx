import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Mock Inventory Data
        // In the future, this will come from the backend API.
        setItems([
            { _id: '1', itemName: 'Oxygen Cylinders', category: 'Equipment', quantity: 45, unit: 'units', threshold: 10 },
            { _id: '2', itemName: 'Paracetamol 500mg', category: 'Medicine', quantity: 500, unit: 'strips', threshold: 100 },
            { _id: '3', itemName: 'N95 Masks', category: 'PPE', quantity: 1200, unit: 'pieces', threshold: 200 },
            { _id: '4', itemName: 'Saline Bottles', category: 'Medicine', quantity: 8, unit: 'bottles', threshold: 20 }, // Low Stock Example
            { _id: '5', itemName: 'Burn Kits', category: 'Supplies', quantity: 5, unit: 'kits', threshold: 15 } // Critical Low Stock
        ]);
    }, []);

    return (
        <Layout>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    + Add New Item
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Item Name</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item._id} className="hover:bg-gray-50">
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap font-medium">{item.itemName}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-gray-200 opacity-50 rounded-full"></span>
                                        <span className="relative">{item.category}</span>
                                    </span>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{item.quantity} {item.unit}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {item.quantity < item.threshold ? (
                                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span className="relative">Low Stock</span>
                                        </span>
                                    ) : (
                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span className="relative">In Stock</span>
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Inventory;
