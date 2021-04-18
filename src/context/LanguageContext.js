import { createContext, useMemo, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN");

  const value = useMemo(() => ({ language, setLanguage }), [
    language,
    setLanguage,
  ]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
