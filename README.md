# Prelude site

Το νέο site της Prelude, φτιαγμένο με [Astro](https://astro.build). Βγάζει στατικά αρχεία που ανεβαίνουν σε οποιοδήποτε hosting.

## Πρώτη φορά

Χρειάζεσαι **Node.js 20 ή νεότερο** (nodejs.org, έκδοση LTS).

```bash
npm install      # κατεβάζει το Astro και το Three.js (δημιουργεί και το package-lock.json, κάνε το commit)
npm run dev      # ανοίγει το site στο http://localhost:4321 με live reload
```

## Πού αλλάζω τι

Το περιεχόμενο αλλάζει από το **διαχειριστικό (Pages CMS)**, δες παρακάτω. Τα αρχεία που επεξεργάζεται είναι στο `src/content/`.

| Θέλω να αλλάξω… | Διαχειριστικό | Αρχείο |
|---|---|---|
| Έργα και φωτογραφίες | Έργα | `src/content/projects.json`, εικόνες στο `public/projects/` |
| Υπηρεσίες | Υπηρεσίες | `src/content/services.json` |
| Συχνές ερωτήσεις | Συχνές ερωτήσεις | `src/content/faq.json` |
| Τίτλος, κείμενο και νούμερα του hero | Αρχική: hero | `src/content/hero.json` |
| Στάδια διαδικασίας | Διαδικασία | `src/content/pipeline.json` |
| Λωρίδα τεχνολογιών | Τεχνολογίες | `src/content/stack.json` |
| Email, τηλέφωνο, SEO, διεύθυνση, ΑΦΜ, Google Analytics | Στοιχεία εταιρείας | `src/content/company.json` |
| Brand χρώμα | (κώδικας) | `src/styles/global.css`, μεταβλητή `--brand` |
| Κλάδοι του simulator | (κώδικας) | `src/data/simulator.ts` |
| Θέσεις της 3D υδρογείου ανά ενότητα | `poses` στο `src/components/Globe.astro` |
| Όροι / απόρρητο | `src/pages/oroi.astro`, `src/pages/aporrito.astro` |

Δομή:

```
src/
  layouts/Base.astro       <head>, fonts, HUD, υδρόγειος, εφέ κειμένου
  layouts/Page.astro       απλές σελίδες κειμένου
  components/              ένα αρχείο ανά ενότητα της αρχικής
  data/                    όλο το περιεχόμενο
  pages/                   κάθε αρχείο = μία σελίδα (index, 404, oroi, aporrito)
  styles/global.css        όλο το CSS
public/
  contact.php              στέλνει το email της φόρμας
  .htaccess                https, redirects από το παλιό WordPress, cache
```

## Ανέβασμα στο hosting (χειροκίνητα)

```bash
npm run build    # φτιάχνει τον φάκελο dist/
```

1. **Backup του WordPress** από το cPanel (αρχεία + βάση).
2. Μετακίνησε τα αρχεία του WordPress από το `public_html` σε φάκελο `old-wp/` (ή κράτα τα μόνο στο backup).
   Το παλιό `.htaccess` πρέπει να φύγει, το καινούριο έρχεται μέσα από το `dist/`.
3. Ανέβασε το **περιεχόμενο** του `dist/` στο `public_html` (File Manager ή FTP).
   Τα `.htaccess` και `contact.php` είναι μέσα στο `dist/`. Στο FileZilla ενεργοποίησε «Show hidden files» για να φαίνεται το `.htaccess`.
4. Δοκίμασε τη φόρμα. Αν δεν έρχεται email, έλεγξε ότι η διεύθυνση `$FROM` στο `contact.php` υπάρχει στο cPanel → Email Accounts.

## Ανέβασμα αυτόματα (GitHub Actions)

Το `.github/workflows/deploy.yml` κάνει build και ανεβάζει με FTP σε κάθε push στο `main`.
Στο GitHub → Settings → Secrets and variables → Actions πρόσθεσε `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_DIR` (π.χ. `/public_html/`).
Αν το hosting δεν υποστηρίζει FTPS, άλλαξε το `protocol: ftps` σε `ftp`.

## SEO: για να σας βρίσκει η Google

Ήδη μέσα στο site:
- Ελληνικός τίτλος και περιγραφή με τις λέξεις που ψάχνει ο κόσμος («κατασκευή ιστοσελίδων Αθήνα» κ.λπ.). Αλλάζουν στο `src/data/site.ts`.
- Ένα `h1` ανά σελίδα και σωστή ιεραρχία `h2`/`h3`.
- Δομημένα δεδομένα schema.org (επιχείρηση, υπηρεσίες, επικοινωνία) για να καταλαβαίνει η Google ποιοι είστε.
- `sitemap.xml` (φτιάχνεται αυτόματα) και `robots.txt`.
- Εικόνα κοινοποίησης `public/og.png` για Facebook, LinkedIn, Viber κ.λπ.
- 301 redirects από τις παλιές διευθύνσεις του WordPress, ώστε να μη χαθεί ό,τι είχε ήδη η Google.
- Γρήγορη φόρτωση: το 3D φορτώνει αφού εμφανιστεί η σελίδα.
- Ενότητα «Συχνές ερωτήσεις» με κείμενο που απαντά σε συνηθισμένες αναζητήσεις.

**Πρέπει να κάνεις εσύ, μετά το ανέβασμα:**
1. Το τωρινό WordPress έχει `noindex, nofollow`, δηλαδή λέει στη Google να μην το δείχνει. Το νέο site το διορθώνει, αλλά αν κρατήσεις το WordPress online για λίγο, ξετσέκαρε στο WordPress → Ρυθμίσεις → Ανάγνωση το «Αποθάρρυνση μηχανών αναζήτησης».
2. Πρόσθεσε το site στο **Google Search Console** (search.google.com/search-console), επιβεβαίωσε το domain και κάνε υποβολή του `https://preludedma.gr/sitemap.xml`.
3. Φτιάξε ή διεκδίκησε το **Google Business Profile** (business.google.com) με την ίδια επωνυμία, τηλέφωνο και διεύθυνση. Αυτό σας βγάζει στον χάρτη για αναζητήσεις «κοντά μου».
4. Συμπλήρωσε τη διεύθυνση του γραφείου στο `src/data/site.ts`, για τοπικό SEO.
5. Όταν έχεις πραγματικά έργα, πρόσθεσέ τα από το Pages CMS → Έργα (με εικόνες). Όσο η λίστα είναι κενή, η ενότητα «Έργα» και ο σύνδεσμός της στο μενού δεν εμφανίζονται. Το πραγματικό περιεχόμενο είναι αυτό που ανεβάζει περισσότερο τη θέση.
6. Έλεγξε την ταχύτητα στο pagespeed.web.dev μετά το ανέβασμα.

## Στατιστικά επισκεψιμότητας (Google Analytics & Search Console)

**Google Analytics 4**: πόσοι μπαίνουν, από πού, ποιες σελίδες βλέπουν.
1. Μπες στο analytics.google.com με τον λογαριασμό Google της εταιρείας → «Έναρξη μέτρησης».
2. Φτιάξε λογαριασμό «Prelude» και ιδιότητα (property) «preludedma.gr», ζώνη ώρας Ελλάδα, νόμισμα EUR.
3. Επίλεξε πλατφόρμα **Web**, βάλε `https://preludedma.gr` και όνομα ροής «Website».
4. Αντίγραψε το **Measurement ID** (μορφή `G-XXXXXXXXXX`) και βάλ' το στο `src/data/site.ts` → `analytics.gaId`.
5. Κάνε build/ανέβασμα. Στο site εμφανίζεται πλέον μήνυμα cookies. Το Analytics μετράει μόνο όσους πατήσουν «Αποδοχή», όπως απαιτεί ο νόμος.
6. Δες live επισκέπτες στο Analytics → Αναφορές → «Σε πραγματικό χρόνο».

**Google Search Console**: με ποιες αναζητήσεις σας βρίσκουν στη Google, σε ποια θέση, και αν υπάρχουν προβλήματα.
1. search.google.com/search-console → «Προσθήκη ιδιότητας».
2. Ο καλύτερος τρόπος είναι **Domain** (`preludedma.gr`) με επιβεβαίωση μέσω εγγραφής TXT στο DNS (cPanel → Zone Editor).
   Εναλλακτικά, επίλεξε **URL prefix** → «HTML tag», αντίγραψε μόνο την τιμή του `content="..."` στο `analytics.searchConsole` και ανέβασε το site.
3. Υπόβαλε το `https://preludedma.gr/sitemap.xml` στο μενού «Sitemaps».
4. Στο Analytics → Διαχείριση → «Συνδέσεις Search Console» σύνδεσε τα δύο, για να βλέπεις τις αναζητήσεις μέσα στο Analytics.

## Διαχειριστικό (Pages CMS)

Το διαχειριστικό είναι το δωρεάν Pages CMS. Επεξεργάζεται τα αρχεία του `src/content/` απευθείας στο GitHub, σύμφωνα με τις ρυθμίσεις στο `.pages.yml`.

**Πρώτη φορά (μία φορά μόνο):**
1. Ο κώδικας πρέπει να είναι σε GitHub repo, και το GitHub Action για FTP να δουλεύει (δες «Ανέβασμα αυτόματα»).
2. Μπες στο **app.pagescms.org** → «Sign in with GitHub».
3. Πάτα **«Install the GitHub app»** και δώσε πρόσβαση **μόνο** στο repo του site.
4. Διάλεξε το repo και το branch `main`. Εμφανίζονται στο μενού: Έργα, Υπηρεσίες, Συχνές ερωτήσεις, Αρχική: hero, Διαδικασία, Τεχνολογίες, Στοιχεία εταιρείας.

**Καθημερινή χρήση:**
- Αλλάζεις ό,τι θέλεις και πατάς **Save**. Γίνεται αυτόματα commit, και σε 1–2 λεπτά το GitHub Action ανεβάζει το νέο site στο hosting.
- Η πρόοδος του ανεβάσματος φαίνεται στο GitHub → καρτέλα **Actions**.
- Φωτογραφίες έργων: στο πεδίο «Εικόνα» πατάς upload. Καλύτερα κάθετες, περίπου 900×1200, σε .webp ή .jpg κάτω από 300 KB.

**Πρόσβαση σε άλλους:**
- Από το Pages CMS → **Collaborators** μπορείς να προσκαλέσεις κάποιον με email, χωρίς να χρειάζεται λογαριασμό GitHub.
- Εναλλακτικά, πρόσθεσέ τον ως collaborator στο GitHub repo.

**Αν κάτι πάει στραβά:** κάθε αλλαγή είναι commit στο GitHub, οπότε μπορείς να γυρίσεις πίσω οποιαδήποτε στιγμή (GitHub → History → Revert).

## Φωτογραφίες του simulator

Οι φωτογραφίες στο `public/sim/` (`<κλάδος>-0.webp` = κεντρική, `-1..3` = γκαλερί) είναι από το [Unsplash](https://unsplash.com) με την Unsplash License (δωρεάν και για εμπορική χρήση). Φιλοξενούνται στο δικό μας hosting και φορτώνουν μόνο όταν ο επισκέπτης πλησιάσει τον simulator. Για αλλαγή φωτογραφίας, αντικατέστησε το αρχείο με άλλο ίδιου ονόματος.
