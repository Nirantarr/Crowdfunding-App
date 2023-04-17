import React,{useContext,useState,useEffect} from "react";
import { ethers } from "ethers";
import Web3Modal from 'web3modal';

import { crowdFundingABI,crowdFundingAddress } from "./constant";

// FETCHING SMART CONTRACT
const fetchContract = (signerorprovider)=> new ethers.Contract(crowdFundingAddress,crowdFundingABI,signerorprovider);

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider =({children})=>{
 const [currentAccount, setcurrentAccount] = useState();

 const CreateCampaign = async(campaign)=>{
    const {title,description,target,deadline}=campaign;
    const web3Modal= new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    console.log(currentAccount);
    try {
        const transaction = await contract.CreateCampaign(
            currentAccount,title,description,
            ethers.utils.parseUnits(target,18), 
            new Date(deadline).getTime()
            );
        await transaction.wait();
        console.log("contract call success",transaction)
    } catch (error) {
        console.log("contract call fail",error);
    }
 };

  const GetCampaigns = async()=>{
    try {
        const provider = new ethers.providers.JsonRpcProvider('https://polygonmymbai alchemy url');
    const contract = fetchContract(provider);
    console.log("get contract function console line 45",contract);
    const campaigns= await contract.GetCampaign();
    console.log( "line 47 crowdfundigns.js",campaigns);
    const parsedCampaigns = campaigns.map((el,i)=>({
        owner: el.owner,
        title: el.title,
        description: el.description,
        target: ethers.utils.formatEther(el.target.toString()),
        deadline: el.deadline.toNumber(),
        fundsRaised: ethers.utils.formatEther(el.fundsRaised.toString()),
        pId: i,
    }));
    return parsedCampaigns;
    } catch (error) {
        console.log("Error in GetContract function in CrowdFunding.js",error);
    }
    
  };

  const GetUserCampaign = async()=>{
  const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbaialchemy url');
  const contract = fetchContract(provider);
  const allCampaigns = await contract.GetCampaign();
  const accounts = await window.ethereum.request({ method:"eth_requestAccounts"
  });
  const currentUser = accounts[0];
  const filteredCampaigns = allCampaigns.filter(
    (campaign)=>campaign.owner ==="0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");

    const userData = filteredCampaigns.map((el,i)=>({
        owner: el.owner,
        title: el.title,
        description: el.description,
        target: ethers.utils.formatEther(el.target.toString()),
        deadline: el.deadline.toNumber(),
        fundsRaised:ethers.utils.formatEther(el.fundsRaised.toString()),
        pId: i,
    }));
   return userData;
  };
// while changing the state in smart contract when have to build connection so we use web3modal here.
  const Donate = async(pId,amount)=>{
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    const campaignData= await contract.Donation(pId,{
        value: ethers.utils.parseEther(amount),
    });

    await campaignData.wait();
    location.reload();
    return campaignData;
};

const GetDonation = async(pId)=>{
    const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemyK');
    const contract = fetchContract(provider);
    const donations= await contract.GetDonatorInfo(pId);
    const numberofDonations = donations[0].length;
    const parsedDonations=[];
    for(let i=0; i<numberofDonations; i++){
        parsedDonations.push({
            donator:donations[0][i],
            donation: ethers.utils.formatEther(donations[1][i].toString()),
        });
    }
    return parsedDonations;
};

const ConnectWallet = async()=>{
    try {
        if(!window.ethereum) return console.log("Install Metamask");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        if(accounts.length){
            setcurrentAccount(accounts[0]);
        }else{
            console.log("No Account found");
        }
    } catch (error) {
        console.log("Something went wrong while getting connected to Wallet",error);
    }
};
// useEffect(() => {
//     GetCampaigns();


// }, [])


return(
    <CrowdFundingContext.Provider value={{CreateCampaign,GetCampaigns,GetDonation,GetUserCampaign,Donate,ConnectWallet,currentAccount }}>
       {children}
    </CrowdFundingContext.Provider>
)
}
