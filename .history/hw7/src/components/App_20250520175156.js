import { LanguageProvider } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import TextDisplay from "./TextDisplay";
import "./App.scss";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <h1>Multilingual App</h1>
        <TextDisplay />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
