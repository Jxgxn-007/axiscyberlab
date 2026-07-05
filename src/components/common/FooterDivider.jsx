function FooterDivider() {
  return (
    <div className="relative py-10 flex items-center justify-center overflow-hidden">

      {/* Left Line */}
      <div className="absolute left-0 w-[42%] h-px bg-orange-500/40"></div>

      {/* Right Line */}
      <div className="absolute right-0 w-[42%] h-px bg-orange-500/40"></div>

      {/* Center Kolam */}
      <img
        src="/HeroKolam.svg"
        alt="Kolam"
        className="w-12 h-12 bg-[#060D1D] px-2 z-10"
      />

    </div>
  );
}

export default FooterDivider;