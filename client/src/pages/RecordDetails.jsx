import React, { useState } from 'react';
// import { useWeb3 } from '../hooks/useWeb3';

const RecordDetails = () => {
    // const { contracts } = useWeb3();
    const [searchId, setSearchId] = useState('100452');
    const [record, setRecord] = useState(null);
    const [insurance, setInsurance] = useState(null);

    const handleSearch = async () => {
        try {
            // Retrieve from Local Storage
            const savedPatients = JSON.parse(localStorage.getItem('patients') || '{}');
            const foundPatient = savedPatients[searchId];

            if (foundPatient && foundPatient.medicalRecord) {
                setRecord(foundPatient.medicalRecord);
                setInsurance(foundPatient.medicalRecord.insurance);
            } else {
                alert("Medical Record not found for this Patient ID.");
                setRecord(null);
                setInsurance(null);
            }
        } catch (error) {
            console.error(error);
            alert("Error retrieving record");
        }
    };

    return (
        <div className="main-wrapper">
             <div className="dashboard-grid">
                <div className="card" style={{ height: 'fit-content' }}>
                    <h2>Search Medical Records</h2>
                    <div className="form-group">
                        <label>Record ID (Patient ID)</label>
                        <input type="number" value={searchId} onChange={(e) => setSearchId(e.target.value)} placeholder="Enter Record ID" />
                    </div>
                    <button onClick={handleSearch}>Get Record</button>
                </div>

                {record && (
                    <div className="card">
                        <h2>Medical Summary</h2>
                        <div className="form-row">
                             <div className="field-display">
                                <div className="field-label">Diagnosis</div>
                                <div className="field-value">{record.diagnosis}</div>
                            </div>
                             <div className="field-display">
                                <div className="field-label">Date</div>
                                <div className="field-value">{record.date}</div>
                            </div>
                        </div>
                        
                        <div className="field-display">
                                <div className="field-label">Prescription</div>
                                <div className="field-value" style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '4px', marginTop: '5px' }}>
                                    {record.prescription}
                                </div>
                        </div>
                         <div className="field-display">
                                <div className="field-label">Treatment Plan</div>
                                <div className="field-value">{record.treatment}</div>
                        </div>
                    </div>
                )}

                {insurance && (
                     <div className="card">
                        <h2>Insurance Details</h2>
                        <div className="dashboard-grid" style={{ gap: '10px' }}>
                            <div className="field-display">
                                <div className="field-label">Insurer</div>
                                <div className="field-value">{insurance.insurer}</div>
                            </div>
                            <div className="field-display">
                                <div className="field-label">Policy Number</div>
                                <div className="field-value">{insurance.policyNumber}</div>
                            </div>
                            <div className="field-display">
                                <div className="field-label">Type</div>
                                <div className="field-value">{insurance.type}</div>
                            </div>
                            <div className="field-display">
                                <div className="field-label">Limit</div>
                                <div className="field-value">${insurance.limit}</div>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px', padding: '10px', background: '#e3f2fd', borderRadius: '4px', color: '#0d47a1', fontSize: '0.9rem' }}>
                            ✓ Active Policy Verified
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecordDetails;
