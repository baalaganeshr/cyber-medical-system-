import React, { useState } from 'react';
// import { useWeb3 } from '../hooks/useWeb3';

const HospitalRegister = () => {
    // const { contracts, account } = useWeb3();
    const [formData, setFormData] = useState({
        id: '204',
        name: 'Apollo Main Hospital',
        address: '21 Greams Lane, Off Greams Road, Chennai',
        specialization: 'Multi-speciality, General, Trauma Center'
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
            const existingHospitals = JSON.parse(localStorage.getItem('hospitals') || '{}');
            existingHospitals[formData.id] = formData;
            localStorage.setItem('hospitals', JSON.stringify(existingHospitals));

            // await contracts.hospital.methods.store_hospital_details(
            //     formData.id,
            //     formData.name,
            //     formData.address,
            //     formData.specialization
            // ).send({ from: account, gas: 500000 });
            
            setStatus('Hospital registered successfully! (Local Mode)');
            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            setStatus('Error registering hospital.');
            setIsSuccess(false);
        }
    };

    return (
        <div className="main-wrapper">
            <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h2>Register Hospital</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Hospital ID</label>
                        <input type="number" name="id" value={formData.id} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Hospital Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Specialization / Type</label>
                        <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="e.g. General, Trauma Center" required />
                    </div>
                    <button type="submit">Submit Registration</button>
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

export default HospitalRegister;
