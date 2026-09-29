import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/modules/home/pages/HomePage";
import AppLayout from "@/shared/components/layout/AppLayout";
import CoursesPage from "@/modules/courses/pages/CoursesPage";
import NotFoundPage from "@/modules/not-found/NotFoundPage";
import CourseDetails from "@/modules/course-details/pages/CourseDetails";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,

        children: [
            {
                path: "/",
                element: <HomePage />,
            },

            {
                path: "/courses",
                element: <CoursesPage />
            },

            {
                path: "/courses/:courseId",
                element: <CourseDetails />
            },

            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },

    {
        element: <h1>Auth Layout</h1>,

        children: [
            {
                path: "/login",
                element: <h1>LoginPage</h1>,
            },

            {
                path: "/register",
                element: <h1>RegisterPage</h1>,
            },
        ],
    },
]);