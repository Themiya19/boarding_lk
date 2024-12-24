"use client";

import { motion } from "framer-motion";
import { Wifi, Car, Home, Dumbbell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const amenityIcons: { [key: string]: any } = {
  "WiFi": Wifi,
  "Parking": Car,
  "Furnished": Home,
  "Gym": Dumbbell,
};

interface PropertyAmenitiesProps {
  tags: string[];
}

export function PropertyAmenities({ tags }: PropertyAmenitiesProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tags.map((tag, index) => {
          const Icon = amenityIcons[tag] || Home;
          return (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm"
            >
              <Icon className="h-5 w-5 mr-2 text-gray-600" />
              <span>{tag}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}