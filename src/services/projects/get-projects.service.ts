
const baseURL = "https://yfiphsggadtumstkunju.supabase.co";
export const getProjects = async(token:string) =>{
    const res = await fetch(
        
        `${baseURL}/rest/v1/rpc/get_projects`, {
            method:"GET",
        headers: {
            "Content-Type": "application/json",
        apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${token}`,
        },
    }
    );
    if(!res.ok){
         const error = new Error("Failed to fetch projects");
  (error as any).status = res.status;
  throw error;
    }
    return res.json()
}