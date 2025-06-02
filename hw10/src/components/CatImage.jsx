import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CatImage.module.scss";

// Component to display a random cat image
const CatImage = () => {
  // State to store the image URL
  const [imageUrl, setImageUrl] = useState("");

  // Function to fetch a random cat image from the API
  const fetchCatImage = async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setImageUrl(response.data[0].url);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  // Fetch a cat image when the component mounts
  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.container}>
      {/* Title */}
      <h1 className={styles.title}>Random Cat Image</h1>
      {/* Display the image if available */}
      {imageUrl && (
        <img src={imageUrl} alt="Random Cat" className={styles.image} />
      )}
      {/* Button to load a new image */}
      <button className={styles.button} onClick={fetchCatImage}>
        Load New Image
      </button>
    </div>
  );
};

export default CatImage;
