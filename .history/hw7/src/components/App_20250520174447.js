import { LanguageProvider } from "./LanguageContext/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
		<h1>Multilingual</h1>
		</div>
    </LanguageProvider>
  );
}

export default App;
