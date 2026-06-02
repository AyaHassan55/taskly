
import Cookies from "js-cookie";

export const saveTokens = (
  accessToken: string,
  refreshToken: string
) => {
  Cookies.set("access_token", accessToken);

  Cookies.set("refresh_token", refreshToken);
};
