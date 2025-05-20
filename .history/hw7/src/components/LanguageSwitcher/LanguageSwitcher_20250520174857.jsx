import  { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";

const LanguageSwitcher = () => {
  const { toggleLangusge, language } = useContext(LanguageContext);

  return (
    <button onClick={toggleLanguage}>
      {language === "en" ? "Сменить язык на Русский" : "Switch to English"}
    </button>
  );
};

export default LanguageSwitcher;
