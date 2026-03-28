import React, { createContext, useState, useEffect } from 'react';
// import Web3 from 'web3';
import { DOCTOR_ABI, DOCTOR_ADDRESS, HOSPITAL_ABI, HOSPITAL_ADDRESS, PATIENT_ABI, PATIENT_ADDRESS, MEDICAL_RECORD_ABI, MEDICAL_RECORD_ADDRESS } from '../contracts/config';

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [contracts, setContracts] = useState({});

    useEffect(() => {
        const init = async () => {
             // Disabled for dummy/local mode
             console.log("Web3 Context initialized in dummy mode. No blockchain connection.");
             /*
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const accounts = await web3Instance.eth.getAccounts();
                    setAccount(accounts[0]);

                    // Initialize contracts
                    const doctorContract = new web3Instance.eth.Contract(DOCTOR_ABI, DOCTOR_ADDRESS);
                    const hospitalContract = new web3Instance.eth.Contract(HOSPITAL_ABI, HOSPITAL_ADDRESS);
                    const patientContract = new web3Instance.eth.Contract(PATIENT_ABI, PATIENT_ADDRESS);
                    const medicalRecordContract = new web3Instance.eth.Contract(MEDICAL_RECORD_ABI, MEDICAL_RECORD_ADDRESS);

                    setContracts({
                        doctor: doctorContract,
                        hospital: hospitalContract,
                        patient: patientContract,
                        medicalRecord: medicalRecordContract
                    });
                } catch (error) {
                    console.error("User denied account access or error initializing contracts", error);
                }
            } else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
            */
        };
        
        init();
    }, []);

    return (
        <Web3Context.Provider value={{ web3, account, contracts }}>
            {children}
        </Web3Context.Provider>
    );
};
