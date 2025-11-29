import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import StatCard from '../components/StatCard';
import axios from 'axios';

const Dashboard = () => {
    const [stats, setStats] = useState({
        inventoryCount: 0,
        staffCount: 0,
        predictionsCount: 0,
        activeAlerts: 0
    });

    useEffect(() => {
        // Mock Data for Demo
        setStats({
            inventoryCount: 15,
            staffCount: 8,
            predictionsCount: 3,
            activeAlerts: 2
        });
    }, []);

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Inventory Items" value={stats.inventoryCount} icon="📦" color="bg-blue-500" />
                <StatCard title="Active Staff" value={stats.staffCount} icon="👨‍⚕️" color="bg-green-500" />
                <StatCard title="Upcoming Predictions" value={stats.predictionsCount} icon="🔮" color="bg-purple-500" />
                <StatCard title="High Risk Alerts" value={stats.activeAlerts} icon="⚠️" color="bg-red-500" />
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="flex space-x-4">
                    <Link to="/inventory" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Inventory</Link>
                    <Link to="/staffing" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Manage Staff</Link>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
