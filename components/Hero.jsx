import React, { useState, useEffect, useContext } from 'react'
import Style from '../components/css/Herosection.module.css';
import Image from 'next/image';
// import ipfsClient from 'ipfs-http-client';

const Hero = ({ CreateCampaign, title, allCampaign, setopenPopModel, setdonateCampaign }) => {

  const [campaign, setcampaign] = useState({
    title: "",
    description: "",
    target: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await CreateCampaign(campaign);
      alert("Campaign Successfully Created");
      setcampaign({ title: "", description: "", target: "", deadline: "" });
      window.location.reload();
    } catch (error) {
      alert("Something went wrong", error);
    }
  }

  return (
    <>
      <div className={Style.Herosection}>
        <div className={Style.Herosection_container}>
          <div className={Style.Herosection_container_content}>
            <div className={Style.Herosection_container_content_heading}>
              <h2>CrowdFunding</h2>
            </div>

            <h3>The Ultimate CrowdFund</h3><br />
            <p>Crowdfunding is a popular method of raising funds for a variety of projects and initiatives through online platforms. It involves a large number of individuals contributing small amounts of money to collectively finance a project.</p><br /><button>Learn more</button>

          </div>

          <div className={Style.Herosection_container_form}>
            <div className={Style.Herosection_container_form_container}>
              <div className={Style.Herosection_container_form_heading}><h2>CAMPAIGN</h2></div>
              <div className={Style.Herosection_container_form_inputs}>
                <form>
                  <div className={Style.Herosection_container_form_input1}>
                    <label>Title</label>
                    <input onChange={(e) => setcampaign({ ...campaign, title: e.target.value })} placeholder="Title" type="text" width={20}></input>
                  </div>

                  <div className={Style.Herosection_container_form_input1}>

                    <label>Description</label>
                    <input onChange={(e) => setcampaign({ ...campaign, description: e.target.value })} placeholder="..." type="text" width={20}></input>
                  </div>

                  <div className={Style.Herosection_container_form_input1}>

                    <label>Target</label>
                    <input onChange={(e) => setcampaign({ ...campaign, target: e.target.value })} placeholder="0" type="number" width={20}></input>
                  </div>

                  <div className={Style.Herosection_container_form_input1}>

                    <label>Deadline</label>
                    <input onChange={(e) => setcampaign({ ...campaign, deadline: e.target.value })} placeholder="00-00-00" type="date" width={20}></input>
                  </div>
                </form>
              </div>
              <div className={Style.Herosection_container_form_btn}>
                <button className={Style.btn} onClick={(e) => createNewCampaign(e)} type='submit'>Create Campaign</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )

}

export default Hero