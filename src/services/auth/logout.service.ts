const baseURL="https://yfiphsggadtumstkunju.supabase.co";

const logoutUser = async(token:string)=>{
   const res =await fetch(`${baseURL}/auth/v1/logout`,{
    method:"POST",
     headers: {
        "Content-Type": "application/json",
        apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${token}`,
      },
   });
    console.log("status:", res.status);
     if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Logout failed");
  }

  return true;

  
}
export default logoutUser;