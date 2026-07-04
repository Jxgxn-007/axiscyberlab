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

        <div className="mt-24 max-w-5xl mx-auto">

          <div
            className="
rounded-3xl
border
border-[#223457]
bg-[#0B1830]
px-10
py-14
min-h-[360px]
flex
flex-col
justify-center
items-center
text-center
"
          >

            <h3 className="text-4xl lg:text-5xl font-black text-white">

              Learn From Industry Leaders

            </h3>

            <p className="mt-6 max-w-3xl text-[#A5AFC1] text-lg leading-8">

              Our faculty members and honorary guest lecturers are committed
              to sharing practical knowledge, real-world cyber security
              experience and industry best practices to prepare you for a
              successful career.

            </p>

            <a
              href="https://www.linkedin.com/company/axis-cyberlabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              mt-10
              inline-flex
              items-center
              justify-center
              px-8
              py-4
              rounded-xl
              bg-orange-500
              hover:bg-orange-600
              hover:scale-105
              transition-all
              duration-300
              font-semibold
              text-white
              "
            >
              Join Our Community
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Faculty;