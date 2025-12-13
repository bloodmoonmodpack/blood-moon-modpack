import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FogEffect from "@/components/FogEffect";
import BackgroundEffects from "@/components/BackgroundEffects";
import BloodDrips from "@/components/BloodDrips";
import WarningSection from "@/components/WarningSection";
import LoreSection from "@/components/LoreSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-dark pointer-events-none" />
      
      {/* Background effects */}
      <BackgroundEffects />
      
      {/* Blood drips from top */}
      <BloodDrips />
      
      {/* Fog effect */}
      <FogEffect />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <WarningSection />
        <FeaturesSection />
        <LoreSection />
        <TestimonialsSection />
        <CTASection />

        {/* Footer */}
        <footer className="py-12 border-t border-primary/20 text-center">
          <p className="text-muted-foreground/60 text-sm font-mono">
            Blood Moon Mod © 2024 • Made with fear and dedication
          </p>
          <p className="text-primary/40 text-xs font-mono mt-2">
            May your nights be short and your torches plentiful.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
