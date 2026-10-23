// Σελίδες υπηρεσιών (/istoselides/, /e-shop/, /efarmoges/).
// Το περιεχόμενο βρίσκεται στο src/content/pages.json και αλλάζει από το διαχειριστικό (Pages CMS) → «Σελίδες υπηρεσιών».
import pagesJson from '../content/pages.json';

export type ServicePage = {
  slug: string;
  icon: string;
  menu: string;
  seoTitle: string;
  description: string;
  kicker: string;
  title: string;
  intro: string;
  time: string;
  features: { title: string; text: string }[];
  includes: string[];
  faq: { q: string; a: string }[];
};

export const servicePages = pagesJson as ServicePage[];
export const servicePage = (slug: string) => servicePages.find((p) => p.slug === slug)!;
