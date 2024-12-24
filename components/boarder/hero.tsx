"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function BoarderHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-gray-50" />
      
      {/* Animated Shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 top-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute -left-32 top-40 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 h-full">
        <div className="flex flex-col items-center justify-center min-h-[85vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Find Your Perfect
              <br />
              <span className="text-4xl md:text-5xl">Home Away From Home</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Discover comfortable and affordable boarding places across Sri Lanka
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-8 py-6 rounded-full">
                Start Your Search
                <Search className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <p className="mt-6 text-gray-500">Trusted by 50,000+ happy boarders</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}