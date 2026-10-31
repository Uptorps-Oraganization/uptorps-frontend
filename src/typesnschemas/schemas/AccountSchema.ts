import { z } from "zod";

export const sendEmailSchema = z.object({
  title: z.string().nonempty("Email title cannot be empty"),
  message: z.string().nonempty("Email message cannot be empty"),
});

export type SendEmailType = z.infer<typeof sendEmailSchema>;
