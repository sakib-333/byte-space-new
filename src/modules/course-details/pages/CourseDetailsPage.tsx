import { useParams } from "react-router-dom"

import { courses } from "@/modules/courses/data/courses"

import CourseDetailsHero from "../components/CourseDetailsHero"
import CourseDetailsTabs from "../components/CourseDetailsTabs"
import CourseEnrollmentCard from "../components/CourseEnrollmentCard"
import NotFound from "../components/NotFound"
import usePageTitle from "@/shared/hooks/usePageTitle"

const CourseDetailsPage = () => {
    const { courseId } = useParams()
    usePageTitle("Course Details")

    const course = courses.find(
        (course) => course.id === Number(courseId),
    )

    if (!course) {
        return <NotFound />
    }

    return (
        <main>
            {/* Hero contains thumbnail */}
            <CourseDetailsHero course={course} />

            {/* Tabs + overlapping enrollment card */}
            <section className="relative bg-white px-6">
                <div className="mx-auto grid max-w-300 items-start gap-12 lg:grid-cols-[minmax(0,720px)_400px] lg:justify-between">

                    {/* Tabs */}
                    <div className="order-2 min-w-0 py-16 lg:order-1 lg:py-20">
                        <CourseDetailsTabs />
                    </div>

                    {/* Enrollment */}
                    <aside
                        className="order-1 z-30 pt-10 lg:order-2 lg:-mt-136 lg:sticky lg:top-28 lg:self-start lg:pt-0"
                    >
                        <CourseEnrollmentCard />
                    </aside>

                </div>
            </section>
        </main>
    )
}

export default CourseDetailsPage