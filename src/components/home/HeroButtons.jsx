import { Link } from "react-router-dom";

function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4 mt-10">

      <Link
        to="/roadmap"
        className="px-7 py-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300"
      >
        Start Learning
      </Link>

      <Link
        to="/roadmap"
        className="px-7 py-4 rounded-xl border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300"
      >
        Explore Roadmap
      </Link>

    </div>
  );
}

export default HeroButtons;