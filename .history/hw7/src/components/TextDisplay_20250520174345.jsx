import { useContext } from "react";
import { LanguageContext } from "./LanguageContext/LanguageContext";

const texts = {
  en: "Hello, this is multilingual app!",
  ru: "Привет, это многоязычное приложение",
};

const TextDisplay = () => {
const {language} = useContext(LanguageContext);

  return <p>{texts[language]}</p>;
};

export default TextDisplay;
