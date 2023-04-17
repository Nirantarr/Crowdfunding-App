import React, { useState, useEffect, useContext } from 'react'
import { Brandlogo, Brandlogo1 } from '../Images/index.js';
import Style from './css/Navbar.module.css';
import Image from 'next/image';

import { Menu } from 'components';
import { CrowdFundingContext } from 'context/Crowdfunding';
const Navbar = () => {
  const { ConnectWallet, CreateCampaign, currentAccount } = useContext(CrowdFundingContext);
  // const [currentAccount, setcurrentAccount] = useState();
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const menuList = ["white paper", "project", "donation", "memner"];
  return (<>
    <div className={Style.Navbar}>
      <div className={Style.Navbar_container}>
        <div className={Style.Navbar_container_left}>
          <Image src={Brandlogo} alt="brandlogo" height={70} />
        </div>
        <div className={Style.Navbar_container_middle}>
          <div className={Style.Navbar_item}><a href="/" >WhitePaper</a></div>
          <div className={Style.Navbar_item}>Funds Raised</div>
          <div className={Style.Navbar_item}>Tokenomics</div>
          <div className={Style.Navbar_item}>Team</div>
          {/* {menuList.map((el,i)=>{
            <div className={Style.Navbar_item} key={i+1}>{el}</div>
          })} */}
        </div>
        <div className={Style.Navbar_container_Right}>
          {!currentAccount ?
            <div className={Style.btn}>
              <button onClick={() => ConnectWallet()}>Connect Wallet</button>
            </div> :
            <div className={Style.acc}> {currentAccount.slice(0, 15)} </div>
          }
        </div>
        <div className={Style.Navbar_container_mobile}>
          <span onClick={() => setisMenuOpen(true)}> ☰</span>
        </div>
      </div>
    </div>
    {isMenuOpen && (
      <div className={Style.Menubox}>
        <div className={Style.Menubox_container}>
          <div className={Style.Menubox_container_box}>
            <div className={Style.Menubox_container_left}>
              <div className={Style.Menubox_BrandImg} >
                <Image className={Style.Image1} src={Brandlogo1} alt="logo" height={30} />
                {/* ❤️ */}
                <span className={Style.Brandname}>COMPANY</span>
              </div>
            </div>
            <div className={Style.Menubox_container_right} >
              <button onClick={() => setisMenuOpen(false)} >❌</button>
            </div>
          </div>
          <div className={Style.Menubox_container_box1}>
            <div className={Style.Menubox_container_box1_item1}>
              <div className={Style.Menubox_container_box1_item} ><a href="/">Whitepaper</a></div>
              <div className={Style.Menubox_container_box1_item} ><a href="/">Funds Raised</a></div>
              <div className={Style.Menubox_container_box1_item} ><a href="/">Tokenomics</a></div>
              <div className={Style.Menubox_container_box1_item} ><a href="/">Team</a></div>

            </div>
            <div><button className={Style.Menu_btn} >Connect Wallet</button> </div>
          </div>
        </div>
      </div>
    )}

  </>
  )
}

export default Navbar

