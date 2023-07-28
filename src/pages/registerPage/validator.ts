import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1).max(45),
  email: z.string().email().max(45),
  password: z.string(),
});

export type TUserData = z.infer<typeof createUserSchema>;
