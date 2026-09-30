import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { Telegraf } from "telegraf";
import { handleStartCommand } from "./commands/start.command";
import { handleHelpCommand } from "./commands/help.command";
import { handleStatsCommand } from "./commands/stats.command";
import { handleLatestCommand } from "./commands/latest.command";
import { TelegramService } from "./services/telegram.service";

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN || "";
const chatId = process.env.TELEGRAM_CHAT_ID || "";
const port = process.env.PORT || 4000;

// Startup Credentials Validation
if (!token || token === "YOUR_TELEGRAM_BOT_TOKEN") {
  console.error("❌ CRITICAL STARTUP ERROR: TELEGRAM_BOT_TOKEN is missing or set to placeholder in bot/.env");
}

if (!chatId || chatId === "YOUR_TELEGRAM_CHAT_ID") {
  console.error("❌ CRITICAL STARTUP ERROR: TELEGRAM_CHAT_ID is missing or set to placeholder in bot/.env");
}

// Initialize Telegraf Bot & Telegram Service
const bot = new Telegraf(token);
const telegramService = new TelegramService(bot, token, chatId);

// Register Bot Commands
bot.command("start", handleStartCommand);
bot.command("help", handleHelpCommand);
bot.command("stats", handleStatsCommand);
bot.command("latest", handleLatestCommand);

// Initialize Express Server
const app = express();
app.use(express.json());

// Real Lead Ingestion Endpoint from Next.js Frontend
app.post("/api/leads", async (req: Request, res: Response) => {
  try {
    const { name, telegram, projectType, budget, message, source } = req.body;

    if (!name || !telegram || !message) {
      res.status(400).json({ error: "Missing required lead fields: name, telegram, message" });
      return;
    }

    const dispatched = await telegramService.sendLeadNotification({
      name,
      telegram,
      projectType: projectType || "Next.js Web App",
      budget: budget || "$1,000 - $3,000",
      message,
      source: source || "Portfolio Website",
      timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Tashkent" }),
    });

    if (dispatched) {
      res.json({ success: true, message: "Lead delivered to Telegram API successfully" });
      return;
    } else {
      res.status(500).json({ error: "Failed to deliver lead to Telegram API" });
      return;
    }
  } catch (error) {
    console.error("Bot HTTP /api/leads error:", error);
    res.status(500).json({
      error: "Telegram delivery error",
      details: error instanceof Error ? error.message : String(error),
    });
    return;
  }
});

// Testing Endpoint: POST /test-telegram
app.post("/test-telegram", async (req: Request, res: Response) => {
  try {
    const success = await telegramService.sendTestNotification();
    if (success) {
      res.json({
        success: true,
        message: "✅ Telegram Integration Test Successful! Message delivered to your Telegram account.",
      });
      return;
    } else {
      res.status(500).json({ error: "Test message delivery failed" });
      return;
    }
  } catch (error) {
    console.error("Test Telegram Delivery Error:", error);
    res.status(500).json({
      error: "Test delivery failed",
      details: error instanceof Error ? error.message : String(error),
    });
    return;
  }
});

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "OK",
    botConnected: token !== "" && token !== "YOUR_TELEGRAM_BOT_TOKEN",
    chatIdSet: chatId !== "" && chatId !== "YOUR_TELEGRAM_CHAT_ID",
    timestamp: new Date().toISOString(),
  });
});

// Start Express Server & Launch Telegraf Polling
app.listen(port, () => {
  console.log(`🚀 Telegram Bot & CRM Server running on port ${port}`);

  if (token && token !== "YOUR_TELEGRAM_BOT_TOKEN") {
    bot
      .launch()
      .then(() => console.log("🤖 Telegraf Bot Polling Active & Connected to Telegram API"))
      .catch((err: unknown) => console.error("❌ Telegraf Launch Error:", err));
  } else {
    console.warn("⚠️  TELEGRAM_BOT_TOKEN unconfigured in bot/.env. Live polling paused until credentials are set.");
  }
});

// Graceful Shutdown
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
