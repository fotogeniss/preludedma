// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://preludedma.gr',
  // Στατικά αρχεία: το `npm run build` βγάζει τον φάκελο dist/ για ανέβασμα με FTP
  output: 'static',
  build: {
    format: 'directory',
  },
});
