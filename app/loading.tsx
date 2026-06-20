'use client';

// app/loading.tsx
import { Loader2, Tv, Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
      
      {/* Animated Background Glow - Updated to Pink/Purple */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(236,72,153,0.15)_0%,_transparent_70%)] animate-pulse" />
      
      {/* Square Pattern Overlay - Updated to Pink */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #ec4899 1px, transparent 1px),
            linear-gradient(to bottom, #ec4899 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Main Loading Container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        
        {/* Animated Logo Container */}
        <div className="relative mb-8">
          {/* Outer Ring Pulse - Updated to Pink */}
          <div className="absolute inset-0 rounded-full bg-pink-500/20 animate-ping" />
          
          {/* Inner Circle - Updated to Gradient Pink/Purple/Blue */}
          <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_40px_rgba(236,72,153,0.4)] animate-pulse">
            <Tv className="w-12 h-12 text-white" />
          </div>
        </div>
        
        {/* Loading Text - Updated Brand */}
        <div className="text-center">
          <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-3">
            Loading<span className="text-pink-500">...</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
          
          <p className="text-white/50 text-sm uppercase tracking-wider">
            Zenora IPTV • Preparing your premium experience
          </p>
        </div>
        
        {/* Loading Spinner - Updated to Pink */}
        <div className="mt-8">
          <Loader2 className="w-8 h-8 text-pink-500 animate-spin" />
        </div>
        
        {/* Progress Bar - Updated to Pink Gradient */}
        <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full animate-progress" />
        </div>
      </div>
      
      {/* Floating Particles - Updated to Pink/Purple/Blue */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-pink-500/40 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-600/30 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-600/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-pink-500/25 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.3s' }} />
      </div>
      
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 100%;
            margin-left: 0%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }
        .animate-progress {
          animation: progress 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}