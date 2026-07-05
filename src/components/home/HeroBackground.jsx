import { Link } from "react-router-dom";

function HeroButtons() {
  return (
    
    <div className="flex gap-4 mt-10">
      <div
  className="
    absolute
    right-0
    top-20
    w-[700px]
    h-[700px]
    rounded-full
    bg-orange-500/5
    blur-[180px]
  "
></div>

      <Link
        to="/roadmap"
        className="px-7 py-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 hover:scale-105 transition-all"
      >
        Start Learning
      </Link>

      <Link
        to="/roadmap"
        className="px-7 py-4 rounded-xl border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white hover:scale-105 transition-all"
      >
        Explore Roadmap
      </Link>

    </div>
  );
}

export default HeroButtons;