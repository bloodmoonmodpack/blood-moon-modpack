const LoreSection = () => {
  return (
    <section id="lore" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-glow text-primary mb-8">
          The Legend
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="italic font-serif text-xl text-foreground/90">
            "When the waters turn crimson, the veil between worlds grows thin..."
          </p>
          
          <p>
            Ancient texts speak of a time before time, when the ocean itself was corrupted 
            by an entity of unfathomable malice. The Bloodtide was born—a crimson surge 
            that brings with it creatures from the darkest depths of existence.
          </p>
          
          <p>
            Those who witness the tide rarely survive to tell the tale. But for the brave 
            few who dare to face the darkness, untold power awaits—power that comes at 
            a terrible price.
          </p>
          
          <p className="text-primary font-semibold">
            Will you answer the call of the Bloodtide?
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoreSection;
