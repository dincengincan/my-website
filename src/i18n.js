import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import tr from "./translations/tr.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      EN: {
        translation: en,
      },
      TR: {
        translation: tr,
      },
    },
    lng: "EN",
    fallbackLng: "EN",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
