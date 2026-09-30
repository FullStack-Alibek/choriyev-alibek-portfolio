interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

/**
 * Server-side sliding window rate limiter
 * Allows max 3 requests per IP per minute
 */
export function checkRateLimit(ip: string, maxRequests = 3, windowMs = 60 * 1000): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true; // Allowed
  }

  if (record.count >= maxRequests) {
    return false; // Rate limited
  }

  record.count += 1;
  return true; // Allowed
}
