import { ProprietorHero } from '@/components/proprietor/hero';
import { BenefitsSection } from '@/components/proprietor/benefits';
import { WhyChooseUs } from '@/components/proprietor/why-choose-us';
import { CallToAction } from '@/components/proprietor/call-to-action';
import { MarketInsights } from '@/components/proprietor/market-insights';

export default function ProprietorPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProprietorHero />
      <BenefitsSection />
      <WhyChooseUs />
      <MarketInsights />
      <CallToAction />
    </main>
  );
}