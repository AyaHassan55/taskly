

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

   password:z.string().min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Must contain uppercase letter")
  .regex(/[a-z]/, "Must contain lowercase letter")
  .regex(/\d/, "Must contain a number")
  .regex(/[!@#$%^&*]/, "Must contain a special character"),

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