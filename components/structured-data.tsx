import { BreadcrumbList, Organization, WebSite, WithContext } from 'schema-dts'

interface StructuredDataProps {
  data: WithContext<Organization> | WithContext<WebSite> | WithContext<BreadcrumbList> | Record<string, unknown>
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization structured data
export const organizationData: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'E-Commerce Store',
  url: 'https://your-domain.com',
  logo: 'https://your-domain.com/logo.png',
  description: 'Your trusted online store for quality products with fast shipping and excellent customer service.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Commerce Street',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: '12345',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.facebook.com/yourstore',
    'https://www.twitter.com/yourstore',
    'https://www.instagram.com/yourstore',
    'https://www.linkedin.com/company/yourstore',
  ],
}

// Website structured data
export const websiteData: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'E-Commerce Store',
  url: 'https://your-domain.com',
  description: 'Your trusted online store for quality products with fast shipping and excellent customer service.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://your-domain.com/search?q={search_term_string}',
  },
}

// E-commerce store structured data
export const storeData = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'E-Commerce Store',
  image: 'https://your-domain.com/store-image.jpg',
  description: 'Your trusted online store for quality products with fast shipping and excellent customer service.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Commerce Street',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: '12345',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.7128',
    longitude: '-74.0060',
  },
  url: 'https://your-domain.com',
  telephone: '+1-555-123-4567',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '16:00',
    },
  ],
  priceRange: '$-$$$',
  acceptedPaymentMethod: [
    'Cash',
    'Credit Card',
    'PayPal',
    'Apple Pay',
    'Google Pay',
  ],
}
