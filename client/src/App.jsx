import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Imports
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Staffing from './pages/Staffing';
import Predictions from './pages/Predictions';
import BusinessModel from './pages/BusinessModel';

// Main Application Component
// Handles routing for the entire application.
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Dashboard is the default home page */}
        <Route path="/" element={<Dashboard />} />

        {/* Feature Routes */}
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/staffing" element={<Staffing />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/business-model" element={<BusinessModel />} />
      </Routes>
    </Router>
  );
};

export default App;
