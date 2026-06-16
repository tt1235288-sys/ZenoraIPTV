'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CheckCircle2, Zap, Crown, Star } from 'lucide-react';

export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  const pricing = {
    1: {
      3: { total: 30, mo: (30/3).toFixed(2) },
      6: { total: 40, mo: (40/6).toFixed(2) },
      12: { total: 70, mo: (70/12).toFixed(2) },
    },
    2: {
      3: { total: 55, mo: (55/3).toFixed(2) },
      6: { total: 80, mo: (80/6).toFixed(2) },
      12: { total: 100, mo: (100/12).toFixed(2) },
    },
    3: {
      3: { total: 75, mo: (75/3).toFixed(2) },
      6: { total: 100, mo: (100/6).toFixed(2) },
      12: { total: 150, mo: (150/12).toFixed(2) },
    }
  };

  const currentPricing = pricing[devices];

  // WhatsApp number (replace with your actual WhatsApp number)
  const WHATSAPP_NUMBER = '+447868196544'; // Replace with your number

  const handleWhatsAppRedirect = (months: number) => {
    const message = `Hello, I am interested in Zenora IPTV service to get a subscription for ${months} months with ${devices} device(s).`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="pricing-section" 
      className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 scroll-mt-20"
    >
      {/* Background Square Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none md:bg-[size:48px_48px]"></div>
      
      <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-blue-600/10 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-600/20 mb-6">
          <Crown className="w-4 h-4 text-purple-600" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 font-bold text-sm uppercase tracking-wider">Best Value Plans</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600">PREFERRED PLAN</span></h2>
        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Select your subscription duration. Enjoy larger discounts on longer plans, and share the ultimate entertainment experience across multiple devices simultaneously.
        </p>

        <div className="flex flex-col items-center justify-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 font-bold uppercase tracking-widest">Select Number of Devices</span>
          </div>
          <div className="inline-flex bg-slate-900 border border-white/10 rounded-full p-2 relative shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            {[1, 2, 3].map((d) => (
              <button 
                key={d}
                onClick={() => setDevices(d as 1|2|3)}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-black tracking-wider uppercase transition-all duration-300 ${
                  devices === d 
                    ? 'bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white shadow-md transform scale-105' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {d} Device{d > 1 ? 's' : ''}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mt-16 relative">
        {/* Glow behind cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

        {/* 3 Months Plan */}
        <FadeInItem className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm border border-white/10 hover:border-pink-500/30 transition-all duration-500 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col group relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white/50 uppercase tracking-[0.2em]">Starter</h3>
              <Star className="w-4 h-4 text-white/20" />
            </div>
            <div className="text-2xl font-black text-white mb-2 tracking-tight">3 Months</div>
            
            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-5xl font-black text-white tracking-tighter">${currentPricing[3].total}</span>
            </div>
            <div className="text-xs font-bold text-white/40 mb-8 uppercase tracking-widest border border-white/10 self-start px-3 py-1.5 rounded-full inline-block bg-white/5">
              Just ${currentPricing[3].mo} / month
            </div>
            
            <ul className="w-full space-y-3 flex-grow relative mb-8">
              {[
                `${devices} Device${devices > 1 ? 's' : ''} Connection`,
                'HD, FHD & 4K Quality',
                '15,000+ Live Channels',
                '60,000+ VODs (Movies)',
                'Standard EPG Guide',
                'Basic Anti-Freeze Tech',
                'Standard 24/7 Support'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white/60 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-white/30 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleWhatsAppRedirect(3)}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 font-bold hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all text-center uppercase tracking-widest text-xs cursor-pointer"
            >
              Select 3 Months
            </button>
          </div>
        </FadeInItem>

        {/* 12 Months Plan (Most Popular) */}
        <FadeInItem className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border-2 border-purple-600/60 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_rgba(139,92,246,0.2)] z-20 group overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/15 via-transparent to-transparent opacity-60"></div>
          
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] flex items-center gap-1">
              <Crown className="w-3 h-3" />
              Most Popular
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 uppercase tracking-[0.2em]">Ultimate</h3>
            </div>
            <div className="text-2xl font-black text-white mb-2 tracking-tight">12 Months</div>
            
            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-6xl font-black text-white tracking-tighter drop-shadow-md">${currentPricing[12].total}</span>
            </div>
            <div className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 mb-8 uppercase tracking-widest border border-purple-600/30 self-start px-4 py-2 rounded-full inline-block bg-purple-600/10 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
              Just ${currentPricing[12].mo} / month
            </div>

            <ul className="w-full space-y-3 flex-grow relative mb-8">
              {[
                `${devices} Device${devices > 1 ? 's' : ''} Connection`,
                'Uncompressed Ultra HD & 4K',
                '25,000+ Premium Channels',
                '100,000+ VODs (Daily Update)',
                'Premium Sports & PPV Pass',
                'Full EPG & 7-Day Catch-up',
                'Advanced Anti-Freeze VIP',
                'VPN Included Free',
                'Direct WhatsApp VIP Support'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleWhatsAppRedirect(12)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-black hover:from-pink-600 hover:via-purple-700 hover:to-blue-700 hover:scale-[1.02] transition-all text-center uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(139,92,246,0.3)] cursor-pointer"
            >
              Get 12 Months
            </button>
          </div>
        </FadeInItem>

        {/* 6 Months Plan */}
        <FadeInItem className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm border border-white/10 hover:border-blue-600/30 transition-all duration-500 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col group relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white/50 uppercase tracking-[0.2em]">Value</h3>
              <Star className="w-4 h-4 text-white/20" />
            </div>
            <div className="text-2xl font-black text-white mb-2 tracking-tight">6 Months</div>
            
            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-5xl font-black text-white tracking-tighter">${currentPricing[6].total}</span>
            </div>
            <div className="text-xs font-bold text-white/40 mb-8 uppercase tracking-widest border border-white/10 self-start px-3 py-1.5 rounded-full inline-block bg-white/5">
              Just ${currentPricing[6].mo} / month
            </div>
            
            <ul className="w-full space-y-3 flex-grow relative mb-8">
              {[
                `${devices} Device${devices > 1 ? 's' : ''} Connection`,
                'HD, FHD & 4K Quality',
                '18,000+ Live Channels',
                '80,000+ VODs (Movies)',
                'Full EPG Guide',
                'Pro Anti-Freeze Tech',
                'Priority 24/7 Support'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white/60 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-white/30 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleWhatsAppRedirect(6)}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 font-bold hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all text-center uppercase tracking-widest text-xs cursor-pointer"
            >
              Select 6 Months
            </button>
          </div>
        </FadeInItem>
      </FadeInStagger>
    </section>
  );
}