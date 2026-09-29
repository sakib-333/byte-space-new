import StudentGrowthImage from "../assets/growth/student_growth.png"
import CreatorGrowthImage from "../assets/growth/creator_growth.png"
import GrowthBackground from "../assets/growth/growth_background.png"

const GrowthSection = () => {
    return (
        <section
            className="relative overflow-hidden bg-white bg-cover bg-center bg-no-repeat px-6 py-20 lg:py-28"
            style={{
                backgroundImage: `url(${GrowthBackground})`,
            }}
        >
            <div className="mx-auto max-w-[1200px]">

                {/* Top section */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Content */}
                    <div>
                        <h2 className="max-w-[500px] text-[38px] leading-[1.15] font-semibold tracking-[-0.03em] text-[#242528] md:text-[44px]">
                            Your Path to Professional
                            <br />
                            Growth Starts Here!
                        </h2>

                        <p className="mt-9 max-w-[480px] text-[15px] leading-7 text-[#666A73]">
                            Explore our curated selection of courses tailored to enhance
                            your capabilities and accelerate your career journey. Whether
                            you are looking to sharpen specific skills, gain industry
                            expertise, or embark on a new career path entirely, we have
                            the resources you need.
                        </p>

                        <div className="mt-10 flex gap-14">
                            <div>
                                <p className="text-[30px] font-semibold leading-none text-[#0649ED]">
                                    12K
                                </p>
                                <p className="mt-2 text-[14px] text-[#60636B]">
                                    Students
                                </p>
                            </div>

                            <div>
                                <p className="text-[30px] font-semibold leading-none text-[#0649ED]">
                                    70+
                                </p>
                                <p className="mt-2 text-[14px] text-[#60636B]">
                                    Courses
                                </p>
                            </div>

                            <div>
                                <p className="text-[30px] font-semibold leading-none text-[#0649ED]">
                                    16
                                </p>
                                <p className="mt-2 text-[14px] text-[#60636B]">
                                    Creators
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Man / course visual */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={StudentGrowthImage}
                            alt=""
                            className="w-full max-w-[590px] object-contain"
                        />
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-20 grid items-center gap-12 lg:mt-28 lg:grid-cols-2 lg:gap-20">

                    {/* Woman / revenue visual */}
                    <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
                        <img
                            src={CreatorGrowthImage}
                            alt=""
                            className="w-full max-w-[530px] object-contain"
                        />
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="max-w-[500px] text-[38px] leading-[1.15] font-semibold tracking-[-0.03em] text-[#242528] md:text-[44px]">
                            Create &amp; Manage
                            <br />
                            Courses Easily.
                        </h2>

                        <p className="mt-9 max-w-[500px] text-[15px] leading-7 text-[#666A73]">
                            <span className="font-semibold text-[#292A2F]">
                                ByteSpace
                            </span>{" "}
                            supports individuals or entities in the creation, publication,
                            and administration of educational courses.
                        </p>

                        <div className="mt-8 space-y-4">
                            {[
                                "Share Your Expertise",
                                "Monetize Your Passion",
                                "Flexibility and Autonomy",
                                "Build a Community",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 text-[15px] text-[#292A2F]"
                                >
                                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0649ED]">
                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            className="size-3 text-white"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="m5 10 3 3 7-7"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default GrowthSection