import { FilterSection } from '@/components/filter-section';

export function PropertyFilterSection() {
  return (
    <div className="w-full">
      <FilterSection showGenderToggle={true} centerSearchButton={true} />
    </div>
  );
} 