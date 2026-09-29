const learningPaths = [
    {
        title: "Design",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
                <path d="M4 4l16 16M14 4l6 6M4 14l6 6M16 2l6 6-4 4-6-6 4-4ZM2 16l6 6 4-4-6-6-4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Development",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
                <path d="M8 4H5a1 1 0 0 0-1 1v3M16 4h3a1 1 0 0 1 1 1v3M8 20H5a1 1 0 0 1-1-1v-3M16 20h3a1 1 0 0 0 1-1v-3M9 9l-3 3 3 3M15 9l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "IT & Software",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
                <path d="M4 5h16v11H4V5ZM2 19h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Business",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
                <path d="M5 3h10v18H5V3ZM15 8h4v13h-4M8 7h1M11 7h1M8 11h1M11 11h1M8 15h1M11 15h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Marketing",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
                <path d="M4 7h3M5.5 5.5v3M14 5a7 7 0 1 0 5 12M15 9a3 3 0 1 0 0 6M18 4l2-2M20 8h3M18 20l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Photography",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
                <path d="M4 7h4l1.5-2h5L16 7h4v13H4V7ZM12 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
]

const LearningPathSection = () => {
    return (
        <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-300">
                <div className="text-center">
                    <h2 className="text-[30px] leading-tight font-semibold tracking-[-0.03em] text-[#090B1D] md:text-[34px]">
                        Explore Diverse Learning Paths at Bytespace
                    </h2>

                    <p className="mx-auto mt-4 max-w-190 text-[15px] leading-6 text-[#8D9098]">
                        At Bytespace, we believe in empowering individuals through knowledge.
                        Our diverse range of courses spans various fields, ensuring there's
                        something for everyone. Unleash your potential and explore our carefully
                        curated categories.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
                    {learningPaths.map((item) => (
                        <button
                            key={item.title}
                            type="button"
                            className="flex min-h-33.75 flex-col items-center justify-center rounded-[20px] border border-[#DADCE0] bg-white px-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#C5C7CC] hover:shadow-sm"
                        >
                            <div className="flex size-12 items-center justify-center rounded-full bg-[#D7FF00] text-[#151515]">
                                {item.icon}
                            </div>

                            <span className="mt-3 text-[16px] font-medium text-[#26272D]">
                                {item.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LearningPathSection