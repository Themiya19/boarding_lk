"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FilterSection } from '@/components/filter-section';
import { WhyChooseUs } from '@/components/why-choose-us';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const illustrationScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <>
      <section ref={ref} className="relative min-h-[85vh] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-gray-50"
          style={{ y: backgroundY }}
        />
        
        {/* Background Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{ scale: illustrationScale }}
        >
          <Image
            src="/dashboard-illustration.svg"
            alt="Dashboard illustration"
            fill
            style={{ objectFit: 'contain' }}
            priority
            className="drop-shadow-xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 h-full"
          style={{ y: contentY }}
        >
          <div className="flex items-center justify-center min-h-[85vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center z-10"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0066FF]">
                Find Your Next Home
                <br />
                <span className="text-4xl md:text-5xl">No Deposit Required</span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base text-gray-600 mb-12"
              >
                Revolutionizing rentals in Sri Lanka — Your next home is just a click away.
              </motion.p>

              {/* Search Section with Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl shadow-blue-100/20"
              >
                <FilterSection />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute right-0 top-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
          style={{ y: backgroundY }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute -left-32 top-40 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"
          style={{ y: backgroundY }}
        />
      </section>
      <WhyChooseUs />
    </>
  );
}