"use client";

import { motion } from 'framer-motion';
import { Search, Home, CheckCircle, Star } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Search",
    description: "Browse through our extensive collection of verified boarding places"
  },
  {
    icon: Home,
    title: "Compare",
    description: "Compare properties based on price, amenities, and location"
  },
  {
    icon: CheckCircle,
    title: "Book",
    description: "Reserve your chosen place with our secure booking system"
  },
  {
    icon: Star,
    title: "Move In",
    description: "Start your new chapter in your perfect boarding place"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-sky-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Find your perfect boarding place in four simple steps
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-sky-100 p-4 rounded-2xl">
                  <step.icon className="h-8 w-8 text-sky-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}