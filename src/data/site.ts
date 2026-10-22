import company from '../content/company.json';

// Βασικά στοιχεία της εταιρείας.
// Τα επεξεργάσιμα (email, τηλέφωνο, SEO, διεύθυνση, νομικά, Analytics) βρίσκονται στο src/content/company.json
// και αλλάζουν από το διαχειριστικό (Pages CMS) → «Στοιχεία εταιρείας».
export const site = {
  name: 'Prelude',
  legalName: 'Prelude Digital Marketing Agency',
  url: 'https://preludedma.gr',
  ogImage: '/og.png',
  geo: { latitude: 37.9838, longitude: 23.7275 },

  email: company.email,
  phone: company.phone.replace(/\s+/g, ''),
  phoneDisplay: company.phoneDisplay || company.phone,
  seoTitle: company.seoTitle,
  description: company.description,
  address: { ...company.address, addressCountry: 'GR' },
  analytics: {
    gaId: (company.analytics?.gaId ?? '').trim(),
    searchConsole: (company.analytics?.searchConsole ?? '').trim(),
  },
  legal: company.legal,
};

// Οι ενότητες της αρχικής, με τη σειρά. Χρησιμοποιούνται από το μενού και τον δείκτη HUD.
export const sections = [
  { id: 'top', label: 'Αρχή' },
  { id: 'services', label: 'Υπηρεσίες' },
  { id: 'lab', label: 'Simulator' },
  { id: 'process', label: 'Pipeline' },
  { id: 'work', label: 'Έργα' },
  { id: 'faq', label: 'Ερωτήσεις' },
  { id: 'contact', label: 'Επικοινωνία' },
];
