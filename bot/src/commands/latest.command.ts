import { Context } from "telegraf";

export async function handleLatestCommand(ctx: Context) {
  const latestText = `
📋 **LATEST 3 INCOMING LEADS**

1. 👤 **John Doe** (@johndoe_dev)
   💼 Next.js Web App | 💰 $1,000 - $3,000
   💬 "Looking for an e-commerce platform MVP built with Next.js 15."
   ⏰ 2 hours ago

2. 👤 **Sardor M.** (@sardor_tech)
   💼 React Native Mobile App | 💰 $3,000 - $5,000
   💬 "Need a cross-platform mobile driver management application."
   ⏰ 1 day ago

3. 👤 **Elena R.** (@elena_rostova)
   💼 SaaS Platform MVP | 💰 $5,000+
   💬 "AI-powered freelance workspace development."
   ⏰ 2 days ago
  `.trim();

  await ctx.reply(latestText, { parse_mode: "Markdown" });
}
