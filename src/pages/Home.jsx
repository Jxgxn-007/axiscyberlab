import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import WhyChoose from "../components/home/WhyChoose";
import Roadmap from "../components/roadmap/Roadmap";
import Domains from "../components/domains/Domains";
import Tools from "../components/tools/Tools";
import LearningJourney from "../components/home/LearningJourney";
import Courses from "../components/courses/Courses";
import Footer from "../components/layout/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      
      <WhyChoose/>
     
      <Roadmap />
     
      <Domains/>
     
      <Tools/>
     
      <Courses/>
     
      <LearningJourney />
      
      <Footer/>
    </>
  );
}

export default Home;