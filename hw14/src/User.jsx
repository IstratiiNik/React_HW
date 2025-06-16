import React from "react";
import { connect } from "react-redux";

// Component to display user information from Redux store
const User = ({ name, status }) => {
  return (
    <div>
      <h2>User Information</h2>
      {/* Display user name */}
      <p>
        <strong>Name:</strong> {name}
      </p>
      {/* Display user status */}
      <p>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);
