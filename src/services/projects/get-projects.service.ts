
const baseURL = "https://yfiphsggadtumstkunju.supabase.co";
export const getProjects = async(token:string,limit:number,offset:number) =>{
    const res = await fetch(
        
        `${baseURL}/rest/v1/rpc/get_projects?limit=${limit}&offset=${offset}`, {
            method:"GET",
        headers: {
            "Content-Type": "application/json",
        apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${token}`,
         Prefer: "count=exact",
        },
    }
    );
    console.log(res.headers.get("content-range"));
    if(!res.ok){
         const error = new Error("Failed to fetch projects");
  (error as any).status = res.status;
  throw error;
    }
    const data = await res.json();
    const countRange=res.headers.get("content-range");
    const totalCount= countRange ? Number(countRange.split("/")[1]):0;
    return {
        data,totalCount
    };
}