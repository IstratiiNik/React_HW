import List from "./List";
import Rating from "./Rating";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Rating />
      <List />
    </div>
  );
}

export default App;
