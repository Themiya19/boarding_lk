import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { HiOutlineCash } from 'react-icons/hi';
import { BsCashStack, BsTagFill } from 'react-icons/bs';
import { BiSolidRocket } from 'react-icons/bi';

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative overflow-hidden min-h-screen pb-40">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-gray-50"
        style={{ y: backgroundY }}
      />
      
      <motion.div 
        className="relative"
        style={{ y: contentY }}
      >
        <div className="max-w-7xl mx-auto px-4 py-32">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl md:text-5xl font-bold mb-6 text-[#0066FF]">
                Why Choose Boarding.lk?
              </h2>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {/* No Deposits */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative p-8 space-y-6">
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <HiOutlineCash className="text-blue-600 text-4xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  No Deposits Needed
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Move in without paying big deposits upfront.
                </p>
              </div>
            </motion.div>

            {/* Extra Income */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative p-8 space-y-6">
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <BsCashStack className="text-blue-600 text-4xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Extra Income for Proprietors
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Property owners get extra income in addition to boarding fees.
                </p>
              </div>
            </motion.div>

            {/* Free Listings */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative p-8 space-y-6">
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <BsTagFill className="text-blue-600 text-4xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Free for Property Owners
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  proprietors can list their properties for free.
                </p>
              </div>
            </motion.div>

            {/* Faster Move-In */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative p-8 space-y-6">
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <BiSolidRocket className="text-blue-600 text-4xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Faster Move-In Process
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nothing beats the ease that comes with renting an property deposit-free!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-xl shadow-blue-100 mb-20"
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
      </motion.div>
    </section>
  );
} 