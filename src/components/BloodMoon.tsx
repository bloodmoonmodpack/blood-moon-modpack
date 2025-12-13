import bloodMoonImage from "@/assets/blood-moon-hero.png";

const BloodMoon = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-pulse-glow animate-float">
      <img
        src={bloodMoonImage}
        alt="Blood Moon"
        className="w-full h-full object-contain"
      />
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-blood-glow/20 rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default BloodMoon;
