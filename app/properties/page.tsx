"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import { PropertyCard } from '@/components/property-card';

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter');

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

  // Initialize filteredProperties with all properties
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Filter properties when filter or search query changes
  useEffect(() => {
    let filtered = [...properties];

    // Apply filters based on URL parameter
    if (filter) {
      switch (filter) {
        case 'no-deposit':
          filtered = filtered.filter(property => !property.deposit);
          break;
        case 'with-deposit':
          filtered = filtered.filter(property => property.deposit);
          break;
        case 'featured':
          filtered = filtered.filter(property => property.featured);
          break;
        case 'new-listings':
          filtered = filtered.filter(property => property.isNew);
          break;
        default:
          break;
      }
    }

    // Apply search query if exists
    if (searchQuery) {
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredProperties(filtered);
  }, [filter, searchQuery]); // Remove properties from dependency array since it's static

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Find Your Perfect Home</h1>
        <div className="flex gap-4 max-w-3xl">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by location or property type..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="px-6">Search</Button>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property, index) => (
          <PropertyCard 
            key={property.id} 
            property={property}
            index={index}
          />
        ))}
      </div>
    </div>
  );
} 