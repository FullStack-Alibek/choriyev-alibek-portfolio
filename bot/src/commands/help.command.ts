import { Context } from "telegraf";

export async function handleHelpCommand(ctx: Context) {
  const helpText = `
🛠 **Portfolio Lead Bot & CRM Guide**

**Lead Management Workflow:**
1. Incoming leads from your portfolio website are routed directly to this chat.
2. Each lead notification includes quick action buttons to reply directly on Telegram.
3. Use /stats to check total leads, project budget breakdowns, and monthly stats.
4. Use /latest to view recent submissions.

**Environment Setup:**
Ensure \`TELEGRAM_BOT_TOKEN\` and \`TELEGRAM_CHAT_ID\` in \`.env\` match your credentials.
  `.trim();

  await ctx.reply(helpText, { parse_mode: "Markdown" });
}
