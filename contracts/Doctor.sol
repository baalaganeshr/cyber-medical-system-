// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Doctor {
    struct DoctorDetails {
        uint id;
        string name;
        string specialization;
        string phone;
        string doctorAddress;
    }

    mapping(uint => DoctorDetails) public doctors;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function store_doctor_details(
        uint _id,
        string memory _name,
        string memory _specialization,
        string memory _phone,
        string memory _doctorAddress
    ) public onlyOwner {
        doctors[_id] = DoctorDetails(_id, _name, _specialization, _phone, _doctorAddress);
    }

    function retrieve_doctor_details(uint _id) public view returns (
        string memory,
        string memory,
        string memory,       
        string memory
    ) {
        DoctorDetails memory doc = doctors[_id];
        return (doc.name, doc.specialization, doc.phone, doc.doctorAddress);
    }
}
