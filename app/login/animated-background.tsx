'use client';

import { Home } from 'lucide-react';
import styles from './styles.module.css';

export function AnimatedBackground() {
  return (
    <div className={`hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-12 flex-col justify-between relative overflow-hidden ${styles.fadeIn}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute w-[500px] h-[500px] -top-32 -left-32 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl ${styles.animateBlob}`}></div>
        <div className={`absolute w-[500px] h-[500px] -bottom-32 -right-32 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-xl ${styles.animateBlob} ${styles.animationDelay2000}`}></div>
        <div className={`absolute w-[500px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl ${styles.animateBlob} ${styles.animationDelay4000}`}></div>
      </div>

      <div className="relative z-10">
        {/* Logo Section with Glow Effect */}
        <div className={`flex items-center space-x-3 mb-12 ${styles.slideIn}`}>
          <div className={`p-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 ${styles.shadowGlow}`}>
            <Home className="h-8 w-8" />
          </div>
          <span className="font-bold text-2xl tracking-tight">Boarding.lk</span>
        </div>

        {/* Main Content with Modern Typography */}
        <h1 className={`text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 ${styles.slideIn} ${styles.delay200}`}>
          Welcome to Your Home Away From Home
        </h1>
        <p className={`text-xl text-blue-100 mb-12 leading-relaxed ${styles.slideIn} ${styles.delay300}`}>
          Find the perfect boarding place that feels just like home.
        </p>
        
        {/* Enhanced Features List */}
        <div className="space-y-6">
          <div className={`flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 ${styles.slideIn} ${styles.delay400}`}>
            <div className="h-3 w-3 bg-blue-300 rounded-full animate-pulse"></div>
            <p className="text-blue-50 font-medium">Verified Properties</p>
          </div>
          <div className={`flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 ${styles.slideIn} ${styles.delay500}`}>
            <div className="h-3 w-3 bg-blue-300 rounded-full animate-pulse"></div>
            <p className="text-blue-50 font-medium">Secure Payments</p>
          </div>
          <div className={`flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 ${styles.slideIn} ${styles.delay500}`}>
            <div className="h-3 w-3 bg-blue-300 rounded-full animate-pulse"></div>
            <p className="text-blue-50 font-medium">24/7 Support</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className={`absolute bottom-12 right-12 w-32 h-32 border border-white/20 rounded-full flex items-center justify-center ${styles.fadeIn} ${styles.delay500}`}>
          <div className={`w-24 h-24 border border-white/40 rounded-full flex items-center justify-center ${styles.animateSpinSlow}`}>
            <div className="w-16 h-16 border border-white/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Updated Background Pattern */}
      <div className={`absolute inset-0 opacity-5 ${styles.fadeIn}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, white 1%, transparent 0%),
            radial-gradient(circle at 75px 75px, white 1%, transparent 0%),
            linear-gradient(45deg, white 0.5%, transparent 0.5%)
          `,
          backgroundSize: '100px 100px, 100px 100px, 50px 50px'
        }}></div>
      </div>
    </div>
  );
} 