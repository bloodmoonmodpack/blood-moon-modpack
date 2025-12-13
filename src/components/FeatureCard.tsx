import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: string;
}

const FeatureCard = ({ icon: Icon, title, description, delay = "delay-100" }: FeatureCardProps) => {
  return (
    <div 
      className={`opacity-0 animate-fade-in-up ${delay} group relative p-6 bg-card/50 border border-border/50 rounded-lg backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-500`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:shadow-blood transition-shadow duration-500">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-display text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
