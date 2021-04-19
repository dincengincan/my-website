import { useTranslation } from "react-i18next";
import "./languageSwitcher.css";

const LanguageSwitcher = ({ onChange, selectedLanguage }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <select
        value={selectedLanguage}
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
          onChange(e.target.value);
        }}
        className="language"
      >
        <option value="TR">TR</option>
        <option value="EN">EN</option>
      </select>
    </>
  );
};

export default LanguageSwitcher;
