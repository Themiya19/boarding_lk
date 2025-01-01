"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Home, CheckCircle2, Clock, MapPin, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const listItemVariants = {
  hidden: { 
    opacity: 0,
    x: -20
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// This would come from your API/database
const mockRentals = [
  {
    id: 1,
    propertyName: "Luxury Apartment in Colombo 7",
    address: "42 Reid Avenue, Colombo 7",
    monthlyRent: 45000,
    nextPaymentDate: "2024-03-15",
    imageUrl: "/images/apartment-1.jpg",
    status: "Active",
    paymentStatus: "Upcoming",
    leaseStartDate: "2023-12-01",
    leaseEndDate: "2024-12-01",
  },
  {
    id: 2,
    propertyName: "Student Room in Kandy",
    address: "15 Peradeniya Road, Kandy",
    monthlyRent: 25000,
    nextPaymentDate: "2024-03-20",
    imageUrl: "/images/apartment-2.jpg",
    status: "Active",
    paymentStatus: "Paid",
    leaseStartDate: "2024-01-01",
    leaseEndDate: "2024-12-31",
  },
];

// Helper function to format date consistently
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

// Helper function to get payment status color
const getPaymentStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'paid':
      return 'bg-green-100 text-green-800';
    case 'upcoming':
      return 'bg-yellow-100 text-yellow-800';
    case 'overdue':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export function RentalsList() {
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const handlePayment = (rentalId: number) => {
    // Implement payment logic here
    console.log("Processing payment for rental:", rentalId);
  };

  const handleImageError = (rentalId: number) => {
    setImageError(prev => ({ ...prev, [rentalId]: true }));
  };

  return (
    <motion.div 
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white rounded-lg shadow">
        <div className="hidden md:grid md:grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 p-4 font-medium text-gray-500 border-b">
          <div>Property</div>
          <div>Monthly Rent</div>
          <div>Next Payment</div>
          <div>Lease Period</div>
          <div>Action</div>
        </div>
        
        <div className="divide-y divide-gray-100">
          {mockRentals.map((rental) => (
            <motion.div
              key={rental.id}
              variants={listItemVariants}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="md:grid md:grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 space-y-4 md:space-y-0 items-center">
                {/* Property Info */}
                <div className="flex gap-4 items-center">
                  <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                    {!imageError[rental.id] ? (
                      <Image
                        src={rental.imageUrl}
                        alt={rental.propertyName}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(rental.id)}
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <ImageIcon className="h-6 w-6 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{rental.propertyName}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {rental.address}
                    </p>
                    <Badge 
                      className={`mt-1 ${getPaymentStatusColor(rental.paymentStatus)}`}
                    >
                      {rental.paymentStatus}
                    </Badge>
                  </div>
                </div>

                {/* Monthly Rent */}
                <div className="text-gray-900 font-medium">
                  Rs. {rental.monthlyRent.toLocaleString()}
                </div>

                {/* Next Payment */}
                <div className="flex items-center gap-2 text-gray-900">
                  <Calendar className="h-4 w-4 text-orange-500" />
                  <span>{formatDate(rental.nextPaymentDate)}</span>
                </div>

                {/* Lease Period */}
                <div className="text-sm text-gray-600">
                  <div>{formatDate(rental.leaseStartDate)}</div>
                  <div className="text-gray-400">to</div>
                  <div>{formatDate(rental.leaseEndDate)}</div>
                </div>

                {/* Action Button */}
                <div>
                  <Button
                    variant={rental.paymentStatus.toLowerCase() === 'upcoming' ? 'default' : 'outline'}
                    onClick={() => handlePayment(rental.id)}
                    className="whitespace-nowrap"
                  >
                    {rental.paymentStatus.toLowerCase() === 'paid' ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Paid
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Pay Now
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 