import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FogEffect from "@/components/FogEffect";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-dark pointer-events-none" />
      
      {/* Fog effect */}
      <FogEffect />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />

        {/* Footer */}
        <footer className="py-12 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            Blood Moon Mod © 2024 • Made with fear and dedication
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
