import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex min-h-[500px] items-center justify-center">
            <div className="text-center">
                <h1 className="text-3xl font-semibold">
                    Course not found
                </h1>

                <Link
                    to="/courses"
                    className="mt-5 inline-block text-[#003BE2]"
                >
                    Back to courses
                </Link>
            </div>
        </div>
    )
}

export default NotFound