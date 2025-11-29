# Praan Rakshak – Agentic AI for Predictive Hospital Management
### Built for Mumbai Hackathon 2025 | Team: TechWaleYaar

Praan Rakshak is an **Agentic AI-powered predictive hospital management system** that forecasts patient surge during **festivals (Diwali, Holi, Ganesh Chaturthi), pollution spikes, and epidemic outbreaks**. It helps hospitals automate resource planning by predicting future patient load, required medical supplies, and optimal staffing levels—reducing overcrowding and improving healthcare efficiency.

---

## � Key Features
- **🔮 Predictive Patient Surge Forecasting**: AI-driven insights on upcoming patient loads.
- **⚕️ Resource Recommendations**: Automated suggestions for staffing and medical supplies.
- **📦 Inventory Management**: Track stock levels and receive low-stock alerts.
- **👨‍⚕️ Staff Management**: Manage shifts and view active staff availability.
- **📊 Interactive Dashboard**: Centralized view of all critical hospital metrics.
- **💼 Business Model**: Integrated view of subscription plans and GTM strategy.

---

## 🛠️ Tech Stack
- **Frontend**: React (Vite), Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **AI/ML**: Python (Planned Integration)

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (Local or Atlas)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd praan-rakshak-agentic-ai
```

### 2. Backend Setup
The backend runs on **Port 8000** (to avoid conflicts with AirPlay on MacOS).

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/praanrakshak
```

Start the server:
```bash
node index.js
```
*You should see: `Server running on port 8000`*

### 3. Frontend Setup
The frontend runs on **Port 5173**.

```bash
cd ../client
npm install
npm run dev
```

### 4. Running the Demo
Open your browser and navigate to:
👉 **http://localhost:5173/**

> **Note**: The current demo version uses **Mock Data** for the frontend to ensure a stable presentation without requiring a live database connection for all features.

---

## 📂 Project Structure
```
praan-rakshak-agentic-ai/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components (Sidebar, Layout, StatCard)
│   │   ├── pages/          # Application pages (Dashboard, Inventory, Predictions, etc.)
│   │   └── App.jsx         # Main Routing
├── server/                 # Node.js Backend
│   ├── models/             # Mongoose Schemas (Inventory, Staff, Prediction)
│   ├── routes/             # API Routes
│   └── index.js            # Server Entry Point
└── README.md               # Project Documentation
```

---

## � Business Model
- **Tier-1 Cities**: ₹24 Lakhs/year (Full Suite)
- **Tier-2 Cities**: ₹15 Lakhs/year (Core Features)

---

## � Problem Statement
Healthcare centers in India face unpredictable patient surges during festivals, air pollution periods, and infectious outbreaks, resulting in **shortage of doctors, delayed treatments, long wait times, and stock depletion of medical essentials**.

### **Goal**
To build an Agentic AI system that analyzes multi-source data and **proactively recommends** resource allocation, staffing plans, and supply management before emergencies happen.

