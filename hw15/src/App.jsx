import { useState, useMemo, useCallback } from "react";
import UserList from "./UserList";
import "./App.css";

// Initial list of users
const userList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];

// Main application component
function App() {
  // State for the filter input value
  const [filter, setFilter] = useState("");

  // Function to filter users by name (case-insensitive)
  const filterUsers = useCallback((text) => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
  }, []);

  // Memoized filtered users list based on filter value
  const filteredUsers = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div>
      <h1>User List</h1>
      {/* Input field for filtering users by name */}
      <input
        type="text"
        placeholder="Name Filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {/* Render filtered user list */}
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
