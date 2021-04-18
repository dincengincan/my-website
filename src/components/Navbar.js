import React, { useState } from "react";
import "./navbar.css";

import { ReactComponent as Logo } from "../assets/crown.svg";

import Popover from "./Popover";
import LanguageSwitcher from "./LanguageSwitcher";

export const Navbar = () => {
  const [showPopover, setShowPopover] = useState(false);

  const handlePopover = () => {
    setShowPopover((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="left-part">
        <Logo />
        <h3 className="header">Sample Website</h3>
      </div>

      <div className="right-part">
        <button className="link">Contact Us</button>
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
