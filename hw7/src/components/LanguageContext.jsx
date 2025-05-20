import { createContext, useState } from "react";

// Create context for language state
export const LanguageContext = createContext();

// Provider component to manage language state and switching
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  // Function to toggle language between English and Russian
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ru" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
