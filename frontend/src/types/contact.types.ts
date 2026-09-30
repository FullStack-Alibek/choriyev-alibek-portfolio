export interface ContactFormData {
  name: string;
  telegram: string;
  projectType: string;
  budget: string;
  message: string;
  honeypot?: string;
}

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export interface TelegramLeadPayload {
  name: string;
  telegram: string;
  projectType: string;
  budget: string;
  message: string;
  source?: string;
  timestamp?: string;
}
