function RoadmapCard({ item }) {
  return (
    <div className="bg-[#0B1830] border border-[#223457] rounded-2xl p-6 hover:border-orange-500 transition-all duration-300">

      <div className="text-5xl mb-4">
        {item.icon}
      </div>

      <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-semibold mb-4">
        {item.level}
      </span>

      <h3 className="text-2xl font-bold text-white mb-4">
        {item.title}
      </h3>

      <p className="text-gray-400 leading-7">
        {item.description}
      </p>

      <button className="mt-6 text-orange-500 font-semibold hover:translate-x-2 transition-all">
        Explore →
      </button>

    </div>
  );
}

export default RoadmapCard;