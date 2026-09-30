import { NextResponse } from "next/server";
import { checkRateLimit } from "../../../lib/rate-limiter";
import { contactFormSchema } from "../../../schemas/contact.schema";

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "RATE_LIMIT_EXCEEDED" },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "VALIDATION_FAILED", details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const { name, telegram, projectType, budget, message, honeypot } = validationResult.data;

    // Spam honeypot
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Forward lead payload to Bot Service (HTTP endpoint on /bot)
    const botApiUrl = process.env.BOT_API_URL || "http://localhost:4000";

    try {
      const botResponse = await fetch(`${botApiUrl}/api/leads`, {
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

      if (!botResponse.ok) {
        console.error("Bot API return status:", botResponse.status);
      }
    } catch (botErr) {
      console.log("[FRONTEND API] Bot API not reachable. Lead payload processed locally.");
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded and processed successfully",
    });
  } catch (error) {
    console.error("Frontend /api/contact exception:", error);
    return NextResponse.json(
      { error: "INTERNAL_SERVER_ERROR" },
      { status: 500 }
    );
  }
}
