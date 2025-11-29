import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Mock Data
        setItems([
            { _id: '1', itemName: 'Oxygen Cylinders', category: 'Equipment', quantity: 45, unit: 'units', threshold: 50 },
            { _id: '2', itemName: 'Paracetamol', category: 'Medicine', quantity: 5000, unit: 'strips', threshold: 1000 },
            { _id: '3', itemName: 'N95 Masks', category: 'Supplies', quantity: 2000, unit: 'units', threshold: 500 },
            { _id: '4', itemName: 'Burn Kits', category: 'Supplies', quantity: 80, unit: 'kits', threshold: 100 },
            { _id: '5', itemName: 'Inhalers', category: 'Medicine', quantity: 400, unit: 'units', threshold: 100 },
            { _id: '6', itemName: 'IV Fluids', category: 'Medicine', quantity: 120, unit: 'bottles', threshold: 150 }
        ]);
    }, []);

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>
            <div className="bg-white shadow rounded-lg overflow-hidden">
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
                            <tr key={item._id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.itemName}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.category}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.quantity} {item.unit}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${item.quantity < item.threshold ? 'text-red-900' : 'text-green-900'}`}>
                                        <span aria-hidden className={`absolute inset-0 opacity-50 rounded-full ${item.quantity < item.threshold ? 'bg-red-200' : 'bg-green-200'}`}></span>
                                        <span className="relative">{item.quantity < item.threshold ? 'Low Stock' : 'In Stock'}</span>
                                    </span>
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
