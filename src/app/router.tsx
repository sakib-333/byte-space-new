import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/modules/home/pages/HomePage";
import AppLayout from "@/shared/components/layout/AppLayout";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,

        children: [
            {
                path: "/",
                element: <HomePage />,
            },

            {
                path: "*",
                element: <h1>Not Found Page</h1>,
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