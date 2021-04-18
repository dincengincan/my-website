import "./languageSwitcher.css";

const LanguageSwitcher = ({ onChange, selectedLanguage }) => {
  return (
    <select
      value={selectedLanguage}
      onChange={(e) => onChange(e.target.value)}
      className="language"
    >
      <option>TR</option>
      <option>EN</option>
    </select>
  );
};

export default LanguageSwitcher;
