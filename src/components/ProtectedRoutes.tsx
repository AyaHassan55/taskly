
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const token = Cookies.get("access_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;