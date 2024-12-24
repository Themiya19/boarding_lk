"use client";

import { motion } from 'framer-motion';
import { BarChart, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    number: "10,000+",
    label: "Active Listings",
    icon: BarChart
  },
  {
    number: "95%",
    label: "Occupancy Rate",
    icon: TrendingUp
  },
  {
    number: "50,000+",
    label: "Monthly Visitors",
    icon: Users
  }
];

export function MarketInsights() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Market Leading Performance
          </h2>
          <p className="text-xl text-gray-600">
            Join Sri Lanka's fastest-growing property platform
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <stat.icon className="h-12 w-12 text-sky-500 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}