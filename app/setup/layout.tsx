import { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    default: `${CONSTANTS.FOCUS_KEYWORD} Setup Guide 2026 - Quick Installation for All Devices`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  description: `Learn to install ${CONSTANTS.FOCUS_KEYWORD} on Firestick, Smart TV, Android, iOS, PC & Mac in 5 minutes. Complete setup tutorial with step-by-step instructions.`,
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} setup`,
    `${CONSTANTS.FOCUS_KEYWORD} installation`,
    `${CONSTANTS.FOCUS_KEYWORD} tutorial`,
    'IPTV setup guide',
    'Firestick IPTV installation',
    'Smart TV IPTV setup',
    'Android IPTV app',
    'IPTV on PC',
  ],
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/setup`,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} Setup Guide - Install on Any Device in 5 Minutes`,
    description: `Follow our easy ${CONSTANTS.FOCUS_KEYWORD} setup guide to install on Firestick, Smart TV, Android, iOS, Apple TV, PC & Mac. Start streaming 15,000+ channels today.`,
    url: `https://${CONSTANTS.DOMAIN}/setup`,
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} Setup Guide - Complete Installation Tutorial for All Devices`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} Setup Guide - Quick Installation Tutorial`,
    description: `Install ${CONSTANTS.FOCUS_KEYWORD} on any device in 5 minutes. Complete setup guide for all popular streaming devices.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.png`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
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
};

// JSON-LD HowTo Schema - SEO Optimized with Correct Pricing
const HowToSchema = () => (
  <script
    type="application/ld+json"
    id="setup-howto-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `How to Install ${CONSTANTS.FOCUS_KEYWORD} on Any Device - Complete Setup Guide`,
        "description": `Step-by-step ${CONSTANTS.FOCUS_KEYWORD} installation tutorial for Firestick, Smart TV, Android, iOS, Apple TV, PC, and Mac. Start streaming in 5 minutes.`,
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "30.00"
        },
        "image": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "step": [
          {
            "@type": "HowToStep",
            "name": `Create Your ${CONSTANTS.FOCUS_KEYWORD} Account`,
            "text": `Sign up for a ${CONSTANTS.FOCUS_KEYWORD} subscription plan starting at just $30 for 3 months and receive your login credentials instantly via email.`,
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Enable Unknown Sources on Firestick",
            "text": "Go to Settings > My Fire TV > Developer Options and enable 'Apps from Unknown Sources'.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Install Downloader App",
            "text": "Search and install the official Downloader app from the Amazon App Store.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": `Download ${CONSTANTS.FOCUS_KEYWORD} with Code 83492`,
            "text": `Open Downloader, enter activation code 83492, and download the official ${CONSTANTS.FOCUS_KEYWORD} app.`,
            "position": 4
          },
          {
            "@type": "HowToStep",
            "name": `Login to ${CONSTANTS.FOCUS_KEYWORD}`,
            "text": `Select 'Login with Xtream Codes API' and enter your ${CONSTANTS.FOCUS_KEYWORD} Username, Password, and Portal URL.`,
            "position": 5
          },
          {
            "@type": "HowToStep",
            "name": `Start Streaming with ${CONSTANTS.FOCUS_KEYWORD}`,
            "text": `Browse 15,000+ live channels and 60,000+ VODs in stunning 4K quality with ${CONSTANTS.FOCUS_KEYWORD}.`,
            "position": 6
          }
        ],
        "supply": [
          "Firestick, Android TV, or compatible device",
          "Stable internet connection (15+ Mbps)",
          `Active ${CONSTANTS.FOCUS_KEYWORD} subscription`
        ],
        "tool": [
          "Downloader app",
          "IPTV player app"
        ]
      })
    }}
  />
);

// JSON-LD FAQ Schema - SEO Optimized with 10 Questions
const SetupFAQSchema = () => (
  <script
    type="application/ld+json"
    id="setup-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What devices are compatible with ${CONSTANTS.FOCUS_KEYWORD}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.FOCUS_KEYWORD} works on Firestick, Android TV, Smart TVs (Samsung, LG, Sony), iOS, Apple TV, Windows PC, Mac, and MAG boxes.`
            }
          },
          {
            "@type": "Question",
            "name": `How long does ${CONSTANTS.FOCUS_KEYWORD} setup take?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.FOCUS_KEYWORD} setup takes under 5 minutes from sign-up to streaming.`
            }
          },
          {
            "@type": "Question",
            "name": `Do I need a VPN for ${CONSTANTS.FOCUS_KEYWORD}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `While optional, a VPN enhances privacy and unlocks geo-restricted content. ${CONSTANTS.FOCUS_KEYWORD}'s Ultimate plan includes free VPN.`
            }
          },
          {
            "@type": "Question",
            "name": `What internet speed is needed for ${CONSTANTS.FOCUS_KEYWORD}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `15 Mbps for HD, 30 Mbps for 4K streaming with ${CONSTANTS.FOCUS_KEYWORD}. Wired connection recommended.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I use ${CONSTANTS.FOCUS_KEYWORD} on multiple devices?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Install on unlimited devices. Simultaneous streams: Starter (1), Value (2), Ultimate (3) with ${CONSTANTS.FOCUS_KEYWORD}.`
            }
          },
          {
            "@type": "Question",
            "name": `How to activate ${CONSTANTS.FOCUS_KEYWORD} on Firestick?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Activate ${CONSTANTS.FOCUS_KEYWORD} on Firestick by enabling unknown sources, installing Downloader, entering code 83492, and logging in.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I watch ${CONSTANTS.FOCUS_KEYWORD} on my laptop?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, ${CONSTANTS.FOCUS_KEYWORD} works on Windows PC and Mac laptops. Install the IPTV player and login.`
            }
          },
          {
            "@type": "Question",
            "name": `What is the ${CONSTANTS.FOCUS_KEYWORD} activation code?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The ${CONSTANTS.FOCUS_KEYWORD} Downloader activation code is 83492.`
            }
          },
          {
            "@type": "Question",
            "name": `Is there a ${CONSTANTS.FOCUS_KEYWORD} video tutorial?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, we provide a complete video tutorial for ${CONSTANTS.FOCUS_KEYWORD} setup on all devices.`
            }
          },
          {
            "@type": "Question",
            "name": `What if I need help with ${CONSTANTS.FOCUS_KEYWORD} installation?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Our 24/7 support team is available via live chat and WhatsApp to assist with ${CONSTANTS.FOCUS_KEYWORD} setup.`
            }
          }
        ]
      })
    }}
  />
);

// JSON-LD Breadcrumb Schema
const BreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    id="breadcrumb-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `https://${CONSTANTS.DOMAIN}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `${CONSTANTS.FOCUS_KEYWORD} Setup Guide`,
            "item": `https://${CONSTANTS.DOMAIN}/setup`
          }
        ]
      })
    }}
  />
);

// JSON-LD Organization Schema
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
        "description": `${CONSTANTS.FOCUS_KEYWORD} - Complete setup and installation guide for all devices.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "technical support",
          "availableLanguage": ["English"],
          "contactOption": "TollFree",
        },
        "sameAs": [
          "https://twitter.com/zenoraiptv",
          "https://facebook.com/zenoraiptv",
          "https://instagram.com/zenoraiptv",
          "https://t.me/zenoraiptv",
          "https://reddit.com/r/zenoraiptv",
        ],
      }),
    }}
  />
);

// WebPage Schema
const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${CONSTANTS.FOCUS_KEYWORD} - Setup Guide & Installation Tutorial`,
        "description": `Complete ${CONSTANTS.FOCUS_KEYWORD} setup guide for Firestick, Smart TV, Android, iOS, Apple TV, PC & Mac.`,
        "url": `https://${CONSTANTS.DOMAIN}/setup`,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
          "width": "1200",
          "height": "630"
        }
      })
    }}
  />
);

// Article Schema
const ArticleSchema = () => (
  <script
    type="application/ld+json"
    id="article-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${CONSTANTS.FOCUS_KEYWORD} Setup Guide 2026 - Easy Installation on All Devices`,
        "image": [
          `https://${CONSTANTS.DOMAIN}/img/structer.png`
        ],
        "datePublished": "2026-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "author": {
          "@type": "Person",
          "name": `${CONSTANTS.BRAND_NAME} Team`
        },
        "publisher": {
          "@type": "Organization",
          "name": CONSTANTS.BRAND_NAME,
          "logo": {
            "@type": "ImageObject",
            "url": `https://${CONSTANTS.DOMAIN}/img/structer.png`
          }
        }
      })
    }}
  />
);

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrganizationSchema />
      <WebPageSchema />
      <ArticleSchema />
      <HowToSchema />
      <SetupFAQSchema />
      <BreadcrumbSchema />
      {children}
    </>
  );
}