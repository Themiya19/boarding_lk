"use client";

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PropertyCard } from '@/components/property-card';
import { PropertyFilterSection } from './property-filter';
import { Button } from '@/components/ui/button';
import { Star, Sparkles, Ban, Shield } from 'lucide-react';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const gridVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1]
    }
  }
};

export default function PropertiesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get active filters from URL
  const activeFilters = useMemo(() => {
    const filtersParam = searchParams.get('filters');
    return filtersParam ? filtersParam.split(',').filter(Boolean) : [];
  }, [searchParams]);

  // Example property data matching the Property type
  const properties = [
    {
      id: 1,
      title: "Modern Studio Apartment",
      description: "A beautiful studio apartment with modern amenities in the heart of Colombo",
      location: "Colombo 5",
      price: "Rs. 45,000/month",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
      tags: ["Studio", "Furnished", "City View"],
      deposit: false,
      featured: true,
      isNew: true,
      features: [
        { id: 1, name: "Air Conditioning", description: "Central air conditioning system", icon: "Snowflake" },
        { id: 2, name: "WiFi", description: "High-speed internet connection", icon: "Wifi" },
        { id: 3, name: "Kitchen", description: "Fully equipped modern kitchen", icon: "Utensils" },
        { id: 4, name: "Security", description: "24/7 security service", icon: "Shield" }
      ],
      reviews: [
        { id: 1, rating: 5, comment: "Excellent location and amenities", userName: "John D.", date: "2024-01-15", helpful: 12 },
        { id: 2, rating: 4.5, comment: "Very clean and modern", userName: "Sarah M.", date: "2024-01-10", helpful: 8 }
      ]
    },
    {
      id: 2,
      title: "Luxury 3 Bedroom Apartment",
      description: "Spacious luxury apartment with premium facilities and stunning views",
      location: "Rajagiriya",
      price: "Rs. 85,000/month",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3",
      tags: ["3 Bedrooms", "Luxury", "Pool"],
      deposit: true,
      featured: true,
      isNew: false,
      features: [
        { id: 1, name: "Swimming Pool", description: "Large outdoor swimming pool", icon: "Pool" },
        { id: 2, name: "Gym", description: "Fully equipped fitness center", icon: "Dumbbell" },
        { id: 3, name: "Parking", description: "Secure parking space", icon: "Car" },
        { id: 4, name: "24/7 Security", description: "Round-the-clock security service", icon: "Shield" }
      ],
      reviews: [
        { id: 1, rating: 5, comment: "Luxurious and spacious", userName: "Mike R.", date: "2024-01-12", helpful: 15 },
        { id: 2, rating: 4.8, comment: "Great facilities", userName: "Emma W.", date: "2024-01-08", helpful: 10 }
      ]
    },
    {
      id: 3,
      title: "Cozy 2 Bedroom House",
      description: "Charming house with a beautiful garden in a quiet neighborhood",
      location: "Nugegoda",
      price: "Rs. 65,000/month",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
      tags: ["2 Bedrooms", "Garden", "Parking"],
      deposit: true,
      featured: false,
      isNew: true,
      features: [
        { id: 1, name: "Garden", description: "Beautiful landscaped garden", icon: "Tree" },
        { id: 2, name: "Parking", description: "Private parking space", icon: "Car" },
        { id: 3, name: "Pet Friendly", description: "Pets are welcome", icon: "Paw" },
        { id: 4, name: "Furnished", description: "Fully furnished property", icon: "Sofa" }
      ],
      reviews: [
        { id: 1, rating: 4.5, comment: "Peaceful neighborhood", userName: "David L.", date: "2024-01-14", helpful: 7 },
        { id: 2, rating: 4.8, comment: "Beautiful garden", userName: "Lisa K.", date: "2024-01-11", helpful: 9 }
      ]
    },
  ];

  // Memoize filtered properties to prevent unnecessary recalculations
  const filteredProperties = useMemo(() => {
    if (activeFilters.length === 0) return properties;

    return properties.filter(property => {
      return activeFilters.every(filter => {
        switch (filter) {
          case 'no-deposit':
            return !property.deposit;
          case 'with-deposit':
            return property.deposit;
          case 'featured':
            return property.featured;
          case 'new-listings':
            return property.isNew;
          default:
            return true;
        }
      });
    });
  }, [activeFilters]);

  const handleFilterClick = (filterValue: string) => {
    // Create a new URLSearchParams instance
    const newSearchParams = new URLSearchParams(searchParams.toString());
    const currentFilters = newSearchParams.get('filters')?.split(',').filter(Boolean) || [];
    
    let newFilters: string[];
    if (currentFilters.includes(filterValue)) {
      // Remove the filter
      newFilters = currentFilters.filter(f => f !== filterValue);
    } else {
      // Add the filter
      newFilters = [...currentFilters, filterValue];
    }

    // Update URL
    if (newFilters.length > 0) {
      newSearchParams.set('filters', newFilters.join(','));
      router.push(`/properties?${newSearchParams.toString()}`);
    } else {
      router.push('/properties');
    }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="container mx-auto px-4 py-8"
    >
      {/* Header and Filter Section */}
      <motion.div 
        variants={fadeInUp}
        className="mb-8"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-3xl font-bold mb-6"
        >
          Find Your Perfect Home
        </motion.h1>
        <motion.div variants={fadeInUp}>
          <PropertyFilterSection />
        </motion.div>
      </motion.div>

      {/* Pre-filtered Categories */}
      <motion.div 
        variants={fadeInUp}
        className="mb-12"
      >
        <div className="flex items-center justify-between mb-4">
          <motion.h2 
            variants={fadeInUp}
            className="text-lg font-semibold text-gray-800"
          >
            Quick Filters
          </motion.h2>
          <AnimatePresence>
            {activeFilters.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut"
                }}
              >
                <Button
                  variant="ghost"
                  className="text-sm text-gray-500 hover:text-gray-700"
                  onClick={() => router.push('/properties')}
                >
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div 
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            {
              id: 'featured',
              icon: <Star className="h-5 w-5" />,
              title: 'Featured',
              description: 'Premium listings'
            },
            {
              id: 'new-listings',
              icon: <Sparkles className="h-5 w-5" />,
              title: 'New Listings',
              description: 'Fresh properties'
            },
            {
              id: 'no-deposit',
              icon: <Ban className="h-5 w-5" />,
              title: 'No Deposit',
              description: 'Move in quickly'
            },
            {
              id: 'with-deposit',
              icon: <Shield className="h-5 w-5" />,
              title: 'With Deposit',
              description: 'Secure booking'
            }
          ].map((filter) => (
            <motion.div
              key={filter.id}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02, 
                transition: { duration: 0.3 } 
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.2 } 
              }}
            >
              <Button
                variant="outline"
                className={cn(
                  "h-auto w-full py-4 px-6 flex flex-col items-center gap-2 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200",
                  activeFilters.includes(filter.id) && "bg-blue-50 text-blue-600 border-blue-200 ring-2 ring-blue-200"
                )}
                onClick={() => handleFilterClick(filter.id)}
              >
                {filter.icon}
                <span className="text-sm font-medium">{filter.title}</span>
                <span className="text-xs text-gray-500">{filter.description}</span>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Properties Grid */}
      <motion.div 
        variants={gridVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            variants={itemVariants}
            layout
            layoutId={`property-${property.id}`}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              layout: {
                duration: 0.4,
                ease: "easeInOut"
              }
            }}
          >
            <PropertyCard 
              property={property}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
} 