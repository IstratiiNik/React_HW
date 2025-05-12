import React, { useState } from "react";

// Component for user input and answer submission
function Answer({ onAnswer }) {
  // State to store the user's input
  const [input, setInput] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = Number(input);

    // Validate input: must be a non-negative number
    if (input.trim() === "" || isNaN(value) || value < 0) return;

    // Pass the answer to the parent component
    onAnswer(value);

    // Clear the input field
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for the user's answer */}
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите ответ"
        required
        style={{
          padding: "5px",
          fontSize: "16px",
          width: "130px",
          marginRight: "8px",
        }}
      />
      {/* Submit button */}
      <button
        type="submit"
        style={{
          padding: "6px 12px",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        Проверить
      </button>
    </form>
  );
}

export default Answer;
