import { useState, useContext } from "react";
import { Trans } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";

import "./contactForm.css";

import { useForm } from "react-hook-form";

const defaultCountryList = [
  { id: "TR", name: "Turkey" },
  { id: "US", name: "United States of America" },
  { id: "GB", name: "United Kingdom" },
  { id: "DE", name: "Germany" },
  { id: "SE", name: "Sweden" },
  { id: "KE", name: "Kenya" },
  { id: "BR", name: "Brazil" },
  { id: "ZW", name: "Zimbabwe" },
];

export const ContactForm = () => {
  const { language } = useContext(LanguageContext);
  const {
    register,
    setValue,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [countryList, setCountryList] = useState(defaultCountryList);
  const onSubmit = (values) => {
    console.log(values);
  };

  const handleFilterChange = (e) => {
    const newCountryList = defaultCountryList.filter((country) =>
      country.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (newCountryList.length) {
      setValue("country", JSON.stringify(newCountryList[0]));
      clearErrors("country");
    }
    if (!newCountryList.length) {
      setValue("country", null);
    }

    setCountryList(newCountryList);
  };

  return (
    <div className="contactUsContainer">
      <h2>
        <Trans i18nKey="contact-us" />
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={errors.name ? "erroneousFormRow" : "normalRow"}>
          <label htmlFor="name">
            <Trans i18nKey="name" />
          </label>
          <input
            {...register("name", {
              required: true,
            })}
            id="name"
            type="text"
          />
        </div>

        <div className={errors.email ? "erroneousFormRow" : "normalRow"}>
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
          />
        </div>

        <div className={errors.phonenumber ? "erroneousFormRow" : "normalRow"}>
          <label htmlFor="phonenumber">
            <Trans i18nKey="phone" />
          </label>
          <input
            {...register("phonenumber", {
              minLength: 9,
              maxLength: 10,
              required: true,
            })}
            id="phonenumber"
            autoComplete="off"
            autoCorrect="off"
            type="number"
          />
        </div>

        <div
          id="multiple-input"
          className={errors.country ? "erroneousFormRow" : "normalRow"}
        >
          <label>
            <Trans i18nKey="country" />
          </label>
          <input
            onChange={handleFilterChange}
            placeholder="Search for Country"
            type="text"
            name="filter"
            autoComplete="off"
            autoCorrect="off"
          />

          <select {...register("country", { required: true })} id="country">
            {countryList.map((country) => {
              return (
                <option key={country.id} value={JSON.stringify(country)}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className={errors.text ? "erroneousFormRow" : "normalRow"}>
          <label htmlFor="text">
            <Trans i18nKey="message" />
          </label>
          <textarea
            {...register("text", { required: true })}
            id="text"
            type="text"
          />
        </div>

        <button onClick={handleSubmit} type="submit">
          <Trans i18nKey="send" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
