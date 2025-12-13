const asciiMoon = `
     *                                                            *
                             aaaaaaaaaaaaaaaa               *
                         aaaaaaaaaaaaaaaaaaaaaaaa
                      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaa           aaaaaa
                  aaaaaaaaaaaaaaaa                  aaaa
                 aaaaaaaaaaaaa aa                      aa
*               aaaaaaaa      aa                         a
                aaaaaaa aa aaaa
          *    aaaaaaaaa     aaa
               aaaaaaaaaaa aaaaaaa                               *
               aaaaaaa    aaaaaaaaaa
               aaaaaa a aaaaaa aaaaaa
                aaaaaaa  aaaaaaa
                aaaaaaaa                                 a
                 aaaaaaaaaa                            aa
                  aaaaaaaaaaaaaaaa                  aaaa
                    aaaaaaaaaaaaaaaaa           aaaaaa        *
      *               aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                         aaaaaaaaaaaaaaaaaaaaaaaa
                      *      aaaaaaaaaaaaaaaa
`;

const Bat = ({ className }: { className?: string }) => (
  <span className={className}>~\\v/~</span>
);

const BloodMoon = () => {
  return (
    <div className="relative animate-pulse-glow animate-float">
      <pre className="text-primary font-mono text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs leading-none select-none whitespace-pre">
        {asciiMoon}
      </pre>
      
      {/* Animated bats */}
      <div className="absolute -top-4 -left-8 text-primary font-mono text-xs animate-bat-1">
        <Bat />
      </div>
      <div className="absolute top-8 -right-12 text-primary font-mono text-xs animate-bat-2">
        <Bat />
      </div>
      <div className="absolute -bottom-2 left-4 text-primary font-mono text-xs animate-bat-3">
        <Bat />
      </div>
      <div className="absolute top-1/3 -left-16 text-primary font-mono text-[10px] animate-bat-4">
        <Bat />
      </div>
      <div className="absolute bottom-1/4 -right-8 text-primary font-mono text-[10px] animate-bat-5">
        <Bat />
      </div>
      
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full" />
    </div>
  );
};

export default BloodMoon;
