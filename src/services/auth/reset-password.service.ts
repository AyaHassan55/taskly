const baseURL = "https://yfiphsggadtumstkunju.supabase.co";

 const updatePassword = async (
  password: string,
  accessToken: string
) => {
  const res = await fetch(`${baseURL}/auth/v1/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      password,
    }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to update password");
  }

  return res.json();
};
export default updatePassword;