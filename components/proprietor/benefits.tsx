"use client";

import { motion } from 'framer-motion';
import { Shield, Clock, Users } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Our platform ensures safe transactions and verified tenants"
  },
  {
    icon: Clock,
    title: "Quick Listing",
    description: "List your property in minutes with our simple process"
  },
  {
    icon: Users,
    title: "Large Network",
    description: "Access the largest network of potential tenants in Sri Lanka"
  }
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Why Property Owners Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Experience the benefits of working with Sri Lanka's leading property platform
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <benefit.icon className="h-12 w-12 text-sky-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}