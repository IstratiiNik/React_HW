import React from "react";
import { useSelector } from "react-redux";

// Component to display the list of users from Redux store
const UserList = () => {
  // Get users list from Redux state
  const users = useSelector((state) => state.users.list);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {/* Render each user as a list item */}
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
