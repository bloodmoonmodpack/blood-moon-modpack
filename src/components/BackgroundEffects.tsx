import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const BackgroundEffects = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating blood particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 animate-float-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(0_0%_0%/0.8)_100%)]" />
      
      {/* Scanlines effect */}
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsl(0_0%_0%/0.5)_2px,hsl(0_0%_0%/0.5)_4px)]" />
      
      {/* Blood drips on sides */}
      <div className="absolute top-0 left-[10%] w-1 h-32 bg-gradient-to-b from-primary/60 to-transparent animate-blood-drip" />
      <div className="absolute top-0 right-[15%] w-0.5 h-24 bg-gradient-to-b from-primary/40 to-transparent animate-blood-drip" style={{ animationDelay: '2s' }} />
      <div className="absolute top-0 left-[85%] w-1 h-40 bg-gradient-to-b from-primary/50 to-transparent animate-blood-drip" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default BackgroundEffects;
