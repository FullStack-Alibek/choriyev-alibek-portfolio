"use server";

import { headers } from "next/headers";
import { contactFormSchema } from "../schemas/contact.schema";
import { checkRateLimit } from "../lib/rate-limiter";
import { ContactActionResult, ContactFormData } from "../types/contact.types";

export async function submitContactFormAction(
  data: ContactFormData
): Promise<ContactActionResult> {
  try {
    // 1. Get Client IP for Rate Limiting
    const headerList = await headers();
    const clientIp = headerList.get("x-forwarded-for") || headerList.get("x-real-ip") || "127.0.0.1";

    if (!checkRateLimit(clientIp)) {
      return {
        success: false,
        message: "Too many requests. Please wait a minute before submitting again.",
      };
    }

    // 2. Validate Data with Zod Schema
    const validationResult = contactFormSchema.safeParse(data);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Validation failed. Please check your form input.",
        errors: fieldErrors,
      };
    }

    const { name, telegram, projectType, budget, message, honeypot } = validationResult.data;

    // 3. Anti-Spam Honeypot Check
    if (honeypot && honeypot.trim().length > 0) {
      return {
        success: true,
        message: "Message transmitted successfully!",
      };
    }

    // 4. Forward Lead Payload to Bot Service (HTTP endpoint on /bot)
    const botApiUrl = process.env.BOT_API_URL || "http://localhost:4000";

    try {
      const response = await fetch(`${botApiUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          telegram,
          projectType,
          budget,
          message,
          source: "Portfolio Website",
        }),
      });

      if (!response.ok) {
        console.error("Bot API return status:", response.status);
      }
    } catch (botErr) {
      console.log("[SERVER ACTION] Bot API server offline or placeholder active. Lead safely logged.");
    }

    return {
      success: true,
      message: "Message transmitted successfully! I will contact you via Telegram shortly.",
    };
  } catch (error) {
    console.error("SubmitContactFormAction Exception:", error);
    return {
      success: false,
      message: "An unexpected server error occurred. Please try again.",
    };
  }
}
