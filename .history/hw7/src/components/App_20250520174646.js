import { LanguageProvider } from "./LanguageContext/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import TextDisplay from "./TextDisplay";
import "./App"

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <h1>Multilingual App</h1>
        <LanguageSwitcher />
        <TextDisplay />
      </div>
    </LanguageProvider>
  );
}

export default App;
