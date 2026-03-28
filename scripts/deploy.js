import hre from "hardhat";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const Doctor = await hre.ethers.getContractFactory("Doctor");
  const doctor = await Doctor.deploy();
  await doctor.waitForDeployment();
  console.log(`Doctor deployed to ${doctor.target}`);

  const Patient = await hre.ethers.getContractFactory("Patient");
  const patient = await Patient.deploy();
  await patient.waitForDeployment();
  console.log(`Patient deployed to ${patient.target}`);
  
  const Hospital = await hre.ethers.getContractFactory("Hospital");
  const hospital = await Hospital.deploy();
  await hospital.waitForDeployment();
  console.log(`Hospital deployed to ${hospital.target}`);
  
  const MedicalRecord = await hre.ethers.getContractFactory("MedicalRecord");
  const medicalRecord = await MedicalRecord.deploy();
  await medicalRecord.waitForDeployment();
  console.log(`MedicalRecord deployed to ${medicalRecord.target}`);

  // Update client config
  const configContent = `export const DOCTOR_ADDRESS = "${doctor.target}";
export const HOSPITAL_ADDRESS = "${hospital.target}";
export const PATIENT_ADDRESS = "${patient.target}";
export const MEDICAL_RECORD_ADDRESS = "${medicalRecord.target}";

import DoctorArtifact from "../artifacts/contracts/Doctor.sol/Doctor.json";
import HospitalArtifact from "../artifacts/contracts/Hospital.sol/Hospital.json";
import PatientArtifact from "../artifacts/contracts/Patient.sol/Patient.json";
import MedicalRecordArtifact from "../artifacts/contracts/MedicalRecord.sol/MedicalRecord.json";

export const DOCTOR_ABI = DoctorArtifact.abi;
export const HOSPITAL_ABI = HospitalArtifact.abi;
export const PATIENT_ABI = PatientArtifact.abi;
export const MEDICAL_RECORD_ABI = MedicalRecordArtifact.abi;
`;

  const configPath = path.join(__dirname, "../client/src/contracts/config.js");
  fs.writeFileSync(configPath, configContent);
  console.log(`Config updated at ${configPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
