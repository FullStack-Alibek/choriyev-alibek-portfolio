import { Telegraf, Markup } from "telegraf";
import { LeadPayload } from "../types";

export class TelegramService {
  private bot: Telegraf;
  private token: string;
  private chatId: string;

  constructor(bot: Telegraf, token: string, chatId: string) {
    this.bot = bot;
    this.token = token;
    this.chatId = chatId;
  }

  /**
   * Escape special HTML characters to prevent breaking Telegram parser
   */
  private sanitizeHtml(text: string): string {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /**
   * Format lead notification into required Telegram message template
   */
  public formatLeadMessage(lead: LeadPayload): string {
    const timestamp =
      lead.timestamp ||
      new Date().toLocaleString("en-US", { timeZone: "Asia/Tashkent" });

    const cleanTelegram = lead.telegram.startsWith("@")
      ? lead.telegram
      : `@${lead.telegram}`;

    return `🔥 <b>NEW PORTFOLIO LEAD</b>

👤 <b>Name:</b>
${this.sanitizeHtml(lead.name)}

📱 <b>Telegram:</b>
${this.sanitizeHtml(cleanTelegram)}

💼 <b>Project Type:</b>
${this.sanitizeHtml(lead.projectType)}

💰 <b>Budget:</b>
${this.sanitizeHtml(lead.budget)}

💬 <b>Message:</b>
${this.sanitizeHtml(lead.message)}

🌍 <b>Source:</b>
${this.sanitizeHtml(lead.source || "Portfolio Website")}

⏰ <b>Time:</b>
${this.sanitizeHtml(timestamp)}`;
  }

  /**
   * Validate credentials prior to dispatching
   */
  private validateCredentials(): void {
    if (!this.token || this.token === "YOUR_TELEGRAM_BOT_TOKEN") {
      throw new Error("TELEGRAM_BOT_TOKEN is missing or unconfigured in bot/.env");
    }
    if (!this.chatId || this.chatId === "YOUR_TELEGRAM_CHAT_ID") {
      throw new Error("TELEGRAM_CHAT_ID is missing or unconfigured in bot/.env");
    }
  }

  /**
   * Send test message directly to Telegram account
   */
  public async sendTestNotification(): Promise<boolean> {
    this.validateCredentials();
    const testMessage = "✅ <b>Telegram Integration Test Successful</b>\n\nYour Portfolio Bot & Lead System is live and connected to real Telegram API delivery.";

    try {
      await this.bot.telegram.sendMessage(this.chatId, testMessage, {
        parse_mode: "HTML",
      });
      return true;
    } catch (error) {
      console.error("[TELEGRAM SERVICE ERROR] Test message delivery failed:", error);
      throw error;
    }
  }

  /**
   * Dispatch real formatted message to Telegram Bot API with 1 retry attempt
   */
  public async sendLeadNotification(lead: LeadPayload): Promise<boolean> {
    this.validateCredentials();

    if (!lead.name || !lead.telegram || !lead.message) {
      throw new Error("Invalid lead payload: name, telegram, and message are required.");
    }

    const formattedText = this.formatLeadMessage(lead);
    const username = lead.telegram.replace("@", "");

    const sendAttempt = async () => {
      await this.bot.telegram.sendMessage(this.chatId, formattedText, {
        parse_mode: "HTML",
        ...Markup.inlineKeyboard([
          [
            Markup.button.url("💬 Contact Client on Telegram", `https://t.me/${username}`),
          ],
        ]),
      });
    };

    try {
      await sendAttempt();
      return true;
    } catch (primaryError) {
      console.error("[TELEGRAM SERVICE PRIMARY ERROR] Initial dispatch failed, attempting retry...", primaryError);

      try {
        await new Promise((res) => setTimeout(res, 1000));
        await sendAttempt();
        console.log("[TELEGRAM SERVICE] Retry dispatch successful!");
        return true;
      } catch (retryError) {
        console.error("[TELEGRAM SERVICE CRITICAL ERROR] Both primary and retry dispatches failed:", retryError);
        throw new Error(`Telegram API delivery failed: ${retryError instanceof Error ? retryError.message : String(retryError)}`);
      }
    }
  }
}
