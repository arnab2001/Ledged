import { useContext } from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.jpg";
import { Web3ApiContext } from "../../context/Web3Context";
import "./lednav.css";

const LedNav = () => {
  const { connectedAccount } = useContext(Web3ApiContext);
  return (
    <div className="led__lednav section__padding">
      <div className="led__lednav-links_logo">
        <img src={logo} />
      </div>
      <div className="led__lednav-links">
        <div className="led__lednav-links_container">
          <p>
            {connectedAccount?.slice(0, 3) +
              "........" +
              connectedAccount?.slice(
                connectedAccount.length - 4,
                connectedAccount.length
              )}
          </p>
        </div>
      </div>
      <div className="led__lednav-sign">
        <img src={user} />
      </div>
    </div>
  );
};

export default LedNav;
