import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import WhyChoose from "../components/home/WhyChoose";
import Roadmap from "../components/roadmap/Roadmap";
import Domains from "../components/domains/Domains";
import Tools from "../components/tools/Tools";
import LearningJourney from "../components/home/LearningJourney";
import Courses from "../components/courses/Courses";
import Footer from "../components/layout/Footer";
import AxisDivider from "../components/common/AxisDivider";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AxisDivider/>
      <WhyChoose/>
      <AxisDivider/>
      <Roadmap />
      <AxisDivider/>
      <Domains/>
      <AxisDivider/>
      <Tools/>
      <AxisDivider/>
      <Courses/>
      <AxisDivider/>
      <LearningJourney />
      <AxisDivider/> 
      <Footer/>
    </>
  );
}

export default Home;