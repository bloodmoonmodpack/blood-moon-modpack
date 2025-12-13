const FogEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Fog layers */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-fog" />
      <div 
        className="absolute bottom-0 left-0 w-full h-32 opacity-20 animate-fog"
        style={{
          background: `radial-gradient(ellipse 100% 100% at 50% 100%, hsl(var(--fog) / 0.3), transparent)`,
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-48 opacity-10 animate-fog"
        style={{
          animationDelay: "-10s",
          background: `radial-gradient(ellipse 80% 80% at 30% 100%, hsl(var(--fog) / 0.2), transparent)`,
        }}
      />
    </div>
  );
};

export default FogEffect;
