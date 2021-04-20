import { useContext } from "react";

import { Trans } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";

export const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <Trans i18nKey="Homepage" />
    </div>
  );
};

export default Home;
