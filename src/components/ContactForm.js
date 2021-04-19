import { useState } from "react";

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
    if (newCountryList.length === 1) {
      setValue("country", newCountryList[0].name);
      clearErrors("country");
    }
    if (!newCountryList.length) {
      setValue("country", null);
    }

    setCountryList(newCountryList);
  };

  return (
    <div className="contactUsContainer">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={errors.name ? "erroneousFormRow" : "normalRow"}>
          <label htmlFor="name">Name</label>
          <input
            {...register("name", {
              required: true,
            })}
            id="name"
            type="text"
          />
        </div>

        <div className={errors.email ? "erroneousFormRow" : "normalRow"}>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._½+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            id="email"
            type="text"
          />
        </div>

        <div className={errors.phone ? "erroneousFormRow" : "normalRow"}>
          <label htmlFor="phone">Phone</label>
          <input
            {...register("phone", {
              minLength: 9,
              maxLength: 10,
              required: true,
            })}
            id="phone"
            autoComplete="off"
            autoCorrect="off"
            type="number"
          />
        </div>

        <div className={errors.country ? "erroneousFormRow" : "normalRow"}>
          <label>Country</label>
          <input
            onChange={handleFilterChange}
            placeholder="Search for Country"
            type="text"
            name="filter"
          />
          <select {...register("country", { required: true })} id="country">
            {countryList.map((country) => {
              return <option key={country.id}>{country.name}</option>;
            })}
          </select>
        </div>

        <div className={errors.message ? "erroneousFormRow" : "normalRow"}>
          <label htmlFor="message">Message</label>
          <textarea
            {...register("message", { required: true })}
            id="message"
            type="text"
          />
        </div>
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
