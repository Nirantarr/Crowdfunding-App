import React, { useState, useEffect } from 'react';
import Style from './css/cardd.module.css';
import Image from 'next/image';
import { Bgimg, Spinner } from 'Images';

const Card = ({ title, allCampaign, setopenPopModel, setdonateCampaign }) => {

  const daysleft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);

    // console.log(remainingDays.toFixed(0));
    return remainingDays.toFixed(0);
  };

  return (
  <>
    {allCampaign &&
    <div className={Style.Card} >
        <div className={Style.Card_container}>
          <h3 className={Style.Card_container_heading} >{title}</h3>
          <div className={Style.Card_container_item}>

            {allCampaign.map((campaign, i) => {
              return (
                <div className={Style.Card_container_item1} onClick={() => (setdonateCampaign(campaign), setopenPopModel(true))} key={i + 1}>
                  <Image src={Bgimg} alt="img" height={216} />
                  <div className={Style.content} >
                    <p className={Style.title} >{campaign.title.toUpperCase()}</p>
                    <p className={Style.owner}>Created By :<p>{campaign.owner.slice(0, 30)}..</p></p>
                    <p className={Style.description} >{campaign.description}</p>
                    <div className={Style.combine}>
                       <p className={Style.target} >Target :{campaign.target}ETH</p>
                      <p className={Style.target}>Raised :{campaign.fundsRaised}ETH</p>
                      </div>
                    <p className={Style.daysLeft} >Days Left:{daysleft(campaign.deadline)}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    </div>
      }

</>
  )
}

export default Card