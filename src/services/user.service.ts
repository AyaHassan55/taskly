import { authFetch } from "../utils/auth-fetch"
const baseURL = "https://yfiphsggadtumstkunju.supabase.co";
export const getUSer = async() =>{
    const res = await authFetch(
        `${baseURL}/auth/v1/user`, {
        headers: {
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            "Content-Type": "application/json",
        },
    }
    );
    if(!res.ok){
        throw new Error("Failed to fetch user")
    }
    return res.json()
}