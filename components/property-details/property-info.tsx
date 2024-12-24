"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Property } from "@/lib/types";

interface PropertyInfoProps {
  property: Property;
}

export function PropertyInfo({ property }: PropertyInfoProps) {
  const router = useRouter();

  const handleBookNow = () => {
    router.push(`/properties/${property.id}/book`);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.location}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold mb-2">{property.price}</div>
          <Badge variant="secondary" className="flex items-center">
            <Star className="h-4 w-4 mr-1 fill-current" />
            {property.rating}
          </Badge>
        </div>
      </div>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <Button 
          className="w-full md:w-auto bg-sky-100 hover:bg-sky-200 text-sky-900"
          onClick={handleBookNow}
        >
          Book Now
        </Button>
      </motion.div>
    </div>
  );
}