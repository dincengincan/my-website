import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbar.css";

import { ReactComponent as Logo } from "../assets/crown.svg";

import Popover from "./Popover";
import LanguageSwitcher from "./LanguageSwitcher";

export const Navbar = () => {
  const history = useHistory();
  const [showPopover, setShowPopover] = useState(false);

  const handlePopover = () => {
    setShowPopover((prevState) => !prevState);
  };

  const handleContactRedirection = () => {
    history.push("/contact");
  };

  const handleHomeRedirection = () => {
    history.push("/");
  };

  return (
    <nav className="navbar">
      <div onClick={handleHomeRedirection} className="left-part">
        <Logo />
        <h3 className="header">Sample Website</h3>
      </div>

      <div className="right-part">
        <button onClick={handleContactRedirection} className="link">
          Contact Us
        </button>

        <button className="link">Login</button>

        <div className="user-info" onClick={handlePopover}>
          User Info
        </div>
        <div className="popover-wrapper">
          {showPopover && (
            <Popover>
              <div>Email</div>
              <button>Log out</button>
            </Popover>
          )}
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
