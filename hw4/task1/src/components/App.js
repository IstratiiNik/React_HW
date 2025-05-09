import React, { useState } from "react";
import CitySelector from "./CitySelector";
import CityCard from "./CityCard";
import citiesData from "./citiesData";
import styles from "./App.module.css";

function App() {
  // State to store the currently selected city
  const [selectedCity, setSelectedCity] = useState(null);

  // Handler for city selection
  const handleCitySelect = (cityName) => {
    const city = citiesData.find((c) => c.name === cityName); // Find the selected city in the data
    setSelectedCity(city); // Update the state with the selected city
  };

  return (
    <div className={styles.appContainer}>
      {/* App title */}
      <h1>City Cards</h1>

      {/* City selector dropdown */}
      <CitySelector cities={citiesData} onSelect={handleCitySelect} />

      {/* Display the selected city's details */}
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;
