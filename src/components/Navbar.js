import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./navbar.css";

import { ReactComponent as Logo } from "../assets/crown.svg";

import Popover from "./Popover";
import LanguageSwitcher from "./LanguageSwitcher";
import Modal from "./Modal";
import Login from "./Login";

import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";

export const Navbar = () => {
  const history = useHistory();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const [showPopover, setShowPopover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  console.log(showPopover);

  const handlePopover = () => {
    setShowPopover((prevState) => !prevState);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleContactRedirection = () => {
    history.push("/contact");
  };

  const handleHomeRedirection = () => {
    history.push("/");
  };

  const handleLogout = () => {
    setUserInfo(null);
    handleModalClose();
    setShowPopover(false);
  };

  const handleLanguageOnHeaderChange = (language) => {
    setLanguage(language);
  };

  const handleLogin = (userInfo) => {
    setUserInfo(userInfo);
    handleModalClose();
  };

  return (
    <>
      <nav className="navbar">
        <div onClick={handleHomeRedirection} className="left-part">
          <Logo />
          <h3 className="header">Sample Website</h3>
        </div>

        <div className="right-part">
          <button onClick={handleContactRedirection} className="link">
            Contact Us
          </button>

          {!userInfo && (
            <button onClick={handleModalOpen} className="link">
              Login
            </button>
          )}

          {userInfo && (
            <div className="user-info" onClick={handlePopover}>
              {userInfo.name}
            </div>
          )}

          {showPopover && userInfo && (
            <div className="popover-wrapper">
              <Popover>
                <div>{userInfo.email} </div>
                <button onClick={handleLogout}>Log out</button>
              </Popover>
            </div>
          )}
          <LanguageSwitcher
            selectedLanguage={language}
            onChange={handleLanguageOnHeaderChange}
          />
        </div>
      </nav>
      {showModal && (
        <Modal>
          <Login onClose={handleModalClose} onSubmit={handleLogin} />
        </Modal>
      )}
    </>
  );
};

export default Navbar;
