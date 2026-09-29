import { useParams } from "react-router-dom"
import CourseDetailsHero from "../components/CourseDetailsHero"
import { courses } from "@/modules/courses/data/courses"
import NotFound from "../components/NotFound"
import CourseDetailsTabs from "../components/CourseDetailsTabs"

const CourseDetailsPage = () => {
    const { courseId } = useParams()
    
    const course = courses.find((course) => course.id === Number(courseId))

    if (!course) {
        return (
            <NotFound />
        )
    }
    return (
        <div>
            <CourseDetailsHero course={course} />
            <CourseDetailsTabs />
        </div>
    )
}

export default CourseDetailsPage