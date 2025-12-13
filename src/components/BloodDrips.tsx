const BloodDrips = () => {
  const drips = [
    { left: '2%', height: 'h-48', width: 'w-2', delay: '0s', duration: '5s' },
    { left: '6%', height: 'h-32', width: 'w-1.5', delay: '2s', duration: '4s' },
    { left: '10%', height: 'h-56', width: 'w-2.5', delay: '0.5s', duration: '6s' },
    { left: '15%', height: 'h-40', width: 'w-1', delay: '3s', duration: '4.5s' },
    { left: '20%', height: 'h-64', width: 'w-3', delay: '1s', duration: '5.5s' },
    { left: '26%', height: 'h-36', width: 'w-2', delay: '4s', duration: '4s' },
    { left: '32%', height: 'h-52', width: 'w-1.5', delay: '1.5s', duration: '5s' },
    { left: '38%', height: 'h-44', width: 'w-2.5', delay: '2.5s', duration: '4.5s' },
    { left: '44%', height: 'h-60', width: 'w-2', delay: '0s', duration: '6s' },
    { left: '50%', height: 'h-72', width: 'w-3', delay: '3.5s', duration: '5s' },
    { left: '56%', height: 'h-48', width: 'w-2', delay: '1s', duration: '4.5s' },
    { left: '62%', height: 'h-56', width: 'w-2.5', delay: '2s', duration: '5.5s' },
    { left: '68%', height: 'h-40', width: 'w-1.5', delay: '4.5s', duration: '4s' },
    { left: '74%', height: 'h-64', width: 'w-3', delay: '0.5s', duration: '6s' },
    { left: '80%', height: 'h-52', width: 'w-2', delay: '3s', duration: '5s' },
    { left: '86%', height: 'h-44', width: 'w-2.5', delay: '1.5s', duration: '4.5s' },
    { left: '92%', height: 'h-60', width: 'w-2', delay: '2.5s', duration: '5.5s' },
    { left: '97%', height: 'h-36', width: 'w-1.5', delay: '4s', duration: '4s' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-20 pointer-events-none">
      {drips.map((drip, index) => (
        <div
          key={index}
          className={`absolute top-0 ${drip.height} ${drip.width} rounded-b-full`}
          style={{
            left: drip.left,
            animationDelay: drip.delay,
            animationDuration: drip.duration,
            background: 'linear-gradient(180deg, hsl(0 85% 30%) 0%, hsl(0 85% 25%) 60%, hsl(0 90% 20% / 0.8) 80%, transparent 100%)',
            boxShadow: '0 0 10px hsl(0 100% 40% / 0.5), 0 0 20px hsl(0 100% 35% / 0.3)',
            animation: `drip ${drip.duration} ease-in-out infinite`,
          }}
        />
      ))}
      
      {/* Extra thick drips */}
      <div
        className="absolute top-0 h-80 w-4 rounded-b-full"
        style={{
          left: '8%',
          background: 'linear-gradient(180deg, hsl(0 85% 30%) 0%, hsl(0 85% 25%) 50%, hsl(0 90% 20% / 0.6) 80%, transparent 100%)',
          boxShadow: '0 0 15px hsl(0 100% 40% / 0.6), 0 0 30px hsl(0 100% 35% / 0.4)',
          animation: 'drip 7s ease-in-out infinite',
          animationDelay: '1s',
        }}
      />
      <div
        className="absolute top-0 h-96 w-5 rounded-b-full"
        style={{
          left: '42%',
          background: 'linear-gradient(180deg, hsl(0 85% 30%) 0%, hsl(0 85% 25%) 50%, hsl(0 90% 20% / 0.6) 80%, transparent 100%)',
          boxShadow: '0 0 15px hsl(0 100% 40% / 0.6), 0 0 30px hsl(0 100% 35% / 0.4)',
          animation: 'drip 8s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute top-0 h-72 w-4 rounded-b-full"
        style={{
          left: '78%',
          background: 'linear-gradient(180deg, hsl(0 85% 30%) 0%, hsl(0 85% 25%) 50%, hsl(0 90% 20% / 0.6) 80%, transparent 100%)',
          boxShadow: '0 0 15px hsl(0 100% 40% / 0.6), 0 0 30px hsl(0 100% 35% / 0.4)',
          animation: 'drip 6.5s ease-in-out infinite',
          animationDelay: '3s',
        }}
      />
    </div>
  );
};

export default BloodDrips;
