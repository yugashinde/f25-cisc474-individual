import { z } from 'zod';

export const UserOut = z.object({
    userID: z.string(),
    username: z.string(),
    email: z.string().email(),
    role : z.string(),
  });

export type UserOut = z.infer<typeof UserOut>;