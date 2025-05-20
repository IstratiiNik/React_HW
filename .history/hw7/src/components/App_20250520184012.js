import { LanguageProvider } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import TextDisplay from "./TextDisplay";
import "./App.scss";

// Main application component
function App() {
  return (
    // Provide language context to all children
    <LanguageProvider>
      <div className="App">
        <h1>Multilingual App</h1>
        {/* Display text in selected language */}
        <TextDisplay />
        {/* Button to switch language */}
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
