'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

const faqs = [
  { 
    q: "What is Zenora IPTV service?", 
    a: "Zenora IPTV is a premium IPTV subscription service that delivers over 15,000 live channels and 60,000+ on-demand movies and series in stunning 4K quality with anti-freeze technology and 24/7 customer support." 
  },
  { 
    q: "Are IPTV services legal with Zenora IPTV?", 
    a: "Zenora IPTV operates as a legal IPTV service provider offering licensed content to customers worldwide. We recommend checking your local regulations regarding IPTV usage in your specific region." 
  },
  { 
    q: "How to activate Zenora IPTV on Firestick?", 
    a: "Activating Zenora IPTV on Firestick is simple: Download the IPTV player app from the Amazon App Store, enter your subscription credentials, and start streaming immediately with our easy setup guide." 
  },
  { 
    q: "How to get local channels on Zenora IPTV?", 
    a: "Zenora IPTV provides access to local channels from over 100 countries worldwide. Simply select your region from the channel list to find your local networks and regional programming." 
  },
  { 
    q: "Can I watch Zenora IPTV on my laptop?", 
    a: "Yes, Zenora IPTV is fully compatible with Windows PC and Mac laptops. Simply install the recommended IPTV player application, log in, and start watching your favorite channels instantly." 
  },
  { 
    q: "How to install IPTV Smarters Pro on Firestick?", 
    a: "To install IPTV Smarters Pro on Firestick: Go to the Amazon App Store, search for 'IPTV Smarters Pro', download and install the app, then enter your Zenora IPTV subscription credentials to start streaming." 
  },
  { 
    q: "What devices are supported by Zenora IPTV?", 
    a: "Zenora IPTV is compatible with almost all devices including Smart TVs (Samsung, LG), Android Boxes, Apple TV, Firestick, MAG boxes, smartphones, tablets, and PC/Mac computers." 
  },
  { 
    q: "Can I use my Zenora IPTV subscription on multiple devices?", 
    a: "Yes, you can upgrade your Zenora IPTV connection plan to support up to 3 simultaneous devices viewing at the same time. Check our pricing section for details on adding extra connections." 
  },
  { 
    q: "What internet speed is required for Zenora IPTV streaming?", 
    a: "For smooth Zenora IPTV streaming, we recommend a minimum of 15 Mbps for HD and 30 Mbps for 4K streaming qualities. A wired ethernet connection is always preferred for the best stability." 
  },
  { 
    q: "Is there a contract or cancellation fee with Zenora IPTV?", 
    a: "No, Zenora IPTV is completely prepaid with no contracts or hidden cancellation fees. You can cancel anytime without any hassle." 
  },
  { 
    q: "How long does it take to activate my Zenora IPTV account?", 
    a: "Zenora IPTV activation is typically instant after payment confirmation. You will receive an email with your credentials and setup instructions within minutes." 
  },
  { 
    q: "Do you offer international channels with Zenora IPTV?", 
    a: "Absolutely! Zenora IPTV provides channels from over 100 countries, including local, regional, and premium international broadcast networks." 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-white/5 mt-16 relative" aria-label="Frequently Asked Questions about Zenora IPTV">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-pink-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <FadeIn className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-pink-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-500/20 mb-6">
          <span className="text-pink-500 font-bold text-sm uppercase tracking-wider">FAQ</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600">Questions</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Everything you need to know about our <strong className="text-pink-500">{CONSTANTS.FOCUS_KEYWORD}</strong> service.
        </p>
      </FadeIn>
      
      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => (
          <FadeInItem key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full text-left bg-slate-900 border ${openIndex === i ? 'border-pink-500/50' : 'border-white/10'} rounded-2xl p-6 hover:border-pink-500/30 transition-all duration-300 group`}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className={`text-lg md:text-xl font-bold transition-colors ${openIndex === i ? 'text-pink-500' : 'text-white group-hover:text-pink-500/80'} flex items-center gap-3`}>
                  <span className={`${openIndex === i ? 'text-pink-500' : 'text-white/30'} font-black text-2xl`}>Q.</span> 
                  {faq.q}
                </h3>
                <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-pink-500' : 'text-white/30 group-hover:text-pink-500/50'}`} />
              </div>
              <div 
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
              >
                <p className="text-white/70 leading-relaxed pl-10 md:pl-12 border-l-2 border-pink-500/30 ml-2 py-2">
                  {faq.a}
                </p>
              </div>
            </button>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </section>
  );
}