import { Skull } from "lucide-react";

const testimonials = [
  {
    quote: "I installed this mod thinking it would be fun. I haven't slept properly in three days.",
  },
  {
    quote: "The sounds... I can still hear them when I close my eyes. 10/10 would traumatize myself again.",
  },
  {
    quote: "My base was perfectly safe. Emphasis on 'was'. The Blood Moon found me anyway.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Survivor <span className="text-primary">Testimonies</span>
          </h2>
          <p className="text-muted-foreground">
            Those who lived to tell the tale...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-6 bg-card/50 border border-border/30 rounded-lg hover:border-primary/40 transition-all duration-300"
            >
              <Skull className="absolute top-4 right-4 w-5 h-5 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              <p className="text-foreground/90 font-body italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
