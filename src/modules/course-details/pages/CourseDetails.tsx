import { useParams } from "react-router-dom"
import CourseDetailsHero from "../components/CourseDetailsHero"
import { courses } from "@/modules/courses/data/courses"
import NotFound from "../components/NotFound"

const CourseDetails = () => {
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
        </div>
    )
}

export default CourseDetails