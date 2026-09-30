import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .pipe(z.email("Please enter a valid email address.")),
  password: z
    .string()
    .min(1, "Please enter a password.")
    .min(8, "Use at least 8 characters for your password."),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  email: signUpSchema.shape.email,
  password: z.string().min(1, "Please enter your password."),
});

export type LoginValues = z.infer<typeof loginSchema>;
