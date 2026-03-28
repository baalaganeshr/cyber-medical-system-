import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DoctorRegister from './pages/DoctorRegister';
import HospitalRegister from './pages/HospitalRegister';
import PatientRegister from './pages/PatientRegister';
import PatientDetails from './pages/PatientDetails';
import RecordDetails from './pages/RecordDetails';
import ExamineDetails from './pages/ExamineDetails';
import MedicalImageGallery from './pages/MedicalImageGallery';
import TransactionView from './pages/TransactionView';
import Home from './pages/Home';
import './style.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<DoctorRegister />} />
        <Route path="/hospital" element={<HospitalRegister />} />
        <Route path="/patient" element={<PatientRegister />} />
        <Route path="/patient-details" element={<PatientDetails />} />
        <Route path="/medical-record" element={<RecordDetails />} />
        <Route path="/examine-details" element={<ExamineDetails />} />
        <Route path="/gallery" element={<MedicalImageGallery />} />
        <Route path="/transaction" element={<TransactionView />} />
        </Routes>
      </div>
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#194794', color: '#fff', marginTop: 'auto' }}>
        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Cyber Medical System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
