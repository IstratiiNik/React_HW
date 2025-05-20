import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";

const LanguageSwitcher = () => {
  const { toggleLangusge, language } = useContext(LanguageContext);

  return (
    <button onClick={}>
      {language === "en" ? "Сменить язык на Русский" : "Switch to English"}
    </button>
  );
};

export default LanguageSwitcher;
