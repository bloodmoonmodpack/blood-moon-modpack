import { Download } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="download" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="p-12 rounded-2xl bg-gradient-to-b from-secondary/50 to-background border border-border">
          <h2 className="text-4xl md:text-5xl font-bold text-glow text-primary mb-6">
            Ready to Face the Tide?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Download the Bloodtide Modpack and experience Minecraft like never before. 
            The crimson tide is rising—will you survive?
          </p>
          
          <a
            href="https://bloodmoon.lol/modpack.zip"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold rounded-lg 
                       hover:bg-primary/90 transition-all duration-300 animate-pulse-glow text-xl"
          >
            <Download className="w-6 h-6" />
            Download Bloodtide Modpack
          </a>
        </div>
        
        <footer className="mt-16 text-muted-foreground/60 text-sm">
          <p>© 2025 Bloodtide Modpack. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default CTASection;
