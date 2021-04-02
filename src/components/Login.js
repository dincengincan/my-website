import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Trans } from "react-i18next";

import "./login.css";

import LanguageSwitcher from "./LanguageSwitcher";

import { LanguageContext } from "../context/LanguageContext";

const Login = ({ onClose, onSubmit }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [languageOnModal, setLanguageOnModal] = useState(language);

  const submitForm = (formValues) => {
    setLanguage(languageOnModal);
    onSubmit(formValues);
  };

  const onLanguageOnModalChange = (language) => {
    setLanguageOnModal(language);
  };

  return (
    <div className="loginContainer">
      <h2>
        <Trans i18nKey="login" />
      </h2>
      <form>
        <div className={errors.name ? "erroneousFormRow" : "formRow"}>
          <label htmlFor="name">
            <Trans i18nKey="name" />
          </label>
          <input
            {...register("name", {
              required: true,
            })}
            id="name"
            type="text"
            className="input-field"
          />
        </div>

        <div className={errors.email ? "erroneousFormRow" : "formRow"}>
          <label htmlFor="email">
            <Trans i18nKey="e-mail" />
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._½+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            id="email"
            type="text"
            className="input-field"
          />
        </div>

        <div className={errors.password ? "erroneousFormRow" : "formRow"}>
          <label htmlFor="password">
            <Trans i18nKey="password" />
          </label>
          <input
            {...register("password", {
              required: true,
            })}
            id="password"
            type="text"
            className="input-field"
          />
        </div>
        <LanguageSwitcher
          onChange={onLanguageOnModalChange}
          selectedLanguage={languageOnModal}
        />
      </form>

      <button onClick={onClose} type="button">
        <Trans i18nKey="close" />
      </button>
      <button onClick={handleSubmit(submitForm)} type="submit">
        <Trans i18nKey="login" />
      </button>
    </div>
  );
};

export default Login;
