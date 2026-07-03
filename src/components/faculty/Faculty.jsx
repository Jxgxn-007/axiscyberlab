import faculty from "./facultyData";
import FacultyCard from "./FacultyCard";

function Faculty() {
  return (
    <section className="relative bg-[#060D1D] py-28 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-orange-500/10 blur-[180px]"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-[180px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">

            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>

            <span className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
              Meet Our Faculty
            </span>

          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-white">

            Honorary Guest Lecturers

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[#A5AFC1]">

            Learn directly from experienced cyber security professionals,
            ethical hackers, SOC analysts and cloud security experts who
            bring real-world knowledge into every learning experience.

          </p>

        </div>

        {/* Faculty Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">

          {faculty.map((member) => (

            <FacultyCard
              key={member.id}
              member={member}
            />

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-3xl border border-[#223457] bg-[#0B1830] p-12 text-center">

          <h3 className="text-4xl font-bold text-white">

            Learn From Industry Leaders

          </h3>

          <p className="mt-5 max-w-2xl mx-auto text-[#A5AFC1] text-lg leading-8">

            Our faculty members and honorary guest lecturers are committed
            to sharing practical knowledge, real-world cyber security
            experience and industry best practices to prepare you for a
            successful career.

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
            Join Our Community
          </button>

        </div>

      </div>

    </section>
  );
}

export default Faculty;