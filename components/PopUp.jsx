import React,{useState,useEffect} from 'react';
import Style from './css/PopUp.module.css';

const PopUp = ({setopenPopModel,GetDonation,Donate1,donatefunction}) => {

  const [amount, setamount] = useState("");
  const [allDonationData, setallDonationData] = useState();
 
  const CreateDonation = async()=>{
    try {
      const data = await donatefunction(Donate1.pId,amount);
      alert("Donated Successfully");
      window.location.reload();
      console.log(data);
    } catch (error) {
      console.log("error in create dontation function in popup.jsx",error)
    };
  };

  useEffect(() => {
    const donationListData = GetDonation(Donate1.pId);
    return async ()=>{
      const donationData = await donationListData;
      setallDonationData(donationData);
    };
  }, [])
  

  return (
    <div className={Style.Popup}>
      <div className={Style.Popup_container}>
        <div className={Style.Popup_container_heading}>
          <h3>{Donate1.title.toUpperCase()}</h3>
        </div>
        <div className={Style.Popup_container_description}>
          <p>{Donate1.description}</p>
         <div className={Style.donatebtn} > <input onChange={(e)=>setamount(e.target.value)} type='number' placeholder='Amount' /></div>
        </div>
        <div className={Style.Popup_container_donordata}>
          {allDonationData?.map((donate,i)=>{
            <p>{i+1}:{donate.donation}{""}{donate.donator.slice(0,35)}</p>
          })}
        </div>
        <div className={Style.footer_button}>
          <button className={Style.btn} onClick={()=>setopenPopModel(false)}>Close</button>
          <button className={Style.btn1} onClick={()=>CreateDonation()}>Donate</button>
        </div>
      </div>
    </div>
  )
}

export default PopUp