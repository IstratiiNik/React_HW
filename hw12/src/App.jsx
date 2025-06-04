import React, { useState } from "react";
import "./App.css";
import ValueDisplay from "./ValueDisplay";

// Main application component
function App() {
  // State for the current input value
  const [value, setValue] = useState("");
  // State for the last submitted value
  const [submittedValue, setSubmittedValue] = useState("");

  // Handle submit on blur or Enter key
  const handleSubmit = () => {
    setSubmittedValue(value);
  };

  // Handle Enter key press in input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="app">
      <h1>Current and Previous Value</h1>
      {/* Input field for user value */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleSubmit}
        placeholder="Enter text"
      />
      {/* Display current and previous submitted value */}
      <ValueDisplay value={submittedValue} />
    </div>
  );
}

export default App;
