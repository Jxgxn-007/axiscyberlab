import roadmap from "./RoadmapData";
import RoadmapStep from "./RoadmapStep";

function Roadmap() {
  return (
    <section className="bg-[#060D1D] py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">

            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>

            <span className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
              Learning Journey
            </span>

          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Cyber Security Roadmap
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Follow a structured path from networking fundamentals
            to advanced ethical hacking, cloud security,
            digital forensics and SOC operations.
          </p>

        </div>

        {/* Desktop */}

       <div className="hidden lg:flex flex-col items-center gap-12">

  {/* Row 1 */}
  <div className="grid grid-cols-2 gap-12 w-full">
    <RoadmapStep item={roadmap[0]} />
    <RoadmapStep item={roadmap[1]} />
  </div>

  {/* Horizontal */}
  <div className="flex items-center justify-center w-full">
    <div className="flex-1 h-[2px] bg-orange-500/40"></div>
    <div className="w-4 h-4 rounded-full bg-orange-500 mx-6"></div>
    <div className="flex-1 h-[2px] bg-orange-500/40"></div>
  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-2 gap-12 w-full">
    <RoadmapStep item={roadmap[2]} />
    <RoadmapStep item={roadmap[3]} />
  </div>

  {/* Horizontal */}
  <div className="flex items-center justify-center w-full">
    <div className="flex-1 h-[2px] bg-orange-500/40"></div>
    <div className="w-4 h-4 rounded-full bg-orange-500 mx-6"></div>
    <div className="flex-1 h-[2px] bg-orange-500/40"></div>
  </div>

  {/* Row 3 */}
  <div className="grid grid-cols-2 gap-12 w-full">
    <RoadmapStep item={roadmap[4]} />
    <RoadmapStep item={roadmap[5]} />
  </div>

  {/* Horizontal */}
  <div className="flex items-center justify-center w-full">
    <div className="flex-1 h-[2px] bg-orange-500/40"></div>
    <div className="w-4 h-4 rounded-full bg-orange-500 mx-6"></div>
    <div className="flex-1 h-[2px] bg-orange-500/40"></div>
  </div>

  {/* Row 4 */}
  <div className="grid grid-cols-2 gap-12 w-full">
    <RoadmapStep item={roadmap[6]} />
    <RoadmapStep item={roadmap[7]} />
  </div>

</div>
</div>

    </section>
  );
}

export default Roadmap;