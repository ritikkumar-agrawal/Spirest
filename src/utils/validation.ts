export const ALLOWED_DOMAINS = ['nitrkl.ac.in', 'gmail.com', 'iitd.ac.in'];

export const isAllowedDomain = (email: string): boolean => {
  const domain = email.split('@')[1];
  return ALLOWED_DOMAINS.includes(domain);
};