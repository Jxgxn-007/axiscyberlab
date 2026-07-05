import HeroKolam from "../../assets/HeroKolam.svg";

function SectionDivider() {
  return (
    <div className="relative flex items-center justify-between py-10">

      {/* Left */}
      <div className="flex items-center w-[22%]">

        <img
          src={HeroKolam}
          alt=""
          className="w-8 rotate-90"
        />

        <div className="flex-1 h-px bg-orange-500/70"></div>

        <div className="w-3 h-3 rounded-full border-2 border-orange-500"></div>

      </div>

      {/* Right */}
      <div className="flex items-center w-[22%] flex-row-reverse">

        <img
          src={HeroKolam}
          alt=""
          className="w-8 -rotate-90"
        />

        <div className="flex-1 h-px bg-orange-500/70"></div>

        <div className="w-3 h-3 rounded-full border-2 border-orange-500"></div>

      </div>

    </div>
  );
}

export default SectionDivider;