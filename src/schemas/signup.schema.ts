

import { z } from "zod";

const nameRegex =
  /^(?!.*\s{2,})[\p{L}]+(?: [\p{L}]+)*$/u;

// const passwordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[^\s]{8,64}$/;

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .regex(
        nameRegex,
        "Only letters and single spaces are allowed"
      ),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address"),

    jobTitle: z.string().optional(),

   password:z.string().min(1, "Password is required"),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    }
  );

export type SignupFormData = z.infer<
  typeof signupSchema
>;