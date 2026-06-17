const baseURL="https://yfiphsggadtumstkunju.supabase.co";
const updateProjectService = async (
  token: string,
  projectId: string,
  data: {
    name: string;
    description?: string;
  }
) => {
  const res = await fetch(
    `${baseURL}/rest/v1/projects?id=eq.${projectId}`,
    {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
        apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
      }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update project");
  }

  return res;
};

export default updateProjectService;