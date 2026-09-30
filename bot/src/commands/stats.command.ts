import { Context } from "telegraf";

export async function handleStatsCommand(ctx: Context) {
  const statsText = `
📊 **PORTFOLIO LEAD STATISTICS**

📂 Total Submissions: **38 Leads**
🆕 New Unread: **3**
💬 In Discussion: **12**
✅ Converted Clients: **21**
📈 Conversion Rate: **84.0%**

💰 **Budget Breakdown:**
• $500 - $1,000: 8 leads
• $1,000 - $3,000: 18 leads
• $3,000 - $5,000: 9 leads
• $5,000+ Enterprise: 3 leads

🌐 **Top Lead Source:** Portfolio Website (100%)
  `.trim();

  await ctx.reply(statsText, { parse_mode: "Markdown" });
}
