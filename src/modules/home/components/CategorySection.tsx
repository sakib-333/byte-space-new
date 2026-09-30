import { Link } from "react-router-dom"
import Profiles from "../assets/category/profiles.png"
import { courses } from "@/modules/courses/data/courses"

const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
]

const CategorySection = () => {
    return (
        <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-[1200px]">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-[34px] leading-[1.15] font-semibold tracking-[-0.03em] text-[#090B1D] md:text-[42px]">
                        Discover Your Passion,
                        <br />
                        Build Your Skills
                    </h2>

                    <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-6 text-[#8D9098]">
                        At Bytespace Courses, we bring you closer to life-changing
                        knowledge. Explore a variety of courses across different
                        fields, from technology to the arts, and make a difference
                        in your career and life.
                    </p>
                </div>

                {/* Categories */}
                <div className="mx-auto mt-9 flex max-w-[900px] flex-wrap items-center justify-center gap-x-3 gap-y-4">
                    {categories.map((category, index) => (
                        <button
                            key={category}
                            type="button"
                            className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                                index === 0
                                    ? "bg-[#D7FF00] text-[#151515]"
                                    : "bg-[#F5F5F7] text-[#4F5159] hover:bg-[#ECECEF]"
                            }`}
                        >
                            {category}
                        </button>
                    ))}

                    <button
                        type="button"
                        className="px-1 py-2 text-[13px] font-medium text-[#003BE2]"
                    >
                        + More
                    </button>
                </div>

                {/* Course cards */}
                <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {courses.slice(0, 6).map((course, index) => (
                        <Link to={`/courses/${course.id}`} key={index}>
                            <article
                                className="overflow-hidden rounded-[22px] border border-[#E6E6E6] bg-white p-4"
                            >
                                {/* Course image */}
                                <div className="relative h-[196px] overflow-hidden rounded-[14px] bg-[#F3F3F3]">
                                    <img
                                        src={course.image}
                                        className="h-full w-full object-cover"
                                    />

                                    {/* Image metadata */}
                                    <div className="absolute right-3 bottom-4 left-3 flex items-center justify-between gap-2">
                                        <span className="rounded-full bg-white/75 px-3 py-1.5 text-[11px] text-[#555] backdrop-blur-sm">
                                            {course.lessons}
                                        </span>

                                        <span className="rounded-full bg-white/75 px-3 py-1.5 text-[11px] text-[#555] backdrop-blur-sm">
                                            {course.duration}
                                        </span>

                                        <span className="rounded-full bg-white/75 px-3 py-1.5 text-[11px] text-[#555] backdrop-blur-sm">
                                            {course.comments}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="mt-5 flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <h3 className="truncate text-[20px] font-semibold leading-tight text-[#090909]">
                                            {course.title}
                                        </h3>

                                        <p className="mt-1 text-[11px] text-[#828282]">
                                            by{" "}
                                            <span className="text-[#003BE2]">
                                                {course.creator}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="flex shrink-0 items-center gap-1 text-[17px] text-[#777]">
                                        <span>4.5</span>
                                        <span className="text-[#D1D3D7]">★</span>
                                    </div>
                                </div>

                                {/* Level + students */}
                                <div className="mt-5 flex items-center justify-between gap-3">
                                    <div className="flex h-9 items-center gap-2 rounded-full bg-[#F6F6F7] px-3 text-[12px] text-[#555]">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="size-4"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <rect x="3" y="13" width="3" height="8" rx="1" />
                                            <rect x="9" y="9" width="3" height="12" rx="1" />
                                            <rect x="15" y="4" width="3" height="17" rx="1" />
                                        </svg>

                                        Beginner
                                    </div>

                                    <img src={Profiles} alt="Profiles" />
                                </div>

                                {/* Price */}
                                <div className="mt-5 flex items-baseline">
                                    <span className="text-[21px] font-bold text-[#003BE2]">
                                        $25
                                    </span>

                                    <span className="text-[11px] text-[#777]">
                                        /lifetime
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CategorySection