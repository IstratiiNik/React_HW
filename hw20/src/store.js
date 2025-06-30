import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";

// Configure and export the Redux store
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
