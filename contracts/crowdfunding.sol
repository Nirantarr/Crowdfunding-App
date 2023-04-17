// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding{
 struct Campaign{
    address owner;
    string title;
    string description;
    uint256 target;
    uint256 deadline;
    uint256 fundsRaised;
    address[] donators;
    uint256[] donations;
 }
 uint256 public numberOfCampaigns =0;
 mapping(uint256=>Campaign) public Campaigns;

 function CreateCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline) public returns(uint256){
    Campaign storage campaign = Campaigns[numberOfCampaigns];
    campaign.owner = _owner;
    campaign.title = _title;
    campaign.description = _description;
    campaign.target = _target;
    campaign.deadline = _deadline;
    campaign.fundsRaised=0;
    numberOfCampaigns++;
    return numberOfCampaigns-1;
 }

 function Donation(uint256 _id) public payable{
    uint256 amount = msg.value;
    Campaign storage campaign = Campaigns[_id];
    campaign.donators.push(msg.sender);
    campaign.donations.push(amount);
    (bool sent ,)= payable(campaign.owner).call{value: amount}("");
    if(sent){
        campaign.fundsRaised= campaign.fundsRaised+amount;
    }
 }

 function GetDonatorInfo(uint256 _id) public view returns(address[] memory, uint256[] memory){
    return(Campaigns[_id].donators, Campaigns[_id].donations);
 }

 function GetCampaign() public view returns(Campaign[] memory){
    Campaign[] memory allCampaigns= new Campaign[](numberOfCampaigns);
    for(uint i=0; i<numberOfCampaigns; i++){
        Campaign storage item = Campaigns[i];
        allCampaigns[i]=item;
    }
    return allCampaigns;
 }
 }
 
 
