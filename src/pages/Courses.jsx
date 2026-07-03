import Navbar from "../components/layout/Navbar";
import Courses from "../components/courses/Courses";

function CoursesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen bg-[#060D1D]">
        <Courses />
      </main>
    </>
  );
}

export default CoursesPage;