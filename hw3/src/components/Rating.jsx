import { useState } from "react";

function Rating() {
  // State to store the current rating value
  const [ratingValue, setRatingValue] = useState(0);

  // List of image URLs representing different rating levels
  const ratingList = [
    "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png", // Poor
    "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png", // Acceptable
    "https://www.clipartmax.com/png/small/297-2970219_movie-4-star-rating-png.png", // Good
    "https://www.clipartmax.com/png/small/67-676995_5-star-rating-png.png", // Excellent
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Display the current rating image */}
      <img
        src={ratingList[ratingValue]}
        alt="Rating"
        style={{ marginBottom: "20px" }}
      />

      {/* Buttons to change the rating */}
      <div style={{ padding: "10px 15px", fontSize: "16px" }}>
        <button
          onClick={() => setRatingValue(0)} // Set rating to "Poor"
          style={{ padding: "10px 15px", fontSize: "16px", cursor: "pointer" }}
        >
          Плохо
        </button>
        <button
          onClick={() => setRatingValue(1)} // Set rating to "Acceptable"
          style={{ padding: "10px 15px", fontSize: "16px", cursor: "pointer" }}
        >
          Приемлемо
        </button>
        <button
          onClick={() => setRatingValue(2)} // Set rating to "Good"
          style={{ padding: "10px 15px", fontSize: "16px", cursor: "pointer" }}
        >
          Хорошо
        </button>
        <button
          onClick={() => setRatingValue(3)} // Set rating to "Excellent"
          style={{ padding: "10px 15px", fontSize: "16px", cursor: "pointer" }}
        >
          Отлично
        </button>
      </div>
    </div>
  );
}

export default Rating;
