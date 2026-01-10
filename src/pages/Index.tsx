import BloodDrips from '@/components/BloodDrips';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import LoreSection from '@/components/LoreSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <BloodDrips />
      <HeroSection />
      <FeaturesSection />
      <LoreSection />
      <CTASection />
    </div>
  );
};

export default Index;
