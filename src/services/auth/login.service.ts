import type { LoginFormData } from "../../schemas/login.schema";
const baseURL="https://yfiphsggadtumstkunju.supabase.co";

const loginUser = async(data: LoginFormData) => {
    const res = await fetch(`${baseURL}/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password,
        }),
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Something went wrong");
    }
    return res.json();  


}
export default loginUser;