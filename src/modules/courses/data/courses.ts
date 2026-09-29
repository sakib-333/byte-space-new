import type { Course } from "../types/course"

import Category1 from "../assets/category_1.png"
import Category2 from "../assets/category_2.png"
import Category3 from "../assets/category_3.png"
import Category4 from "../assets/category_4.png"
import Category5 from "../assets/category_5.png"
import Category6 from "../assets/category_6.png"

const baseCourses = [
    {
        title: "Learn Figma from Basic",
        creator: "purepearl studio",
        category: "UI/UX Design",
        image: Category1,
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Beginner" as const,
        students: "26+",
        price: 25,
        priceType: "lifetime",
    },
    {
        title: "Build Digital Asset",
        creator: "purepearl studio",
        category: "Creative Marketing",
        image: Category2,
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Intermediate" as const,
        students: "26+",
        price: 25,
        priceType: "lifetime",
    },
    {
        title: "The Power of Big Data",
        creator: "purepearl studio",
        category: "Data Science",
        image: Category3,
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Advanced" as const,
        students: "26+",
        price: 25,
        priceType: "lifetime",
    },
    {
        title: "Balancing Productivity and Life",
        creator: "purepearl studio",
        category: "Productivity",
        image: Category4,
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Beginner" as const,
        students: "26+",
        price: 25,
        priceType: "lifetime",
    },
    {
        title: "Mastering Money Management",
        creator: "purepearl studio",
        category: "Business",
        image: Category5,
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Intermediate" as const,
        students: "26+",
        price: 25,
        priceType: "lifetime",
    },
    {
        title: "From Idea to Startup Success",
        creator: "purepearl studio",
        category: "Business",
        image: Category6,
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Advanced" as const,
        students: "26+",
        price: 25,
        priceType: "lifetime",
    },
]

export const courses: Course[] = Array.from(
    { length: 90 },
    (_, index) => ({
        id: index + 1,
        ...baseCourses[index % baseCourses.length],
    }),
)