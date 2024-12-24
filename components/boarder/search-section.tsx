"use client";

import { motion } from 'framer-motion';
import { Search, MapPin, Building, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

export function SearchSection() {
  return (
    <section className="py-12 bg-transparent relative -mt-32 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  className="pl-10 bg-white/80 backdrop-blur-sm border-gray-200 focus:border-sky-500 focus:ring-sky-500" 
                  placeholder="Enter location" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Property Type</label>
              <Select>
                <SelectTrigger className="bg-white/80 backdrop-blur-sm border-gray-200 focus:border-sky-500 focus:ring-sky-500">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="room">Single Room</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="hostel">Hostel</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Budget</label>
              <Select>
                <SelectTrigger className="bg-white/80 backdrop-blur-sm border-gray-200 focus:border-sky-500 focus:ring-sky-500">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-10000">Below Rs. 10,000</SelectItem>
                  <SelectItem value="10000-20000">Rs. 10,000 - 20,000</SelectItem>
                  <SelectItem value="20000-30000">Rs. 20,000 - 30,000</SelectItem>
                  <SelectItem value="30000+">Above Rs. 30,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}