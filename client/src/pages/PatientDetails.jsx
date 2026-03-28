import React, { useState } from 'react';
// import { useWeb3 } from '../hooks/useWeb3';

const PatientDetails = () => {
    // const { contracts } = useWeb3();
    const [searchId, setSearchId] = useState('100452');
    const [patient, setPatient] = useState(null);
    const [attendant, setAttendant] = useState(null);

    const handleSearch = async () => {
        try {
            // Retrieve from Local Storage
            const savedPatients = JSON.parse(localStorage.getItem('patients') || '{}');
            const foundPatient = savedPatients[searchId];

            if (foundPatient) {
                setPatient(foundPatient);
                setAttendant(foundPatient.attendant);
            } else {
                alert("Patient ID not found in local records.");
                setPatient(null);
                setAttendant(null);
            }
        } catch (error) {
            console.error(error);
            alert("Error retrieving data");
        }
    };

    return (
        <div className="main-wrapper">
            <div className="dashboard-grid">
                {/* Search Card */}
                <div className="card" style={{ height: 'fit-content' }}>
                    <h2>Retrieve Patient</h2>
                    <div className="form-group">
                        <label>Enter Patient ID</label>
                        <input type="number" value={searchId} onChange={(e) => setSearchId(e.target.value)} placeholder="e.g. 1001" />
                    </div>
                    <button onClick={handleSearch}>Search Records</button>
                </div>

                {/* Results Card */}
                {patient && (
                    <div className="card">
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                             <div style={{ width: '50px', height: '50px', backgroundColor: '#e0e0e0', borderRadius: '50%', marginRight: '15px' }}></div>
                             <div>
                                 <h2 style={{ margin: 0, border: 'none' }}>{patient.name}</h2>
                                 <span style={{ color: '#888' }}>ID: {searchId}</span>
                             </div>
                        </div>
                        
                        <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                             <div className="field-display">
                                <div className="field-label">Age</div>
                                <div className="field-value">{patient.age}</div>
                            </div>
                            <div className="field-display">
                                <div className="field-label">Gender</div>
                                <div className="field-value">{patient.gender}</div>
                            </div>
                            <div className="field-display">
                                <div className="field-label">City</div>
                                <div className="field-value">{patient.address}</div>
                            </div>
                            <div className="field-display">
                                <div className="field-label">Phone</div>
                                <div className="field-value">{patient.phone}</div>
                            </div>
                            <div className="field-display">
                                <div className="field-label">Height / Weight</div>
                                <div className="field-value">{patient.height} cm / {patient.weight} kg</div>
                            </div>
                            <div className="field-display">
                                <div className="field-label">Reg. Date</div>
                                <div className="field-value">{patient.date}</div>
                            </div>
                        </div>

                         <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                            <div className="field-label" style={{ marginBottom: '10px' }}>Emergency Contact</div>
                            <div className="field-value">
                                {attendant ? `${attendant.name} (${attendant.relation}) - ${attendant.phone}` : 'Loading...'}
                            </div>
                        </div>

                        <div style={{ marginTop: '20px' }}>
                             <button className="secondary">Download Full History</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PatientDetails;
