import { Check } from "lucide-react"
import Peak1 from "../assets/peak_1.png"
import Peak2 from "../assets/peak_2.png"
import Peak3 from "../assets/peak_3.png"
import Peak4 from "../assets/peak_4.png"

const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
]

const AboutTab = () => {
    return (
        <div className="mt-10">
            <h2 className="text-[20px] font-semibold text-[#22242A]">
                Description
            </h2>

            <div className="mt-6 space-y-6 text-[15px] leading-7 text-[#64676F]">
                <p>
                    Embark on an enlightening exploration into the world of
                    digital creation with our comprehensive course, "Build
                    Digital Assets: A Comprehensive Guide." This transformative
                    learning experience invites you to delve deep into the
                    intricacies of crafting impactful digital content.
                </p>

                <p>
                    In the initial modules, you'll establish a solid foundation
                    by immersing yourself in the foundational concepts that form
                    the backbone of digital asset creation. Understand the
                    fundamental elements that constitute compelling digital
                    content and gain proficiency in leveraging these elements to
                    communicate effectively in the digital realm.
                </p>

                <p>
                    As you progress through the course, you'll ascend to higher
                    levels of expertise, delving into the nuances of design
                    principles that drive impactful creations. Uncover the
                    secrets behind effective visual communication, exploring
                    color theory, typography, and layout strategies.
                </p>
            </div>

            {/* Sneak Peek */}
            <h3 className="mt-8 text-[18px] font-semibold text-[#22242A]">
                Sneak Peek
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="aspect-[1.3/1] overflow-hidden rounded-[14px] bg-[#F2F2F3]">
                    <img src={Peak1} alt="Sneak Peek 1" />
                </div>

                <div className="aspect-[1.3/1] overflow-hidden rounded-[14px] bg-[#F2F2F3]">
                    <img src={Peak2} alt="Sneak Peek 2" />
                </div>

                <div className="aspect-[1.3/1] overflow-hidden rounded-[14px] bg-[#F2F2F3]">
                    <img src={Peak3} alt="Sneak Peek 3" />
                </div>

                <div className="aspect-[1.3/1] overflow-hidden rounded-[14px] bg-[#F2F2F3]">
                    <img src={Peak4} alt="Sneak Peek 4" />
                </div>
            </div>

            {/* Key Points */}
            <h3 className="mt-8 text-[18px] font-semibold text-[#22242A]">
                Key Points
            </h3>

            <div className="mt-5 space-y-4">
                {keyPoints.map((point) => (
                    <div
                        key={point}
                        className="flex items-center gap-3"
                    >
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#003BE2]">
                            <Check className="size-3 text-white" />
                        </span>

                        <span className="text-[14px] text-[#60636B]">
                            {point}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutTab