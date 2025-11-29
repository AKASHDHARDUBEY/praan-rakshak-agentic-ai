import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Staffing = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        // Mock Staff Data
        setStaff([
            { _id: '1', name: 'Dr. Rajesh Kumar', role: 'Doctor', specialization: 'Cardiologist', shift: 'Morning', status: 'Active' },
            { _id: '2', name: 'Nurse Anjali', role: 'Nurse', specialization: 'ICU', shift: 'Night', status: 'Active' },
            { _id: '3', name: 'Dr. Priya Singh', role: 'Doctor', specialization: 'Pediatrician', shift: 'Evening', status: 'On Leave' },
            { _id: '4', name: 'Ramesh Gupta', role: 'Support', specialization: 'Ward Boy', shift: 'Morning', status: 'Active' }
        ]);
    }, []);

    return (
        <Layout>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Staff Management</h1>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    + Add Staff Member
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staff.map(member => (
                    <div key={member._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                <p className="text-blue-600 font-medium">{member.role} <span className="text-gray-400 text-sm">| {member.specialization}</span></p>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {member.status}
                            </span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-gray-600 text-sm">Shift: <span className="font-semibold text-gray-800">{member.shift}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Staffing;
