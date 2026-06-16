// app/pricing/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import { Poppins, Montserrat } from 'next/font/google';
import '../globals.css';
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
    default: `Pricing & Plans | Zenora IPTV - Best IPTV Subscription 2025 | 15,000+ Channels & 4K Streaming`,
    template: `%s | Zenora IPTV`,
  },
  description: `Choose your Zenora IPTV subscription plan starting at just $7.08/month. Get 15,000+ live channels, 60,000+ VODs, 4K streaming, PPV events, and 7-day money-back guarantee.`,
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
    canonical: `https://${CONSTANTS.DOMAIN}/pricing`,
  },
  openGraph: {
    title: `Zenora IPTV - Pricing & Subscription Plans`,
    description: `Subscribe to Zenora IPTV starting at $7.08/month. Access 15,000+ live channels, 60,000+ VODs, and 4K streaming.`,
    url: `https://${CONSTANTS.DOMAIN}/pricing`,
    siteName: `Zenora IPTV`,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/logo.webp`,
        width: 1200,
        height: 630,
        alt: `Zenora IPTV Pricing Plans`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Zenora IPTV - Subscription Plans`,
    description: `Starting at $30/3months. 15,000+ channels, 60,000+ VODs, 4K quality.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/logo.webp`],
    creator: `@zenoraiptv`,
    site: `@zenoraiptv`,
  },
  verification: {
    google: '',
  },
  category: 'entertainment',
  keywords: [
    'Zenora IPTV pricing',
    'IPTV subscription cost',
    'best IPTV price',
    'Zenora IPTV plans',
    'cheap IPTV subscription',
    'IPTV 4K pricing',
    'sports IPTV package',
    'Zenora IPTV',
    'IPTV service',
    'best IPTV provider',
    '4K streaming',
    'live TV streaming',
    'sports PPV',
    'IPTV subscription',
    'premium IPTV',
    'international channels',
  ],
};

// Pricing Page JSON-LD Schema
const PricingPageSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-page-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `Zenora IPTV IPTV Subscription Plans`,
        "description": `Premium IPTV service with subscription plans starting at $7.08/month. Access 15,000+ live channels and 60,000+ VODs in 4K quality.`,
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
            "price": "30.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": "3 months access to 15,000+ live channels and 60,000+ VODs"
          },
          {
            "@type": "Offer",
            "name": "3 Months - 2 Devices",
            "price": "55.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": "3 months access with 2 device connections"
          },
          {
            "@type": "Offer",
            "name": "3 Months - 3 Devices",
            "price": "75.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": "3 months access with 3 device connections"
          },
          {
            "@type": "Offer",
            "name": "6 Months - 1 Device",
            "price": "40.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": "6 months access to 18,000+ live channels and 80,000+ VODs"
          },
          {
            "@type": "Offer",
            "name": "6 Months - 2 Devices",
            "price": "80.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": "6 months access with 2 device connections"
          },
          {
            "@type": "Offer",
            "name": "6 Months - 3 Devices",
            "price": "100.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": "6 months access with 3 device connections"
          },
          {
            "@type": "Offer",
            "name": "12 Months - 1 Device",
            "price": "70.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": "12 months access to 25,000+ premium channels and 100,000+ VODs"
          },
          {
            "@type": "Offer",
            "name": "12 Months - 2 Devices",
            "price": "100.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": "12 months access with 2 device connections"
          },
          {
            "@type": "Offer",
            "name": "12 Months - 3 Devices",
            "price": "150.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": "12 months access with 3 device connections and VIP support"
          }
        ]
      })
    }}
  />
);

// FAQ JSON-LD Schema
const PricingFAQSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What payment methods do you accept?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept PayPal, cryptocurrencies (Bitcoin, Ethereum, USDT), and various regional payment methods."
            }
          },
          {
            "@type": "Question",
            "name": "Can I upgrade or downgrade my plan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can upgrade or downgrade your plan at any time. Contact our support team and they will assist you with the change immediately."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a contract or long-term commitment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, there are no contracts or long-term commitments. All plans are prepaid and you can cancel at any time without penalties or hidden fees."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer refunds if I'm not satisfied?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer a 7-day money-back guarantee on all plans. If you're not completely satisfied, contact our support team within 7 days for a full refund."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use one subscription on multiple devices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, depending on your plan. Starter supports 1 device, Value supports 2 devices, and Ultimate supports 3 devices simultaneously."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between the plans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Starter plan includes 15,000+ channels and 60,000+ VODs with 1 connection. The Value plan includes 18,000+ channels and 80,000+ VODs with 2 connections. The Ultimate plan includes 25,000+ premium channels and 100,000+ VODs with 3 connections plus VIP support and free VPN."
            }
          }
        ]
      })
    }}
  />
);

// Organization Schema
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
        "description": `Premium IPTV service with subscription plans starting at $7.08/month.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English"],
          "contactOption": "TollFree",
        },
        "sameAs": [
          "https://twitter.com/zenoraiptv",
          "https://facebook.com/zenoraiptv",
          "https://instagram.com/zenoraiptv",
          "https://t.me/zenoraiptv",
        ],
      }),
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
        "description": `Zenora IPTV - Best IPTV subscription plans starting at $7.08/month.`,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `https://${CONSTANTS.DOMAIN}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }),
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
        
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon-180x180.png" />
        <link rel="manifest" href="/img/favicons/site.webmanifest" />
      </head>
      <body 
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-slate-950 text-white`} 
        suppressHydrationWarning
      >
        {/* JSON-LD Schemas */}
        <OrganizationSchema />
        <WebsiteSchema />
        <PricingPageSchema />
        <PricingFAQSchema />

        {children}

        {/* Google Analytics */}
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
      </body>
    </html>
  );
}