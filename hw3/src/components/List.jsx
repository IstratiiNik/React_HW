import { useState } from "react";

function List() {
  // State to store the list of people
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {/* Render the list of people */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {people.map((human) => (
          <li
            key={human.id} // Unique key for each list item
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            {/* Display person's name and age */}
            <span>
              {human.name} - {human.age} лет
            </span>
            {/* Button to remove a person from the list */}
            <button
              onClick={() => setPeople(people.filter((p) => p.id !== human.id))} // Remove person by filtering
              style={{
                padding: "5px 10px",
                fontSize: "14px",
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
