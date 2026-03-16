export const PUBLIC_CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? '';
export const PUBLIC_CONTACT_MAILTO = PUBLIC_CONTACT_EMAIL ? `mailto:${PUBLIC_CONTACT_EMAIL}` : null;
