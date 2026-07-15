const baseURL = "https://yfiphsggadtumstkunju.supabase.co";
const getEpicsByProjectId = async (projectId: string,token: string,limit:number,offset:number) => {
  const response = await fetch(`${baseURL}/rest/v1/project_epics?project_id=eq.${projectId}&limit=${limit}&offset=${offset}`, {
    
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY,
       Authorization: `Bearer ${token}`,
       Prefer: "count=exact"
    },
  });

if (!response.ok) {
  const error = await response.text();
  console.log(error);
  throw new Error(error);
}

const data = await response.json();

const contentRange = response.headers.get("content-range");

const totalCount = Number(
  contentRange?.split("/")[1] ?? 0
);
console.log("pagess==",response.headers.get("content-range"));

return {
  data,
  totalCount,
};}
export default getEpicsByProjectId;