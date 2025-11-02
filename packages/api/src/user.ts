import { z } from 'zod';

export const UserOut = z.object({
    userID: z.string(),
    username: z.string(),
    email: z.string().email(),
    role : z.string(),
  });

export type UserOut = z.infer<typeof UserOut>;

export const UserCreateIn = z.object({

    name: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    role: z.string().optional(),
  });
export type UserCreateIn = z.infer<typeof UserCreateIn>;

export const UserUpdateIn = z.object({
    name: z.string().min(3).max(30).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).max(100).optional(),
    role: z.string().optional(),
  });
export type UserUpdateIn = z.infer<typeof UserUpdateIn>;