import { z } from "zod";

const courseValidator = z.object({
  name: z.string().min(3),
});

const questionValidator = z.object({
  course_id: z.number().optional(),
  title: z.string().min(3),
  text: z.string().min(3),
  upvotes: z.number().default(0).optional(),
});

export { courseValidator, questionValidator };
