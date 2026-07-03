import {
  ShieldAlert,
  Globe,
  MonitorCog,
  Cloud,
  Search,
  Bug,
  Network,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const icons = {
  ShieldAlert,
  Globe,
  MonitorCog,
  Cloud,
  Search,
  Bug,
  Network,
  Smartphone,
};

function DomainCard({ domain }) {
  const Icon = icons[domain.icon] || ShieldAlert;

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-[#223457]
      bg-[#0B1830]
      p-7
      transition-all
      duration-300
      hover:border-orange-500
      hover:-translate-y-2
      hover:shadow-[0_0_35px_rgba(255,107,0,0.18)]
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Icon */}

      <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">

        <Icon
          size={32}
          className="text-orange-500"
        />

      </div>

      {/* Title */}

      <h3 className="mt-6 text-2xl font-bold text-white">

        {domain.title}

      </h3>

      {/* Description */}

      <p className="mt-4 text-[#A5AFC1] leading-7">

        {domain.description}

      </p>

      {/* Topics */}

      <div className="mt-6 space-y-3">

        {domain.topics.map((topic) => (

          <div
            key={topic}
            className="flex items-center gap-3"
          >

            <div className="w-2 h-2 rounded-full bg-orange-500"></div>

            <span className="text-gray-300 text-sm">

              {topic}

            </span>

          </div>

        ))}

      </div>

      {/* Button */}

      <button
        className="
        mt-8
        flex
        items-center
        gap-2
        text-orange-500
        font-semibold
        group-hover:gap-4
        transition-all
        "
      >
        Learn More

        <ArrowRight size={18} />

      </button>

    </div>
  );
}

export default DomainCard;