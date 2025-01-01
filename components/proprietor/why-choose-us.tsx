"use client";

import { motion } from 'framer-motion';
import { Users, Shield, HeartHandshake, BarChart3, Search, Clock, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Largest Audience Reach",
    description: "Connect with thousands of potential tenants daily"
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Protected transactions with our secure payment system"
  },
  {
    icon: HeartHandshake,
    title: "24/7 Support",
    description: "Round-the-clock assistance for you and your tenants"
  },
  {
    icon: BarChart3,
    title: "Market Insights",
    description: "Access detailed analytics and market trends"
  },
  {
    icon: Search,
    title: "Tenant Screening",
    description: "Comprehensive verification process for quality tenants"
  },
  {
    icon: Clock,
    title: "Quick Process",
    description: "List your property in minutes with our streamlined system"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive tools and support for property owners
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}