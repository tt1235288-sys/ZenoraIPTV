// app/blog/page.tsx
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// Metadata for Blog Listing Page - SEO Optimized
export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    default: `${CONSTANTS.FOCUS_KEYWORD} Blog - IPTV Tips, Guides & News 2026`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  description: `Read the latest ${CONSTANTS.FOCUS_KEYWORD} articles, setup guides, channel updates, and streaming optimization tips for the best IPTV experience.`,
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} blog`,
    `${CONSTANTS.FOCUS_KEYWORD} news`,
    `${CONSTANTS.FOCUS_KEYWORD} guide`,
    `${CONSTANTS.FOCUS_KEYWORD} tips`,
    'IPTV blog',
    'IPTV news',
    'IPTV guides',
    'streaming tips',
    'IPTV setup guide',
    'channel updates',
    'IPTV optimization',
    'best IPTV provider',
    'IPTV reviews',
    'streaming technology',
  ],
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/blog`,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} Blog - IPTV Tips, Guides & News 2026`,
    description: `Latest ${CONSTANTS.FOCUS_KEYWORD} news, setup guides, channel updates, and streaming tips for the best IPTV experience.`,
    url: `https://${CONSTANTS.DOMAIN}/blog`,
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} Blog - IPTV Tips, Guides & News`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} Blog - IPTV Tips, Guides & News`,
    description: `Latest IPTV tips, guides, and news from ${CONSTANTS.FOCUS_KEYWORD}.`,
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

// JSON-LD Schema for Blog Listing Page
const BlogListingSchema = () => (
  <script
    type="application/ld+json"
    id="blog-listing-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": `${CONSTANTS.FOCUS_KEYWORD} Blog`,
        "description": `Latest news, guides, and tips about ${CONSTANTS.FOCUS_KEYWORD} IPTV streaming and entertainment.`,
        "url": `https://${CONSTANTS.DOMAIN}/blog`,
        "publisher": {
          "@type": "Organization",
          "name": CONSTANTS.BRAND_NAME,
          "logo": `https://${CONSTANTS.DOMAIN}/img/structer.png`
        },
        "blogPost": blogPosts.map(post => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description || post.excerpt,
          "url": `https://${CONSTANTS.DOMAIN}/blog/${post.slug}`,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "image": post.image
        }))
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
            "name": `${CONSTANTS.FOCUS_KEYWORD} Blog`,
            "item": `https://${CONSTANTS.DOMAIN}/blog`
          }
        ]
      })
    }}
  />
);

// JSON-LD WebPage Schema
const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${CONSTANTS.FOCUS_KEYWORD} Blog - IPTV Tips, Guides & News`,
        "description": `Latest ${CONSTANTS.FOCUS_KEYWORD} articles, guides, and news for the best IPTV experience.`,
        "url": `https://${CONSTANTS.DOMAIN}/blog`,
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

export default function BlogListing() {
  // Get unique author initials for avatar generation
  const getAuthorInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  // Get a consistent color for each author
  const getAuthorColor = (name: string) => {
    const colors = [
      'from-pink-500 to-purple-600',
      'from-purple-600 to-blue-600',
      'from-pink-500 to-blue-600',
      'from-purple-500 to-pink-500',
      'from-blue-500 to-purple-600',
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <WebPageSchema />
      <BlogListingSchema />
      <BreadcrumbSchema />

      <div className="flex flex-col min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-pink-500/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white uppercase tracking-tight mb-4 md:mb-6 mt-8 md:mt-16 relative z-10">
            {CONSTANTS.FOCUS_KEYWORD} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600">Blog</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium relative z-10 px-2">
            Stay updated with the latest tips, platform updates, and comprehensive guides for maximizing your {CONSTANTS.FOCUS_KEYWORD} subscription.
          </p>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
          {blogPosts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.id} 
              className="group rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col relative transform hover:-translate-y-1 sm:hover:-translate-y-2 isolate bg-slate-900/80 border border-white/10 hover:border-pink-500/40"
            >
              <div className="relative aspect-[4/5] sm:aspect-[4/5] overflow-hidden bg-slate-800">
                <Image
                  src={post.image}
                  alt={`${post.title} - ${CONSTANTS.FOCUS_KEYWORD} Blog Article`}
                  width={600}
                  height={750}
                  className="object-cover w-full h-full group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading={index < 2 ? 'eager' : 'lazy'}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index < 2}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-80"></div>
                
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex flex-wrap gap-1.5 sm:gap-2">
                  {post.keywords && post.keywords.slice(0, 2).map((kw: string) => (
                    <span 
                      key={kw} 
                      className="px-2 py-1 sm:px-3 sm:py-1.5 bg-black/60 backdrop-blur-md text-white/80 border border-white/10 text-[8px] sm:text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm group-hover:border-pink-500/30 group-hover:text-pink-500 transition-colors"
                    >
                      {kw.length > 12 ? kw.substring(0, 10) + '...' : kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-end h-full">
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-bold text-pink-500 mb-2 sm:mb-3 uppercase tracking-widest drop-shadow-md">
                  {/* Author Avatar with Gradient */}
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r ${getAuthorColor(post.author)} flex items-center justify-center text-white text-[10px] sm:text-xs font-black flex-shrink-0 shadow-[0_0_10px_rgba(236,72,153,0.2)]`}>
                    {getAuthorInitial(post.author)}
                  </div>
                  <span className="text-white/70 text-[10px] sm:text-xs truncate max-w-[60px] sm:max-w-[80px] md:max-w-[100px]">
                    {post.author}
                  </span>
                  <span className="text-white/30 hidden xs:inline">•</span>
                  <span className="text-white/40 text-[8px] sm:text-[10px] hidden xs:inline">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-600 group-hover:to-blue-600 transition-all duration-300 leading-tight drop-shadow-lg line-clamp-2">
                  {post.title.length > 60 ? post.title.substring(0, 57) + '...' : post.title}
                </h2>
                
                <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-3">
                    {post.description || post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 text-pink-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest mt-2 sm:mt-3 group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

// ArrowRight icon component
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}