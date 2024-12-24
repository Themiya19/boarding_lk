"use client";

import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Property } from '@/lib/types';

interface PropertyCardProps {
  property: Property;
  index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/properties/${property.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="property-card">
        <CardHeader className="p-0">
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            <img
              src={property.image}
              alt={property.title}
              className="object-cover w-full h-full"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-xl">{property.title}</CardTitle>
            <Badge variant="secondary" className="flex items-center">
              <Star className="h-4 w-4 mr-1 fill-current" />
              {property.rating}
            </Badge>
          </div>
          <CardDescription className="flex items-center mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            {property.location}
          </CardDescription>
          <div className="flex flex-wrap gap-2">
            {property.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-between items-center">
          <span className="text-lg font-bold">{property.price}</span>
          <Button 
            variant="default" 
            className="bg-sky-100 hover:bg-sky-200 text-sky-900"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}