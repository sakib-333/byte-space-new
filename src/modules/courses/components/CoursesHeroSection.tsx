const CoursesHeroSection = () => {
    return (
        <section
            className="relative overflow-hidden bg-[#003BE2] px-6 py-20 md:py-24 lg:py-28"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)
                `,
                backgroundSize: "120px 120px",
            }}
        >
            <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
                <h1 className="text-[36px] leading-tight font-semibold tracking-[-0.03em] text-white md:text-[42px]">
                    Find Your Next Course
                </h1>

                <div className="mt-8 flex w-full max-w-[625px] flex-col gap-4 sm:flex-row sm:items-center">
                    {/* Search */}
                    <div className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-6">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="size-5 shrink-0 text-[#8D9098]"
                            aria-hidden="true"
                        >
                            <path
                                d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full bg-transparent text-[16px] text-[#202126] outline-none placeholder:text-[#94979F]"
                        />
                    </div>

                    {/* Course filter */}
                    <button
                        type="button"
                        className="flex h-[48px] shrink-0 items-center justify-center gap-4 rounded-full bg-[#D7FF00] px-7 text-[16px] font-medium text-[#141414] transition-colors hover:bg-[#C8EF00]"
                    >
                        Courses

                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="size-4"
                            aria-hidden="true"
                        >
                            <path
                                d="m5 7.5 5 5 5-5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CoursesHeroSection