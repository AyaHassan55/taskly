
import Cookies from "js-cookie";

const cookieOptions = {
  path: "/",
  sameSite: "lax" as const,
  secure: window.location.protocol === "https:",
};

export const saveTokens = (
  accessToken: string,
  refreshToken: string,
  rememberMe: boolean
) => {
  const options = rememberMe
    ? { ...cookieOptions, expires: 30 }
    : cookieOptions;

  Cookies.set("access_token", accessToken, options);
  Cookies.set("refresh_token", refreshToken, options);
};

export const clearTokens = () => {
  Cookies.remove("access_token", { path: "/" });
  Cookies.remove("refresh_token", { path: "/" });
};

export const getAccessToken = () => Cookies.get("access_token");
export const getRefreshToken = () => Cookies.get("refresh_token");
