"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { properties } from "@/lib/data/properties";
import { PropertyAmenities } from "./property-amenities";
import { PropertyGallery } from "./property-gallery";
import { PropertyInfo } from "./property-info";
import { PropertyDescription } from "./property-description";
import { PropertyFeatures } from "./property-features";
import { PropertyReviews } from "./property-reviews";
import { BackButton } from "@/components/back-button";

export function PropertyDetails() {
  const params = useParams();
  const property = properties.find((p) => p.id === Number(params.id));

  if (!property) {
    return <div>Property not found</div>;
  }

  const averageRating = property.reviews.reduce((acc, review) => acc + review.rating, 0) / property.reviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PropertyGallery images={[property.image]} />
          <PropertyInfo property={property} />
          <PropertyDescription description={property.description} />
          <PropertyFeatures features={property.features} />
          <PropertyAmenities tags={property.tags} />
          <PropertyReviews reviews={property.reviews} averageRating={averageRating} />
        </motion.div>
      </div>
    </div>
  );
}