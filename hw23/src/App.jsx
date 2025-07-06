import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Authorisation from "./pages/Authorisation/Authorisation";
import Registration from "./pages/Registration/Registration";
import ProtectedRoute from "./components/ProtectedRouter/ProtectedRouter";
import Profile from "./pages/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

// Main application component with routing
function App() {
  return (
    <BrowserRouter>
      {/* Navigation bar */}
      <Navigation />
      {/* Application routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authorisation />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
