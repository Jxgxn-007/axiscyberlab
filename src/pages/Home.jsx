import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Roadmap from "../components/roadmap/Roadmap";
import Domains from "../components/domains/Domains";
import Tools from "../components/tools/Tools";
import Courses from "../components/courses/Courses";
import Faculty from "../components/faculty/Faculty";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Roadmap />
      <Domains/>
      <Tools/>
      <Courses/>
      <Faculty/>
    </>
  );
}

export default Home;