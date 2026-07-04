import {
  ShieldCheck,
  GraduationCap,
  Laptop,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <GraduationCap size={28} />,
    title: "Industry Designed Curriculum",
    desc: "Structured learning paths designed for beginners and professionals."
  },
  {
    icon: <Laptop size={28} />,
    title: "Hands-on Practical Labs",
    desc: "Learn by practicing real-world cyber security scenarios."
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Real World Projects",
    desc: "Build practical projects that strengthen your portfolio."
  },
  {
    icon: <Users size={28} />,
    title: "Expert Mentorship",
    desc: "Get guidance from experienced cyber security professionals."
  },
];

function WhyChoose() {
  return (
    <section className="bg-[#060D1D] py-28">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-5xl font-black text-white">
            Learn Cyber Security
            <span className="text-orange-500"> The Right Way.</span>
          </h2>

          <p className="mt-6 text-[#A5AFC1] leading-8">
            Axis Cyber Labs helps learners build practical cyber security
            skills through structured roadmaps, hands-on labs,
            industry projects and expert mentorship.
          </p>

        </div>

        {/* Right */}

        <div className="grid sm:grid-cols-2 gap-6">

          {features.map((item) => (

            <div
              key={item.title}
              className="
              rounded-2xl
              border
              border-[#223457]
              bg-[#0B1830]
              p-6
              hover:border-orange-500
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <div className="text-orange-500">
                {item.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-[#A5AFC1] leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;