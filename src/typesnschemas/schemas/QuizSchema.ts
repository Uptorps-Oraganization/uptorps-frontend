import { z } from "zod";

export const quizConfigNameSchema = z.object({
  name: z.string().nonempty("Field cannot be empty"),
});

export type QuizConfigNameType = z.infer<typeof quizConfigNameSchema>;

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

export const questionCreationSchema = z.object({
  question: z.string().nonempty("Question cannot be empty"),
  question_type: z.string("Question type is required"),
});

export type QuestionCreationType = z.infer<typeof questionCreationSchema>;

export const answerCreationSchema = z.object({
  answer: z.string().nonempty("Answer cannot be empty"),
  is_correct: z.boolean("Answer type is required"),
});

export type AnswerCreationType = z.infer<typeof answerCreationSchema>;

export const randomQuizSchema = z.object({
  difficulty: z.string().nonempty("Quiz difficulty is required"),
  level: z.string().nonempty("Quiz level is required"),
  programme: z.string("Quiz programme is required").nonempty("Quiz programme is required"),
  course: z.string().nonempty("Quiz course is required"),
  timing: z.number("Quiz timing is required"),
});

export type RandomQuizType = z.infer<typeof randomQuizSchema>;
