import { Hero } from '@/components/hero';
import { FeaturedProperties } from '@/components/featured-properties';
import { FilterSection } from '@/components/filter-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProperties />
    </div>
  );
}