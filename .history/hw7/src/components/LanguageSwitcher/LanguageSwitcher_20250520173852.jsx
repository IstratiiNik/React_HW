import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";

const LanguageSwitcher = () => {
  const { toggleLangusge, language } = useContext(LanguageContext);

  return (
	<button>
		{language === ''}
	</button>
  );
};

export default LanguageSwitcher;
