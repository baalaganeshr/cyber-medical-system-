// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Patient {
    struct PatientDetails {
        uint id;
        string name;
        uint age;
        string gender;
        string height;
        uint weight;
        string patientAddress;
        string phone;
        string email;
        string date;
    }

    struct AttendantDetails {
        uint patientId;
        string name;
        string relation;
        string phone;
    }

    mapping(uint => PatientDetails) public patients;
    mapping(uint => AttendantDetails) public attendants;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function store_patient_details(
        uint _id,
        string memory _name,
        uint _age,
        string memory _gender,
        string memory _height,
        uint _weight,
        string memory _patientAddress,
        string memory _phone,
        string memory _email,
        string memory _date
    ) public onlyOwner {
        patients[_id] = PatientDetails(
            _id,
            _name,
            _age,
            _gender,
            _height,
            _weight,
            _patientAddress,
            _phone,
            _email,
            _date
        );
    }

    function store_attendant_details(
        uint _patientId,
        string memory _name,
        string memory _relation,
        string memory _phone
    ) public onlyOwner {
        attendants[_patientId] = AttendantDetails(_patientId, _name, _relation, _phone);
    }

    function retrieve_patient_details(uint _id) public view returns (
        string memory,
        uint,
        string memory,
        string memory,
        uint,
        string memory,
        string memory,
        string memory,
        string memory
    ) {
        PatientDetails memory pat = patients[_id];
        return (
            pat.name,
            pat.age,
            pat.gender,
            pat.height,
            pat.weight,
            pat.patientAddress,
            pat.phone,
            pat.email,
            pat.date
        );
    }

    function retrieve_attendant_details(uint _patientId) public view returns (
        string memory,
        string memory,
        string memory
    ) {
        AttendantDetails memory att = attendants[_patientId];
        return (att.name, att.relation, att.phone);
    }
}
