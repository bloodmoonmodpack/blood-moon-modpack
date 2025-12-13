const BloodDrips = () => {
  const drips = [
    { left: '3%', height: 'h-32', width: 'w-0.5', delay: '0s', duration: '5s' },
    { left: '8%', height: 'h-24', width: 'w-px', delay: '2s', duration: '4s' },
    { left: '14%', height: 'h-40', width: 'w-0.5', delay: '0.5s', duration: '6s' },
    { left: '21%', height: 'h-28', width: 'w-px', delay: '3s', duration: '4.5s' },
    { left: '28%', height: 'h-36', width: 'w-0.5', delay: '1s', duration: '5.5s' },
    { left: '35%', height: 'h-20', width: 'w-px', delay: '4s', duration: '4s' },
    { left: '42%', height: 'h-44', width: 'w-0.5', delay: '1.5s', duration: '5s' },
    { left: '50%', height: 'h-32', width: 'w-px', delay: '2.5s', duration: '4.5s' },
    { left: '58%', height: 'h-48', width: 'w-0.5', delay: '0s', duration: '6s' },
    { left: '65%', height: 'h-24', width: 'w-px', delay: '3.5s', duration: '5s' },
    { left: '72%', height: 'h-36', width: 'w-0.5', delay: '1s', duration: '4.5s' },
    { left: '79%', height: 'h-40', width: 'w-px', delay: '2s', duration: '5.5s' },
    { left: '86%', height: 'h-28', width: 'w-0.5', delay: '4.5s', duration: '4s' },
    { left: '93%', height: 'h-32', width: 'w-px', delay: '0.5s', duration: '6s' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-20 pointer-events-none">
      {drips.map((drip, index) => (
        <div
          key={index}
          className={`absolute top-0 ${drip.height} ${drip.width} rounded-b-full`}
          style={{
            left: drip.left,
            background: 'linear-gradient(180deg, hsl(0 85% 30%) 0%, hsl(0 85% 25%) 60%, hsl(0 90% 20% / 0.6) 80%, transparent 100%)',
            boxShadow: '0 0 8px hsl(0 100% 40% / 0.4)',
            animation: `drip ${drip.duration} ease-in-out infinite`,
            animationDelay: drip.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BloodDrips;
