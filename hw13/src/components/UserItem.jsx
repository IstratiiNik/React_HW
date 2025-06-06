import React from "react";
import styles from "../styles/UserItem.module.scss";

// Component to display a single user item
const UserItem = ({ user }) => {
  return <li className={styles.item}>{user.name}</li>;
};

export default UserItem;
