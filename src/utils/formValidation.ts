export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s+()-]{10,}$/;
  return phoneRegex.test(phone);
};

export const isSpamSubmission = (formData: Record<string, string>): boolean => {
  const spamKeywords = ['viagra', 'casino', 'crypto', 'bitcoin', 'loan', 'prize', 'winner'];
  const values = Object.values(formData).join(' ').toLowerCase();
  
  return spamKeywords.some(keyword => values.includes(keyword));
};

export const validateHoneypot = (value: string): boolean => {
  return value === '';
};

export const createTimestamp = (): number => {
  return Date.now();
};

export const validateSubmissionTime = (timestamp: number): boolean => {
  const timeElapsed = Date.now() - timestamp;
  return timeElapsed > 3000;
};
