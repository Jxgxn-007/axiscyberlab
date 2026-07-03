import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Bug,
  GraduationCap,
  Briefcase,
  Cloud,
  Users,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <GraduationCap size={42} />,
      title: "Cyber Security Training",
      description:
        "Industry-focused courses covering networking, ethical hacking, SOC, cloud security and digital forensics.",
    },
    {
      icon: <Bug size={42} />,
      title: "Penetration Testing",
      description:
        "Identify vulnerabilities in web applications and networks through professional penetration testing techniques.",
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Security Awareness",
      description:
        "Interactive awareness programs to educate individuals and organizations against cyber threats.",
    },
    {
      icon: <Cloud size={42} />,
      title: "Cloud Security",
      description:
        "Secure AWS and Azure environments with best practices, IAM, monitoring and cloud security solutions.",
    },
    {
      icon: <Briefcase size={42} />,
      title: "Career Mentorship",
      description:
        "Resume reviews, interview preparation, certification guidance and career roadmaps for aspiring professionals.",
    },
    {
      icon: <Users size={42} />,
      title: "Corporate Workshops",
      description:
        "Hands-on cybersecurity workshops and customized training sessions for colleges and organizations.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#060D1D] text-white min-h-screen">

        {/* Hero */}

        <section className="pt-36 pb-24">

          <div className="max-w-7xl mx-auto px-6 text-center">

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">

              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>

              <span className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
                Our Services
              </span>

            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-black">

              Professional
              <span className="text-orange-500"> Cyber Security Services</span>

            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-400">

              We provide practical cybersecurity education, consulting,
              mentoring and enterprise security services to help
              individuals and organizations stay secure.

            </p>

          </div>

        </section>

        {/* Services */}

        <section className="pb-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {services.map((service) => (

                <div
                  key={service.title}
                  className="
                  group
                  rounded-3xl
                  border
                  border-[#223457]
                  bg-[#0B1830]
                  p-8
                  hover:border-orange-500
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  hover:shadow-[0_0_30px_rgba(255,107,0,.15)]
                  "
                >

                  <div className="text-orange-500">
                    {service.icon}
                  </div>

                  <h2 className="mt-6 text-2xl font-bold">
                    {service.title}
                  </h2>

                  <p className="mt-5 text-gray-400 leading-8">
                    {service.description}
                  </p>

                  <Link
                    to="/courses"
                    className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    text-orange-500
                    font-semibold
                    group-hover:gap-4
                    transition-all
                    "
                  >
                    Learn More →
                  </Link>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="pb-28">

          <div className="max-w-5xl mx-auto px-6">

            <div className="rounded-3xl border border-[#223457] bg-[#0B1830] p-14 text-center">

              <h2 className="text-4xl font-bold">
                Ready to Secure Your Future?
              </h2>

              <p className="mt-6 text-lg text-gray-400">

                Join Axis Cyber Labs and gain practical cyber security
                skills through structured learning, expert mentorship,
                and real-world projects.

              </p>

              <div className="flex flex-wrap justify-center gap-5 mt-10">

                <Link
                  to="/courses"
                  className="
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
                  Get Started
                </Link>

                <Link
                  to="/roadmap"
                  className="
                  px-8
                  py-4
                  rounded-xl
                  border
                  border-orange-500
                  text-orange-500
                  hover:bg-orange-500
                  hover:text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  font-semibold
                  "
                >
                  View Roadmap
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Services;