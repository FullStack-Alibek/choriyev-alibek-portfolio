import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must not exceed 100 characters" }),

  telegram: z
    .string()
    .min(2, { message: "Telegram username is required" })
    .max(50, { message: "Telegram username must not exceed 50 characters" }),

  projectType: z.enum([
    "Next.js Web App",
    "React Native Mobile App",
    "SaaS Platform MVP",
    "Custom Dashboard / Admin",
    "FastAPI / Node.js Backend",
    "Other Services"
  ], {
    message: "Please select a valid project type"
  }),

  budget: z.enum([
    "$500 - $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000+ (Enterprise)",
    "Flexible / To be discussed"
  ], {
    message: "Please select a valid budget range"
  }),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(2000, { message: "Message must not exceed 2000 characters" }),

  honeypot: z.string().optional(),
});

export type ContactSchemaType = z.infer<typeof contactFormSchema>;
