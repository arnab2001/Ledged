import React, { useContext } from "react";
import { Web3ApiContext } from "../../context/Web3Context";

const Rightcontainer = () => {
  const { org_ledger } = useContext(Web3ApiContext);

  return (
    <div className="led__pastLedger__right">
      <div className="led__pastLedger-feed">
        <div className="led__pastLedger-feed-no"></div>

        <div className="led__pastLedger-feed-content">
          {org_ledger?.map((l, idx) => (
            <div>
              <div className="led__pastLedger-feed-content-info">
                <p>
                  {l[0] !== "$$$$" ? (
                    <>{l[0] + " : " + l[1]}</>
                  ) : (
                    <hr style={{ margin: "2rem 0", textDecoration: "" }} />
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightcontainer;
