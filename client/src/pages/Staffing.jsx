import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

const Staffing = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        // Mock Data
        setStaff([
            { _id: '1', name: 'Dr. Sharma', role: 'Doctor', specialization: 'Pulmonology', shift: 'Morning', status: 'On Duty' },
            { _id: '2', name: 'Nurse Priya', role: 'Nurse', shift: 'Morning', status: 'On Duty' },
            { _id: '3', name: 'Dr. Verma', role: 'Doctor', specialization: 'Burn Specialist', shift: 'Evening', status: 'Off Duty' },
            { _id: '4', name: 'Nurse Rahul', role: 'Nurse', shift: 'Night', status: 'Off Duty' },
            { _id: '5', name: 'Dr. Iyer', role: 'Doctor', specialization: 'General', shift: 'Night', status: 'On Leave' },
            { _id: '6', name: 'Nurse Anjali', role: 'Nurse', shift: 'Evening', status: 'On Duty' }
        ]);
    }, []);

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-6">Staff Management</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staff.map(member => (
                    <div key={member._id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                        <p className="text-gray-600">{member.role} - {member.specialization || 'General'}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{member.shift}</span>
                            <span className={`text-sm px-2 py-1 rounded ${member.status === 'On Duty' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                {member.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Staffing;
