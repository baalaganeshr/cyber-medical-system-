import React, { useState } from 'react';
// import { useWeb3 } from '../hooks/useWeb3';

const ExamineDetails = () => {
    // const { contracts } = useWeb3();
    const [searchId, setSearchId] = useState('100452');
    const [investigation, setInvestigation] = useState(null);

    const handleSearch = async () => {
        try {
            // Retrieve from Local Storage
            const savedPatients = JSON.parse(localStorage.getItem('patients') || '{}');
            const foundPatient = savedPatients[searchId];

            if (foundPatient && foundPatient.medicalRecord && foundPatient.medicalRecord.investigation) {
                setInvestigation(foundPatient.medicalRecord.investigation);
            } else {
                 alert("Investigation details not found for this Patient ID.");
                 setInvestigation(null);
            }
        } catch (error) {
            console.error(error);
            alert("Error retrieving details");
        }
    };

    return (
        <div className="container">
            <h2>Retrieve Examination & Investigation</h2>
            <div className="form-group">
                <label>Record ID (Patient ID):</label>
                <input type="number" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
            </div>
            <button onClick={handleSearch}>Get Details</button>

            {investigation && (
                <div className="info-group">
                    <h3>Investigation Results</h3>
                    <p>Blood Test: {investigation.blood}</p>
                    <p>Urine Test: {investigation.urine}</p>
                    <p>ECG: {investigation.ecg}</p>
                    <p>MRI: {investigation.mri}</p>
                    <p>CT Scan: {investigation.ct}</p>
                    <p>X-Ray: {investigation.xray}</p>
                </div>
            )}
        </div>
    );
};

export default ExamineDetails;
