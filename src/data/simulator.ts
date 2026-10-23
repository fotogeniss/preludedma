// Περιεχόμενο του live simulator.
// Κάθε κλάδος έχει έτοιμα κείμενα, χρώμα και λίστα (χωρίς τιμές). Το όνομα που γράφει ο επισκέπτης μπαίνει μέσα σε αυτά.
// Για νέο κλάδο, πρόσθεσε ένα ακόμα αντικείμενο με τα ίδια πεδία.

export type Kind = 'bakery' | 'restaurant' | 'gym' | 'beauty' | 'clinic' | 'shop' | 'office' | 'hotel';

export type Item = { n: string; m: string };

export type KindPreset = {
  label: string;
  color: string;
  headline: string;
  sub: string;
  cta: string;
  itemsTitle: string; // τίτλος της 2ης σελίδας (π.χ. «Κατάλογος»)
  items: Item[];
  features: string[]; // 3 κάρτες στην αρχική
  greeting: string; // πάνω στην εφαρμογή
  appAction: string; // κύριο κουμπί στην εφαρμογή
  hours: string;
  flow: 'cart' | 'book'; // cart: προσθήκη στο καλάθι, book: κράτηση ραντεβού/τραπεζιού
  bookTitle: string; // τίτλος της φόρμας κράτησης
  bookOk: string; // μήνυμα επιτυχίας
};

export const presets: Record<Kind, KindPreset> = {
  bakery: {
    label: 'Φούρνος / Καφέ', color: '#C8553D',
    headline: 'Ζεστό ψωμί από τις 6 το πρωί.', sub: 'Παράγγειλε online και παράλαβε χωρίς ουρά.', cta: 'Δες τον κατάλογο',
    itemsTitle: 'Κατάλογος',
    items: [{ n: 'Χωριάτικο ψωμί', m: 'Ζεστό' }, { n: 'Κουλούρι Θεσσαλονίκης', m: 'Κλασικό' }, { n: 'Τυρόπιτα σφολιάτα', m: 'Δημοφιλές' }, { n: 'Τούρτα σοκολάτα', m: 'Κατά παραγγελία' }, { n: 'Freddo espresso', m: 'Νέο' }],
    features: ['Ψωμιά', 'Γλυκά', 'Catering'],
    greeting: 'Καλημέρα!', appAction: 'Νέα παραγγελία', hours: 'Δευ–Σάβ 06:00–21:00',
    flow: 'cart', bookTitle: '', bookOk: '',
  },
  restaurant: {
    label: 'Εστιατόριο', color: '#B4532A',
    headline: 'Κουζίνα με ιστορία, τραπέζι για σένα.', sub: 'Κλείσε τραπέζι σε 20 δευτερόλεπτα.', cta: 'Κράτηση τραπεζιού',
    itemsTitle: 'Μενού',
    items: [{ n: 'Χωριάτικη σαλάτα', m: 'Σαλάτες' }, { n: 'Μουσακάς', m: 'Κυρίως' }, { n: 'Χταπόδι σχάρας', m: 'Ψαρικά' }, { n: 'Παγωτό καϊμάκι', m: 'Γλυκά' }, { n: 'Κρασί χύμα (½)', m: 'Κρασί' }],
    features: ['Μενού ημέρας', 'Εκδηλώσεις', 'Delivery'],
    greeting: 'Καλησπέρα!', appAction: 'Κλείσε τραπέζι', hours: 'Καθημερινά 13:00–00:00',
    flow: 'book', bookTitle: 'Κλείσε τραπέζι', bookOk: 'Το τραπέζι κρατήθηκε',
  },
  gym: {
    label: 'Γυμναστήριο', color: '#1F8A6B',
    headline: 'Προπόνηση στο δικό σου ρυθμό.', sub: 'Κλείσε θέση σε τμήμα σε δύο κλικ.', cta: 'Δες το πρόγραμμα',
    itemsTitle: 'Πρόγραμμα',
    items: [{ n: 'Pilates reformer', m: '18:00' }, { n: 'Crossfit', m: '19:00' }, { n: 'Yoga flow', m: '20:00' }, { n: 'Personal training', m: '21:00' }, { n: 'Spinning', m: '09:00' }],
    features: ['Τμήματα', 'Συνδρομές', 'Personal'],
    greeting: 'Η επόμενη προπόνησή σου', appAction: 'Κλείσε θέση', hours: 'Δευ–Παρ 07:00–23:00',
    flow: 'book', bookTitle: 'Κλείσε θέση', bookOk: 'Η θέση κρατήθηκε',
  },
  beauty: {
    label: 'Κομμωτήριο / Beauty', color: '#B5477A',
    headline: 'Η ώρα σου, όποτε τη θέλεις.', sub: 'Διάλεξε υπηρεσία και κλείσε ραντεβού online.', cta: 'Κλείσε ραντεβού',
    itemsTitle: 'Υπηρεσίες',
    items: [{ n: 'Κούρεμα & styling', m: 'Μαλλιά' }, { n: 'Βαφή', m: 'Μαλλιά' }, { n: 'Μανικιούρ', m: 'Νύχια' }, { n: 'Περιποίηση προσώπου', m: 'Πρόσωπο' }, { n: 'Νυφικό χτένισμα', m: 'Γάμος' }],
    features: ['Μαλλιά', 'Νύχια', 'Περιποίηση'],
    greeting: 'Γεια σου!', appAction: 'Νέο ραντεβού', hours: 'Τρί–Σάβ 10:00–20:00',
    flow: 'book', bookTitle: 'Κλείσε ραντεβού', bookOk: 'Το ραντεβού κλείστηκε',
  },
  clinic: {
    label: 'Ιατρείο', color: '#2B5BD7',
    headline: 'Ραντεβού χωρίς αναμονή στο τηλέφωνο.', sub: 'Δες διαθεσιμότητα και κλείσε ώρα online.', cta: 'Κλείσε ραντεβού',
    itemsTitle: 'Υπηρεσίες',
    items: [{ n: 'Γενική εξέταση', m: '30′' }, { n: 'Υπέρηχος', m: '20′' }, { n: 'Αιματολογικές', m: '10′' }, { n: 'Τηλεσυμβουλευτική', m: '15′' }, { n: 'Check-up', m: '60′' }],
    features: ['Εξετάσεις', 'Ραντεβού', 'Οδηγίες'],
    greeting: 'Τα ραντεβού σου', appAction: 'Κλείσε ώρα', hours: 'Δευ–Παρ 09:00–20:00',
    flow: 'book', bookTitle: 'Κλείσε ραντεβού', bookOk: 'Το ραντεβού κλείστηκε',
  },
  shop: {
    label: 'Κατάστημα', color: '#7B3FE4',
    headline: 'Η νέα συλλογή μόλις ήρθε.', sub: 'Δωρεάν αποστολή σε όλη την Ελλάδα.', cta: 'Αγόρασε τώρα',
    itemsTitle: 'Προϊόντα',
    items: [{ n: 'Λινό πουκάμισο', m: 'Νέο' }, { n: 'Δερμάτινη τσάντα', m: 'Δημοφιλές' }, { n: 'Sneakers', m: 'Νέο' }, { n: 'Ασημένιο βραχιόλι', m: 'Δώρο' }, { n: 'Γυαλιά ηλίου', m: 'Καλοκαίρι' }],
    features: ['Νέες αφίξεις', 'Προσφορές', 'Δώρα'],
    greeting: 'Για σένα σήμερα', appAction: 'Νέες αφίξεις', hours: 'Online 24/7',
    flow: 'cart', bookTitle: '', bookOk: '',
  },
  office: {
    label: 'Γραφείο / Λογιστικό', color: '#2F4A6B',
    headline: 'Τα οικονομικά σου, σε καλά χέρια.', sub: 'Λογιστική, μισθοδοσία και φορολογικά με ένα τηλεφώνημα.', cta: 'Κλείσε συνάντηση',
    itemsTitle: 'Υπηρεσίες',
    items: [{ n: 'Τήρηση βιβλίων', m: 'μηνιαία' }, { n: 'Φορολογικές δηλώσεις', m: 'ετήσια' }, { n: 'Μισθοδοσία', m: 'μηνιαία' }, { n: 'Σύσταση εταιρείας', m: 'έργο' }, { n: 'Επιδοτήσεις ΕΣΠΑ', m: 'έργο' }],
    features: ['Επιχειρήσεις', 'Ιδιώτες', 'Συμβουλευτική'],
    greeting: 'Καλώς ήρθες', appAction: 'Ανέβασε παραστατικά', hours: 'Δευ–Παρ 09:00–17:00',
    flow: 'book', bookTitle: 'Κλείσε συνάντηση', bookOk: 'Η συνάντηση κλείστηκε',
  },
  hotel: {
    label: 'Ξενοδοχείο / Rooms', color: '#1C7C8C',
    headline: 'Ξύπνα με θέα στο Αιγαίο.', sub: 'Απευθείας κράτηση, χωρίς ενδιάμεσους, με επιβεβαίωση σε δευτερόλεπτα.', cta: 'Δες διαθεσιμότητα',
    itemsTitle: 'Δωμάτια',
    items: [{ n: 'Δίκλινο με θέα', m: '2 άτομα' }, { n: 'Σουίτα με jacuzzi', m: '2 άτομα' }, { n: 'Οικογενειακό', m: '4 άτομα' }, { n: 'Studio', m: '2 άτομα' }, { n: 'Villa', m: '6 άτομα' }],
    features: ['Δωμάτια', 'Πρωινό', 'Μεταφορά'],
    greeting: 'Η διαμονή σου', appAction: 'Νέα κράτηση', hours: 'Reception 24/7',
    flow: 'book', bookTitle: 'Κράτηση δωματίου', bookOk: 'Η κράτηση στάλθηκε',
  },
};

// Εικονίδια ανά κλάδο (24×24, μόνο περίγραμμα)
export const icons: Record<Kind, string> = {
  bakery: '<path d="M4 11c0-3 3-5 8-5s8 2 8 5v1H4z"/><path d="M5 12v6a1 1 0 001 1h12a1 1 0 001-1v-6"/><path d="M9 9l1 2M13 9l1 2"/>',
  restaurant: '<path d="M7 3v8M5 3v5a2 2 0 004 0V3M7 11v10"/><path d="M17 21V3c-2 1-3 4-3 7v3h3"/>',
  gym: '<path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12"/>',
  beauty: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5L20 18M8.5 16.5L20 6"/>',
  clinic: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
  shop: '<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
  office: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 13h18"/>',
  hotel: '<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 00-3-3h-7v5"/><circle cx="7" cy="11" r="2"/>',
};

// Χρώματα που μπορεί να διαλέξει ο επισκέπτης (το πρώτο σημαίνει «του κλάδου»)
export const swatches = ['auto', '#E2483D', '#F08C2E', '#1F8A6B', '#1C7C8C', '#2B5BD7', '#7B3FE4', '#B5477A', '#16171D'];

export const styles = [
  { id: 'modern', label: 'Μοντέρνο' },
  { id: 'elegant', label: 'Κομψό' },
  { id: 'bold', label: 'Τολμηρό' },
  { id: 'neon', label: 'Νέον' },
] as const;
