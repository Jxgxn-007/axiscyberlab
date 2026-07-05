import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroKolam from "../../assets/HeroKolam.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#060D1D]">

      {/* Background */}
      <HeroBackground />

      <div className="relative max-w-7xl mx-auto px-8 pt-40 pb-24">

        <div className="grid lg:grid-cols-2 items-center gap-20">

          {/* Left Side */}
          <div className="order-2 lg:order-1">
            <HeroContent />
          </div>

          {/* Right Side */}
         <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">

  {/* Background Glow */}
  <div
    className="
      absolute
      w-[2000px]
      h-[2000px]
      rounded-full
      bg-orange-500/10
      blur-[180px]
      animate-pulse
    "
  ></div>

  {/* Hero Kolam */}
  <img
    src={HeroKolam}
    alt="Axis Hero Kolam"
    className="
      hero-kolam
      relative
      z-10
      w-[380px]
      lg:w-[500px]
      xl:w-[540px]
      transition-all
      duration-700
      hover:scale-105
      select-none
      pointer-events-none
    "
  />

</div>
        </div>

      </div>
     
    </section>
  );
}

export default Hero;