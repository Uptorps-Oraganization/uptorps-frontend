import { z } from "zod";

export const payoutSchema = z.object({
  amount: z
    .number({
      error: (issue) => (issue.input === undefined ? "amount is required" : "expected a number, received a string"),
    })
    .min(50, "Amount must be greater than 0"),
  method: z.enum(["mobile_money", "bank_transfer"], {
    error: "payment method is required",
  }),
  provider: z.string("payment provider is required"),
  detial: z.string("payment detail is required"),
});

export type PayoutRequestType = z.infer<typeof payoutSchema>;
