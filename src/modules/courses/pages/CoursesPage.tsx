import { useMemo, useState } from "react"

import CourseCard from "../components/CourseCard"
import CoursePagination from "../components/CoursePagination"
import { courses } from "../data/courses"
import CourseFilters from "../components/CourseFilters"
import CoursesHeroSection from "../components/CoursesHeroSection"
import usePageTitle from "@/shared/hooks/usePageTitle"

const ITEMS_PER_PAGE = 18

const CoursesPage = () => {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("Featured")
  const [level, setLevel] = useState("All")
  const [sort, setSort] = useState("relevant")
  const [currentPage, setCurrentPage] = useState(1)
  usePageTitle("Courses")

  const handleCategoryChange = (value: string) => {
    setCategory(value)
    setCurrentPage(1)
  }

  const handleLevelChange = (value: string) => {
    setLevel(value)
    setCurrentPage(1)
  }

  const handleSortChange = (value: string) => {
    setSort(value)
    setCurrentPage(1)
  }

  const handleResetFilters = () => {
    setSearch("")
    setCategory("Featured")
    setLevel("All")
    setSort("relevant")
    setCurrentPage(1)
  }

  const filteredCourses = useMemo(() => {
    let result = [...courses]

    // Search
    if (search.trim()) {
      const query = search.toLowerCase()

      result = result.filter((course) =>
        course.title.toLowerCase().includes(query) ||
        course.creator.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query),
      )
    }

    // Category
    if (category !== "Featured") {
      result = result.filter(
        (course) => course.category === category,
      )
    }

    // Level
    if (level !== "All") {
      result = result.filter(
        (course) => course.level === level,
      )
    }

    // Sort
    switch (sort) {
      case "rating-high":
        result.sort((a, b) => b.rating - a.rating)
        break

      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break

      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
    }

    return result
  }, [search, category, level, sort])

  const totalPages = Math.ceil(
    filteredCourses.length / ITEMS_PER_PAGE,
  )

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE

  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <CoursesHeroSection />

      <main className="bg-white px-6 py-10">
        <div className="mx-auto max-w-300">
          <CourseFilters
            category={category}
            level={level}
            sort={sort}
            onCategoryChange={handleCategoryChange}
            onLevelChange={handleLevelChange}
            onSortChange={handleSortChange}
            onReset={handleResetFilters}
          />

          {/* Courses */}
          {paginatedCourses.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <h3 className="text-xl font-semibold text-[#202126]">
                No courses found
              </h3>

              <p className="mt-2 text-sm text-[#858890]">
                Try changing your search or filters.
              </p>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-14">
            <CoursePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default CoursesPage