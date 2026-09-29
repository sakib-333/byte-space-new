import { useState } from "react"
import AboutTab from "./AboutTab"
import LessonsTab from "./LessonsTab"
import ReviewsTab from "./ReviewsTab"

type Tab = "about" | "lessons" | "reviews"

const CourseDetailsTabs = () => {
    const [activeTab, setActiveTab] = useState<Tab>("about")

    const tabClass = (tab: Tab) =>
        `h-10 rounded-full px-5 text-[13px] font-medium transition-colors ${activeTab === tab
            ? "bg-[#D7FF00] text-[#111]"
            : "bg-[#F2F2F4] text-[#50535A] hover:bg-[#E9EAEC]"
        }`

    return (
        <div className="w-full">
            {/* Navigation */}
            <div className="flex flex-wrap items-center gap-4">
                <button
                    type="button"
                    onClick={() => setActiveTab("about")}
                    className={tabClass("about")}
                >
                    About
                </button>

                <button
                    type="button"
                    onClick={() => setActiveTab("lessons")}
                    className={tabClass("lessons")}
                >
                    Lessons
                </button>

                <button
                    type="button"
                    onClick={() => setActiveTab("reviews")}
                    className={tabClass("reviews")}
                >
                    Reviews
                </button>
            </div>

            {/* Content */}
            {activeTab === "about" && <AboutTab />}

            {activeTab === "lessons" && <LessonsTab />}

            {activeTab === "reviews" && <ReviewsTab />}
        </div>
    )
}

export default CourseDetailsTabs