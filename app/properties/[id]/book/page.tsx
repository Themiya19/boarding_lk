import { properties } from "@/lib/data/properties";
import { BackButton } from "@/components/back-button";
import { BookingForm } from "@/components/booking-form";

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
}

export default function BookPropertyPage({ params, searchParams }: Props) {
  const property = properties.find((p) => p.id === Number(params.id));

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