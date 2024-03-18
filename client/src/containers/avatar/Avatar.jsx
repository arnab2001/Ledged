import React, { useContext, useEffect } from "react";
import avatar from "../../assets/user.jpg";
import Animate from "../../assets/avatar__animation.json";
import logo from "../../assets/logo.png";
import "./avatar.css";
import Lottie from "lottie-react";
import { Footer, Loading } from "../../components";
import { useNavigate } from "react-router-dom";
import { Web3ApiContext } from "../../context/Web3Context";
const Avatar = () => {
  const navigate = useNavigate();
  const { connectedAccount, checkIfWalletIsConnected, Get_ledgerdata } =
    useContext(Web3ApiContext);
  console.log(connectedAccount);
  const goTo_createLedger = async () => {
    await Get_ledgerdata();
    navigate("/create-ledger");
  };
  const goTo_pastLedger = () => {
    navigate("/past-ledger");
  };

  useEffect(() => {
    try {
      checkIfWalletIsConnected();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {
        connectedAccount ? (
          <>
            <div className="led__avatar section__padding">
              <div className="led__left">
                <div className="led__left__upper">
                  <div className="led__left-logo">
                    <img className="led__left-image" src={logo} />
                  </div>
                  <div className="led__left-logo__1">
                    <Lottie animationData={Animate} width={10} height={10} />
                  </div>
                </div>
                <div className="led__header-content">
                  <h1 className="gradient__text">LEDGED</h1>
                </div>
              </div>
              <div className="led__right">
                <div className="led__right-logo">
                  <img className="led__right-image" src={avatar} />
                </div>
                <div className="led__right-username">
                  <p>
                    {connectedAccount.slice(0, 3) +
                      "...." +
                      connectedAccount.slice(
                        connectedAccount.length - 4,
                        connectedAccount.length
                      )}
                  </p>
                </div>
                <div className="led__right-content__input">
                  <button
                    className="led__right-content__button"
                    onClick={goTo_pastLedger}
                  >
                    Past Ledgers
                  </button>
                  <button
                    className="led__right-content__button"
                    onClick={goTo_createLedger}
                  >
                    Create New Ledger
                  </button>
                </div>
              </div>
            </div>
          </>
        ) :
          <>
            <Loading />
          </>
      }
    </>
  );
};

export default Avatar;
