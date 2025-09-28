import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "E-Commerce Store - Shop Quality Products Online",
    template: "%s | E-Commerce Store",
  },
  description: "Your trusted online store for quality products with fast shipping and excellent customer service. Shop now for the best deals.",
  applicationName: "E-Commerce Store",
  referrer: "origin-when-cross-origin",
  keywords: ["ecommerce", "online shopping", "retail", "products", "store"],
  authors: [{ name: "E-Commerce Team", url: "https://demo1-git-main-kassraniroumands-projects.vercel.app" }],
  creator: "E-Commerce Store",
  publisher: "E-Commerce Store",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://demo1-git-main-kassraniroumands-projects.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://demo1-git-main-kassraniroumands-projects.vercel.app",
    siteName: "E-Commerce Store",
    title: "E-Commerce Store - Shop Quality Products Online",
    description: "Your trusted online store for quality products with fast shipping and excellent customer service.",
    images: [
      {
        url: "/un.jpg",
        width: 1200,
        height: 630,
        alt: "E-Commerce Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourstore",
    creator: "@yourstore",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
    other: {
      me: ["your@email.com", "https://demo1-git-main-kassraniroumands-projects.vercel.app"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
