import { Moon, Skull, Ghost, Eye, Sword, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Moon,
    title: "Dynamic Blood Moon",
    description: "Experience terrifying nights when the blood moon rises. The world transforms into a nightmare realm.",
  },
  {
    icon: Skull,
    title: "New Hostile Mobs",
    description: "Face horrifying new creatures that only emerge during the blood moon. Each more deadly than the last.",
  },
  {
    icon: Ghost,
    title: "Haunting Atmosphere",
    description: "Immersive sound design and visual effects create an unforgettable horror experience.",
  },
  {
    icon: Eye,
    title: "Enhanced AI",
    description: "Mobs become smarter and more aggressive. They'll hunt you down with relentless determination.",
  },
  {
    icon: Sword,
    title: "New Weapons",
    description: "Craft powerful weapons infused with blood moon energy to fight back against the darkness.",
  },
  {
    icon: Shield,
    title: "Survival Mechanics",
    description: "New sanity and fear systems add depth to your survival gameplay during blood moon nights.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Embrace the <span className="text-primary">Darkness</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Blood Moon transforms your Minecraft experience with terrifying new features and challenges.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={`delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
