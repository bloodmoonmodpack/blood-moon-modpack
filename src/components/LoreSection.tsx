const loreEntries = [
  {
    title: "The First Night",
    text: "It began as a myth. Travelers spoke of a man named akuma who thought he was speaking to a young man little did he know I was the master all along...",
  },
  {
    title: "The Corruption",
    text: "When the Blood Moon rises, reality fractures. Creatures of nightmare pour through the cracks, driven by an insatiable hunger. The very air grows thick with malice.",
  },
  {
    title: "The Watchers",
    text: "They say if you stare too long at the crimson glow, something stares back. Something ancient. Something patient. Something that remembers your face.",
  },
];

const LoreSection = () => {
  return (
    <section id="lore" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            The <span className="text-primary">Prophecy</span>
          </h2>
          <p className="text-muted-foreground">
            Ancient texts speak of the Blood Moon's origin...
          </p>
        </div>

        <div className="space-y-8">
          {loreEntries.map((entry, index) => (
            <div
              key={entry.title}
              className="group relative p-8 bg-card/30 border border-border/30 rounded-lg backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/60 via-primary/20 to-transparent rounded-l" />
              
              <h3 className="text-xl font-display text-primary mb-4 tracking-wide">
                {entry.title}
              </h3>
              
              <p className="text-muted-foreground font-body text-lg leading-relaxed italic">
                "{entry.text}"
              </p>
              
              <div className="absolute bottom-4 right-4 text-primary/20 font-mono text-xs">
                Fragment {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoreSection;
