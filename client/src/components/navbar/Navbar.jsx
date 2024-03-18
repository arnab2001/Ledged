import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Images } from "../../assets";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <div className={navbar ? "led active section__padding" : "led section__padding"}>
        <div className="led__navbar">
          <div className="led__navbar-links_logo">
            <img src={Images.logo} />
          </div>
          <div className="led__navbar-links">
            <div className="led__navbar-links_container">
              <a href="#about">About</a>

              <div className="button__styling" type="button">MetaMask
                <img src={Images.thumb} alt="user" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
