import React, { useState, useEffect } from "react";

// Component for displaying and adding list items
const ListItems = () => {
  // State for the list of items
  const [items, setItems] = useState([]);
  // State for the input field value
  const [inputValue, setInputValue] = useState("");

  // Function to add a new item to the list
  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  // Effect to log when the items array changes
  useEffect(() => {
    console.log("Компонент ListItems обновлен");
  }, [items]); // НАМЕРЕННО частые обновления

  return (
    <div>
      {/* Input field for new item */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите элемент"
      />
      <button onClick={addItem}>Добавить</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
