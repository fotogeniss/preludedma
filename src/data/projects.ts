// Τα έργα στην αρχική. Αλλάζουν από το διαχειριστικό (Pages CMS) → «Έργα».
// Οι εικόνες ανεβαίνουν στο public/projects/. Χωρίς εικόνα εμφανίζεται gradient στο brand χρώμα.
import projectsJson from '../content/projects.json';

export type Project = {
  id: string;
  title: string;
  type: string;
  year: number;
  image?: string;
  url?: string;
};

export const projects = (projectsJson as Project[]).map((p) => ({
  ...p,
  image: p.image || undefined,
  url: p.url || undefined,
}));
