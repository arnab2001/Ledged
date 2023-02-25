import React, { useEffect } from 'react';
import './header.css';
import Lottie from 'lottie-react'
import Cashier from '../../assets/cashier__animation.json'

const Header = () => {

  return(
    <>
    <div className="led__header section__padding" id="home">
    <div className="led__header-content">
      <h1 className="gradient__text gradient__text-fade"  data-aos="fade-down">LEDGED</h1>
      <p className="gradient__para" >Bringing Immutable & Decentralised Ledgers to People using BlockChain.
</p>

      <div className="led__header-content__input">
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="led__header-image">
        <Lottie animationData={Cashier}/>
    </div>
  </div>
  </>
  );
}

export default Header;
