import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Home = () => {
  return (
    <div className="main-wrapper">
      <div className="card" style={{ textAlign: 'center', padding: '40px 20px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#007bff' }}>Welcome to Cyber Medical System</h2>
        <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
          A decentralized and secure healthcare management platform. Please select an action below to get started.
        </p>
      </div>

      <div className="dashboard-grid">
        <div className="card" style={{ textAlign: 'center' }}>
          <h3>🩺 Hospital & Doctors</h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>Register medical facilities and professional staff securely.</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <Link to="/hospital" style={{ textDecoration: 'none' }}><button style={{ width: 'auto' }}>Hospital</button></Link>
            <Link to="/doctor" style={{ textDecoration: 'none' }}><button style={{ width: 'auto' }}>Doctor</button></Link>
          </div>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <h3>🏥 Patient Services</h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>Manage patient registrations and view detailed profiles.</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <Link to="/patient" style={{ textDecoration: 'none' }}><button style={{ width: 'auto' }}>Register</button></Link>
            <Link to="/patient-details" style={{ textDecoration: 'none' }}><button className="secondary" style={{ width: 'auto', backgroundColor: '#6c757d' }}>View</button></Link>
          </div>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <h3>📋 Medical Records</h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>Access, evaluate, and view complete medical histories and images.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <Link to="/medical-record" style={{ textDecoration: 'none' }}><button style={{ width: 'auto', padding: '8px 12px', fontSize: '0.85rem' }}>Records</button></Link>
            <Link to="/examine-details" style={{ textDecoration: 'none' }}><button style={{ width: 'auto', padding: '8px 12px', fontSize: '0.85rem' }}>Examine</button></Link>
            <Link to="/gallery" style={{ textDecoration: 'none' }}><button className="secondary" style={{ width: 'auto', padding: '8px 12px', fontSize: '0.85rem', backgroundColor: '#6c757d' }}>Gallery</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;