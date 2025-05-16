import styles from "./UserProfile.module.scss";

function UserProfile() {
  return <div className={styles.container}>
	{loading ? (
		<p>Loading...</p>
	) : (
		<div className={styles.card}>
			<img src={user.} alt="" />
		</div>
	)}
  </div>;
}

export default UserProfile;
