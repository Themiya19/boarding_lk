import { Hero } from '@/components/hero';
import { FeaturedProperties } from '@/components/featured-properties';
import { FilterSection } from '@/components/filter-section';
import { PostAdvertisement } from '@/components/post-advertisement';

// Utility function to simulate loading
// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function Home() {
  // Simulate loading time (remove this in production)
  // await delay(2000);

  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProperties />
      {/* <PostAdvertisement /> */}
    </div>
  );
}