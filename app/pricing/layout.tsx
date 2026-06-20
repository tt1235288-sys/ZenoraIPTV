// app/pricing/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    default: `${CONSTANTS.FOCUS_KEYWORD} Pricing & Plans - Best IPTV Subscription 2026 | 15,000+ Channels & 4K Streaming`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  description: `Choose your ${CONSTANTS.FOCUS_KEYWORD} subscription plan starting at just $30 for 3 months. Get 15,000+ live channels, 60,000+ VODs, 4K streaming, PPV events, and a 7-day money-back guarantee.`,
  authors: [{ name: `${CONSTANTS.BRAND_NAME} Team` }],
  creator: CONSTANTS.BRAND_NAME,
  publisher: CONSTANTS.BRAND_NAME,
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
    title: `${CONSTANTS.FOCUS_KEYWORD} - Pricing & Subscription Plans 2026`,
    description: `Subscribe to ${CONSTANTS.FOCUS_KEYWORD} starting at $30 for 3 months. Access 15,000+ live channels, 60,000+ VODs, and 4K streaming with anti-freeze technology.`,
    url: `https://${CONSTANTS.DOMAIN}/pricing`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} Pricing Plans - Premium IPTV Subscription`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} - Subscription Plans 2026`,
    description: `Starting at $30 for 3 months. 15,000+ channels, 60,000+ VODs, 4K quality, and anti-freeze technology.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.png`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
  },
  verification: {
    google: '',
  },
  category: 'entertainment',
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} pricing`,
    'IPTV subscription cost',
    'best IPTV price',
    `${CONSTANTS.FOCUS_KEYWORD} plans`,
    'cheap IPTV subscription',
    'IPTV 4K pricing',
    'sports IPTV package',
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
        "name": `${CONSTANTS.FOCUS_KEYWORD} IPTV Subscription Plans`,
        "description": `Premium IPTV service with subscription plans starting at $30 for 3 months. Access 15,000+ live channels and 60,000+ VODs in 4K quality with anti-freeze technology.`,
        "brand": {
          "@type": "Brand",
          "name": CONSTANTS.BRAND_NAME
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
            "description": "6 months access to 15,000+ live channels and 60,000+ VODs"
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
            "description": "12 months access to 15,000+ premium channels and 60,000+ VODs"
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
            "name": `What payment methods does ${CONSTANTS.FOCUS_KEYWORD} accept?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.FOCUS_KEYWORD} accepts all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept PayPal, cryptocurrencies (Bitcoin, Ethereum, USDT), and various regional payment methods.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I upgrade or downgrade my ${CONSTANTS.FOCUS_KEYWORD} plan?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, you can upgrade or downgrade your ${CONSTANTS.FOCUS_KEYWORD} plan at any time. Contact our support team and they will assist you immediately.`
            }
          },
          {
            "@type": "Question",
            "name": `Is there a contract with ${CONSTANTS.FOCUS_KEYWORD}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `No, there are no contracts or long-term commitments with ${CONSTANTS.FOCUS_KEYWORD}. All plans are prepaid and you can cancel at any time without penalties.`
            }
          },
          {
            "@type": "Question",
            "name": `Does ${CONSTANTS.FOCUS_KEYWORD} offer a money-back guarantee?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, ${CONSTANTS.FOCUS_KEYWORD} offers a 7-day money-back guarantee on all plans. Contact our support team within 7 days for a full refund.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I use ${CONSTANTS.FOCUS_KEYWORD} on multiple devices?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, depending on your ${CONSTANTS.FOCUS_KEYWORD} plan. Starter supports 1 device, Value supports 2 devices, and Ultimate supports 3 devices simultaneously.`
            }
          },
          {
            "@type": "Question",
            "name": `What is the difference between ${CONSTANTS.FOCUS_KEYWORD} plans?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The ${CONSTANTS.FOCUS_KEYWORD} Starter plan includes 15,000+ channels and 60,000+ VODs with 1 connection. The Value plan includes the same content with 2 connections. The Ultimate plan includes all content with 3 connections plus VIP support.`
            }
          },
          {
            "@type": "Question",
            "name": `Is ${CONSTANTS.FOCUS_KEYWORD} the best IPTV service provider?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Based on 5000+ reviews, ${CONSTANTS.FOCUS_KEYWORD} is rated 4.9/5 stars and is considered one of the best IPTV service providers with superior 4K streaming quality.`
            }
          },
          {
            "@type": "Question",
            "name": `How quickly can I activate my ${CONSTANTS.FOCUS_KEYWORD} subscription?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.FOCUS_KEYWORD} subscriptions are activated instantly after payment confirmation. You will receive your login credentials via email within minutes.`
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
        "name": CONSTANTS.BRAND_NAME,
        "alternateName": CONSTANTS.FOCUS_KEYWORD,
        "url": `https://${CONSTANTS.DOMAIN}`,
        "logo": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "description": `Premium IPTV service with subscription plans starting at $30 for 3 months.`,
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
        "name": CONSTANTS.BRAND_NAME,
        "url": `https://${CONSTANTS.DOMAIN}`,
        "description": `${CONSTANTS.FOCUS_KEYWORD} - Best IPTV subscription plans starting at $30 for 3 months.`,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `https://${CONSTANTS.DOMAIN}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }),
    }}
  />
);

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
    </>
  );
}