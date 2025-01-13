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

  // Get current page from URL
  const currentPage = useMemo(() => {
    const page = searchParams.get('page');
    return page ? parseInt(page) : 1;
  }, [searchParams]);

  const ITEMS_PER_PAGE = 12;

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
      ],
      reviews: [
        { id: 1, rating: 5, comment: "Excellent location and amenities", userName: "John D.", date: "2024-01-15", helpful: 12 },
      ]
    },
    {
      id: 2,
      title: "Luxury 3 Bedroom Apartment",
      description: "Spacious luxury apartment with premium facilities",
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
      ],
      reviews: []
    },
    {
      id: 3,
      title: "Cozy 2 Bedroom House",
      description: "Charming house with a beautiful garden",
      location: "Nugegoda",
      price: "Rs. 65,000/month",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
      tags: ["2 Bedrooms", "Garden"],
      deposit: true,
      featured: false,
      isNew: true,
      features: [
        { id: 1, name: "Garden", description: "Beautiful landscaped garden", icon: "Tree" },
        { id: 2, name: "Parking", description: "Private parking space", icon: "Car" },
      ],
      reviews: []
    },
    {
      id: 4,
      title: "Penthouse Suite",
      description: "Luxurious penthouse with panoramic views",
      location: "Colombo 3",
      price: "Rs. 150,000/month",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      tags: ["Penthouse", "Luxury", "View"],
      deposit: true,
      featured: true,
      isNew: true,
      features: [],
      reviews: []
    },
    {
      id: 5,
      title: "Student Apartment",
      description: "Perfect for students, near universities",
      location: "Moratuwa",
      price: "Rs. 35,000/month",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
      tags: ["Student", "Affordable"],
      deposit: false,
      featured: false,
      isNew: false,
      features: [],
      reviews: []
    },
    {
      id: 6,
      title: "Family Home",
      description: "Spacious family home with garden",
      location: "Battaramulla",
      price: "Rs. 95,000/month",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      tags: ["Family", "Garden"],
      deposit: true,
      featured: true,
      isNew: false,
      features: [],
      reviews: []
    },
    {
      id: 7,
      title: "Beach View Apartment",
      description: "Modern apartment with ocean views",
      location: "Mount Lavinia",
      price: "Rs. 75,000/month",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
      tags: ["Beach", "View"],
      deposit: true,
      featured: true,
      isNew: true,
      features: [],
      reviews: []
    },
    {
      id: 8,
      title: "City Center Studio",
      description: "Compact studio in prime location",
      location: "Colombo 4",
      price: "Rs. 55,000/month",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
      tags: ["Studio", "Central"],
      deposit: false,
      featured: false,
      isNew: true,
      features: [],
      reviews: []
    },
    {
      id: 9,
      title: "Executive Apartment",
      description: "High-end apartment for professionals",
      location: "Colombo 7",
      price: "Rs. 120,000/month",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3",
      tags: ["Executive", "Luxury"],
      deposit: true,
      featured: true,
      isNew: false,
      features: [],
      reviews: []
    },
    {
      id: 10,
      title: "Garden Cottage",
      description: "Charming cottage with private garden",
      location: "Nawala",
      price: "Rs. 70,000/month",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
      tags: ["Cottage", "Garden"],
      deposit: true,
      featured: false,
      isNew: false,
      features: [],
      reviews: []
    },
    {
      id: 11,
      title: "Student Housing Complex",
      description: "Modern student accommodation",
      location: "Malabe",
      price: "Rs. 40,000/month",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
      tags: ["Student", "Complex"],
      deposit: false,
      featured: false,
      isNew: true,
      features: [],
      reviews: []
    },
    {
      id: 12,
      title: "Luxury Villa",
      description: "Exclusive villa with private pool",
      location: "Colombo 8",
      price: "Rs. 200,000/month",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      tags: ["Villa", "Luxury", "Pool"],
      deposit: true,
      featured: true,
      isNew: true,
      features: [],
      reviews: []
    },
    {
      id: 13,
      title: "Seaside Apartment",
      description: "Beautiful apartment with direct beach access",
      location: "Dehiwala",
      price: "Rs. 95,000/month",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3",
      tags: ["Beach", "Luxury", "Sea View"],
      deposit: true,
      featured: true,
      isNew: false,
      features: [],
      reviews: []
    },
    {
      id: 14,
      title: "Mountain View Bungalow",
      description: "Serene bungalow with panoramic mountain views",
      location: "Kandy",
      price: "Rs. 85,000/month",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3",
      tags: ["Mountain", "Peaceful", "Nature"],
      deposit: true,
      featured: false,
      isNew: true,
      features: [],
      reviews: []
    },
    {
      id: 15,
      title: "Urban Loft",
      description: "Modern loft apartment in the heart of the city",
      location: "Colombo 3",
      price: "Rs. 110,000/month",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3",
      tags: ["Loft", "Modern", "City"],
      deposit: true,
      featured: true,
      isNew: true,
      features: [],
      reviews: []
    },
    {
      id: 16,
      title: "Lake House",
      description: "Peaceful house by the lake with stunning views",
      location: "Diyawanna",
      price: "Rs. 125,000/month",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
      tags: ["Lake", "Peaceful", "View"],
      deposit: true,
      featured: true,
      isNew: false,
      features: [],
      reviews: []
    },
    {
      id: 17,
      title: "Budget Studio",
      description: "Affordable studio apartment for students",
      location: "Kirulapone",
      price: "Rs. 30,000/month",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
      tags: ["Studio", "Budget", "Student"],
      deposit: false,
      featured: false,
      isNew: true,
      features: [],
      reviews: []
    },
    {
      id: 18,
      title: "Heritage Home",
      description: "Colonial-style house with modern amenities",
      location: "Galle",
      price: "Rs. 175,000/month",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
      tags: ["Heritage", "Luxury", "Colonial"],
      deposit: true,
      featured: true,
      isNew: false,
      features: [],
      reviews: []
    },
    {
      id: 19,
      title: "Green Valley Residence",
      description: "Eco-friendly apartment in a green setting",
      location: "Thalawathugoda",
      price: "Rs. 80,000/month",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      tags: ["Eco-friendly", "Green", "Modern"],
      deposit: true,
      featured: false,
      isNew: true,
      features: [],
      reviews: []
    },
    {
      id: 20,
      title: "Sky High Penthouse",
      description: "Luxurious penthouse with 360-degree city views",
      location: "Colombo 1",
      price: "Rs. 250,000/month",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3",
      tags: ["Penthouse", "Luxury", "View"],
      deposit: true,
      featured: true,
      isNew: true,
      features: [],
      reviews: []
    }
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

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProperties, currentPage]);

  const handlePageChange = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('page', page.toString());
    router.push(`/properties?${newSearchParams.toString()}`);
  };

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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        {paginatedProperties.map((property, index) => (
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <motion.div 
          variants={fadeInUp}
          className="flex justify-center items-center gap-2 mt-8"
        >
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2"
          >
            Previous
          </Button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => handlePageChange(page)}
                className="px-4 py-2"
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2"
          >
            Next
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
} 