export interface LeadPayload {
  name: string;
  telegram: string;
  projectType: string;
  budget: string;
  message: string;
  source?: string;
  timestamp?: string;
}

export interface BotContext {
  chatId: string;
  username?: string;
}
