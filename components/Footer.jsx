import React,{useState,useEffect}from 'react'
import Style from './css/Footer.module.css';
const Footer = () => {
  return (
    <footer>
      <div className={Style.Footer}>
        <div className={Style.Footer_container}>
          <div className={Style.Footer_container_left}>
            <div className={Style.Footer_container_left_heading} >COMPANY</div>
            <div className={Style.Footer_container_left_item}>
              Home
            </div>
            <div className={Style.Footer_container_left_item}>
              About Us
            </div>
            <div className={Style.Footer_container_left_item}>
              Team
            </div>
            <div className={Style.Footer_container_left_item}>
              Contact Us
            </div>
          </div>
          <div className={Style.Footer_container_midleft}>
            <div className={Style.Footer_container_midleft_heading}>SERVICES</div>
            <div className={Style.Footer_container_midleft_item}>Products</div>
            <div className={Style.Footer_container_midleft_item}>Shipping</div>
            <div className={Style.Footer_container_midleft_item}>Track Order</div>
            <div className={Style.Footer_container_midleft_item}>Revies</div>
          </div>
          <div className={Style.Footer_container_right}>
            <div className={Style.Footer_container_right_heading}>PARTNERS</div>
            <div className={Style.Footer_container_right_item}>Binance</div>
            <div className={Style.Footer_container_right_item}>CoinMarketCap</div>
            <div className={Style.Footer_container_right_item}>Houbi</div>
            <div className={Style.Footer_container_right_item}>Etherscan</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer