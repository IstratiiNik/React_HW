import { LanguageProvider } from "./LanguageContext/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";


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
