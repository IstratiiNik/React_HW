import styles from "./UserProfile.module.scss";

function UserProfile() {
  return <div className={styles.container}>
	{loading ? (
		<p>Loading...</p>
	) }
  </div>;
}

export default UserProfile;
