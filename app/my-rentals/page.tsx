"use client";

import { RentalsList } from "@/components/my-rentals/rentals-list";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Calendar, DollarSign, Clock } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function MyRentalsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <motion.div 
        className="bg-white border-b"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900">My Rentals</h1>
          <p className="mt-2 text-gray-600">Manage your rental properties and payments</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        {/* Summary Cards */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Properties</p>
                  <h3 className="text-2xl font-bold text-gray-900">2</h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-3 bg-green-100 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Rent</p>
                  <h3 className="text-2xl font-bold text-gray-900">Rs. 70,000</h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Next Payment</p>
                  <h3 className="text-2xl font-bold text-gray-900">Mar 15</h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Payment Status</p>
                  <h3 className="text-2xl font-bold text-gray-900">1 Pending</h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Rentals List */}
        <RentalsList />
      </div>
    </main>
  );
} 