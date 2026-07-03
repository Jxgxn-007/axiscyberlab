function ToolCard({ tool }) {
  return (
    <div
      className="
      group
      relative
      rounded-3xl
      border
      border-[#223457]
      bg-[#0B1830]
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-orange-500
      hover:shadow-[0_0_35px_rgba(255,107,0,0.18)]
      overflow-hidden
      "
    >
      {/* Glow */}

      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Logo */}

      <div
        className="
        w-20
        h-20
        rounded-2xl
        bg-[#111E37]
        border
        border-[#223457]
        flex
        items-center
        justify-center
        "
      >
        <img
          src={tool.logo}
          alt={tool.name}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Tool Name */}

      <h3 className="mt-6 text-2xl font-bold text-white">
        {tool.name}
      </h3>

      {/* Category */}

      <span
        className="
        inline-block
        mt-2
        px-3
        py-1
        rounded-full
        bg-orange-500/10
        border
        border-orange-500/20
        text-orange-500
        text-xs
        font-semibold
        "
      >
        {tool.category}
      </span>

      {/* Description */}

      <p className="mt-5 text-[#A5AFC1] leading-7">
        {tool.description}
      </p>

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

        <span className="text-lg">
          →
        </span>
      </button>
    </div>
  );
}

export default ToolCard;