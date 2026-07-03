import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Courses", path: "/courses" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#060D1D]/95 backdrop-blur-lg border-b border-[#223457]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer transition-all duration-300 hover:scale-105">

          <div className="w-20 h-20 rounded-xl overflow-hidden bg-white p-2 shadow-lg shadow-orange-500/20 border border-orange-500/20">
            <img
              src="/logo.jpg"
              alt="Axis Cyber Labs"
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-4xl font-black text-white tracking-wide leading-none">
              AXIS
            </h1>

            <p className="text-orange-500 tracking-[8px] font-semibold text-sm mt-2">
              CYBER LABS
            </p>

            <p className="text-gray-400 text-xs mt-1 hidden lg:block">
              Building Cyber Experts
            </p>
          </div>

        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-orange-500"
                    : "text-white hover:text-orange-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Button */}
        <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/30">
          Get Started
        </button>

      </div>
    </header>
  );
}

export default Navbar;