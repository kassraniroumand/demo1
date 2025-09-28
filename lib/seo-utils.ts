import { Metadata } from 'next'

interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
}: SEOConfig): Metadata {
  const baseUrl = 'https://your-domain.com'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullTitle = title ? `${title} | E-Commerce Store` : 'E-Commerce Store - Shop Quality Products Online'
  const fullDescription = description || 'Your trusted online store for quality products with fast shipping and excellent customer service.'

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: [...keywords, 'ecommerce', 'online shopping', 'retail'],
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: 'E-Commerce Store',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image],
      creator: '@yourstore',
    },
    alternates: {
      canonical: fullUrl,
    },
  }

  // Add article-specific metadata
  if (type === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
      section,
      tags,
    }
  }

  // Add product-specific metadata
  if (type === 'product') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'product',
    }
  }

  return metadata
}

// Helper function for product pages
export function generateProductSEO(product: {
  name: string
  description: string
  price: number
  currency: string
  image: string
  category: string
  brand?: string
  sku?: string
  availability?: 'in_stock' | 'out_of_stock' | 'preorder'
}) {
  const title = `${product.name} - ${product.category}`
  const description = `${product.description} - ${product.currency}${product.price}. Fast shipping available.`

  return generateSEO({
    title,
    description,
    keywords: [product.name, product.category, product.brand || '', 'buy online'].filter(Boolean),
    image: product.image,
    type: 'product',
  })
}

// Helper function for category pages
export function generateCategorySEO(category: {
  name: string
  description: string
  image?: string
  productCount?: number
}) {
  const title = `${category.name} - Shop Online`
  const description = category.description + (category.productCount ? ` Browse ${category.productCount} products.` : '')

  return generateSEO({
    title,
    description,
    keywords: [category.name, 'shop online', 'buy', 'products'],
    image: category.image,
  })
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://your-domain.com${crumb.url}`,
    })),
  }
}

// Generate product structured data
export function generateProductStructuredData(product: {
  name: string
  description: string
  price: number
  currency: string
  image: string
  category: string
  brand?: string
  sku?: string
  availability?: 'in_stock' | 'out_of_stock' | 'preorder'
  rating?: number
  reviewCount?: number
}) {
  const availability = product.availability === 'in_stock'
    ? 'https://schema.org/InStock'
    : product.availability === 'out_of_stock'
    ? 'https://schema.org/OutOfStock'
    : 'https://schema.org/PreOrder'

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: product.brand ? {
      '@type': 'Brand',
      name: product.brand,
    } : undefined,
    sku: product.sku,
    category: product.category,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability,
      url: `https://your-domain.com/products/${product.sku}`,
    },
    aggregateRating: product.rating && product.reviewCount ? {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    } : undefined,
  }
}
