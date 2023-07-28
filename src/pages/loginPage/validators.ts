import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().max(45),
  password: z.string(),
});

export type TLoginData = z.infer<typeof loginSchema>;
