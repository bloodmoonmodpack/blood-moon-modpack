import { Moon, Skull, Ghost, Eye, Sword, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Moon,
    title: "Dynamic Blood Moon",
    description: "When the Blood Moon rises, the night becomes a living nightmare. The world twists and corrupts itself, plunging everything into a realm of terror.",
  },
  {
    icon: Skull,
    title: "New Hostile Creatures",
    description: "Encounter terrifying entities that emerge only under the Blood Moon. Each creature is uniquely designed to be more aggressive and far deadlier.",
  },
  {
    icon: Ghost,
    title: "Haunting Atmosphere",
    description: "Custom soundscapes, eerie ambient effects, and unsettling visuals transform the environment into a true horror experience.",
  },
  {
    icon: Eye,
    title: "Enhanced Enemy AI",
    description: "During Blood Moon events, mobs become ruthless hunters. They track you, coordinate attacks, and exploit your mistakes with relentless precision.",
  },
  {
    icon: Sword,
    title: "Blood Moon Weapons",
    description: "Forge powerful weapons infused with corrupted lunar energy. These specialized tools are your only hope against the horrors of the Blood Moon.",
  },
  {
    icon: Shield,
    title: "Survival & Sanity Systems",
    description: "Your mind is just as vulnerable as your body. New sanity and fear mechanics challenge you to manage panic and hallucinations.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-4">
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
