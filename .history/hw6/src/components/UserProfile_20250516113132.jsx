import styles from "./UserProfile.module.scss";

function UserProfile() {
  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.card}>
          <img src={user.picture.large} alt="User" className={styles.avatar} />
			 <h2>`{}</h2>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
