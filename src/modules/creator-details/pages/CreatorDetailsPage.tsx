import { useMemo, useState } from "react"

import { courses } from "@/modules/courses/data/courses"
import CourseCard from "@/modules/courses/components/CourseCard"

import CreatorDetailsHero from "../components/CreatorDetailsHero"
import CreatorCourseFilters from "../components/CreatorCourseFilters"
import usePageTitle from "@/shared/hooks/usePageTitle"

const CreatorDetailsPage = () => {
    const [level, setLevel] = useState("All")
    const [category, setCategory] = useState("All")
    const [sort, setSort] = useState("relevant")
    usePageTitle("Creator Details")

    const creatorCourses = useMemo(
        () => courses.slice(0, 6),
        [],
    )

    /*
     * Get categories dynamically from
     * this creator's courses.
     */
    const categories = useMemo(() => {
        return [
            ...new Set(
                creatorCourses.map(
                    (course) => course.category,
                ),
            ),
        ]
    }, [creatorCourses])

    const filteredCourses = useMemo(() => {
        let result = [...creatorCourses]

        // Level
        if (level !== "All") {
            result = result.filter(
                (course) => course.level === level,
            )
        }

        // Category
        if (category !== "All") {
            result = result.filter(
                (course) =>
                    course.category === category,
            )
        }

        // Sort
        switch (sort) {
            case "rating-high":
                result.sort(
                    (a, b) => b.rating - a.rating,
                )
                break

            case "price-low":
                result.sort(
                    (a, b) => a.price - b.price,
                )
                break

            case "price-high":
                result.sort(
                    (a, b) => b.price - a.price,
                )
                break
        }

        return result
    }, [
        creatorCourses,
        level,
        category,
        sort,
    ])

    const handleReset = () => {
        setLevel("All")
        setCategory("All")
        setSort("relevant")
    }

    return (
        <main>
            <CreatorDetailsHero />

            <section className="bg-white px-6 py-16">
                <div className="mx-auto max-w-[1200px]">
                    {/* Filters */}
                    <CreatorCourseFilters
                        level={level}
                        category={category}
                        sort={sort}
                        categories={categories}
                        onLevelChange={setLevel}
                        onCategoryChange={setCategory}
                        onSortChange={setSort}
                        onReset={handleReset}
                    />

                    {/* Courses */}
                    {filteredCourses.length > 0 ? (
                        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                            {filteredCourses.map(
                                (course) => (
                                    <CourseCard
                                        key={course.id}
                                        course={course}
                                    />
                                ),
                            )}
                        </div>
                    ) : (
                        <div className="py-24 text-center">
                            <h2 className="text-[22px] font-semibold text-[#25272C]">
                                No courses found
                            </h2>

                            <p className="mt-2 text-[14px] text-[#7A7D84]">
                                Try changing your filters.
                            </p>

                            <button
                                type="button"
                                onClick={handleReset}
                                className="mt-5 rounded-full bg-[#D7FF00] px-6 py-3 text-[14px] font-medium text-[#111]"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}

export default CreatorDetailsPage