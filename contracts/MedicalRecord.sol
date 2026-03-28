// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalRecord {
    struct Record {
        uint recordId;
        uint patientId;
        string diagnosis;
        string prescription;
        string treatment;
        string date;
    }

    struct Insurance {
        uint recordId;
        string policyNumber;
        string insurer;
        string policyType;
        string policyLimit;
    }

    struct Investigation {
        uint recordId;
        string bloodTest;
        string urineTest;
        string ecg;
        string mri;
        string ctScan;
        string xray;
    }

    mapping(uint => Record) public records;
    mapping(uint => Insurance) public insurances;
    mapping(uint => Investigation) public investigations;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function store_record(
        uint _recordId,
        uint _patientId,
        string memory _diagnosis,
        string memory _prescription,
        string memory _treatment,
        string memory _date
    ) public onlyOwner {
        records[_recordId] = Record(_recordId, _patientId, _diagnosis, _prescription, _treatment, _date);
    }

    function store_insurance_details(
        uint _recordId,
        string memory _policyNumber,
        string memory _insurer,
        string memory _policyType,
        string memory _policyLimit
    ) public onlyOwner {
        insurances[_recordId] = Insurance(_recordId, _policyNumber, _insurer, _policyType, _policyLimit);
    }

    function store_investigation_details(
        uint _recordId,
        string memory _bloodTest,
        string memory _urineTest,
        string memory _ecg,
        string memory _mri,
        string memory _ctScan,
        string memory _xray
    ) public onlyOwner {
        investigations[_recordId] = Investigation(_recordId, _bloodTest, _urineTest, _ecg, _mri, _ctScan, _xray);
    }

    function retrieve_record(uint _recordId) public view returns (
        uint,
        string memory,
        string memory,
        string memory,
        string memory
    ) {
        Record memory rec = records[_recordId];
        return (rec.patientId, rec.diagnosis, rec.prescription, rec.treatment, rec.date);
    }

    function retrieve_insurance_details(uint _recordId) public view returns (
        string memory,
        string memory,
        string memory,
        string memory
    ) {
        Insurance memory ins = insurances[_recordId];
        return (ins.policyNumber, ins.insurer, ins.policyType, ins.policyLimit);
    }

    function retrieve_investigation_details(uint _recordId) public view returns (
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory
    ) {
        Investigation memory inv = investigations[_recordId];
        return (inv.bloodTest, inv.urineTest, inv.ecg, inv.mri, inv.ctScan, inv.xray);
    }
}
