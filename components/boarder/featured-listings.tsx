"use client";

import { motion } from 'framer-motion';
import { PropertyCard } from '@/components/property-card';
import { properties } from '@/lib/data/properties';
import { Button } from '@/components/ui/button';

export function FeaturedListings() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Featured Boarding Places
          </h2>
          <p className="text-xl text-gray-600">
            Discover our hand-picked selection of quality accommodations
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PropertyCard property={property} index={index} />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center mt-12"
        >
          <Button
            onClick={() => window.location.href = '/properties'}
            className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-8 py-6 rounded-full"
          >
            View More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}