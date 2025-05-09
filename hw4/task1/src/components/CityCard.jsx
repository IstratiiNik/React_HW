import React from "react";
import styles from "./CityCard.module.css";

// Component to display details of the selected city
const CityCard = ({ city }) => {
  // If no city is selected, render nothing
  if (!city) return null;

  return (
    <div className={styles.card}>
      {/* City name */}
      <h2 className={styles.title}>{city.name}</h2>

      {/* City image */}
      <img src={city.imageUrl} alt={city.name} className={styles.image} />

      {/* City description */}
      <p className={styles.description}>{city.description}</p>

      {/* List of city facts */}
      <ul className={styles.fact}>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityCard;
