import Navbar from "../components/layout/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
} from "lucide-react";

function Contact() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_ebcmz2x",
      "template_q08lw6s",
      form.current,
      "klzijzAVHr2KXtGLO"
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message!");
    });
};
  return (
    <>
    
      <Navbar />

      <main className="bg-[#060D1D] text-white min-h-screen">
        

        {/* Hero */}

        <section className="pt-36 pb-20">

          <div className="max-w-7xl mx-auto px-6 text-center">

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">

              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>

              <span className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
                Contact Us
              </span>

            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-black">

              Get In
              <span className="text-orange-500"> Touch</span>

            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-400">

              Have questions? Need guidance? We'd love to hear from you.
              Reach out to Axis Cyber Labs anytime.

            </p>

          </div>

        </section>

        {/* Contact Section */}

        <section className="pb-28">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

            {/* Left */}

            <div className="space-y-6">

              <div className="flex gap-5 p-6 rounded-2xl bg-[#0B1830] border border-[#223457]">

                <Mail className="text-orange-500" />

                <div>

                  <h3 className="font-bold text-xl">Email</h3>

                  <a
  href="mailto:axiscyberlab@gmail.com"
  className="text-gray-400 hover:text-orange-500 transition"
>
  axiscyberlab@gmail.com
</a>
                </div>

              </div>

              <div className="flex gap-5 p-6 rounded-2xl bg-[#0B1830] border border-[#223457]">

                <Phone className="text-orange-500" />

                <div>

                  <h3 className="font-bold text-xl">Phone</h3>

                  <a
  href="tel:+919965565589"
  className="text-gray-400 hover:text-orange-500 transition"
>
  +91 99655 65589
</a>

                </div>

              </div>

              <div className="flex gap-5 p-6 rounded-2xl bg-[#0B1830] border border-[#223457]">

                <MapPin className="text-orange-500" />

                <div>

                  <h3 className="font-bold text-xl">Location</h3>

                  <p className="text-gray-400">
  Coimbatore & Madurai, Tamil Nadu, India
</p>

                </div>

              </div>

              <div className="flex gap-5 p-6 rounded-2xl bg-[#0B1830] border border-[#223457]">

                <Globe className="text-orange-500" />

                <div>

                  <h3 className="font-bold text-xl">Website</h3>

                  <p className="text-gray-400">
  Official Website - Coming Soon
</p>

                </div>

              </div>

              {/* Social */}

              <div className="flex gap-5 mt-8">

  <a
    href="https://www.linkedin.com/company/axis-cyberlabs/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      p-4
      rounded-xl
      bg-[#0B1830]
      border
      border-[#223457]
      hover:border-orange-500
      hover:bg-orange-500
      hover:text-white
      transition-all
      duration-300
    "
  >
    <FaLinkedin size={22} />
  </a>

  <a
    href="https://github.com/axiscyberlab"
    target="_blank"
    rel="noopener noreferrer"
    className="
      p-4
      rounded-xl
      bg-[#0B1830]
      border
      border-[#223457]
      hover:border-orange-500
      hover:bg-orange-500
      hover:text-white
      transition-all
      duration-300
    "
  >
    <FaGithub size={22} />
  </a>

</div>
</div>

            {/* Right */}

            <div className="rounded-3xl border border-[#223457] bg-[#0B1830] p-8">

              <h2 className="text-3xl font-bold">
                Send us a Message
              </h2>

              <form
  ref={form}
  onSubmit={sendEmail}
  className="space-y-5 mt-8"
>
<input
  type="text"
  name="from_name"
  placeholder="Full Name"
  required
  className="w-full p-4 rounded-xl bg-[#111E37] border border-[#223457] outline-none focus:border-orange-500"
/>

                <input
  type="email"
  name="from_email"
  placeholder="Email Address"
  required
  className="w-full p-4 rounded-xl bg-[#111E37] border border-[#223457] outline-none focus:border-orange-500"
/>

               <input
  type="text"
  name="subject"
  placeholder="Subject"
  required
  className="w-full p-4 rounded-xl bg-[#111E37] border border-[#223457] outline-none focus:border-orange-500"
/>

                <textarea
  name="message"
  rows="6"
  placeholder="Your Message"
  required
  className="w-full p-4 rounded-xl bg-[#111E37] border border-[#223457] outline-none focus:border-orange-500"
></textarea>

                <button
                type='submit'
                  className="
                  w-full
                  flex
                  justify-center
                  items-center
                  gap-2
                  py-4
                  rounded-xl
                  bg-orange-500
                  hover:bg-orange-600
                  transition
                  font-semibold
                  "
                >
                  Send Message
                  <Send size={18} />
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Contact;