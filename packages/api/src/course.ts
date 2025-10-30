import { z } from 'zod';
import { Pagination } from './queries';

// to get course array for a user 
export const CourseOut = z.object({
    courseID: z.string(),
    name: z.string(),
  }); 
export type CourseOut = z.infer<typeof CourseOut>;

