import * as z from 'zod';

export const AssignmentArr = z.object({
    assignmentId: z.string(),
    title: z.string(),
    description: z.string().nullable().optional(),
    dueDate: z.string().nullable().optional(),
    courseId: z.string(),
    });
export type AssignmentArr = z.infer<typeof AssignmentArr>;

