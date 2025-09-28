import { Metadata } from "next";
import { StructuredData, organizationData, storeData, websiteData } from "../components/structured-data";

export const metadata: Metadata = {
  title: "E-Commerce Store - Shop Quality Products Online",
  description: "Discover our wide selection of quality products with fast shipping and excellent customer service. Shop now for the best deals online.",
  keywords: ["ecommerce", "online shopping", "quality products", "fast shipping", "best deals"],
  authors: [{ name: "E-Commerce Team" }],
  creator: "E-Commerce Store",
  publisher: "E-Commerce Store",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "E-Commerce Store - Shop Quality Products Online",
    description: "Discover our wide selection of quality products with fast shipping and excellent customer service. Shop now for the best deals online.",
    url: "https://your-domain.com",
    siteName: "E-Commerce Store",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "E-Commerce Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Store - Shop Quality Products Online",
    description: "Discover our wide selection of quality products with fast shipping and excellent customer service. Shop now for the best deals online.",
    images: ["/twitter-image.jpg"],
    creator: "@yourstore",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};


export default function Home() {
  return (
    <>
      <StructuredData data={organizationData} />
      <StructuredData data={websiteData} />
      <StructuredData data={storeData} />
      <div>Hello World</div>
    </>
  );
}
