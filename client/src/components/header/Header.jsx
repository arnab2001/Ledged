import React, { useContext, useState } from "react";
import "./header.css";
// import { useNavigate } from "react-router-dom";
import { Web3ApiContext } from "../../context/Web3Context";
import { Images } from "../../assets";
import Loading from "../loading/Loading";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../context/LoadingContext";

const Header = () => {
  const { connectedAccount, connectWallet } = useContext(Web3ApiContext);
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(LoadingContext);
  const wallet = async () => {
    try {
      setLoading(true);
      await connectWallet();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {loading && <Loading />}
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
        {
          !connectedAccount ? (
            <>
              <div className="button__styling2" type="button" onClick={wallet}>
                Get Started
                <img src={Images.rightArrow} />
              </div>


            </>
          )
            :
            (
              <>
                <div className="button__styling3" type="button" >
                  Past Ledgers
                  <img src={Images.rightArrow} />
                </div>
              </>
            )

        }
      </div>



    </>
  );
};

export default Header;
