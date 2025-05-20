import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

// Texts for each supported language
const texts = {
  en: "Hello, this is multilingual app!",
  ru: "Привет, это многоязычное приложение",
};

// Component to display text in the current language
const TextDisplay = () => {
  const { language } = useContext(LanguageContext);

  return <p>{texts[language]}</p>;
};

export default TextDisplay;
