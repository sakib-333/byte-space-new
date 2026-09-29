import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/modules/home/pages/HomePage";
import AppLayout from "@/shared/components/layout/AppLayout";
import CoursesPage from "@/modules/courses/pages/CoursesPage";
import NotFoundPage from "@/modules/not-found/NotFoundPage";
import CourseDetailsPage from "@/modules/course-details/pages/CourseDetailsPage";
import CreatorsPage from "@/modules/creators/pages/CreatorsPage";
import CreatorDetailsPage from "@/modules/creator-details/pages/CreatorDetailsPage";
import AuthLayout from "@/shared/components/layout/AuthLayout";
import RegisterPage from "@/modules/auth/pages/RegisterPage";

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
                element: <CourseDetailsPage />
            },

            {
                path: "/creators",
                element: <CreatorsPage />
            },

            {
                path: "/creators/:creatorId",
                element: <CreatorDetailsPage />
            },

            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },

    {
        element: <AuthLayout />,

        children: [
            {
                path: "/login",
                element: <h1>LoginPage</h1>,
            },

            {
                path: "/register",
                element: <RegisterPage />,
            },
        ],
    },
]);