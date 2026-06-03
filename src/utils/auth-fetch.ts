
import Cookies from "js-cookie";
import { refreshAccessToken } from "../services/auth/refresh-access.service";

export const authFetch = async (
  url: string,
  options: RequestInit = {}
) => {
  let token = Cookies.get("access_token");

  let response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  
  if (response.status === 401) {
    token = await refreshAccessToken();

    response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return response;
};