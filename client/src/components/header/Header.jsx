import React, { useContext } from "react";
import "./header.css";
import Lottie from "lottie-react";
import Cashier from "../../assets/cashier__animation.json";
import { useNavigate } from "react-router-dom";
import { Web3ApiContext } from "../../context/Web3Context";

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
        <div className="led__header-content">
          <h1
            className="gradient__text gradient__text-fade"
            data-aos="fade-down"
          >
            LEDGED
          </h1>
          <p className="gradient__para">
            Bringing Immutable & Decentralised Ledgers to People using
            BlockChain.
          </p>

          <div className="led__header-content__input">
            <button type="button" onClick={goto_Profile}>
              Get Started
            </button>
          </div>
        </div>

        <div className="led__header-image">
          <Lottie animationData={Cashier} />
        </div>
      </div>
    </>
  );
};

export default Header;
