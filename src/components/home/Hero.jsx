import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroTerminal from "./HeroTerminal";

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
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <HeroTerminal />
          </div>

        </div>

      </div>

     
    </section>
  );
}

export default Hero;