const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(0_0%_0%/0.8)_100%)]" />
      
      {/* Scanlines effect */}
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsl(0_0%_0%/0.5)_2px,hsl(0_0%_0%/0.5)_4px)]" />
    </div>
  );
};

export default BackgroundEffects;
