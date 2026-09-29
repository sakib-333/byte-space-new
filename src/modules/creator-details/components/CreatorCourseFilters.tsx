import {
    ChartNoAxesColumnIncreasing,
    Filter,
    ListFilter,
    Shapes,
} from "lucide-react"

interface CreatorCourseFiltersProps {
    level: string
    category: string
    sort: string
    categories: string[]
    onLevelChange: (value: string) => void
    onCategoryChange: (value: string) => void
    onSortChange: (value: string) => void
    onReset: () => void
}

const CreatorCourseFilters = ({
    level,
    category,
    sort,
    categories,
    onLevelChange,
    onCategoryChange,
    onSortChange,
    onReset,
}: CreatorCourseFiltersProps) => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
                {/* Reset */}
                <button
                    type="button"
                    onClick={onReset}
                    className="flex h-12 items-center gap-2 rounded-full border border-[#D7D9DD] bg-white px-5 text-[15px] text-[#4B4D54] transition-colors hover:bg-[#F6F6F7]"
                >
                    <Filter
                        className="size-5"
                        strokeWidth={1.8}
                    />

                    Filter
                </button>

                {/* Level */}
                <label className="flex h-12 items-center gap-2 rounded-full border border-[#D7D9DD] bg-white px-5">
                    <ChartNoAxesColumnIncreasing
                        className="size-5"
                        strokeWidth={1.8}
                    />

                    <select
                        value={level}
                        onChange={(event) =>
                            onLevelChange(event.target.value)
                        }
                        className="cursor-pointer appearance-none bg-transparent pr-2 text-[15px] text-[#4B4D54] outline-none"
                    >
                        <option value="All">
                            Level
                        </option>

                        <option value="Beginner">
                            Beginner
                        </option>

                        <option value="Intermediate">
                            Intermediate
                        </option>

                        <option value="Advanced">
                            Advanced
                        </option>
                    </select>
                </label>

                {/* Category */}
                <label className="flex h-12 items-center gap-2 rounded-full border border-[#D7D9DD] bg-white px-5">
                    <Shapes
                        className="size-5"
                        strokeWidth={1.8}
                    />

                    <select
                        value={category}
                        onChange={(event) =>
                            onCategoryChange(event.target.value)
                        }
                        className="cursor-pointer appearance-none bg-transparent pr-2 text-[15px] text-[#4B4D54] outline-none"
                    >
                        <option value="All">
                            Category
                        </option>

                        {categories.map((item) => (
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            {/* Sort */}
            <label className="flex h-12 items-center gap-2 rounded-full border border-[#D7D9DD] bg-white px-5">
                <ListFilter
                    className="size-5"
                    strokeWidth={1.8}
                />

                <select
                    value={sort}
                    onChange={(event) =>
                        onSortChange(event.target.value)
                    }
                    className="cursor-pointer appearance-none bg-transparent pr-2 text-[15px] text-[#4B4D54] outline-none"
                >
                    <option value="relevant">
                        Most relevant
                    </option>

                    <option value="rating-high">
                        Highest rating
                    </option>

                    <option value="price-low">
                        Price: Low to high
                    </option>

                    <option value="price-high">
                        Price: High to low
                    </option>
                </select>
            </label>
        </div>
    )
}

export default CreatorCourseFilters