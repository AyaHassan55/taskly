
import Cookies from "js-cookie";

export const saveTokens = (
  accessToken: string,
  refreshToken: string,
  rememberMe: boolean
) => {
    const options = rememberMe ? { expires:30 } : undefined; 
  Cookies.set("access_token", accessToken, options);

  Cookies.set("refresh_token", refreshToken, options);
};
