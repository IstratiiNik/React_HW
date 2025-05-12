import React, { useState } from "react";
import Answer from "./Answer";

// Main component for the math quiz
function MathQuiz() {
  // Function to generate a random number between 1 and 10
  const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

  // State to store the two numbers for the math problem
  const [a, setA] = useState(getRandomNumber());
  const [b, setB] = useState(getRandomNumber());

  // State to store the user's score
  const [score, setScore] = useState(0);

  // Function to update the score based on the user's answer
  const updatePoints = (userAnswer) => {
    const correct = a + b === Number(userAnswer);

    if (correct) {
      // Increment score if the answer is correct
      setScore(score + 1);
    } else {
      // Decrement score if the answer is incorrect, but not below 0
      setScore((prev) => (prev > 0 ? prev - 1 : 0));
    }

    // Generate new numbers for the next question
    setA(getRandomNumber());
    setB(getRandomNumber());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          backgroundColor: "#bde0fe",
          border: "2px solid purple",
          borderRadius: "10px",
          padding: "30px",
          textAlign: "center",
          width: "300px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Display the user's current score */}
        <h2 style={{ fontWeight: "bold" }}>Ваши очки: {score}</h2>

        {/* Display the math problem */}
        <p style={{ fontSize: "24px" }}>
          {a} + {b} = ?
        </p>

        {/* Answer input component */}
        <Answer onAnswer={updatePoints} />
      </div>
    </div>
  );
}

export default MathQuiz;
