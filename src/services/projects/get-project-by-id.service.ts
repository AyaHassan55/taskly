const baseURL = "https://yfiphsggadtumstkunju.supabase.co";

const getProjectById = async (
  token: string,
  projectId: string
) => {
  const res = await fetch(
    `${baseURL}/rest/v1/projects?id=eq.${projectId}&select=*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch project");
  }

  const data = await res.json();

  return data[0];
};

export default getProjectById;