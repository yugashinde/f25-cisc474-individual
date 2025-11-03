import { z } from 'zod';

export const UserOut = z.object({
  id: z.string(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  emailVerified: z.string().datetime().nullable(),
  role: z.string(),
});
export type UserOut = z.infer<typeof UserOut>;

export const UserCreateIn = z.object({
  name: z.string().min(2).max(50).optional(),
  email: z.string().email(),
  role: z.string().optional(),
});
export type UserCreateIn = z.infer<typeof UserCreateIn>;

export const UserUpdateIn = z.object({
  name: z.string().min(2).max(50).optional(),
  email: z.string().email().optional(),
  role: z.string().optional(),
});
export type UserUpdateIn = z.infer<typeof UserUpdateIn>;

