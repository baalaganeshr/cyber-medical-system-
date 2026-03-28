import React, { useState } from 'react';
// import { useWeb3 } from '../hooks/useWeb3';

const PatientRegister = () => {
    // const { contracts, account } = useWeb3();
    const [patientData, setPatientData] = useState({
        id: '100452', name: 'John Doe', age: '45', gender: 'Male', height: '175', weight: '70', address: '123 Elm Street, Springfield', phone: '+91-9876543211', email: 'johndoe@example.com', date: '2023-11-23'
    });
    const [attendantData, setAttendantData] = useState({
        name: 'Jane Doe', relation: 'Spouse', phone: '+91-9876543212'
    });
    const [status, setStatus] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handlePatientChange = (e) => setPatientData({ ...patientData, [e.target.name]: e.target.value });
    const handleAttendantChange = (e) => setAttendantData({ ...attendantData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Mock saving to local storage
            const existingPatients = JSON.parse(localStorage.getItem('patients') || '{}');
            // Store comprehensive patient + attendant data structure
            existingPatients[patientData.id] = {
                ...patientData,
                attendant: { ...attendantData },
                medicalRecord: { // Adding dummy record for demo since there's no Separate Record Create
                    diagnosis: 'Example Diagnosis (Auto-generated)',
                    treatment: 'Rest and fluids',
                    date: new Date().toLocaleDateString(),
                    prescription: 'Paracetamol 500mg, Vitamin C',
                    investigation: {
                        blood: 'Normal',
                        urine: 'Clear',
                        ecg: 'Normal Sinus Rhythm',
                        mri: 'N/A',
                        ct: 'N/A',
                        xray: 'Chest Clear'
                    },
                    insurance: {
                        policyNumber: 'POL-' + Math.floor(Math.random() * 10000),
                        insurer: 'HealthCare Plus',
                        type: 'Premium',
                        limit: 50000
                    }
                }
            };
            localStorage.setItem('patients', JSON.stringify(existingPatients));

            // await contracts.patient.methods.store_patient_details(
            //     patientData.id, patientData.name, patientData.age, patientData.gender,
            //     patientData.height, patientData.weight, patientData.address,
            //     patientData.phone, patientData.email, patientData.date
            // ).send({ from: account, gas: 500000 });

            // await contracts.patient.methods.store_attendant_details(
            //     patientData.id, attendantData.name, attendantData.relation, attendantData.phone
            // ).send({ from: account, gas: 500000 });

            setStatus('Patient & Attendant record created successfully! (Local Mode)');
            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            setStatus('Transaction failed. Please check console.');
            setIsSuccess(false);
        }
    };

    return (
        <div className="main-wrapper">
             <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2>Patient Records</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label>Patient ID / MRN</label>
                            <input type="number" name="id" value={patientData.id} onChange={handlePatientChange} placeholder="e.g. 1001" required />
                        </div>
                        <div className="form-group">
                            <label>Registration Date</label>
                            <input type="date" name="date" value={patientData.date} onChange={handlePatientChange} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="name" value={patientData.name} onChange={handlePatientChange} placeholder="Jane Doe" required />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Age</label>
                            <input type="number" name="age" value={patientData.age} onChange={handlePatientChange} required />
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <input type="text" name="gender" value={patientData.gender} onChange={handlePatientChange} placeholder="Female" required />
                        </div>
                    </div>

                     <div className="form-row">
                        <div className="form-group">
                            <label>Height (cm)</label>
                            <input type="text" name="height" value={patientData.height} onChange={handlePatientChange} required />
                        </div>
                        <div className="form-group">
                            <label>Weight (kg)</label>
                            <input type="number" name="weight" value={patientData.weight} onChange={handlePatientChange} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Address / City</label>
                        <input type="text" name="address" value={patientData.address} onChange={handlePatientChange} placeholder="Chennai" required />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" name="phone" value={patientData.phone} onChange={handlePatientChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={patientData.email} onChange={handlePatientChange} required />
                        </div>
                    </div>
                    
                    <h3>Attendant Information</h3>
                    <div className="form-row">
                        <div className="form-group">
                             <label>Attendant Name</label>
                             <input type="text" name="name" value={attendantData.name} onChange={handleAttendantChange} required />
                        </div>
                        <div className="form-group">
                             <label>Relation</label>
                             <input type="text" name="relation" value={attendantData.relation} onChange={handleAttendantChange} required />
                        </div>
                    </div>
                     <div className="form-group">
                             <label>Attendant Phone</label>
                             <input type="text" name="phone" value={attendantData.phone} onChange={handleAttendantChange} required />
                    </div>

                    <button type="submit" style={{ marginTop: '20px' }}>Encrypt & Upload</button>
                </form>

                {status && (
                    <div className="status-box" style={{ backgroundColor: isSuccess ? '#e8f5e9' : '#ffebee', color: isSuccess ? '#2e7d32' : '#c62828', borderColor: isSuccess ? '#c8e6c9' : '#ffcdd2' }}>
                        {isSuccess && <span className="success-icon">✓</span>}
                        {status}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PatientRegister;
