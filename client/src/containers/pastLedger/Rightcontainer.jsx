import React, { useContext } from "react";
import { Web3ApiContext } from "../../context/Web3Context";
import './pastLedger.css'
import { Images } from "../../assets";
const Rightcontainer = () => {
  const { org_ledger } = useContext(Web3ApiContext);

  return (
    <div className="led_feed">
      <div className="past_header" id="whyUs">
        <div className="past_title">
          PAST LEDGERS
        </div>
      </div>
      <div className="info_container section__padding">
        {org_ledger?.map((l, idx) => (
          <p>
            {l[0] !== "$$$$" ? (
              <>
                <div className="each_feed">
                  <h1 className="preview_key">
                    {l[0]}
                  </h1>
                  <p className="preview_value">
                    {l[1]}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="divider">

                  <img src={Images.bullet} alt="thumb" height={40} width={40} />
                  <img src={Images.star1} alt="thumb" height={40} width={40} />
                  <img src={Images.bullet} alt="thumb" height={40} width={40} />
                </div>
              </>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Rightcontainer;
