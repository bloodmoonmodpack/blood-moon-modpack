const BloodDrips = () => {
  const drips = [
    { left: '5%', height: 'h-24', width: 'w-1', delay: '0s', duration: '4s' },
    { left: '12%', height: 'h-32', width: 'w-0.5', delay: '1.5s', duration: '5s' },
    { left: '23%', height: 'h-20', width: 'w-1', delay: '3s', duration: '4.5s' },
    { left: '35%', height: 'h-40', width: 'w-0.5', delay: '0.5s', duration: '6s' },
    { left: '48%', height: 'h-28', width: 'w-1', delay: '2s', duration: '4s' },
    { left: '62%', height: 'h-36', width: 'w-0.5', delay: '4s', duration: '5.5s' },
    { left: '75%', height: 'h-24', width: 'w-1', delay: '1s', duration: '4s' },
    { left: '85%', height: 'h-32', width: 'w-0.5', delay: '2.5s', duration: '5s' },
    { left: '93%', height: 'h-20', width: 'w-1', delay: '3.5s', duration: '4.5s' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-20 pointer-events-none">
      {drips.map((drip, index) => (
        <div
          key={index}
          className={`absolute top-0 ${drip.height} ${drip.width} bg-gradient-to-b from-primary via-primary/60 to-transparent animate-drip`}
          style={{
            left: drip.left,
            animationDelay: drip.delay,
            animationDuration: drip.duration,
          }}
        />
      ))}
    </div>
  );
};

export default BloodDrips;
