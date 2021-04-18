import { useState, useContext } from "react";

import "./login.css";

import LanguageSwitcher from "./LanguageSwitcher";

import { LanguageContext } from "../context/LanguageContext";

const Login = ({ onClose, onSubmit }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [languageOnModal, setLanguageOnModal] = useState(language);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLanguage(languageOnModal);
    onSubmit({ name, email, password });
  };

  const onLanguageOnModalChange = (language) => {
    setLanguageOnModal(language);
  };

  return (
    <div className="loginContainer">
      <h2>Login</h2>
      <form>
        <div className="formRow">
          <label htmlFor="user-name">Name</label>
          <input
            value={name}
            id="user-name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="formRow">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="formRow">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            id="password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <LanguageSwitcher
          onChange={onLanguageOnModalChange}
          selectedLanguage={languageOnModal}
        />
      </form>

      <button onClick={onClose} type="button">
        Close
      </button>
      <button onClick={handleSubmit} type="submit">
        Login
      </button>
    </div>
  );
};

export default Login;
