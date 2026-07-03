import courses from "./coursesData";
import CourseCard from "./CourseCard";

function Courses() {
  return (
    <section className="bg-[#060D1D] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-flex px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 uppercase tracking-[4px] text-sm font-semibold">
            Courses
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Professional Learning Paths
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
            Industry-focused courses designed to build practical cyber security
            skills through real-world labs and projects.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Courses;