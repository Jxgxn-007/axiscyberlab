import { Clock3, BookOpen, ArrowRight } from "lucide-react";

function CourseCard({ course }) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-[#223457]
      bg-[#0B1830]
      p-7
      hover:border-orange-500
      hover:-translate-y-2
      transition-all
      duration-300
      hover:shadow-[0_0_35px_rgba(255,107,0,.15)]
      "
    >
      <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-semibold">
        {course.level}
      </span>

      <h3 className="mt-5 text-2xl font-bold text-white">
        {course.title}
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        {course.description}
      </p>

      <div className="flex gap-6 mt-6 text-gray-300 text-sm">

        <div className="flex items-center gap-2">
          <Clock3 size={18}/>
          {course.duration}
        </div>

        <div className="flex items-center gap-2">
          <BookOpen size={18}/>
          {course.lessons} Lessons
        </div>

      </div>

      <button
        className="
        mt-8
        flex
        items-center
        gap-2
        text-orange-500
        font-semibold
        group-hover:gap-4
        transition-all
        "
      >
        View Course

        <ArrowRight size={18}/>
      </button>

    </div>
  );
}

export default CourseCard;  