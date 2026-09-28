import HeroImage1 from "../assets/hero_image_1.png"
import HeroImage2 from "../assets/hero_image_2.png"
import HeroImage3 from "../assets/hero_image_3.png"
import HeroImage4 from "../assets/hero_image_4.png"
import HeroImage5 from "../assets/hero_image_5.png"
import HeroImage6 from "../assets/hero_image_6.png"
import HeroImage7 from "../assets/hero_image_7.png"
import HeroImage8 from "../assets/hero_image_8.png"

function HeroSection() {
    return (
        <section
            className="relative min-h-[720px] overflow-hidden bg-[#003BE2] lg:min-h-[900px] xl:min-h-[1024px]"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)
                `,
                backgroundSize: "120px 120px",
            }}
        >
            {/* Hero content */}
            <div className="relative z-20 mx-auto flex max-w-[1000px] flex-col items-center px-5 pt-[120px] text-center md:pt-[145px] lg:pt-[165px]">
                <h1 className="max-w-[900px] text-[44px] leading-[1.08] font-semibold tracking-[-0.04em] text-white md:text-[58px] lg:text-[68px]">
                    Get Access to Hundreds
                    <br />
                    Courses Available
                </h1>

                <p className="mt-8 max-w-[850px] text-[15px] leading-6 text-white/90 md:text-[17px]">
                    Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                </p>

                <div className="mt-16 flex w-full max-w-[580px] items-center gap-4">
                    <div className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-6">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="size-5 shrink-0 text-[#8D9098]"
                            aria-hidden="true"
                        >
                            <path
                                d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        <input
                            type="text"
                            placeholder="Course, topic, creator"
                            className="w-full bg-transparent text-[16px] text-[#222] outline-none placeholder:text-[#92959D]"
                        />
                    </div>

                    <button
                        type="button"
                        className="h-[46px] shrink-0 rounded-full bg-[#D7FF00] px-7 text-[16px] font-medium text-black transition-transform duration-200 hover:scale-[1.03]"
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Left top lime graphic */}
            <div className="absolute left-0 top-[28%] h-[270px] w-[200px]">
                <img src={HeroImage3} alt="HeroImage3" className="h-full w-full object-contain" />
            </div>

            {/* Left small white graphic */}
            <div className="absolute left-[15%] top-[49%] h-[125px] w-[120px]">
                <img src={HeroImage5} alt="HeroImage5" className="h-full w-full object-contain" />
            </div>

            {/* Left bottom white circle */}
            <div className="absolute bottom-[6%] left-[4.5%] h-[220px] w-[240px]">
                <img src={HeroImage7} alt="HeroImage7" className="h-full w-full object-contain" />
            </div>

            {/* Main green shape */}
            <div className="absolute bottom-[-18%] left-1/2 h-[62%] w-[78%] -translate-x-1/2">
                <img src={HeroImage2} alt="HeroImage2" className="h-full w-full object-contain" />
            </div>

            {/* Main person */}
            <div className="absolute bottom-0 left-1/2 z-10 h-[48%] w-[38%] -translate-x-1/2">
                <img src={HeroImage1} alt="HeroImage1" className="h-full w-full object-contain" />
            </div>

            {/* UI/UX card */}
            <div className="absolute bottom-[30.5%] left-[28%] z-30 hidden w-[210px] rounded-[16px] bg-white px-4 py-4 shadow-sm lg:block">
                <p className="text-[15px] font-medium text-[#202124]">
                    UI/UX Design
                </p>

                <div className="mt-1 flex items-center gap-2 text-[12px] text-[#92959D]">
                    <span>200 Courses</span>
                    <span className="size-1 rounded-full bg-[#92959D]" />
                    <span>1000+ Students</span>
                </div>
            </div>

            {/* Learning progress card */}
            <div className="absolute bottom-[23.5%] right-[25.5%] z-30 hidden w-[232px] rounded-[16px] bg-white p-4 shadow-sm lg:block">
                <p className="text-[13px] font-medium text-[#202124]">
                    Learning Progress
                </p>

                <p className="mt-2 text-[48px] leading-none font-semibold tracking-[-0.04em] text-[#25262A]">
                    55%
                </p>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#F0F1F2]">
                    <div className="h-full w-[55%] rounded-full bg-[#C8FA18]" />
                </div>
            </div>

            {/* Happy students card */}
            <div className="absolute bottom-[6.5%] left-[22.8%] z-30 hidden w-[258px] rounded-[16px] bg-white p-4 shadow-sm lg:block">
                <p className="text-[15px] font-medium leading-none text-[#202124]">
                    Happy Students
                </p>

                <div className="mt-1 flex items-center gap-1 text-[12px] text-[#777B83]">
                    <span>4.5 (240)</span>
                    <svg viewBox="0 0 24 24" className="size-4 fill-[#D7FF00]">
                        <path d="m12 2.5 2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.32l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5Z" />
                    </svg>
                </div>

                <div className="mt-3 flex items-center">
                    {["A", "B", "C", "D", "E", "F"].map((name, index) => (
                        <div
                            key={name}
                            className="-mr-2 flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#E7E7E7] text-[11px] font-medium text-[#333]"
                            style={{ zIndex: 10 - index }}
                        >
                            {name}
                        </div>
                    ))}

                    <div className="ml-1 flex size-10 items-center justify-center rounded-full bg-[#D7FF00] text-[11px] font-semibold text-black">
                        2K+
                    </div>
                </div>
            </div>

            {/* Right top lime graphic */}
            <div className="absolute right-[-2%] top-[24%] h-[310px] w-[210px]">
                <img src={HeroImage4} alt="HeroImage4" className="h-full w-full object-contain" />
            </div>

            {/* Right middle triangle */}
            <div className="absolute right-[12%] top-[47%] h-[145px] w-[145px]">
                <img src={HeroImage6} alt="HeroImage6" className="h-full w-full object-contain" />
            </div>

            {/* Right bottom white graphic */}
            <div className="absolute right-[3%] bottom-[6%] h-[250px] w-[190px]">
                <img src={HeroImage8} alt="HeroImage8" className="h-full w-full object-contain" />
            </div>
        </section>
    )
}

export default HeroSection