function HeroStats() {

    const stats = [

        {
            value:"5000+",
            title:"Students"
        },

        {
            value:"40+",
            title:"Courses"
        },

        {
            value:"100+",
            title:"Labs"
        },

        {
            value:"30+",
            title:"Tools"
        }

    ];

    return(

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">

            {

                stats.map((item)=>(

                    <div
                    key={item.title}
                    className="rounded-xl border border-[#223457] bg-[#0B1830] p-5">

                        <h2 className="text-2xl font-bold text-orange-500">

                            {item.value}

                        </h2>

                        <p className="text-gray-400 mt-2">

                            {item.title}

                        </p>

                    </div>

                ))

            }

        </div>

    )

}

export default HeroStats;