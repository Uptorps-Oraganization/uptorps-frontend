import { z } from "zod";

export const signUpDataSchema = z
  .object({
    accounttype: z.enum(["learner", "tutor"], {
      error: "Please select an account type",
    }),
    username: z.string().min(3, "Username must be at least 3 letters long"),
    email: z.email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    confirmpassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    referralcode: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });

export type SignUpDataType = z.infer<typeof signUpDataSchema>;

export const signInDataSchema = z.object({
  accounttype: z.enum(["learner", "tutor"], {
    error: "Please select an account type",
  }),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  remember_me: z.boolean(),
});

export type SignInDataType = z.infer<typeof signInDataSchema>;

export const forgotPasswordDataSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

export type ForgotPasswordDataType = z.infer<typeof forgotPasswordDataSchema>;

export const resetPasswordDataSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  confirmpassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

export type ResetPasswordDataType = z.infer<typeof resetPasswordDataSchema>;
