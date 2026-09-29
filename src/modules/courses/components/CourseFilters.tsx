import {
    ChartNoAxesColumnIncreasing,
    Filter,
    ListFilter,
    Shapes,
} from "lucide-react"

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
    "Business",
    "Data Science",
    "Productivity",
]

type Props = {
    category: string
    level: string
    sort: string
    onCategoryChange: (value: string) => void
    onLevelChange: (value: string) => void
    onSortChange: (value: string) => void
    onReset: () => void
}

const CourseFilters = ({
    category,
    level,
    sort,
    onCategoryChange,
    onLevelChange,
    onSortChange,
    onReset,
}: Props) => {
    return (
        <div>
            {/* Main filters */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4">
                    <button
                        type="button"
                        onClick={onReset}
                        className="flex h-12 items-center gap-2 rounded-full border border-[#D7D9DD] bg-white px-5 text-[15px] text-[#4B4D54]"
                    >
                        <Filter className="size-5" strokeWidth={1.8} />
                        Filter
                    </button>

                    {/* Level */}
                    <label className="relative flex h-12 items-center gap-2 rounded-full border border-[#D7D9DD] bg-white px-5">
                        <ChartNoAxesColumnIncreasing
                            className="size-5"
                            strokeWidth={1.8}
                        />

                        <select
                            value={level}
                            onChange={(e) => onLevelChange(e.target.value)}
                            className="cursor-pointer appearance-none bg-transparent pr-4 text-[15px] text-[#4B4D54] outline-none"
                        >
                            <option value="All">Level</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </label>

                    {/* Category */}
                    <label className="relative flex h-12 items-center gap-2 rounded-full border border-[#D7D9DD] bg-white px-5">
                        <Shapes className="size-5" strokeWidth={1.8} />

                        <select
                            value={category}
                            onChange={(e) => onCategoryChange(e.target.value)}
                            className="cursor-pointer appearance-none bg-transparent pr-4 text-[15px] text-[#4B4D54] outline-none"
                        >
                            <option value="Featured">Category</option>

                            {categories
                                .filter((item) => item !== "Featured")
                                .map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                        </select>
                    </label>
                </div>

                {/* Sort */}
                <label className="flex h-12 items-center gap-2 rounded-full border border-[#D7D9DD] bg-white px-5">
                    <ListFilter className="size-5" strokeWidth={1.8} />

                    <select
                        value={sort}
                        onChange={(e) => onSortChange(e.target.value)}
                        className="cursor-pointer appearance-none bg-transparent pr-3 text-[15px] text-[#4B4D54] outline-none"
                    >
                        <option value="relevant">Most relevant</option>
                        <option value="rating-high">Highest rating</option>
                        <option value="price-low">Price: Low to high</option>
                        <option value="price-high">Price: High to low</option>
                    </select>
                </label>
            </div>

            {/* Quick category filters */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                {categories.map((item) => {
                    const active = category === item

                    return (
                        <button
                            key={item}
                            type="button"
                            onClick={() => onCategoryChange(item)}
                            className={`h-11 rounded-full px-5 text-[15px] font-medium transition-colors ${active
                                    ? "bg-[#D7FF00] text-[#151515]"
                                    : "bg-[#F5F5F7] text-[#4B4D54] hover:bg-[#ECECEF]"
                                }`}
                        >
                            {item}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default CourseFilters