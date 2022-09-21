import "./topBar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "./Button";

const TopBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const manualClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 950) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            rter <i class="fa-solid fa-cloud" />
          </Link>
          <div className="menu-icon" onClick={manualClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/weather"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Weather
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chat" className="nav-links" onClick={closeMobileMenu}>
                Chat
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign-up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-contour">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default TopBar;
