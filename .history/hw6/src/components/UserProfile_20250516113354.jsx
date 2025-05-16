import styles from "./UserProfile.module.scss";

function UserProfile() {
	const[]




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
