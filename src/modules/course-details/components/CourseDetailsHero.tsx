import {
    BarChart3,
    Play,
    Share2,
    Star,
    Users,
} from "lucide-react"
import ThumbnailImage from "../assets/thumbnail.png"
import type { Course } from "@/modules/courses/types/course"

interface CourseDetailsHeroProps {
    course: Course
}

const CourseDetailsHero = ({
    course,
}: CourseDetailsHeroProps) => {
    return (
        <section
            className="relative overflow-hidden bg-[#003BE2] px-6 pb-16 pt-40"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)
                `,
                backgroundSize: "120px 120px",
            }}
        >
            <div className="mx-auto max-w-300">
                {/* Top content */}
                <div className="flex items-start justify-between gap-10">
                    <div className="max-w-212.5">
                        <h1 className="text-[36px] leading-[1.1] font-semibold tracking-[-0.03em] text-white md:text-[44px]">
                            {course.title}
                        </h1>

                        <p className="mt-3 text-[17px] font-medium text-white md:text-[20px]">
                            Unlock the Power of Digital Creation with Expert
                            Guidance
                        </p>

                        <p className="mt-7 text-[16px] text-white">
                            by{" "}
                            <span className="text-[#D7FF00]">
                                {course.creator}
                            </span>
                        </p>

                        {/* Course information */}
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <div className="flex h-10 items-center gap-3 rounded-full bg-white px-5 text-[15px] text-[#292B31]">
                                <BarChart3
                                    className="size-5 text-[#003BE2]"
                                    strokeWidth={2.3}
                                />

                                {course.level}
                            </div>

                            <div className="flex h-10 items-center gap-3 rounded-full bg-white px-5 text-[15px] text-[#292B31]">
                                <Star
                                    className="size-5 fill-[#003BE2] text-[#003BE2]"
                                    strokeWidth={2}
                                />

                                <span>
                                    {course.rating} (172 reviews)
                                </span>
                            </div>

                            <div className="flex h-10 items-center gap-3 rounded-full bg-white px-5 text-[15px] text-[#292B31]">
                                <Users
                                    className="size-5 text-[#003BE2]"
                                    strokeWidth={2}
                                />

                                <span>199 Students</span>
                            </div>
                        </div>
                    </div>

                    {/* Share */}
                    <button
                        type="button"
                        className="hidden h-11 shrink-0 items-center gap-3 rounded-full bg-[#D7FF00] px-6 text-[15px] font-medium text-[#161616] transition-colors hover:bg-[#C8EF00] md:flex"
                    >
                        <Share2
                            className="size-5"
                            strokeWidth={1.8}
                        />

                        Share
                    </button>
                </div>

                {/* Mobile share */}
                <button
                    type="button"
                    className="mt-6 flex h-11 items-center gap-3 rounded-full bg-[#D7FF00] px-6 text-[15px] font-medium text-[#161616] md:hidden"
                >
                    <Share2
                        className="size-5"
                        strokeWidth={1.8}
                    />

                    Share
                </button>

                {/* Thumbnail */}
                <div className="relative mt-14 aspect-3/2 w-full max-w-180 overflow-hidden rounded-[22px] bg-[#EAEAEA] lg:h-120 lg:aspect-auto">
                    <img src={ThumbnailImage} alt="Course Thumbnail" className="h-full w-full object-cover" />

                    {/* Play button */}
                    <button
                        type="button"
                        aria-label="Play course preview"
                        className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[18px] bg-[#8F756C]/90 backdrop-blur-sm"
                    >
                        <span className="flex size-12 items-center justify-center rounded-full bg-white/90">
                            <Play
                                className="ml-1 size-6 fill-[#8F756C] text-[#8F756C]"
                                strokeWidth={1.5}
                            />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CourseDetailsHero