/**
 * SEO utilities — metadata generation helpers
 *
 * Used in app/layout.tsx and per-page metadata exports.
 * All metadata derives from content.json — single source of truth.
 */

import type { Metadata } from 'next';
import { content } from './content';
import { brand } from './brand';

const BASE_URL = content.seo?.siteUrl || 'https://example.com';
const BIZ_NAME = content.business.name;

/**
 * Generate page-level metadata.
 * @param page - page slug or null for homepage
 * @param overrides - optional metadata overrides
 */
export function generateMetadata(
  page?: 'about' | 'services' | 'contact' | 'gallery' | null,
  overrides?: Partial<Metadata>
): Metadata {
  const title       = overrides?.title as string || buildTitle(page);
  const description = overrides?.description as string || buildDescription(page);
  const url         = page ? `${BASE_URL}/${page}` : BASE_URL;

  return {
    title,
    description,
    keywords: content.seo?.keywords || [],
    authors:  [{ name: BIZ_NAME }],
    creator:  BIZ_NAME,
    metadataBase: new URL(BASE_URL),
    alternates:   { canonical: url },
    openGraph: {
      type:        'website',
      locale:      'en_AU',
      url,
      siteName:    BIZ_NAME,
      title,
      description,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: BIZ_NAME }],
    },
    twitter: {
      card:        'summary_large_image',
      title,
      description,
    },
    robots: {
      index:     true,
      follow:    true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
    ...overrides,
  };
}

function buildTitle(page?: string | null): string {
  const biz      = BIZ_NAME;
  const industry = content.business.industry || '';
  const city     = content.business.address?.city || content.business.location || 'Melbourne';

  if (!page) {
    // Homepage: "Service in City | Business Name"
    return `${capitalise(industry)} in ${city} | ${biz}`;
  }
  const pageNames: Record<string, string> = {
    about:    `About Us | ${biz}`,
    services: `Our Services | ${biz}`,
    contact:  `Contact | ${biz}`,
    gallery:  `Our Work | ${biz}`,
  };
  return pageNames[page] || `${capitalise(page)} | ${biz}`;
}

function buildDescription(page?: string | null): string {
  // Use content.json description if set
  if (content.business.description && !page) {
    return content.business.description;
  }
  const city    = content.business.address?.city || content.business.location || 'Melbourne';
  const tagline = content.business.tagline || '';
  return `${BIZ_NAME} — ${tagline || capitalise(content.business.industry || 'local business')} in ${city}, VIC. ${page ? `Learn about our ${page}.` : 'Call for a free quote.'}`.slice(0, 155);
}

/**
 * Generate LocalBusiness schema markup.
 * Inject via JsonLd component.
 */
export function buildLocalBusinessSchema() {
  const biz     = content.business;
  const rating  = (content as any).google_rating;
  const reviews = (content as any).review_count;
  const areas   = (content as any).service_areas || [];

  // Map industry to Schema.org type
  const schemaTypeMap: Record<string, string> = {
    trades:       'HomeAndConstructionBusiness',
    electrical:   'Electrician',
    plumbing:     'Plumber',
    health:       'MedicalOrganization',
    dental:       'Dentist',
    real_estate:  'RealEstateAgent',
    'real-estate':'RealEstateAgent',
    restaurant:   'Restaurant',
    cafe:         'CafeOrCoffeeShop',
    finance:      'FinancialService',
    accounting:   'AccountingService',
    education:    'EducationalOrganization',
    default:      'LocalBusiness',
  };
  const industry    = (biz.industry || '').toLowerCase();
  const schemaType  = Object.entries(schemaTypeMap).find(([k]) => industry.includes(k))?.[1] || 'LocalBusiness';

  return {
    '@context':   'https://schema.org',
    '@type':      schemaType,
    name:         biz.name,
    description:  biz.description || content.business.description,
    url:          content.seo?.siteUrl || BASE_URL,
    telephone:    biz.phone,
    email:        content.pages?.contact?.email,
    address: {
      '@type':          'PostalAddress',
      streetAddress:    (biz.address as any)?.street,
      addressLocality:  biz.address?.city || biz.location,
      addressRegion:    'VIC',
      addressCountry:   'AU',
    },
    ...(rating ? {
      aggregateRating: {
        '@type':       'AggregateRating',
        ratingValue:   rating,
        reviewCount:   reviews || 1,
        bestRating:    5,
      },
    } : {}),
    ...(areas.length ? { areaServed: areas } : {}),
    ...(content.social?.instagram ? { sameAs: [
      content.social.instagram && `https://instagram.com/${content.social.instagram.replace('@','')}`,
      content.social.facebook,
      content.social.linkedin,
    ].filter(Boolean) } : {}),
  };
}

function capitalise(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).replace(/_/g, ' ') : '';
}

export const seo = { generateMetadata, buildLocalBusinessSchema };
