import { Metadata } from 'next';
import { properties } from "@/lib/data/properties";
import { PropertyDetails } from "@/components/property-details";
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Property Details - BoardingBuddy',
  description: 'View property details',
};

export default function PropertyPage() {
  const property = properties[0]; // For demonstration, showing the first property
  
  if (!property) {
    notFound();
  }

  return <PropertyDetails property={property} />;
}