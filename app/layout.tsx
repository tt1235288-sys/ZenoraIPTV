// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp'; // ADD THIS IMPORT

import Footer from './components/Footer';
import { CONSTANTS } from '@/lib/seo';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    default: `Zenora IPTV - Best Premium IPTV Subscription Service 2026 | 15,000+ Channels & 4K Streaming`,
    template: `%s | Zenora IPTV`,
  },
  description: `Experience Zenora IPTV: Stream 15,000+ Live Channels & 60,000+ VODs in Crystal Clear 4K quality. Fast activation, Anti-Freeze Technology, and 24/7 Pro Support.`,
  authors: [{ name: `Zenora IPTV Team` }],
  creator: `Zenora IPTV`,
  publisher: `Zenora IPTV`,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/`,
  },
  openGraph: {
    title: `Zenora IPTV - Best Premium IPTV Subscription Service 2026`,
    description: `Stream 15,000+ Live Channels & 60,000+ VODs in 4K quality. Instant activation, anti-freeze technology, 24/7 support.`,
    url: `https://${CONSTANTS.DOMAIN}/`,
    siteName: `Zenora IPTV`,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/logo.webp`,
        width: 1200,
        height: 630,
        alt: `Zenora IPTV - Premium IPTV Service`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Zenora IPTV - Best Premium IPTV Subscription Service 2026`,
    description: `15,000+ channels, 60,000+ VODs, 4K quality. Instant activation.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/logo.webp`],
    creator: `@zenoraiptv`,
    site: `@zenoraiptv`,
  },
  verification: {
    google: '',
  },
  category: 'entertainment',
  keywords: [
    'Zenora IPTV',
    'IPTV service',
    'best IPTV provider',
    '4K streaming',
    'live TV streaming',
    'sports PPV',
    'IPTV subscription',
    'premium IPTV',
    'international channels',
    'Zenora IPTV',
    'IPTV 2026',
    'streaming service',
    'cord cutting',
    'live channels',
    'movies on demand'
  ],
};

// Organization Schema for Zenora IPTV
const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    id="organization-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zenora IPTV",
        "alternateName": "Zenora IPTV",
        "url": `https://${CONSTANTS.DOMAIN}`,
        "logo": `https://${CONSTANTS.DOMAIN}/img/logo.webp`,
        "image": `https://${CONSTANTS.DOMAIN}/img/logo.webp`,
        "description": `Premium IPTV subscription service with 15,000+ live channels and 60,000+ VODs in 4K quality.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English"],
          "contactOption": "TollFree"
        },
        "sameAs": [
          "https://twitter.com/zenoraiptv",
          "https://facebook.com/zenoraiptv",
          "https://instagram.com/zenoraiptv",
          "https://t.me/zenoraiptv"
        ]
      })
    }}
  />
);

// Website Schema
const WebsiteSchema = () => (
  <script
    type="application/ld+json"
    id="website-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Zenora IPTV",
        "url": `https://${CONSTANTS.DOMAIN}`,
        "description": `Premium IPTV subscription service with Zenora IPTV`,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `https://${CONSTANTS.DOMAIN}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      })
    }}
  />
);

// Product Schema for Subscription Plans
const ProductSchema = () => (
  <script
    type="application/ld+json"
    id="product-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `Zenora IPTV Premium Subscription`,
        "logo": `https://${CONSTANTS.DOMAIN}/img/logo.webp`,
        "image": `https://${CONSTANTS.DOMAIN}/img/logo.webp`,
        "description": `Premium IPTV service with 15,000+ live channels, 60,000+ VODs, and 4K streaming quality.`,
        "brand": { 
          "@type": "Brand", 
          "name": "Zenora IPTV" 
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "5000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": [
          { 
            "@type": "Offer", 
            "name": "3 Months - 1 Device", 
            "priceCurrency": "USD", 
            "price": "30.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "3 Months - 2 Devices", 
            "priceCurrency": "USD", 
            "price": "55.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "3 Months - 3 Devices", 
            "priceCurrency": "USD", 
            "price": "75.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "6 Months - 1 Device", 
            "priceCurrency": "USD", 
            "price": "40.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "6 Months - 2 Devices", 
            "priceCurrency": "USD", 
            "price": "80.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "6 Months - 3 Devices", 
            "priceCurrency": "USD", 
            "price": "100.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "12 Months - 1 Device", 
            "priceCurrency": "USD", 
            "price": "70.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "12 Months - 2 Devices", 
            "priceCurrency": "USD", 
            "price": "100.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "12 Months - 3 Devices", 
            "priceCurrency": "USD", 
            "price": "150.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`
          }
        ]
      })
    }}
  />
);

// Service Schema
const ServiceSchema = () => (
  <script
    type="application/ld+json"
    id="service-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Zenora IPTV IPTV Subscription`,
        "serviceType": "IPTV Subscription",
        "provider": {
          "@type": "Organization",
          "name": "Zenora IPTV"
        },
        "description": "Premium IPTV service with 15,000+ live channels, 60,000+ VODs, and 4K streaming quality.",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Subscription Plans",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "3 Months - 1 Device"
              },
              "price": "30",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "3 Months - 2 Devices"
              },
              "price": "55",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "3 Months - 3 Devices"
              },
              "price": "75",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "6 Months - 1 Device"
              },
              "price": "40",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "6 Months - 2 Devices"
              },
              "price": "80",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "6 Months - 3 Devices"
              },
              "price": "100",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "12 Months - 1 Device"
              },
              "price": "70",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "12 Months - 2 Devices"
              },
              "price": "100",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "12 Months - 3 Devices"
              },
              "price": "150",
              "priceCurrency": "USD"
            }
          ]
        }
      })
    }}
  />
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="thumbnail" content={`https://${CONSTANTS.DOMAIN}/img/logo.webp`} />
        
        {/* Favicon Links - ADD THESE */}
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/img/favicons/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/img/favicons/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/img/favicons/favicon-128x128.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/img/favicons/favicon-256x256.png" />
        <link rel="icon" type="image/x-icon" href="/img/favicons/favicon.ico" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/img/favicons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/img/favicons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/img/favicons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/img/favicons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/img/favicons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/img/favicons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon-180x180.png" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="48x48" href="/img/favicons/android-chrome-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/img/favicons/android-chrome-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicons/android-chrome-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/img/favicons/android-chrome-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/img/favicons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/img/favicons/android-chrome-256x256.png" />
        <link rel="icon" type="image/png" sizes="384x384" href="/img/favicons/android-chrome-384x384.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/img/favicons/android-chrome-512x512.png" />
        
        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#ec4899" />
        
        {/* Manifest */}
        <link rel="manifest" href="/img/favicons/site.webmanifest" />
      </head>
      <body 
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-slate-950 text-white`} 
        suppressHydrationWarning
      >
        <OrganizationSchema />
        <WebsiteSchema />
        <ProductSchema />
        <ServiceSchema />

        <Header />
        {children}
        <Footer />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6NR51QZXKL"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6NR51QZXKL');
            `,
          }}
        />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}