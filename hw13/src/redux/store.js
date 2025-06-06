import { createStore } from "redux";
import reduser from "./reducer.js";

const store = createStore(reduser);

export default store;
