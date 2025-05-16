import { useState } from "react";
import styles from "./UserProfile.module.scss";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoadig] = useState(true);

  const fetchUser = async () => {
	setLoadig(true);
	try{
		const responce = await axios.get('https://randomuser.me/api')
		setUser(responce.data.results[0]);
	}catch (error) {
		console.log('Ошибка загрузки данны')
	}
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.card}>
          <img src={user.picture.large} alt="User" className={styles.avatar} />
          <h2>
            `${user.name.first} ${user.name.last}`
          </h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.country}</p>
          <button onClick={fetchUser} className={styles.button}>
            Load New User
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
