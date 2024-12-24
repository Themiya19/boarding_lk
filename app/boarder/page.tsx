"use client";

import { BoarderHero } from '@/components/boarder/hero';
import { FeaturedListings } from '@/components/boarder/featured-listings';
import { HowItWorks } from '@/components/boarder/how-it-works';
import { Testimonials } from '@/components/boarder/testimonials';
import { FilterSection } from '@/components/filter-section';
import { motion } from 'framer-motion';

export default function BoarderPage() {
  return (
    <div className="min-h-screen">
      <BoarderHero />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10"
      >
        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <FilterSection />
        </motion.div>
      </motion.div>
      <FeaturedListings />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}