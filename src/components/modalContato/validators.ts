import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string().min(1).max(45),
  email: z.string().email().max(45),
  phone: z.string(),
  client: z.any(),
});

export type TContactData = z.infer<typeof createContactSchema>;
