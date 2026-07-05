import HeroKolam from "../../assets/HeroKolam.png";

function PageHero({
  badge,
  title,
  highlight,
  description,
}) {
  return (
    <section className="bg-[#060D1D]">

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-24">

        <div className="grid lg:grid-cols-2 items-center gap-20">

          {/* Left */}

          <div>

            <span
              className="
      absolute
      w-[2000px]
      h-[2000px]
      rounded-full
      bg-orange-500/10
      blur-[180px]
      animate-pulse
    "
            >
              ● {badge}
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-black text-white leading-tight">

              {title}

              <br />

              <span className="text-orange-500">
                {highlight}
              </span>

            </h1>

            <p className="mt-8 text-lg leading-9 text-[#B7C3D7] max-w-xl">

              {description}

            </p>

          </div>

          {/* Right */}

          <div className="flex justify-center lg:justify-end">

            <img
              src={HeroKolam}
              alt="Axis Kolam"
              className="
                w-[380px]
                lg:w-[500px]
                xl:w-[560px]
                object-contain
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

export default PageHero;