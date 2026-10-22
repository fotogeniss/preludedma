// Υπηρεσίες, στάδια, τεχνολογίες και συχνές ερωτήσεις.
// Το περιεχόμενο βρίσκεται στα αρχεία src/content/*.json και αλλάζει από το διαχειριστικό (Pages CMS).
import servicesJson from '../content/services.json';
import pipelineJson from '../content/pipeline.json';
import stackJson from '../content/stack.json';
import faqJson from '../content/faq.json';

export type ServiceIcon = 'web' | 'app' | 'shop' | 'core' | 'ai' | 'growth';
export type Service = {
  icon: ServiceIcon;
  title: string;
  text: string;
  stack: string;
  time: string;
  wide?: boolean;
};

export const services = servicesJson as Service[];
export const pipeline = pipelineJson as { when: string; title: string; text: string }[];
export const stack = (stackJson as { name: string }[]).map((s) => s.name).filter(Boolean);
export const faq = faqJson as { q: string; a: string }[];
