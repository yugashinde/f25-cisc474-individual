import { z } from 'zod';
import { Pagination } from './queries';

// to get course array for a user 
export const CourseOut = z.object({
  courseId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  department: z.string(),
});
export type CourseOut = z.infer<typeof CourseOut>;

export const CourseCreateIn = z.object({
    name: z.string().min(1).max(100),
    description: z.string().max(500).optional(),
    department: z.string().max(100).optional(),
    credits: z.number().min(0).max(4).optional(),
    ownerId: z.string(),
    professorId: z.string(),
  });
export type CourseCreateIn = z.infer<typeof CourseCreateIn>;

export const findCoursesByOwnerIn = z.object({
    ownerId: z.string(),
    courseId: z.string(),
    title: z.string(),
  description: z.string().optional(),
  department: z.string(),
  });
  export type findCoursesByOwnerIn = z.infer<typeof findCoursesByOwnerIn>;

  export const CourseUpdateIn = z.object({
    
    name: z.string().min(1).max(100).optional(),
    description: z.string().max(500).optional(),
    department: z.string().max(100).optional(),
    credits: z.number().min(0).max(4).optional(),
    // professorId: z.string().optional(), for now
  });
export type CourseUpdateIn = z.infer<typeof CourseUpdateIn>;

export const CourseListIn = z.object({
    ...Pagination,
    ownerId: z.string().optional(),
  });
export type CourseListIn = z.infer<typeof CourseListIn>;

