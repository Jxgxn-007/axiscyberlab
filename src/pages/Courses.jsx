import Navbar from "../components/layout/Navbar";
import Courses from "../components/courses/Courses";
import PageHero from "../components/common/PageHero";
function CoursesPage() {
  return (
    <>
      <Navbar />
      <PageHero
  badge="COURSES"
  title="Industry"
  highlight="Learning Paths"
  description="Master ethical hacking, SOC operations, cloud security, digital forensics and more with structured courses."
/>
      <main className="pt-24 min-h-screen bg-[#060D1D]">
        <Courses />
      </main>
    </>
  );
}

export default CoursesPage;