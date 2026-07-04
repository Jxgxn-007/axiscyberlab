function HeroStats() {
  const stats = [
    { number: "15+", title: "Courses" },
    { number: "50+", title: "Tools" },
    { number: "100+", title: "Expert Hrs" },
    { number: "250+", title: "Lab Hrs" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
      {stats.map((item, index) => (
        <div
          key={index}
          className="
          group
          h-36
          rounded-2xl
          border
          border-[#223457]
          bg-[#0B1830]
          flex
          flex-col
          items-center
          justify-center
          cursor-pointer
          transition-all
          duration-300
          hover:bg-orange-500
          hover:border-orange-500
          hover:-translate-y-2
          hover:shadow-[0_0_35px_rgba(255,107,0,.35)]
          "
        >
          <h2
            className="
            text-4xl
            font-black
            text-orange-500
            transition-all
            duration-300
            group-hover:text-white
            "
          >
            {item.number}
          </h2>

          <p
            className="
            mt-2
            text-lg
            font-semibold
            text-white
            transition-all
            duration-300
            "
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;