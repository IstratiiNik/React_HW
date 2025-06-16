import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "./redux/actions";

// Component for editing user information and dispatching to Redux store
const UserForm = ({ setUserInfo }) => {
  // Local state for form fields
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !status) {
      alert("Both fields are required!");
      return;
    }
    // Dispatch action to update user info in Redux store
    setUserInfo({ name, status });
    setName("");
    setStatus("");
  };

  return (
    <div>
      <h2>Edit User Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Name input field */}
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Status input field */}
        <div>
          <label>Status</label>
          <br />
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        {/* Submit button */}
        <div style={{ marginTop: "10px" }}>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { setUserInfo })(UserForm);
