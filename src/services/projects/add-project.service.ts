const baseURL="https://yfiphsggadtumstkunju.supabase.co";

const addProjectService = async(token:string , data: {
    name: string;
    description?: string;
  })=>{
   const res =await fetch(`${baseURL}/rest/v1/projects`,{
    method:"POST",
     headers: {
        "Content-Type": "application/json",
        apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
   });
    
     if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || JSON.stringify(error));
  }

  return true;

  
}
export default addProjectService;