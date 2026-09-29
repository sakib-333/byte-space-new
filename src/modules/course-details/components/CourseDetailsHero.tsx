import {
    BarChart3,
    Share2,
    Star,
    Users,
} from "lucide-react"
import type { Course } from "../types/course"
import Thumbnail from "../assets/thumbnail.png"


interface CourseDetailsHeroProps {
    course: Course
}

const CourseDetailsHero = ({ course }: CourseDetailsHeroProps) => {
    return (
        <section
            className="relative overflow-hidden bg-[#003BE2] px-6 pb-16 pt-40 md:pb-20 md:pt-44"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)
                `,
                backgroundSize: "120px 120px",
            }}
        >
            <div className="mx-auto max-w-350">
                {/* Top content */}
                <div className="flex items-start justify-between gap-10">
                    <div className="max-w-[850px]">
                        <h1 className="text-[36px] leading-[1.1] font-semibold tracking-[-0.03em] text-white md:text-[44px]">
                            {course.title}
                        </h1>

                        <p className="mt-3 text-[17px] font-medium text-white md:text-[20px]">
                            Unlock the Power of Digital Creation with Expert Guidance
                        </p>

                        <p className="mt-7 text-[16px] text-white">
                            by{" "}
                            <span className="text-[#D7FF00]">
                                {course.creator}
                            </span>
                        </p>

                        {/* Meta */}
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            {/* Level */}
                            <div className="flex h-10 items-center gap-3 rounded-full bg-white px-5 text-[15px] text-[#292B31]">
                                <BarChart3
                                    className="size-5 text-[#003BE2]"
                                    strokeWidth={2.4}
                                />

                                {course.level}
                            </div>

                            {/* Rating */}
                            <div className="flex h-10 items-center gap-3 rounded-full bg-white px-5 text-[15px] text-[#292B31]">
                                <Star
                                    className="size-5 fill-[#003BE2] text-[#003BE2]"
                                    strokeWidth={2}
                                />

                                <span>
                                    {course.rating} (172 reviews)
                                </span>
                            </div>

                            {/* Students */}
                            <div className="flex h-10 items-center gap-3 rounded-full bg-white px-5 text-[15px] text-[#292B31]">
                                <Users
                                    className="size-5 text-[#003BE2]"
                                    strokeWidth={2.2}
                                />

                                <span>199 Students</span>
                            </div>
                        </div>
                    </div>

                    {/* Share */}
                    <button
                        type="button"
                        className="hidden h-11 shrink-0 items-center gap-3 rounded-full bg-[#D7FF00] px-6 text-[15px] font-medium text-[#161616] transition-transform hover:scale-[1.03] md:flex"
                    >
                        <Share2 className="size-5" strokeWidth={1.8} />
                        Share
                    </button>
                </div>

                {/* Mobile share */}
                <button
                    type="button"
                    className="mt-6 flex h-11 items-center gap-3 rounded-full bg-[#D7FF00] px-6 text-[15px] font-medium text-[#161616] md:hidden"
                >
                    <Share2 className="size-5" strokeWidth={1.8} />
                    Share
                </button>

                {/* Course preview / image */}
                <div className="relative mt-14 aspect-[1.5/1] w-full max-w-[720px] overflow-hidden rounded-[22px] bg-[#ECECEC]">
                    <img
                        src={Thumbnail}
                        alt="Course preview"
                        className="size-full object-cover"
                    />  
                </div>
            </div>
        </section>
    )
}

export default CourseDetailsHero