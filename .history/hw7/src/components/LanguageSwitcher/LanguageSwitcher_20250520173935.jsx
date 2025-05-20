import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";

const LanguageSwitcher = () => {
  const { toggleLangusge, language } = useContext(LanguageContext);

  return (
    <button onC>
      {language === "en" ? "Сменить язык на Русский" : "Switch to English"}
    </button>
  );
};

export default LanguageSwitcher;
