// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Hospital {
    struct HospitalDetails {
        uint id;
        string name;
        string hospitalAddress;
        string specialization;
    }

    mapping(uint => HospitalDetails) public hospitals;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function store_hospital_details(
        uint _id,
        string memory _name,
        string memory _hospitalAddress,
        string memory _specialization
    ) public onlyOwner {
        hospitals[_id] = HospitalDetails(_id, _name, _hospitalAddress, _specialization);
    }

    function retrieve_hospital_details(uint _id) public view returns (
        string memory,
        string memory,
        string memory
    ) {
        HospitalDetails memory hosp = hospitals[_id];
        return (hosp.name, hosp.hospitalAddress, hosp.specialization);
    }
}
