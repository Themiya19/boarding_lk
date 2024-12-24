"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful property owners on boarding.lk
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-sky-100 hover:bg-sky-200 text-sky-900 text-lg px-8 py-6 rounded-full">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          <p className="mt-6 text-sm text-gray-500">
            No credit card required • Free to get started
          </p>
        </motion.div>
      </div>
    </section>
  );
}