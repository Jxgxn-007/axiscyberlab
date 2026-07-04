import {
  Search,
  BookOpen,
  FlaskConical,
  Code2,
  Award,
  Briefcase,
} from "lucide-react";

const steps = [
  {
    icon: <Search size={30} />,
    title: "Choose a Domain",
    desc: "Select the cyber security path that matches your interests and career goals.",
  },
  {
    icon: <BookOpen size={30} />,
    title: "Learn the Fundamentals",
    desc: "Build a strong foundation through structured courses and expert guidance.",
  },
  {
    icon: <FlaskConical size={30} />,
    title: "Practice in Labs",
    desc: "Strengthen your skills with practical hands-on cybersecurity labs.",
  },
  {
    icon: <Code2 size={30} />,
    title: "Build Real Projects",
    desc: "Work on real-world security projects to gain practical experience.",
  },
  {
    icon: <Award size={30} />,
    title: "Earn Certifications",
    desc: "Prepare for industry-recognized cybersecurity certifications.",
  },
  {
    icon: <Briefcase size={30} />,
    title: "Launch Your Career",
    desc: "Become job-ready with resume guidance, mentoring and interview preparation.",
  },
];

function LearningJourney() {
  return (
    <section className="bg-[#060D1D] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Learning Journey
          </span>

          <h2 className="mt-5 text-5xl font-black text-white">
            Your Cyber Security Roadmap
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-[#A5AFC1] leading-8">
            Follow a structured learning path from beginner to industry-ready
            cyber security professional.
          </p>

        </div>

        <div className="mt-20 relative">

          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-orange-500/30 hidden lg:block -translate-x-1/2"></div>

          <div className="space-y-14">

            {steps.map((step, index) => (

              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col gap-10`}
              >

                <div className="flex-1">

                  <div className="rounded-3xl bg-[#0B1830] border border-[#223457] p-8 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300">

                    <div className="text-orange-500">
                      {step.icon}
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[#A5AFC1] leading-8">
                      {step.desc}
                    </p>

                  </div>

                </div>

                <div className="hidden lg:flex w-16 h-16 rounded-full bg-orange-500 items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                <div className="flex-1"></div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default LearningJourney;