import BloodMoon from "./BloodMoon";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Blood moon */}
      <div className="mb-8 flex justify-center">
        <BloodMoon />
      </div>

      {/* Title */}
      <h1 className="opacity-0 animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground tracking-wider mb-4 text-center">
        BLOOD MOON
      </h1>

      {/* Subtitle */}
      <p className="opacity-0 animate-fade-in-up delay-100 text-xl md:text-2xl text-muted-foreground font-body italic text-center max-w-2xl mb-8">
        When night falls, terror rises. A Minecraft horror experience like no other.
      </p>

      {/* CTA Button */}
      <div className="opacity-0 animate-fade-in-up delay-200">
        <a href="https://github.com/bloodmoonmodpack/blood-moon-modpack/releases/latest/download/modpack.zip" download>
          <Button variant="blood" size="lg">
            <Download className="w-5 h-5 mr-2" />
            Download Blood Moon Modpack
          </Button>
        </a>
      </div>

      {/* Version tag */}
      <p className="opacity-0 animate-fade-in-up delay-300 mt-6 text-sm text-muted-foreground">
        Version 1.0 • Minecraft 1.21.10
      </p>
    </section>
  );
};

export default HeroSection;
