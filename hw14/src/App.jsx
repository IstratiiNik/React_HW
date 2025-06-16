import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./User";
import UserForm from "./UserForm";

function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px" }}>
        <h1>User Profile</h1>
        <User />
        <hr />
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;
