import {
  Globe,
  Terminal,
  Shield,
  Bug,
  Cloud,
  Database,
  Search,
  ArrowRight,
} from "lucide-react";

const icons = {
  Networking: Globe,
  Linux: Terminal,
  "Security Basics": Shield,
  "Web Security": Globe,
  "Ethical Hacking": Bug,
  "SOC & SIEM": Database,
  "Cloud Security": Cloud,
  "Digital Forensics": Search,
};

function RoadmapStep({ item }) {
  const Icon = icons[item.title] || Shield;

  return (
    <div className="relative group">

      {/* Step Number */}

      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shadow-lg">
        {String(item.id).padStart(2, "0")}
      </div>

      {/* Card */}

      <div
        className="
        h-full
        rounded-2xl
        border
        border-[#223457]
        bg-[#0B1830]
        p-6
        transition-all
        duration-300
        hover:border-orange-500
        hover:-translate-y-3
        hover:shadow-[0_0_30px_rgba(255,107,0,.25)]
        "
      >

        {/* Icon */}

        <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center">

          <Icon
            size={30}
            className="text-orange-500"
          />

        </div>

        {/* Title */}

        <h3 className="mt-6 text-2xl font-bold text-white">

          {item.title}

        </h3>

        {/* Badge */}

        <span
          className="
          inline-block
          mt-3
          px-3
          py-1
          rounded-full
          bg-orange-500/10
          border
          border-orange-500/20
          text-orange-500
          text-xs
          "
        >
          {item.level}
        </span>

        {/* Description */}

        <p className="mt-5 text-gray-400 leading-7">

          Learn fundamentals, practical labs,
          real-world scenarios and industry
          best practices before moving to the
          next level.

        </p>

        {/* Button */}

        <button
          className="
          mt-7
          flex
          items-center
          gap-2
          text-orange-500
          font-semibold
          group-hover:gap-4
          transition-all
          "
        >
          Explore

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
}

export default RoadmapStep;