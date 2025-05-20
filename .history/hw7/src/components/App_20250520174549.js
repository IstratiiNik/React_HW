import { LanguageProvider } from "./LanguageContext/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <h1>Multilingual App</h1>
		  <LanguageSwitcher />
		  <TextdI></TextdI>
      </div>
    </LanguageProvider>

  );
}

export default App;
