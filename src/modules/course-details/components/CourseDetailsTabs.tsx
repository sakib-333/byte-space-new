import { useState } from "react"
import AboutTab from "./AboutTab"
import ReviewsTab from "./ReviewsTab"
import LessonsTab from "./LessonsTab"


type Tab = "about" | "lessons" | "reviews"

const CourseDetailsTabs = () => {
    const [activeTab, setActiveTab] = useState<Tab>("about")

    return (
        <section className="bg-white px-6 py-16 md:py-20">
            <div className="mx-auto max-w-300">
                <div className="max-w-180">
                    {/* Tabs */}
                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setActiveTab("about")}
                            className={`h-10 rounded-full px-5 text-[13px] font-medium transition-colors ${activeTab === "about"
                                ? "bg-[#D7FF00] text-[#111]"
                                : "bg-[#F2F2F4] text-[#50535A] hover:bg-[#E9EAEC]"
                                }`}
                        >
                            About
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("lessons")}
                            className={`h-10 rounded-full px-5 text-[13px] font-medium transition-colors ${activeTab === "lessons"
                                ? "bg-[#D7FF00] text-[#111]"
                                : "bg-[#F2F2F4] text-[#50535A] hover:bg-[#E9EAEC]"
                                }`}
                        >
                            Lessons
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("reviews")}
                            className={`h-10 rounded-full px-5 text-[13px] font-medium transition-colors ${activeTab === "reviews"
                                ? "bg-[#D7FF00] text-[#111]"
                                : "bg-[#F2F2F4] text-[#50535A] hover:bg-[#E9EAEC]"
                                }`}
                        >
                            Reviews
                        </button>
                    </div>

                    {/* Tab content */}
                    {activeTab === "about" && <AboutTab />}
                    {activeTab === "lessons" && <LessonsTab />}
                    {activeTab === "reviews" && <ReviewsTab />}
                </div>
            </div>
        </section>
    )
}

export default CourseDetailsTabs