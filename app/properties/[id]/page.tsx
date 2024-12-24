import { Metadata } from 'next';
import { properties } from "@/lib/data/properties";
import { PropertyDetails } from "@/components/property-details";

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  // Ensure params is resolved
  const id = await Promise.resolve(params.id);
  const property = properties.find((p) => p.id === Number(id));
  
  return {
    title: property ? `${property.title} - BoardingBuddy` : 'Property Not Found',
    description: property ? `View details for ${property.title} at ${property.location}` : undefined,
  };
}

export default function PropertyPage() {
  return <PropertyDetails />;
}