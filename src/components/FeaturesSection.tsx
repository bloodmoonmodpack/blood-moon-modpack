import { Moon, Skull, Ghost, Eye } from 'lucide-react';

const features = [
  {
    icon: Moon,
    title: 'The Crimson Tide',
    description: 'A blood-red tide that transforms the world into a nightmare realm of darkness and terror.',
  },
  {
    icon: Skull,
    title: 'Nightmarish Creatures',
    description: 'Face horrifying mobs that emerge from the depths when the tide rises.',
  },
  {
    icon: Ghost,
    title: 'Haunting Atmosphere',
    description: 'Eerie sounds, unsettling visuals, and an ever-present sense of dread.',
  },
  {
    icon: Eye,
    title: 'Ancient Mysteries',
    description: 'Uncover dark secrets and forbidden knowledge hidden throughout the world.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-glow text-primary mb-16">
          Embrace the Darkness
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 
                         transition-all duration-300 hover:bg-secondary/50 group"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
