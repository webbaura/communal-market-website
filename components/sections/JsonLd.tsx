export default function JsonLd() {
  const siteUrl = 'https://communalmarket.com.au';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CafeOrCoffeeShop',
        '@id': `${siteUrl}/#organization`,
        name: 'Communal Market',
        description: 'Neighbourhood cafe and bakery in Caulfield, Melbourne. Specialty coffee, cinnamon scrolls, pastries, and light food made fresh daily.',
        url: siteUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '949 Glen Huntly Rd',
          addressLocality: 'Caulfield',
          addressRegion: 'VIC',
          postalCode: '3162',
          addressCountry: 'AU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -37.882,
          longitude: 145.023,
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '06:30', closes: '14:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '14:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '08:00', closes: '12:30' },
        ],
        servesCuisine: ['Coffee', 'Bakery', 'Cafe'],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: 5.0,
          reviewCount: 118,
          bestRating: 5,
        },
        image: `${siteUrl}/assets/images/photo-00.jpg`,
        priceRange: '$$',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Communal Market',
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-AU',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
