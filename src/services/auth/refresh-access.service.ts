import Cookies from "js-cookie";
import { saveTokens } from "../../utils/auth-storage";

const baseURL="https://yfiphsggadtumstkunju.supabase.co";
export const refreshAccessToken = async () => {
    const refreshToken = Cookies.get("refresh_token");

    if(!refreshToken) {
        throw new Error("No refresh token found");
    }
    const res= await fetch(`${baseURL}/auth/v1/token?grant_type=refresh_token`, 
    {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        },
        body:JSON.stringify({
            refresh_token: refreshToken,
        })

    });
    if (!res.ok) {
        throw new Error("Failed to refresh access token");
    }
    const data = await res.json();
    saveTokens(data.access_token, data.refresh_token, true);
    return data.access_token;

    }; 