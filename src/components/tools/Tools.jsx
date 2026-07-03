import tools from "./toolsData";
import ToolCard from "./ToolCard";

function Tools() {
  return (
    <section className="relative bg-[#060D1D] py-28 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">

            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>

            <span className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
              Industry Standard Tools
            </span>

          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-white">

            Cyber Security Tools

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[#A5AFC1]">

            Learn the most widely used cybersecurity tools trusted by
            penetration testers, SOC analysts, cloud engineers,
            digital forensic investigators and security professionals.

          </p>

        </div>

        {/* Category Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mt-12">

          {[
            "All",
            "Network",
            "Web Security",
            "Exploitation",
            "SOC / SIEM",
            "Cloud",
            "Forensics",
            "Password",
          ].map((item) => (

            <button
              key={item}
              className="
              px-5
              py-2
              rounded-full
              border
              border-[#223457]
              bg-[#0B1830]
              text-gray-300
              hover:border-orange-500
              hover:text-orange-500
              transition-all
              "
            >
              {item}
            </button>

          ))}

        </div>

        {/* Tool Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {tools.map((tool) => (

            <ToolCard
              key={tool.id}
              tool={tool}
            />

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-3xl border border-[#223457] bg-[#0B1830] p-12 text-center">

          <h3 className="text-4xl font-bold text-white">

            Explore Every Cyber Security Tool

          </h3>

          <p className="mt-5 max-w-2xl mx-auto text-[#A5AFC1] text-lg">

            Discover industry-standard tools with installation guides,
            tutorials, practical labs and real-world use cases.

          </p>

          <button
            className="
            mt-10
            px-8
            py-4
            rounded-xl
            bg-orange-500
            hover:bg-orange-600
            transition-all
            duration-300
            hover:scale-105
            font-semibold
            text-white
            "
          >
            View All Tools
          </button>

        </div>

      </div>

    </section>
  );
}

export default Tools;