import React from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";
import styles from "../styles/UserList.module.scss";

// Component to display the filtered list of users
const UserList = ({ users, filter }) => {
  // Filter users by the filter string (case-insensitive)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {/* Render each filtered user */}
      {filteredUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

// Map Redux state to component props
const mapStatetoProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStatetoProps)(UserList);
