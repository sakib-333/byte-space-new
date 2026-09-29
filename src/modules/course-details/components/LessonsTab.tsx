import { Video } from "lucide-react"

const lessons = [
    {
        title: "Module 1: Introduction to Digital Assets",
        description:
            "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
        title: "Module 2: Design Principles for Impact",
        description:
            "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
        title: "Module 3: Advanced Digital Creation Techniques",
        description:
            "Explore advanced techniques for producing professional digital assets using modern design workflows and practical exercises.",
    },
    {
        title: "Module 4: User-Centric Design Strategies",
        description:
            "Understand Design Thinking in Digital Creation and delve into User Experience fundamentals. Craft digital assets with a focus on user-centric design.",
    },
    {
        title: "Module 5: Interactive Media and Engagement",
        description:
            "Engage your audience with interactive presentations and multimedia elements while creating immersive digital experiences.",
    },
    {
        title: "Module 6: Project Showcase and Critique",
        description:
            "Perfect your presentation skills and embrace collaboration through peer critique. Showcase your work with confidence.",
    },
    {
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        description:
            "Adapt your creations for mobile platforms and social media while ensuring accessibility and engagement across digital landscapes.",
    },
]

const LessonsTab = () => {
    return (
        <div className="mt-10">
            <h2 className="text-[20px] font-semibold text-[#22242A]">
                Explore the Modules
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#64676F]">
                Immerse yourself in the course content as we break down each
                module into comprehensive lessons, providing practical insights
                and hands-on experiences.
            </p>

            <h3 className="mt-7 text-[18px] font-semibold text-[#22242A]">
                Lesson List
            </h3>

            <div className="mt-5 space-y-5">
                {lessons.map((lesson) => (
                    <div
                        key={lesson.title}
                        className="flex items-start gap-4"
                    >
                        <div className="flex size-16 shrink-0 items-center justify-center rounded-[18px] bg-[#D7FF00]">
                            <Video
                                className="size-7 text-[#161616]"
                                strokeWidth={1.8}
                            />
                        </div>

                        <div>
                            <h4 className="text-[14px] font-semibold text-[#33353B]">
                                {lesson.title}
                            </h4>

                            <p className="mt-1 text-[13px] leading-6 text-[#686B73]">
                                {lesson.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lesson Content */}
            <div className="mt-8">
                <h3 className="text-[18px] font-semibold text-[#22242A]">
                    Lesson Content
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-[#686B73]">
                    Engage with each lesson through captivating video content,
                    detailed textual explanations, and interactive elements.
                    Download resources, complete assignments, and test your
                    understanding with quizzes.
                </p>
            </div>

            {/* Progress */}
            <div className="mt-8">
                <h3 className="text-[18px] font-semibold text-[#22242A]">
                    Lesson Progress Tracking
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-[#686B73]">
                    Witness your growth as you complete lessons, with an
                    intuitive progress tracking feature guiding you through your
                    learning journey.
                </p>

                <div className="mt-6 rounded-[14px] border border-[#E4E5E8] bg-white p-5">
                    <p className="text-[12px] text-[#33353B]">
                        Learning Progress
                    </p>

                    <p className="mt-1 text-[32px] leading-none font-semibold text-[#24262B]">
                        55%
                    </p>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#E8E9EA]">
                        <div className="h-full w-[55%] rounded-full bg-[#D7FF00]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LessonsTab