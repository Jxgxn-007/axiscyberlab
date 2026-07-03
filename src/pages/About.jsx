import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";
import { Shield, Target, Eye, Award } from "lucide-react";
import Faculty from "../components/faculty/Faculty";

function About() {
  return (
    <>
      <Navbar />

      <main className="bg-[#060D1D] text-white">

        {/* Hero */}

        <section className="pt-36 pb-24">

          <div className="max-w-7xl mx-auto px-6 text-center">

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">

              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>

              <span className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
                About Us
              </span>

            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-black">

              Building The Future Of
              <span className="text-orange-500"> Cyber Security</span>

            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-400">

              Axis Cyber Labs is a modern cybersecurity learning platform
              designed to help students, professionals and security
              enthusiasts master cyber security through practical learning,
              real-world labs and industry-focused roadmaps.

            </p>

          </div>

        </section>

        {/* Mission & Vision */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">

            <div className="rounded-3xl border border-[#223457] bg-[#0B1830] p-8">

              <Target className="text-orange-500" size={42} />

              <h2 className="mt-6 text-3xl font-bold">
                Our Mission
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                To provide accessible, practical and industry-standard
                cybersecurity education that prepares learners for real-world
                security challenges.

              </p>

            </div>

            <div className="rounded-3xl border border-[#223457] bg-[#0B1830] p-8">

              <Eye className="text-orange-500" size={42} />

              <h2 className="mt-6 text-3xl font-bold">
                Our Vision
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                To become one of the most trusted cyber security learning
                platforms by empowering future ethical hackers, SOC analysts
                and cloud security professionals.

              </p>

            </div>

          </div>

        </section>

        {/* Why Choose Us */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <h2 className="text-5xl font-black">

                Why Choose
                <span className="text-orange-500"> Axis Cyber Labs?</span>

              </h2>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

              {[
                {
                  icon: <Shield size={40} />,
                  title: "Hands-on Labs",
                  text: "Practice with real cyber security labs."
                },
                {
                  icon: <Award size={40} />,
                  title: "Industry Experts",
                  text: "Learn from experienced professionals."
                },
                {
                  icon: <Target size={40} />,
                  title: "Career Focused",
                  text: "Job-ready roadmaps and projects."
                },
                {
                  icon: <Eye size={40} />,
                  title: "Continuous Learning",
                  text: "Stay updated with latest technologies."
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="rounded-3xl border border-[#223457] bg-[#0B1830] p-8 text-center hover:border-orange-500 hover:-translate-y-2 transition-all duration-300"
                >

                  <div className="text-orange-500 flex justify-center">

                    {item.icon}

                  </div>

                  <h3 className="mt-6 text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-gray-400 leading-7">

                    {item.text}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>
        <Faculty/>
        {/* CTA */}

        <section className="pb-28">

          <div className="max-w-5xl mx-auto px-6">

            <div className="rounded-3xl border border-[#223457] bg-[#0B1830] p-14 text-center">

              <h2 className="text-4xl font-bold">

                Ready To Start Your Cyber Security Journey?

              </h2>

              <p className="mt-6 text-lg text-gray-400">

                Join thousands of learners and master cyber security
                through structured roadmaps, practical labs and
                industry-standard tools.

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
                  Start Learning
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

export default About;