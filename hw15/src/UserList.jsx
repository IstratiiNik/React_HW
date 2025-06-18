import React from "react";

// Component to display a list of users
const UserList = ({ users }) => {
  return (
    <ul>
      {/* Render each user as a list item */}
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
