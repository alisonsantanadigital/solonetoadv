import { FAQ_ITEMS, FIRM_INFO, LegalArticle } from '../data/firmContent';

interface SeoPayload {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  article?: LegalArticle;
}

function upsertMetaTag(
  selector: string,
  attrName: 'name' | 'property',
  attrValue: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function upsertStructuredData(id: string, data: unknown) {
  let script = document.head.querySelector<HTMLScriptElement>(`script[data-seo-id="${id}"]`);
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-id', id);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeStructuredData(id: string) {
  const script = document.head.querySelector(`script[data-seo-id="${id}"]`);
  if (script) {
    script.remove();
  }
}

export function applyRouteSeo({ title, description, path, type = 'website', article }: SeoPayload) {
  const origin = window.location.origin;
  const canonicalUrl = `${origin}${path}`;

  document.title = title;
  upsertMetaTag('meta[name="description"]', 'name', 'description', description);
  upsertMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
  upsertMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
  upsertMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
  upsertMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  upsertMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  upsertMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  upsertCanonical(canonicalUrl);

  upsertStructuredData('legal-service', {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: FIRM_INFO.name,
    url: origin,
    telephone: FIRM_INFO.whatsappDisplay,
    areaServed: [
      {
        '@type': 'City',
        name: 'São Paulo',
      },
      {
        '@type': 'Country',
        name: 'Brasil',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    knowsAbout: ['Direito Trabalhista', 'Direito Civil', 'Direito Previdenciário'],
  });

  if (path === '/') {
    upsertStructuredData('faq-page', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
    removeStructuredData('article-schema');
  } else if (article) {
    removeStructuredData('faq-page');
    upsertStructuredData('article-schema', {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.seoDescription,
      datePublished: article.publishedIso,
      inLanguage: 'pt-BR',
      author: {
        '@type': 'Person',
        name: FIRM_INFO.lawyerName,
      },
      publisher: {
        '@type': 'Organization',
        name: FIRM_INFO.name,
      },
      mainEntityOfPage: canonicalUrl,
    });
  } else {
    removeStructuredData('faq-page');
    removeStructuredData('article-schema');
  }
}
