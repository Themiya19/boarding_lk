'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    // After 3 seconds, trigger the scroll up animation
    const timer = setTimeout(() => {
      // Add the scroll-up class to the main container
      const container = document.getElementById('loading-container');
      if (container) {
        container.classList.add('scroll-up-exit');
        
        // After animation completes, navigate to main page
        setTimeout(() => {
          router.push('/'); // Navigate to main page
        }, 1000); // Match this with animation duration
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="fixed inset-0 z-50">
      <div id="loading-container" className="min-h-screen bg-sage-100 relative overflow-hidden">
        {/* Large text overlay with zoom animation */}
        <div className="absolute top-0 left-0 w-full h-full">
          <h1 className="text-[12rem] font-bold text-white opacity-20 leading-none tracking-wider animate-zoomInOut select-none">
            RENTEASE
          </h1>
        </div>

        <div className="container mx-auto px-4 h-screen flex items-center justify-between relative z-10">
          {/* Left side - Loading animation */}
          <div className="w-1/2 animate-slideInLeft">
            <div className="relative animate-zoomPulse">
              <div className="w-32 h-32 border-8 border-gray-200 rounded-full animate-spin-slow">
                <div className="w-full h-full border-8 border-sage-500 rounded-full animate-pulse"></div>
              </div>
              {/* Speech bubbles with zoom effects */}
              <div className="absolute -top-16 right-0 bg-black text-white px-4 py-2 rounded-full text-sm animate-popIn">
                "Finding perfect homes..."
              </div>
              <div className="absolute -top-8 right-12 bg-sage-200 text-sage-800 px-4 py-2 rounded-full text-sm animate-popIn delay-300">
                "No deposit needed!"
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-1/2 space-y-8 animate-slideInRight">
            <div className="space-y-4">
              <h2 className="text-6xl font-bold text-sage-800 animate-zoomIn delay-100 hover:scale-105 transition-transform">
                SIMPLE
              </h2>
              <h2 className="text-6xl font-bold text-sage-700 animate-zoomIn delay-200 hover:scale-105 transition-transform">
                SECURE
              </h2>
              <h2 className="text-6xl font-bold text-sage-600 animate-zoomIn delay-300 hover:scale-105 transition-transform">
                DEPOSIT-FREE
              </h2>
            </div>

            <p className="text-xl text-sage-600 max-w-md animate-zoomFadeIn delay-500">
              Your journey to a new home starts here.
              No deposits, no hassle, just easy renting.
            </p>

            <div className="inline-block bg-black text-white px-6 py-3 rounded-lg animate-zoomPulse">
              FINDING YOUR PERFECT HOME
            </div>
          </div>
        </div>

        {/* Background decorative elements with subtle zoom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sage-200 to-transparent animate-zoomFadeIn"></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-sage-300 rounded-full blur-sm animate-zoomPulse"></div>
      </div>
    </div>
  );
} 