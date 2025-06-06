const initialState = {
  filter: "",
  users: [
    { id: 1, name: "Alex" },
    { id: 2, name: "Mary" },
    { id: 3, name: "Sofy" },
    { id: 4, name: "Jack" },
    { id: 5, name: "David" },
    { id: 6, name: "Bob" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
