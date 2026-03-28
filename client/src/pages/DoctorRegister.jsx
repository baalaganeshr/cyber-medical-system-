import React, { useState } from 'react';
// import { useWeb3 } from '../hooks/useWeb3';

const DoctorRegister = () => {
    // const { web3, contracts, account } = useWeb3();
    const [formData, setFormData] = useState({
        id: '50912',
        name: 'Dr. Sarah Jenkins',
        specialization: 'Cardiologist',
        phone: '+91-9876543210',
        address: 'Block A, Level 2, Apollo Main Hospital'
    });
    const [status, setStatus] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Mock saving to local storage
            const existingDoctors = JSON.parse(localStorage.getItem('doctors') || '{}');
            existingDoctors[formData.id] = formData;
            localStorage.setItem('doctors', JSON.stringify(existingDoctors));
            
            // await contracts.doctor.methods.store_doctor_details(
            //     formData.id,
            //     formData.name,
            //     formData.specialization,
            //     formData.phone,
            //     formData.address
            // ).send({ from: account, gas: 500000 });
            
            setStatus('Doctor profile registered successfully! (Local Mode)');
            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            setStatus('Registration failed.');
            setIsSuccess(false);
        }
    };

    return (
        <div className="main-wrapper">
            <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h2>Register Doctor</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Doctor ID</label>
                        <input type="number" name="id" value={formData.id} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Specialization</label>
                        <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="e.g. Cardiologist" required />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <button type="submit">Register Profile</button>
                </form>

                {status && (
                    <div className="status-box" style={{ backgroundColor: isSuccess ? '#e8f5e9' : '#ffebee', color: isSuccess ? '#2e7d32' : '#c62828' }}>
                         {isSuccess && <span>✓</span>} {status}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoctorRegister;
