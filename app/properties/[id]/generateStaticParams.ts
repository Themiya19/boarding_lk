import { properties } from "@/lib/data/properties";

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
}