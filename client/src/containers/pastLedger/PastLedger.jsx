import React, { useContext, useEffect } from "react";
import "./pastLedger.css";
import logo from "../../assets/user.jpg";
import Lottie from "lottie-react";
import Ledge from "../../assets/ledger__animation.json";
import { Footer } from "../../components";
import { Web3ApiContext } from "../../context/Web3Context";
import Rightcontainer from "./Rightcontainer";
const PastLedger = () => {
  const { Get_ledgerdata } = useContext(Web3ApiContext);

  useEffect(() => {
    Get_ledgerdata();
  }, []);
  return (
    <>
      <div className="led__pastLedger">
        <div className="led__pastLedger__left">
          <div className="led__pastLedger_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="led__pastLedger_username">bneogi102002</div>
          <div className="led__pastLedger_animation">
            <Lottie animationData={Ledge} width={10} height={10} />
          </div>
        </div>
        <Rightcontainer />;
      </div>

      <Footer />
    </>
  );
};

export default PastLedger;
