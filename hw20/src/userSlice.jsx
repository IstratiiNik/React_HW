import { createSlice } from "@reduxjs/toolkit";

// Initial state with a list of users
const initialState = {
  list: [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Jack", email: "jack@example.com" },
    { id: 4, name: "Mike", email: "mike@example.com" },
  ],
};

// Create a slice for users (no reducers yet)
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
