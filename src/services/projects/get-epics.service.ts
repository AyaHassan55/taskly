const baseURL = "https://yfiphsggadtumstkunju.supabase.co";
const getEpicsByProjectId = async (projectId: string,token: string) => {
  const response = await fetch(`${baseURL}/rest/v1/project_epics?project_id=eq.${projectId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY,
       Authorization: `Bearer ${token}`,
    },
  });


  if (!response.ok) {
    throw new Error("Failed to fetch epics");
  }
  return response.json();
};
export default getEpicsByProjectId;