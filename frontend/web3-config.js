// Initialize Web3 and Contracts
var web3;
var doctorContract;
var hospitalContract;
var patientContract;
var medicalRecordContract;

// IMPORTANT: Replace these with your deployed contract addresses from Remix or Truffle
const DOCTOR_ADDRESS = "YOUR_DOCTOR_CONTRACT_ADDRESS";
const HOSPITAL_ADDRESS = "YOUR_HOSPITAL_CONTRACT_ADDRESS";
const PATIENT_ADDRESS = "YOUR_PATIENT_CONTRACT_ADDRESS";
const MEDICAL_RECORD_ADDRESS = "YOUR_MEDICAL_RECORD_CONTRACT_ADDRESS";

// IMPORTANT: Replace these with the ABI from your compiled contracts
const DOCTOR_ABI = []; // Paste Doctor.sol ABI here
const HOSPITAL_ABI = []; // Paste Hospital.sol ABI here
const PATIENT_ABI = []; // Paste Patient.sol ABI here
const MEDICAL_RECORD_ABI = []; // Paste MedicalRecord.sol ABI here

window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.request({ method: 'eth_requestAccounts' });
            initContracts();
            console.log("MetaMask connected");
        } catch (error) {
            console.error("User denied account access");
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        initContracts();
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

function initContracts() {
    try {
        doctorContract = new web3.eth.Contract(DOCTOR_ABI, DOCTOR_ADDRESS);
        hospitalContract = new web3.eth.Contract(HOSPITAL_ABI, HOSPITAL_ADDRESS);
        patientContract = new web3.eth.Contract(PATIENT_ABI, PATIENT_ADDRESS);
        medicalRecordContract = new web3.eth.Contract(MEDICAL_RECORD_ABI, MEDICAL_RECORD_ADDRESS);

        // Check if contract is connected
        if(!doctorContract || !hospitalContract || !patientContract || !medicalRecordContract) {
            console.error("Contracts not initialized properly. Check ABI and Addresses.");
        } else {
            console.log("All contracts initialized successfully.");
        }
    } catch (e) {
        console.error("Error initializing contracts:", e);
    }
}
