
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { refreshAccessToken } from "../services/auth/refresh-access.service";
import { clearTokens, getAccessToken, getRefreshToken } from "../utils/auth-storage";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const [isReady, setIsReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const validateSession = async () => {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();

      if (!accessToken && !refreshToken) {
        clearTokens();
        setIsAuthenticated(false);
        setIsReady(true);
        return;
      }

      if (!refreshToken) {
        setIsAuthenticated(Boolean(accessToken));
        setIsReady(true);
        return;
      }

      try {
        await refreshAccessToken();
        setIsAuthenticated(true);
      } catch {
        clearTokens();
        setIsAuthenticated(false);
      } finally {
        setIsReady(true);
      }
    };

    void validateSession();
  }, []);

  if (!isReady) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;