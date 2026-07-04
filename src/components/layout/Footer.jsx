import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#050B18] border-t border-[#223457]">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-4">

              <img
                src="/logo.jpg"
                alt="Axis Cyber Labs"
                className="w-14 h-14 rounded-xl"
              />

              <div>

                <h2 className="text-3xl font-black tracking-[4px] text-white">
                  AXIS
                </h2>

                <p className="text-orange-500 font-bold tracking-[3px] text-sm uppercase">
                  Cyber Labs
                </p>

              </div>

            </div>

            <p className="mt-6 text-gray-400 leading-7">

              Learn cyber security through practical labs,
              industry roadmaps and real-world projects.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-bold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 mt-6">

              <Link to="/" className="text-gray-400 hover:text-orange-500">
                Home
              </Link>

              <Link to="/about" className="text-gray-400 hover:text-orange-500">
                About
              </Link>

              <Link to="/services" className="text-gray-400 hover:text-orange-500">
                Services
              </Link>

              <Link to="/courses" className="text-gray-400 hover:text-orange-500">
                Courses
              </Link>

              <Link to="/contact" className="text-gray-400 hover:text-orange-500">
                Contact
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-white text-xl font-bold">
              Resources
            </h3>

            <div className="flex flex-col gap-3 mt-6">

              <Link to="/roadmap" className="text-gray-400 hover:text-orange-500">
                Roadmap
              </Link>

              <Link to="/domains" className="text-gray-400 hover:text-orange-500">
                Domains
              </Link>

              <Link to="/tools" className="text-gray-400 hover:text-orange-500">
                Tools
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-5 mt-6">

              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                axiscyberlab@gmail.com
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                +91 99655 65589
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                Coimbatore & Madurai
              </div>

            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/axiscyberlab"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#111E37] hover:bg-orange-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/company/axis-cyberlabs/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#111E37] hover:bg-orange-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-[#223457] text-center text-gray-500">

          © {new Date().getFullYear()} Axis Cyber Labs. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;