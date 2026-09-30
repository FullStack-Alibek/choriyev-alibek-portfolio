import { Context } from "telegraf";

export async function handleStartCommand(ctx: Context) {
  const name = ctx.from?.first_name || "Developer";

  const welcomeText = `
👋 Hello ${name}! Welcome to **Alibek Choriyev's Portfolio CRM Bot**.

This bot manages incoming project leads, client inquiries, and freelance notifications from your portfolio website.

Available Commands:
📌 /start - Initialize bot & main menu
ℹ️ /help - Show CRM commands & usage
📊 /stats - Display lead statistics & conversion metrics
📋 /latest - Fetch latest 5 incoming leads

Your Chat ID: \`${ctx.chat?.id}\`
  `.trim();

  await ctx.reply(welcomeText, { parse_mode: "Markdown" });
}
