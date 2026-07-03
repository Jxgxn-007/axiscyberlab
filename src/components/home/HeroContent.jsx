import HeroButtons from "./HeroButtons";
import { Typewriter } from "react-simple-typewriter";

function HeroContent() {
  return (
    <div className="max-w-xl">

      {/* Top Badge */}

      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">

        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>

        <span className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
          Learn • Practice • Defend
        </span>

      </div>

      {/* Main Heading */}

      <h1 className="mt-8 text-4xl lg:text-5xl font-black leading-tight">

        <span className="text-white">
          Master
        </span>

        <br />

        <span className="text-orange-500">
          Cyber Security
        </span>

      </h1>

      {/* Animated Role */}

      <div className="mt-6 h-10">

        <h2 className="text-xl lg:text-2xl font-semibold text-[#D6D9E0]">

          <Typewriter
            words={[
              "Ethical Hacking",
              "SOC Analyst",
              "Web Application Security",
              "Cloud Security",
              "Digital Forensics",
              "Bug Bounty Hunting",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={45}
            delaySpeed={1800}
          />

        </h2>

      </div>

      {/* Description */}

      <p className="mt-6 text-[#A5AFC1] text-base lg:text-lg leading-8 max-w-lg">

        Learn ethical hacking, SOC operations,
        web security, cloud security and digital
        forensics through structured roadmaps,
        practical labs and real-world projects.

      </p>

      {/* Features */}

      <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-8">

        {[
          "Hands-on Labs",
          "Industry Roadmaps",
          "Real Projects",
          "Career Support",
        ].map((item) => (

          <div
            key={item}
            className="flex items-center gap-3"
          >

            <div className="w-2 h-2 rounded-full bg-orange-500"></div>

            <span className="text-[#D6D9E0]">
              {item}
            </span>

          </div>

        ))}

      </div>

      {/* Buttons */}

      <HeroButtons />

      {/* Statistics */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

        {[
          {
            number: "5000+",
            title: "Students",
          },
          {
            number: "40+",
            title: "Courses",
          },
          {
            number: "100+",
            title: "Labs",
          },
          {
            number: "30+",
            title: "Tools",
          },
        ].map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border border-[#223457] bg-[#0B1830] p-5 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1"
          >

            <h3 className="text-2xl font-bold text-orange-500">

              {item.number}

            </h3>

            <p className="text-sm text-[#8E98AA] mt-2">

              {item.title}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default HeroContent;