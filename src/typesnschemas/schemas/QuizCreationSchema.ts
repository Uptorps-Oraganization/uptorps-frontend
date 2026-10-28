import { z } from "zod";

export const quizCreationSchema = z.object({
  title: z.string().nonempty("Quiz title cannot be empty"),
  description: z.string().nonempty("Quiz description cannot be empty"),
  difficulty: z.string("Quiz difficulty is required"),
  level: z.string("Quiz level is required"),
  programme: z.string("Quiz programme is required"),
  course: z.string("Quiz course is required"),
  timing: z.number("Quiz timing is required"),
  cost_type: z.boolean("Cost type cannot be null"),
});

export type QuizCreationType = z.infer<typeof quizCreationSchema>;
