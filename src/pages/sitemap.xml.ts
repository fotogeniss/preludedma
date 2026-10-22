import type { APIRoute } from 'astro';

// Χάρτης του site για τη Google. Κάθε νέα σελίδα στο src/pages/ μπαίνει αυτόματα.
// Εξαιρούνται το 404 και τα αρχεία που δεν είναι σελίδες.
const pages = import.meta.glob('./**/*.astro', { eager: true });

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://preludedma.gr');
  const today = new Date().toISOString().slice(0, 10);

  const urls = Object.keys(pages)
    .filter((f) => !f.includes('404') && !f.includes('['))
    .map((f) => f.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, ''))
    .map((path) => new URL(path ? `${path}/` : '', base).href)
    .sort((a, b) => a.length - b.length);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((loc) => `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${loc === base.href ? '1.0' : '0.5'}</priority></url>`)
  .join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
