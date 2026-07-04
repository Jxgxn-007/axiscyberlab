import domains from "./domainsData";
import { Link } from "react-router-dom";
import DomainCard from "./DomainCard";
function Domains() {
  return (
    <section className="relative bg-[#060D1D] py-28 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">

            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>

            <span className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
              Explore Domains
            </span>

          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-white">

            Cyber Security Domains

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[#A5AFC1]">

            Discover different cybersecurity career paths and
            master the skills required to become an industry-ready
            cyber security professional.

          </p>

        </div>

        {/* Domain Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {domains.map((domain) => (

            <DomainCard
              key={domain.id}
              domain={domain}
            />

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-3xl border border-[#223457] bg-[#0B1830] p-12 text-center">

          <h3 className="text-4xl font-bold text-white">
  Need Guidance?
</h3>

<p className="mt-5 max-w-2xl mx-auto text-[#A5AFC1] text-lg">
  Our experts are here to help you choose the right
  cyber security learning path based on your interests,
  career goals and experience level.
</p>


          <Link to="/contact">
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
    Contact Us
  </button>
</Link>

        </div>

      </div>

    </section>
  );
}

export default Domains;