import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";

const LanguageSwitcher = () => {
  const { toggleLangusge, language } = useContext(LanguageContext);

  return (
	<button>
		{language === 'en' ? "Сменить язык на Русский"}
	</button>
  );
};

export default LanguageSwitcher;
