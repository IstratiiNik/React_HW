import styles from "./CitySelector.module.css";

// Dropdown component for selecting a city
const CitySelector = ({ cities, onSelect }) => {
  return (
    <div className={styles.container}>
      {/* Label for the dropdown */}
      <label className={styles.label}>Выберите город:</label>

      {/* Dropdown menu */}
      <select
        className={styles.select}
        onChange={(e) => onSelect(e.target.value)} // Trigger onSelect when a city is selected
      >
        <option value="">-- Выберите --</option>
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
