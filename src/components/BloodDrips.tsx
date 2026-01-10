const BloodDrips = () => {
  const drips = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${4 + Math.random() * 4}s`,
    height: `${40 + Math.random() * 80}px`,
    width: i % 3 === 0 ? 'w-0.5' : 'w-px',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {drips.map((drip) => (
        <div
          key={drip.id}
          className={`absolute top-0 ${drip.width} rounded-b-full bg-primary`}
          style={{
            left: drip.left,
            height: drip.height,
            animation: `drip ${drip.duration} ease-in infinite`,
            animationDelay: drip.delay,
            boxShadow: '0 0 6px hsl(var(--primary) / 0.6)',
          }}
        />
      ))}
    </div>
  );
};

export default BloodDrips;
