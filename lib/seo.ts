import { Metadata } from 'next';

const DOMAIN = 'zenoraiptv.live';
const FOCUS_KEYWORD = 'Zenora IPTV';
const BRAND_NAME = 'Zenora IPTV';

export const generateSEOMetadata = (pageName: string, description?: string): Metadata => {
  return {
    title: `${pageName} | ${FOCUS_KEYWORD} - Premium IPTV Service Provider 2026`,
    description: description || `Experience premium 4K streaming with ${BRAND_NAME}. Access 15,000+ live channels, 60,000+ VODs, sports PPV, and 24/7 support with our reliable IPTV service.`,
    metadataBase: new URL(`https://${DOMAIN}`),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: `${pageName} | ${FOCUS_KEYWORD} - Premium IPTV Service Provider 2026`,
      description: description || `Experience the best IPTV streaming with ${BRAND_NAME}. Watch 15,000+ live channels and 60,000+ movies in 4K quality.`,
      url: `https://${DOMAIN}`,
      siteName: BRAND_NAME,
      locale: 'en_US',
      type: 'website',
    },
  };
};

export const CONSTANTS = {
  DOMAIN,
  FOCUS_KEYWORD,
  BRAND_NAME,
};