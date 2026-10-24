// Αγγλικά κείμενα του simulator (διακόπτης EL / EN μέσα στο preview).
// Ίδια σειρά με τα ελληνικά στο simulator.ts: items, features και steps αντιστοιχούν ένα προς ένα.
import type { Kind } from './simulator';

export type EnPreset = {
  label: string;
  headline: string;
  sub: string;
  cta: string;
  itemsTitle: string;
  items: [string, string][];
  features: string[];
  greeting: string;
  appAction: string;
  hours: string;
  bookTitle: string;
  bookOk: string;
  steps: [string, string][];
  alert: string;
  search: string[];
  prof?: { role: string; points: string[] };
};

const defSteps: [string, string][] = [['Get in touch', 'Message us or book online.'], ['Appointment', 'We find a time that suits you.'], ['Result', 'We take care of it, you relax.']];

export const en: Record<Kind, EnPreset> = {
  bakery: {
    label: 'Bakery / Café', headline: 'Fresh bread from 6 every morning.', sub: 'Order online and pick up without the queue.', cta: 'See the menu',
    itemsTitle: 'Menu', items: [['Village bread', 'Warm'], ['Thessaloniki koulouri', 'Classic'], ['Cheese pie', 'Popular'], ['Chocolate cake', 'To order'], ['Freddo espresso', 'New']],
    features: ['Bread', 'Sweets', 'Catering'], greeting: 'Good morning!', appAction: 'New order', hours: 'Mon–Sat 06:00–21:00',
    bookTitle: '', bookOk: '', steps: defSteps, alert: 'Fresh croissants every morning from 6', search: ['What are you having today?'],
  },
  restaurant: {
    label: 'Restaurant', headline: 'A kitchen with history, a table for you.', sub: 'Book a table in 20 seconds.', cta: 'Book a table',
    itemsTitle: 'Menu', items: [['Greek salad', 'Salads'], ['Moussaka', 'Mains'], ['Grilled octopus', 'Seafood'], ['Kaimaki ice cream', 'Desserts'], ['House wine (½)', 'Wine']],
    features: ['Daily menu', 'Events', 'Delivery'], greeting: 'Welcome!', appAction: 'Book a table', hours: 'Daily 13:00–00:00',
    bookTitle: 'Book a table', bookOk: 'Your table is booked', steps: defSteps, alert: 'Open for delivery every evening', search: ['Date', 'Time', 'Guests'],
  },
  gym: {
    label: 'Gym', headline: 'Train at your own pace.', sub: 'Book a spot in a class in two clicks.', cta: 'See the schedule',
    itemsTitle: 'Schedule', items: [['Pilates reformer', '18:00'], ['Crossfit', '19:00'], ['Yoga flow', '20:00'], ['Personal training', '21:00'], ['Spinning', '09:00']],
    features: ['Classes', 'Memberships', 'Personal'], greeting: 'Your next workout', appAction: 'Book a spot', hours: 'Mon–Fri 07:00–23:00',
    bookTitle: 'Book a spot', bookOk: 'Your spot is booked',
    steps: [['Free trial', 'Your first workout is on us.'], ['Plan', 'We build a plan around your goal.'], ['Progress', 'Track your results in the app.']],
    alert: 'New Pilates classes from Monday', search: ['Class', 'Day'],
  },
  beauty: {
    label: 'Hair & Beauty', headline: 'Your time, whenever you want it.', sub: 'Pick a service and book online.', cta: 'Book now',
    itemsTitle: 'Services', items: [['Cut & styling', 'Hair'], ['Colour', 'Hair'], ['Manicure', 'Nails'], ['Facial', 'Face'], ['Make-up', 'Events']],
    features: ['Hair', 'Nails', 'Treatments'], greeting: 'Hello!', appAction: 'New appointment', hours: 'Tue–Sat 10:00–20:00',
    bookTitle: 'Book an appointment', bookOk: 'Your appointment is booked',
    steps: [['Choose', 'The service and stylist you like.'], ['Book', 'Online, no phone calls.'], ['Relax', 'We take care of the rest.']],
    alert: 'Now open on Sundays too', search: ['Service', 'Day'],
  },
  clinic: {
    label: 'Medical practice', headline: 'Appointments without waiting on the phone.', sub: 'Check availability and book online.', cta: 'Book an appointment',
    itemsTitle: 'Services', items: [['General check', '30′'], ['Ultrasound', '20′'], ['Blood tests', '10′'], ['Video consultation', '15′'], ['Full check-up', '60′']],
    features: ['Tests', 'Appointments', 'Guidance'], greeting: 'Your appointments', appAction: 'Book a time', hours: 'Mon–Fri 09:00–20:00',
    bookTitle: 'Book an appointment', bookOk: 'Your appointment is booked',
    steps: [['Book', 'Online, whenever it suits you.'], ['Examination', 'No waiting at the practice.'], ['Follow-up', 'Advice and results online.']],
    alert: 'Video consultations on Saturdays too', search: ['Specialty', 'Day'],
    prof: { role: 'General practitioner', points: ['Works with leading clinics', 'Preventive check-ups', 'Video consultations'] },
  },
  shop: {
    label: 'Shop', headline: 'The new collection just arrived.', sub: 'Free shipping all over Greece.', cta: 'Shop now',
    itemsTitle: 'Products', items: [['Linen shirt', 'New'], ['Leather bag', 'Popular'], ['Sneakers', 'New'], ['Silver bracelet', 'Gift'], ['Sunglasses', 'Summer']],
    features: ['New in', 'Offers', 'Gifts'], greeting: 'Picked for you', appAction: 'New in', hours: 'Online 24/7',
    bookTitle: '', bookOk: '', steps: defSteps, alert: 'Free shipping all over Greece', search: ['Search products'],
  },
  office: {
    label: 'Accounting office', headline: 'Your finances, in good hands.', sub: 'Bookkeeping, payroll and tax in one call.', cta: 'Book a meeting',
    itemsTitle: 'Services', items: [['Bookkeeping', 'monthly'], ['Tax returns', 'yearly'], ['Payroll', 'monthly'], ['Company setup', 'project'], ['EU grants', 'project']],
    features: ['Businesses', 'Individuals', 'Consulting'], greeting: 'Welcome', appAction: 'Upload receipts', hours: 'Mon–Fri 09:00–17:00',
    bookTitle: 'Book a meeting', bookOk: 'Your meeting is booked',
    steps: [['Meet', 'We listen to what your business needs.'], ['Organise', 'Books, payroll and returns, handled.'], ['Peace of mind', 'A reminder for every deadline.']],
    alert: 'Tax deadlines: we have you covered', search: ['Service'],
  },
  hotel: {
    label: 'Hotel / Rooms', headline: 'Wake up to an Aegean view.', sub: 'Book direct, no middlemen, confirmed in seconds.', cta: 'Check availability',
    itemsTitle: 'Rooms', items: [['Double with view', '2 guests'], ['Suite with jacuzzi', '2 guests'], ['Family room', '4 guests'], ['Studio', '2 guests'], ['Villa', '6 guests']],
    features: ['Rooms', 'Breakfast', 'Transfers'], greeting: 'Your stay', appAction: 'New booking', hours: 'Reception 24/7',
    bookTitle: 'Book a room', bookOk: 'Your booking is confirmed', steps: defSteps, alert: 'Book direct, no middlemen', search: ['Check-in', 'Check-out', 'Guests'],
  },
  law: {
    label: 'Law firm', headline: 'Legal support, explained clearly.', sub: 'Plain language, updates at every step.', cta: 'Book a meeting',
    itemsTitle: 'Practice areas', items: [['Civil law', 'Contracts'], ['Employment law', 'Employees'], ['Family law', 'Divorce'], ['Corporate law', 'Companies'], ['Real estate', 'Transfers']],
    features: ['Advice', 'Contracts', 'Courts'], greeting: 'Your cases', appAction: 'New meeting', hours: 'Mon–Fri 09:00–18:00',
    bookTitle: 'Book a meeting', bookOk: 'Your meeting is booked',
    steps: [['First meeting', 'We hear your case in confidence.'], ['Strategy', 'Your options, explained simply.'], ['Representation', 'We stand by you to the end.']],
    alert: 'Meetings by video call too', search: ['Practice area'],
    prof: { role: 'Law firm · Supreme Court', points: ['Civil & employment law', 'Representation in all courts', 'Business advisory'] },
  },
  estate: {
    label: 'Real estate', headline: 'Your next home is here.', sub: 'Hand-picked properties, viewings when it suits you.', cta: 'See properties',
    itemsTitle: 'Properties', items: [['Apartment 85 m²', 'Kolonaki'], ['Maisonette 140 m²', 'Kifisia'], ['Studio 38 m²', 'Pangrati'], ['House 200 m²', 'Vari'], ['Office 120 m²', 'Marousi']],
    features: ['Sales', 'Rentals', 'Valuation'], greeting: 'Your favourites', appAction: 'Book a viewing', hours: 'Mon–Sat 09:00–20:00',
    bookTitle: 'Book a viewing', bookOk: 'Your viewing is booked',
    steps: [['Find', 'Filter by area, type and size.'], ['Viewing', 'Book a visit online.'], ['Keys', 'We help you all the way to the contract.']],
    alert: 'New properties every week', search: ['Area', 'Property type', 'm²'],
  },
  physio: {
    label: 'Physiotherapy', headline: 'Move again, without pain.', sub: 'A personalised recovery programme.', cta: 'Book a session',
    itemsTitle: 'Treatments', items: [['Assessment', '45′'], ['Sports injuries', '50′'], ['Muscle & joint pain', '50′'], ['Rehabilitation', '60′'], ['Therapeutic massage', '40′']],
    features: ['Rehab', 'Athletes', 'Home visits'], greeting: 'Your programme', appAction: 'New session', hours: 'Mon–Fri 08:00–21:00',
    bookTitle: 'Book a session', bookOk: 'Your session is booked',
    steps: [['Assessment', 'We find the cause of the pain.'], ['Programme', 'Treatments and exercises for you.'], ['Back to life', 'Everyday life, pain-free.']],
    alert: 'Home visits available', search: ['Treatment', 'Day'],
  },
  vet: {
    label: 'Vet clinic', headline: 'Care for your best friend.', sub: 'Vaccines, check-ups and emergencies, with love.', cta: 'Book an appointment',
    itemsTitle: 'Services', items: [['General check-up', 'Dogs & cats'], ['Vaccines', 'Schedule'], ['Microchip', 'ID'], ['Dental care', 'Cleaning'], ['Grooming', 'Care']],
    features: ['Vaccines', 'Emergencies', 'Pet shop'], greeting: 'Hello!', appAction: 'New appointment', hours: 'Mon–Sat 09:00–21:00',
    bookTitle: 'Book an appointment', bookOk: 'Your appointment is booked', steps: defSteps, alert: 'Emergencies 24/7', search: ['Service', 'Pet'],
    prof: { role: 'Veterinarian', points: ['Dogs, cats & exotics', 'Surgery & X-rays', 'Home visits'] },
  },
  garage: {
    label: 'Car service', headline: 'Your car in the right hands.', sub: 'Servicing, diagnostics and tyres, with updates on your phone.', cta: 'Book a service',
    itemsTitle: 'Services', items: [['Service', 'Oil & filters'], ['Diagnostics', 'Computer'], ['Tyres', 'Fitting & balancing'], ['Brakes', 'Pads & discs'], ['MOT prep', 'Inspection']],
    features: ['Service', 'Tyres', 'Diagnostics'], greeting: 'Your vehicle', appAction: 'Book a service', hours: 'Mon–Fri 08:00–18:00',
    bookTitle: 'Book a service', bookOk: 'Your service is booked',
    steps: [['Book online', 'Pick a service and a time.'], ['Diagnosis', 'We update you before any work.'], ['Pick-up', 'Your car is ready, with a text to your phone.']],
    alert: 'Free check before your MOT', search: ['Licence plate', 'Make / model'],
  },
};

// Λέξεις της διεπαφής του preview
export const ui = {
  el: {
    home: 'Αρχική', contact: 'Επικοινωνία', faqT: 'Συχνές ερωτήσεις', popular: 'Δημοφιλή', newIn: 'Νέα στο κατάστημα', schedule: 'Εβδομαδιαίο πρόγραμμα',
    how: 'Πώς δουλεύουμε', meet: 'Γνώρισέ μας', more: 'Περισσότερα →', bandCart: 'Παράγγειλε online σε λίγα λεπτά.', bandBook: 'Κλείσε online σε λίγα λεπτά.',
    search: 'Αναζήτηση', avail: 'Διαθεσιμότητα', all: 'Όλα', add: 'Προσθήκη στο καλάθι', book: 'Κλείσε', cart: 'Καλάθι', checkout: 'Ολοκλήρωση παραγγελίας',
    emptyCart: 'Το καλάθι είναι άδειο. Πρόσθεσε κάτι με το «+».', day: 'Ημέρα', time: 'Ώρα', confirm: 'Επιβεβαίωση', ok: 'Εντάξει', demoNote: 'Είναι demo, δεν στάλθηκε τίποτα.',
    orderSent: 'Η παραγγελία στάλθηκε', added: 'Προστέθηκε', hours: 'Ωράριο', address: 'Διεύθυνση', street: 'Οδός Παραδείγματος 12', send: 'Αποστολή', name: 'Όνομα', phone: 'Τηλέφωνο',
    formOk: 'Στάλθηκε! (Είναι demo, δεν έφυγε τίποτα.)', pages: 'Σελίδες', newsletter: 'Newsletter', yourEmail: 'Το email σου', made: 'Made by Prelude',
    faq: [['Πώς κάνω παραγγελία;', 'Πώς κάνω κράτηση;'], 'Online από εδώ, σε λίγα δευτερόλεπτα. Παίρνεις αμέσως επιβεβαίωση με email.', 'Ποιο είναι το ωράριο;', 'Πού θα σας βρω;', 'Οδός Παραδείγματος 12. Δες τον χάρτη στη σελίδα Επικοινωνία.'],
    locale: 'el-GR', all2: 'Όλες',
  },
  en: {
    home: 'Home', contact: 'Contact', faqT: 'FAQ', popular: 'Popular', newIn: 'New in store', schedule: 'Weekly schedule',
    how: 'How it works', meet: 'Meet us', more: 'More →', bandCart: 'Order online in minutes.', bandBook: 'Book online in minutes.',
    search: 'Search', avail: 'Availability', all: 'All', add: 'Add to cart', book: 'Book', cart: 'Cart', checkout: 'Place order',
    emptyCart: 'Your cart is empty. Add something with “+”.', day: 'Day', time: 'Time', confirm: 'Confirm', ok: 'OK', demoNote: 'This is a demo, nothing was sent.',
    orderSent: 'Your order was sent', added: 'Added', hours: 'Opening hours', address: 'Address', street: '12 Example Street', send: 'Send', name: 'Name', phone: 'Phone',
    formOk: 'Sent! (This is a demo, nothing left.)', pages: 'Pages', newsletter: 'Newsletter', yourEmail: 'Your email', made: 'Made by Prelude',
    faq: [['How do I order?', 'How do I book?'], 'Online, right here, in seconds. You get an email confirmation straight away.', 'What are your opening hours?', 'Where can I find you?', '12 Example Street. See the map on the Contact page.'],
    locale: 'en-GB', all2: 'All',
  },
} as const;
