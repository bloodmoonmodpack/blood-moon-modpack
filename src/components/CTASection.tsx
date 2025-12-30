import { Button } from "./ui/button";
import { Download } from "lucide-react";

const CTASection = () => {
  return (
    <section id="download" className="relative py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
          Are you <span className="text-primary animate-flicker">ready</span>?
        </h2>
        
        <p className="text-xl text-muted-foreground font-body italic mb-10 max-w-xl mx-auto">
          The Blood Moon awaits. Download now... if you dare.
        </p>
        
        <a href="https://github.com/bloodmoonmodpack/blood-moon-modpack/releases/latest/download/bloodmoonmodpack.zip" download>
          <Button variant="blood" size="lg" className="text-lg px-8 py-6">
            <Download className="w-6 h-6 mr-3" />
            Download Blood Moon Modpack
          </Button>
        </a>
        
        <p className="mt-8 text-muted-foreground/50 text-sm font-mono">
          Compatible with Minecraft 1.21.10 • Forge & Fabric
        </p>
      </div>
    </section>
  );
};

export default CTASection;
