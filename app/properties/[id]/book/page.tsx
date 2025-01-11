import { properties } from "@/lib/data/properties";
import { BackButton } from "@/components/back-button";
import { BookingForm } from "@/components/booking-form";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Property - BoardingBuddy',
  description: 'Book your stay with us',
};

export default function BookPropertyPage() {
  const property = properties[0]; // For demonstration, showing the first property

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <BackButton />
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-6">Book Your Stay</h1>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-lg font-bold mt-2">{property.price}</p>
          </div>
          <BookingForm property={property} />
        </div>
      </div>
    </div>
  );
} 