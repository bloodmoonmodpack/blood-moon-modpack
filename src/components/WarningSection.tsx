const WarningSection = () => {
  return (
    <section className="relative py-16 px-4 border-y border-primary/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 border border-primary/50 bg-primary/10 rounded animate-pulse">
          <span className="text-primary font-mono text-sm tracking-widest">⚠ WARNING ⚠</span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6">
          The Blood Moon is <span className="text-primary animate-flicker">not</span> for the faint of heart
        </h2>
        
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 font-body text-lg italic">
          "Those who venture into the crimson night rarely return unchanged. 
          Some speak of shadows that whisper their names. Others... 
          they don't speak at all."
        </p>
        
        <p className="text-muted-foreground/60 text-sm font-mono">
          — Last journal entry of an unknown explorer
        </p>
      </div>
    </section>
  );
};

export default WarningSection;
