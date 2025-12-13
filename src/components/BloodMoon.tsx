const asciiMoon = `
        *                                                               .
                  .           *                      .
     .                                  *                          *
                        ~\\v/~                                 .
            *                          @@@@@@@@@@
                   .                @@@@@@@@@@@@@@@             ~\\v/~
      .                           @@@@@@@@@@@@@@@
                                @@@@@@@@@@@@@@                       *
           ~\\v/~              @@@@@@@@@@@@@
                             @@@@@@@@@@@@                    .
     *                      @@@@@@@@@@@
                           @@@@@@@@@@                 *
              .           @@@@@@@@@                            ~\\v/~
                          @@@@@@@@
                          @@@@@@@@                        .
              .           @@@@@@@@@
                           @@@@@@@@@@                 *
     *                      @@@@@@@@@@@
                             @@@@@@@@@@@@                    .
           ~\\v/~              @@@@@@@@@@@@@
                                @@@@@@@@@@@@@@                       *
      .                           @@@@@@@@@@@@@@@
                   .                @@@@@@@@@@@@@@@             ~\\v/~
            *                          @@@@@@@@@@
                        ~\\v/~                                 .
     .                                  *                          *
                  .           *                      .
        *                                                               .
`;

const BloodMoon = () => {
  return (
    <div className="relative animate-pulse-glow animate-float">
      <pre className="text-primary font-mono text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs leading-none select-none whitespace-pre">
        {asciiMoon}
      </pre>
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full" />
    </div>
  );
};

export default BloodMoon;
