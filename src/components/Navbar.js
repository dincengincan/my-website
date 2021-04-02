import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Trans } from "react-i18next";
import "./navbar.css";

import { ReactComponent as Logo } from "../assets/crown.svg";
import { ReactComponent as Hamburger } from "../assets/menu.svg";

import Popover from "./Popover";
import LanguageSwitcher from "./LanguageSwitcher";
import Modal from "./Modal";
import Login from "./Login";

import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";
import useWindowSize, { WINDOW_SIZES } from "../hooks/useWindowSize";

export const Navbar = () => {
  const isSmall = useWindowSize(WINDOW_SIZES.MOBILE);
  const history = useHistory();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const [showPopover, setShowPopover] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePopover = () => {
    setShowPopover((prevState) => !prevState);
  };

  const handleModalOpen = () => {
    setShowMobileNav(false);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleContactRedirection = () => {
    setShowMobileNav(false);
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

  const handleMobileNav = () => {
    setShowMobileNav((prevState) => !prevState);
  };

  const NavbarMobile = () => (
    <nav className="navbar">
      <div onClick={handleHomeRedirection} className="left-part">
        <Logo />
        <h3 className="header">Sample</h3>
      </div>
      <div onClick={handleMobileNav} className="right-part">
        <Hamburger />
      </div>
      {showMobileNav && (
        <div className="hamburger-content">
          <button onClick={handleContactRedirection} className="link">
            <Trans i18nKey="contact-us" />
          </button>

          {!userInfo && (
            <button onClick={handleModalOpen} className="link">
              <Trans i18nKey="login" />
            </button>
          )}
          <LanguageSwitcher
            selectedLanguage={language}
            onChange={handleLanguageOnHeaderChange}
          />

          {userInfo && (
            <div className="user-info" onClick={handlePopover}>
              {userInfo.name}
            </div>
          )}

          {showPopover && userInfo && (
            <>
              <div className="e-mail-text">{userInfo.email}</div>
              <button onClick={handleLogout} className="link">
                <Trans i18nKey="logout" />
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );

  const NavbarWeb = () => (
    <nav className="navbar">
      <div onClick={handleHomeRedirection} className="left-part">
        <Logo />
        <h3 className="header">Sample</h3>
      </div>

      <div className="right-part">
        <button onClick={handleContactRedirection} className="link">
          <Trans i18nKey="contact-us" />
        </button>

        {!userInfo && (
          <button onClick={handleModalOpen} className="link">
            <Trans i18nKey="login" />
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
              <button onClick={handleLogout}>
                <Trans i18nKey="logout" />
              </button>
            </Popover>
          </div>
        )}
        <LanguageSwitcher
          selectedLanguage={language}
          onChange={handleLanguageOnHeaderChange}
        />
      </div>
    </nav>
  );

  return (
    <>
      {showModal && (
        <Modal>
          <Login onClose={handleModalClose} onSubmit={handleLogin} />
        </Modal>
      )}
      {isSmall ? NavbarMobile() : NavbarWeb()}
    </>
  );
};

export default Navbar;
