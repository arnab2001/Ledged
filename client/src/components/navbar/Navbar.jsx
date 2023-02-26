import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";

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
      <div className={navbar ? "led active" : "led"}>
        <div className="led__navbar">
          <div className="led__navbar-links_logo">
            <img src={logo} />
          </div>
          <div className="led__navbar-links">
            <div className="led__navbar-links_container">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#about">Why us?</a>
              </p>
            </div>
          </div>
          <div className="led__navbar-sign">
            <p>Logged in</p>
            <button type="button">Ledgers</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
