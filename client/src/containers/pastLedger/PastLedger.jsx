import React, { useContext, useEffect } from "react";
import "./pastLedger.css";
import logo from "../../assets/user.jpg";
import Lottie from "lottie-react";
import Ledge from "../../assets/ledger__animation.json";
import { Footer } from "../../components";
import { Web3ApiContext } from "../../context/Web3Context";
import Rightcontainer from "./Rightcontainer";
const PastLedger = () => {
  const { Get_ledgerdata, org_ledger, connectedAccount } =
    useContext(Web3ApiContext);

  useEffect(() => {
    Get_ledgerdata();
  }, [org_ledger]);
  return (
    <>
      <div className="led_pastLedger">
        <Rightcontainer />
      </div>
    </>
  );
};

export default PastLedger;
