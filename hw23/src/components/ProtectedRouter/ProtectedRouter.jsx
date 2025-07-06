import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Protect route from unauthorized access
const ProtectedRoute = ({ children }) => {
  const autorisation = useSelector((state) => state.auth.autorisation);
  return autorisation ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
