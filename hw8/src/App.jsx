import "./App.css";
import ListItems from "../components/ListItems";

// Main application component
function App() {
  return (
    <div className="App">
      <h1>Список элементов</h1>
      {/* Render the list items component */}
      <ListItems />
    </div>
  );
}

export default App;
