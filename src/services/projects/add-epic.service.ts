const baseURL = "https://yfiphsggadtumstkunju.supabase.co";
type CreateEpicData = {
  title: string;
  description?: string;
  assignee_id?: string;
  project_id: string;
  deadline?: string;
};
const addEpicService = async (token: string, data: CreateEpicData) => {
    const res = await fetch(`${baseURL}/rest/v1/epics`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${token}`,
             Prefer: "return=representation",
        },
        body: JSON.stringify(data),


    });
    if (!res.ok) {
      const error = await res.json();
  console.log("Supabase Error:", error);
  throw new Error(JSON.stringify(error));

  }

  return true;
}
export default addEpicService;