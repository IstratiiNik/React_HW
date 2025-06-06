import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import styles from "../styles/Filter.module.scss";

// Filter input component for user list
const Filter = ({ setFilter }) => {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder="User Filter"
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default connect(null, { setFilter })(Filter);
