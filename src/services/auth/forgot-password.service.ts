const baseURL="https://yfiphsggadtumstkunju.supabase.co";
const forgotPassword= async(email:string)=>{

    const res = await fetch(`${baseURL}/auth/v1/recover`, {
        method: "POST",
        headers:{
               "Content-Type": "application/json",
                "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY,
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body:JSON.stringify({email,redirectTo: `${import.meta.env.VITE_APP_URL}/reset-password`,})
        

    });
    if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || "Something went wrong");
  }

  return res.json();
}
export default forgotPassword;
