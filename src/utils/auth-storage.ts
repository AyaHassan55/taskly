
import Cookies from "js-cookie";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

const cookieOptions = {
  path: "/",
  sameSite: "lax" as const,
  secure: window.location.protocol === "https:",
};

const getStorageExpiryDays = (rememberMe: boolean) => (rememberMe ? 30 : 30);

export const saveTokens = (
  accessToken: string,
  refreshToken: string,
  rememberMe: boolean
) => {
  const options = {
    ...cookieOptions,
    expires: getStorageExpiryDays(rememberMe),
  };

  Cookies.set(ACCESS_TOKEN_KEY, accessToken, options);
  Cookies.set(REFRESH_TOKEN_KEY, refreshToken, options);

  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

export const clearTokens = () => {
  Cookies.remove(ACCESS_TOKEN_KEY, { path: "/" });
  Cookies.remove(REFRESH_TOKEN_KEY, { path: "/" });
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY) ?? Cookies.get(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY) ?? Cookies.get(REFRESH_TOKEN_KEY);
};
