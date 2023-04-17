import React,{useEffect,useContext,useState} from 'react';
import { CrowdFundingContext } from 'context/Crowdfunding';
import {Card, Hero, PopUp, Card1} from 'components/index.js';

const index = () => {
  const {CreateCampaign,GetCampaigns,GetDonation,GetUserCampaign,Donate,ConnectWallet,userAccount } = useContext(CrowdFundingContext);
  const [allCampaign1, setallCampaign1] = useState();
  const [userCampaign, setuserCampaign] = useState();
  // const [openModel, setopenModel] = useState(false);
  const [openPopModel, setopenPopModel] = useState(false);
  const [donateCampaign, setdonateCampaign] = useState();
  // console.log(donateCampaign);
 
  const FetchData=async()=>{
    const getCampaignData = await GetCampaigns();
    setallCampaign1(getCampaignData);
    // console.log(" All campaign  in index.js", getCampaignData);
    console.log(" All campaign line 17 in index.js", getCampaignData);
    // setopenPopModel(false);
    // const getUserCampaignData = await GetUserCampaign();
    // setuserCampaign(getUserCampaignData);

  }
  


  useEffect(() => {
   FetchData();
  // return async()=>{
  //   const allData = await getCampaignData;
  //   setallCampaign1(allData);
  //   const userData = await getUserCampaignData;
  //   setuserCampaign(userData);
  // };
  }, []);
  
  return (
   <>

    <Hero  CreateCampaign={CreateCampaign} title="All listed Campaign" allCampaign={allCampaign1} setopenPopModel={setopenPopModel} setdonateCampaign={setdonateCampaign} />

   <Card title="All listed Campaign" allCampaign={allCampaign1} setopenPopModel={setopenPopModel} setdonateCampaign={setdonateCampaign} /> 
{/* 
   <Card1 title="Your listed Campaign" allCampaign={userCampaign} setopenPopModel={setopenPopModel} setDonate={setdonateCampaign} /> */}

   {openPopModel&&(
    <PopUp setopenPopModel={setopenPopModel} GetDonation={GetDonation} Donate1={donateCampaign}  donatefunction ={Donate} />
   )}
   </>
  )
}

export default index