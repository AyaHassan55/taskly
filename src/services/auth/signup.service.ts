import type { SignupFormData } from "../../schemas/signup.schema";

 const signupUser = async (data: SignupFormData) => {
  const res = await fetch("https://yfiphsggadtumstkunju.supabase.co/auth/v1/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
     
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      data: {
        name: data.fullName,
        job_title: data.jobTitle,
      },
    }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Something went wrong");
  }

  return res.json();
};
export default signupUser;