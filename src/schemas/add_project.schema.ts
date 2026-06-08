import { z } from "zod";

export const addProjectctSchema = z.object({
  name: z
    .string()
    .min(3, "Project title must be at least 3 characters"),

  description: z
    .string()
    .max(500, "Description must not exceed 500 characters")
    .optional()
    .or(z.literal("")),
});
export type addProjectFormData = z.infer<
  typeof addProjectctSchema
>;