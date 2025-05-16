import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./UserProfile.module.scss";

// Component for displaying a user profile card
function UserProfile() {
  // State for user data
  const [user, setUser] = useState(null);
  // State for loading status
  const [loading, setLoadig] = useState(true);

  // Function to fetch user data from API
  const fetchUser = async () => {
    setLoadig(true);
    try {
      const responce = await axios.get("https://randomuser.me/api");
      setUser(responce.data.results[0]);
    } catch (error) {
      console.log("Ошибка загрузки данных: ", error);
    } finally {
      setLoadig(false);
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      {/* Show loading indicator or user card */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.card}>
          {/* User avatar */}
          <img src={user.picture.large} alt="User" className={styles.avatar} />
          {/* User name */}
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          {/* User email */}
          <p>Email: {user.email}</p>
          {/* User phone */}
          <p>Phone: {user.phone}</p>
          {/* Button to load a new user */}
          <button onClick={fetchUser} className={styles.button}>
            Load New User
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
