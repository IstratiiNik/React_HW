import { useContext } from "react";

const texts = {
  en: "Hello, this is multilingual app!",
  ru: "Привет, это многоязычное приложение",
};

const TextDisplay = () => {
  return <p>{texts[language]</p>;
};

export default TextDisplay;
