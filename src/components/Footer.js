import "./footer.css";
import { useContext } from "react";
import { Trans } from "react-i18next";

import { LanguageContext } from "../context/LanguageContext";

export const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="footer">
      <Trans i18nKey="footer" />
    </div>
  );
};

export default Footer;
