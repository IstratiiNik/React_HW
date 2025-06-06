import React from "react";
import Filter from "./components/Filter";
import UserList from "./components/UserList";

// Main application component
function App() {
  return (
    <div
      style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial" }}
    >
      <h1>User List</h1>
      {/* Filter input for users */}
      <Filter />
      {/* List of users */}
      <UserList />
    </div>
  );
}

export default App;
