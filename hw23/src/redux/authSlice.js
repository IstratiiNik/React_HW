import { createSlice } from "@reduxjs/toolkit";

// Get user from localStorage if exists
const savedUser = JSON.parse(localStorage.getItem("regUser"));

// Initial state for authentication
const initialState = {
  users: [],
  regUser: savedUser || null,
  autorisation: false,
  error: null,
};

// Create authentication slice
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Register new user
    register: (state, action) => {
      state.regUser = action.payload;
      localStorage.setItem("regUser", JSON.stringify(action.payload));
      state.error = null;
    },
    // Log in user
    logIn: (state, action) => {
      const { email, password } = action.payload;

      if (
        state.regUser &&
        state.regUser.email === email &&
        state.regUser.password === password
      ) {
        state.autorisation = true;
        state.error = null;
      } else {
        state.autorisation = false;
        state.error = "Autorisation failed. Try again";
      }
    },
    // Log out user
    logOut: (state) => {
      state.autorisation = false;
      state.error = null;
    },
  },
});

// Export reducer and actions
export default authSlice.reducer;
export const { register, logIn, logOut } = authSlice.actions;
