export type CourseLevel = "Beginner" | "Intermediate" | "Advanced"

export type Course = {
    id: number
    title: string
    creator: string
    category: string
    image: string
    lessons: number
    duration: string
    comments: number
    rating: number
    level: CourseLevel
    students: string
    price: number
    priceType: string
}