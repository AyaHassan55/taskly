import { clearTokens, getRefreshToken, saveTokens } from "../../utils/auth-storage";

const baseURL = "https://yfiphsggadtumstkunju.supabase.co";

export const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    clearTokens();
    throw new Error("No refresh token found");
  }

  const res = await fetch(`${baseURL}/auth/v1/token?grant_type=refresh_token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      refresh_token: refreshToken,
    }),
  });

  if (!res.ok) {
    clearTokens();
    throw new Error("Failed to refresh access token");
  }

  const data = await res.json();
  saveTokens(data.access_token, data.refresh_token, true);
  return data.access_token;
};