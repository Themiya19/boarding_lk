import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-gray-50"
        style={{ y: backgroundY }}
      />
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 py-32">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Why Choose Boarding.lk?
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Experience the future of finding your perfect boarding place
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {/* Verified Listings */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative p-8 space-y-6">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <i className="fas fa-shield-check text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Verified Listings
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every boarding place undergoes our rigorous verification process, ensuring 
                  your safety and comfort with legitimate accommodations.
                </p>
              </div>
            </motion.div>

            {/* No Deposit */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative p-8 space-y-6">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <i className="fas fa-wallet text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  No Deposit Required
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Start your journey without financial barriers. We believe in making 
                  quality accommodation accessible to everyone.
                </p>
              </div>
            </motion.div>

            {/* 24/7 Support */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative p-8 space-y-6">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <i className="fas fa-headset text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  24/7 Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our dedicated team is always here to help, ensuring a smooth and 
                  worry-free experience throughout your journey.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-xl shadow-blue-100"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-600 mt-1">Verified Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600 mt-1">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.8/5</div>
              <div className="text-sm text-gray-600 mt-1">User Rating</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 