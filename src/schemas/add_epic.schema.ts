import { z } from "zod";

const today = new Date().toISOString().split("T")[0];

export const createEpicSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  description: z.string().optional(),

  assignee_id: z.string().optional(),

  deadline: z
    .string()
    .optional()
    .refine(
      (date) => !date || date >= today,
      "Deadline must be today or a future date"
    ),
});

export type CreateEpicFormData  = z.infer<typeof createEpicSchema>;