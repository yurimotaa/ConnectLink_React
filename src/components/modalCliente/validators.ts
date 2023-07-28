import { z } from "zod";

export const createClientSchema = z.object({
  name: z.string().min(1).max(45),
  email: z.string().email().max(45),
  phone: z.string(),
});

export type TClientData = z.infer<typeof createClientSchema>;
