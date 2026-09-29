import PurePearlStudioAvatar from "../assets/pure_parl_studio_avater.png"

const CreatorDetailsHero = () => {
    return (
        <section
            className="relative overflow-hidden bg-[#003BE2] px-6 pb-20 pt-40 lg:pb-24"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)
                `,
                backgroundSize: "120px 120px",
            }}
        >
            <div className="mx-auto max-w-[1200px]">
                {/* Creator */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    {/* Profile image */}
                    <div className="size-24 shrink-0 overflow-hidden rounded-[24px] bg-[#F1F1F1]">
                        <img
                            src={PurePearlStudioAvatar}
                            alt="PurePearl Studio"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <div className="flex flex-wrap items-center gap-4">
                            <h1 className="text-[34px] leading-tight font-semibold tracking-[-0.03em] text-white md:text-[40px]">
                                PurePearl Studio
                            </h1>

                            <span className="rounded-full bg-[#D7FF00] px-6 py-2 text-[14px] font-medium text-[#111]">
                                Creator
                            </span>
                        </div>

                        <p className="mt-2 text-[17px] text-white/90">
                            Passionate UI/UX, Web designer
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-10 max-w-[1120px]">
                    <p className="text-[16px] leading-7 text-white/90">
                        Welcome to the creative world of [Creator&apos;s Name].
                        Here, you&apos;ll discover the passion, expertise, and
                        inspiration that drive my creative journey. Let&apos;s
                        explore and learn together!
                    </p>

                    <p className="mt-1 text-[16px] leading-7 text-white/90">
                        Dive into my creative portfolio, showcasing a glimpse of
                        my artistic endeavors. From digital designs to multimedia
                        projects, each piece tells a unique story. Explore the
                        world of creativity with me.
                    </p>
                </div>

                {/* Bottom actions */}
                <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[16px] text-[#292B31]">
                            <span className="text-[#003BE2]">3</span>
                            <span>Products</span>
                        </div>

                        <div className="flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[16px] text-[#292B31]">
                            <span className="text-[#003BE2]">12</span>
                            <span>Followers</span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="h-12 w-fit rounded-full bg-[#D7FF00] px-8 text-[16px] font-medium text-[#111] transition-colors hover:bg-[#C8EF00]"
                    >
                        Follow
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CreatorDetailsHero