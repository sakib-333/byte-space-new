import {
    ChartNoAxesColumnIncreasing,
    Filter,
    ListFilter,
    Shapes,
} from "lucide-react"
import { useState } from "react"

const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking",
]

const CourseFilterSection = () => {
    const [activeCategory, setActiveCategory] = useState("Featured")

    return (
        <section className="bg-white px-6 py-6">
            <div className="mx-auto max-w-[1200px]">
                {/* Filter bar */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            type="button"
                            className="flex h-12 items-center gap-2 rounded-full border border-[#D7D9DD] bg-white px-5 text-[15px] font-medium text-[#4B4D54] transition-colors hover:bg-[#F7F7F8]"
                        >
                            <Filter className="size-5" strokeWidth={1.8} />
                            Filter
                        </button>

                        <button
                            type="button"
                            className="flex h-12 items-center gap-2 rounded-full border border-[#D7D9DD] bg-white px-5 text-[15px] font-medium text-[#4B4D54] transition-colors hover:bg-[#F7F7F8]"
                        >
                            <ChartNoAxesColumnIncreasing
                                className="size-5"
                                strokeWidth={1.8}
                            />
                            Level
                        </button>

                        <button
                            type="button"
                            className="flex h-12 items-center gap-2 rounded-full border border-[#D7D9DD] bg-white px-5 text-[15px] font-medium text-[#4B4D54] transition-colors hover:bg-[#F7F7F8]"
                        >
                            <Shapes className="size-5" strokeWidth={1.8} />
                            Category
                        </button>
                    </div>

                    <button
                        type="button"
                        className="flex h-12 shrink-0 items-center gap-2 rounded-full border border-[#D7D9DD] bg-white px-5 text-[15px] font-medium text-[#4B4D54] transition-colors hover:bg-[#F7F7F8]"
                    >
                        <ListFilter className="size-5" strokeWidth={1.8} />
                        Most relevant
                    </button>
                </div>

                {/* Categories */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    {categories.map((category) => {
                        const isActive = activeCategory === category

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`h-11 rounded-full px-4.5 text-[15px] font-medium transition-colors ${isActive
                                        ? "bg-[#D7FF00] text-[#151515]"
                                        : "bg-[#F5F5F7] text-[#4B4D54] hover:bg-[#ECECEF]"
                                    }`}
                            >
                                {category}
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CourseFilterSection