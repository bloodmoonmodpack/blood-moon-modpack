import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      {/* Moon */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary via-red-800 to-red-950 opacity-80 blur-sm animate-pulse-glow" />
      
      <div className="relative z-10 text-center max-w-4xl animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-glow text-primary mb-6 tracking-wider">
          BLOODTIDE
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-serif">
          A Minecraft Horror Experience
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          When the crimson tide rises, darkness consumes all. Face nightmarish creatures, 
          survive the blood-soaked nights, and discover the ancient horrors that lurk beneath.
        </p>
        
        <a
          href="https://bloodmoon.lol/modpack.zip"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg 
                     hover:bg-primary/90 transition-all duration-300 animate-pulse-glow text-lg"
        >
          <Download className="w-5 h-5" />
          Download Bloodtide Modpack
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
