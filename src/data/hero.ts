// Κείμενα του hero. Αλλάζουν από το διαχειριστικό (Pages CMS) → «Αρχική: hero».
import heroJson from '../content/hero.json';

export type Readout = { label: string; value: number; decimals: number; unit: string };
export const hero = heroJson as {
  kicker: string;
  line1: string;
  line2: string;
  line3: string;
  intro: string;
  highlight: string;
  readouts: Readout[];
};
