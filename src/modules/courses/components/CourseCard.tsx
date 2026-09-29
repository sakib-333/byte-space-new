import Profiles from "../assets/profiles.png"
import type { Course } from "../types/course"

interface CourseCardProps {
    course: Course
}

const CourseCard = ({ course }: CourseCardProps) => {
    return (
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
    )
}

export default CourseCard