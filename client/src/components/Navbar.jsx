import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/man-user-circle-icon.svg';
import '../style.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="navbar-logo" style={{ display: 'block', fontSize: '1.5rem', marginRight: '20px' }}>Cyber Medical System</span>
                </Link>
                <button className="navbar-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <Link to="/hospital" onClick={toggleMenu}>Hospital Registration</Link>
                <Link to="/doctor" onClick={toggleMenu}>Doctor Registration</Link>
                <Link to="/patient" onClick={toggleMenu}>Patient Registration</Link>
                <Link to="/patient-details" onClick={toggleMenu}>View Patient Details</Link>
                <Link to="/medical-record" onClick={toggleMenu}>View Medical Record</Link>
                <Link to="/examine-details" onClick={toggleMenu}>View Examine Details</Link>
                <Link to="/gallery" onClick={toggleMenu}>Image Gallery</Link>
                <div className="navbar-user" style={{ display: 'flex', alignItems: 'center', paddingLeft: '15px' }}>
                    <img src={userIcon} alt="User Profile" style={{ width: '32px', height: '32px', cursor: 'pointer' }} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
