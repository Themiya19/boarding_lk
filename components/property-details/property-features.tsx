"use client";

import { motion } from "framer-motion";
import { Ruler, Bed, Bath, Calendar } from "lucide-react";

interface Feature {
  name: string;
  description: string;
  icon: string;
}

interface PropertyFeaturesProps {
  features: Feature[];
}

const iconMap: { [key: string]: any } = {
  ruler: Ruler,
  bed: Bed,
  bath: Bath,
  calendar: Calendar,
};

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Property Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon] || Calendar;
          return (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-2">
                <Icon className="h-5 w-5 mr-2 text-gray-600" />
                <h3 className="font-medium">{feature.name}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}