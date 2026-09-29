import {
    BadgeCheck,
    FolderOpen,
    Headphones,
    Video,
} from "lucide-react"
import PerlStudioAvatar from "../assets/perl_studio_avater.png"
import { Link } from "react-router-dom"

const CourseEnrollmentCard = () => {
    return (
        <div className="rounded-3xl border border-[#DADCE0] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
            {/* Lessons */}
            <h2 className="text-[20px] font-semibold text-[#26272C]">
                112 Lessons (24 hours)
            </h2>

            <div className="mt-7 space-y-4">
                <div className="grid grid-cols-[24px_1fr_auto] items-start gap-2">
                    <span className="text-[15px] text-[#35373C]">
                        01
                    </span>

                    <span className="text-[15px] leading-5 text-[#35373C]">
                        Introduction to Digital Assets
                    </span>

                    <span className="whitespace-nowrap text-[14px] text-[#003BE2]">
                        12 mins
                    </span>
                </div>

                <div className="grid grid-cols-[24px_1fr_auto] items-start gap-2">
                    <span className="text-[15px] text-[#35373C]">
                        02
                    </span>

                    <span className="text-[15px] leading-5 text-[#35373C]">
                        Design Principles for Impacts
                    </span>

                    <span className="whitespace-nowrap text-[14px] text-[#003BE2]">
                        21 mins
                    </span>
                </div>

                <div className="grid grid-cols-[24px_1fr_auto] items-start gap-2">
                    <span className="text-[15px] text-[#35373C]">
                        03
                    </span>

                    <span className="text-[15px] leading-5 text-[#35373C]">
                        Advanced Techniques in Digital Creation
                    </span>

                    <span className="whitespace-nowrap text-[14px] text-[#003BE2]">
                        16 mins
                    </span>
                </div>
            </div>

            <p className="mt-4 text-[14px] text-[#6B6E76]">
                99 more videos
            </p>

            {/* CTA copy */}
            <p className="mt-8 text-[15px] leading-7 text-[#6A6D74]">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
            </p>

            {/* Price */}
            <div className="mt-7 flex items-baseline">
                <span className="text-[36px] leading-none font-semibold text-[#003BE2]">
                    $25
                </span>

                <span className="text-[13px] text-[#55585F]">
                    /lifetime
                </span>
            </div>

            {/* Enroll */}
            <button
                type="button"
                className="mt-7 h-12 w-full rounded-full bg-[#D7FF00] text-[16px] font-medium text-[#111] transition-colors hover:bg-[#C8EF00]"
            >
                Enroll Now
            </button>

            {/* Course includes */}
            <div className="mt-7">
                <h3 className="text-[20px] font-semibold text-[#292B30]">
                    This course include
                </h3>

                <div className="mt-6 space-y-5">
                    <div className="flex items-center gap-3">
                        <FolderOpen
                            className="size-5 shrink-0 text-[#003BE2]"
                            strokeWidth={1.8}
                        />

                        <span className="text-[15px] text-[#676A72]">
                            Learning Resources
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Video
                            className="size-5 shrink-0 text-[#003BE2]"
                            strokeWidth={1.8}
                        />

                        <span className="text-[15px] text-[#676A72]">
                            Quality Lesson Videos
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <BadgeCheck
                            className="size-5 shrink-0 text-[#003BE2]"
                            strokeWidth={1.8}
                        />

                        <span className="text-[15px] text-[#676A72]">
                            Certificate of Completion
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Headphones
                            className="size-5 shrink-0 text-[#003BE2]"
                            strokeWidth={1.8}
                        />

                        <span className="text-[15px] text-[#676A72]">
                            Private Consultation
                        </span>
                    </div>
                </div>
            </div>

            <div className="my-7 h-px bg-[#D9DADD]" />

            {/* Creator */}
            <div className="flex items-center gap-4">
                <div className="size-13 shrink-0 overflow-hidden rounded-full bg-[#ECEDEF]">
                    <img src={PerlStudioAvatar} alt="Perl Studio Avatar" className="h-full w-full object-cover" />
                </div>

                <div>
                    <h3 className="text-[17px] font-medium text-[#292B30]">
                        PurePearl Studio
                    </h3>

                    <p className="mt-0.5 text-[14px] text-[#696C73]">
                        Professional Creator
                    </p>
                </div>
            </div>

            <p className="mt-7 text-[15px] leading-7 text-[#6A6D74]">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
            </p>

            <Link to="/creators/1">
            
                <button
                    type="button"
                    className="mt-6 rounded-full border border-[#CDD0D5] px-5 py-2.5 text-[14px] text-[#484B52] transition-colors hover:bg-[#F5F5F6]"
                >
                    See Full Profile
                </button>
            </Link>
        </div>
    )
}

export default CourseEnrollmentCard