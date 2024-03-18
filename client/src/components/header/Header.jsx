import React, { useContext } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { Web3ApiContext } from "../../context/Web3Context";
import { Images } from "../../assets";

const Header = () => {
  const { connectWallet } = useContext(Web3ApiContext);
  const navigate = useNavigate();
  const goto_Profile = async () => {
    navigate("/profile");
    try {
      await connectWallet();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="led__header section__padding" id="home">
        <div className="header__left">
          <span className="span1">Get Started With</span>
          <h1 className="heading">IMMUTABLE</h1>
          <h1 className="heading">PERSONALISED</h1>
          <span className="span2">Ledger at your fingertips</span>



        </div>
        <div className="header__right">
          <img src={Images.personal} />
        </div>

      </div>
      <div className="led__button section__padding">
        <div className="button__styling2" type="button" onClick={goto_Profile}>
          Get Started
          <img src={Images.rightArrow} />
        </div>
      </div>
    </>
  );
};

export default Header;
