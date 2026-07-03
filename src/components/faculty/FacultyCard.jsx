import { ArrowRight, Building2 } from "lucide-react";

function FacultyCard({ member }) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-[#223457]
      bg-[#0B1830]
      p-8
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-orange-500
      hover:shadow-[0_0_35px_rgba(249,115,22,.25)]
      "
    >
      {/* Orange Glow */}

      <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Faculty Image */}

      <div className="flex justify-center">

        <div
          className="
          w-36
          h-36
          rounded-full
          border-4
          border-orange-500
          overflow-hidden
          transition-all
          duration-500
          group-hover:scale-105
          "
        >
          <img
            src={member.image}
            alt={member.name}
            className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
            "
          />
        </div>

      </div>

      {/* Name */}

      <h2
        className="
        mt-8
        text-2xl
        font-bold
        text-center
        text-white
        transition-colors
        duration-300
        group-hover:text-orange-500
        "
      >
        {member.name}
      </h2>

      {/* Designation */}

      <p className="mt-2 text-center text-orange-500 font-semibold">
        {member.designation}
      </p>

      {/* Company */}

      <div className="mt-3 flex items-center justify-center gap-2 text-gray-400">

        <Building2 size={16} />

        <span>{member.company}</span>

      </div>

      {/* Expertise */}

      <div className="flex flex-wrap justify-center gap-2 mt-6">

        {member.expertise.map((skill) => (

          <span
            key={skill}
            className="
            px-3
            py-1
            rounded-full
            bg-orange-500/10
            border
            border-orange-500/20
            text-orange-400
            text-xs
            font-medium
            "
          >
            {skill}
          </span>

        ))}

      </div>

      {/* Description */}

      <p
        className="
        mt-6
        text-center
        text-gray-400
        leading-7
        transition-colors
        duration-300
        group-hover:text-gray-300
        "
      >
        {member.description}
      </p>

      {/* Button */}

      <button
        className="
        mt-8
        mx-auto
        flex
        items-center
        gap-2
        text-orange-500
        font-semibold
        transition-all
        duration-300
        group-hover:gap-4
        "
      >
        View Profile

        <ArrowRight size={18} />

      </button>

    </div>
  );
}

export default FacultyCard;