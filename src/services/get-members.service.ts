const baseURL = "https://yfiphsggadtumstkunju.supabase.co";
const getProjectMembers = async (
    token: string,
    projectId: string
) => {
    const res =await fetch(
        `${baseURL}/rest/v1/get_project_members?project_id=eq.${projectId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${token}`,
        },
    }
    );
    if(!res.ok){
        throw new Error("Failed to load project members")
    }
    return await res.json()

}

export default getProjectMembers;


