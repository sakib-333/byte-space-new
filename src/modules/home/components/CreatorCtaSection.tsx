import HeroImage3 from "../assets/hero_image_3.png"
import HeroImage5 from "../assets/hero_image_5.png"
import HeroImage6 from "../assets/hero_image_6.png"
import HeroImage10 from "../assets/hero_image_10.png"
import HeroImage11 from "../assets/hero_image_11.png"
import HeroImage12 from "../assets/hero_image_12.png"
import HeroImage13 from "../assets/hero_image_13.png"

const CreatorCtaSection = () => {
    return (
        <section
            className="relative overflow-hidden bg-[#003BE2] px-6 py-20 md:py-24"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)
                `,
                backgroundSize: "120px 120px",
            }}
        >
            {/* Left decorations */}
            <img
                src={HeroImage3}
                alt="HeroImage3"
                className="pointer-events-none absolute -left-8 -top-8 hidden h-[190px] w-[190px] object-contain lg:block"
            />

            <img
                src={HeroImage5}
                alt="HeroImage5"
                className="pointer-events-none absolute left-[13%] top-8 hidden h-[130px] w-[130px] object-contain lg:block"
            />

            <img
                src={HeroImage6}
                alt="HeroImage6"
                className="pointer-events-none absolute -left-8 top-1/2 hidden h-[170px] w-[130px] -translate-y-1/2 object-contain lg:block"
            />

            <img
                src={HeroImage13}
                alt="HeroImage13"
                className="pointer-events-none absolute -bottom-24 left-[4%] hidden h-[260px] w-[260px] object-contain lg:block"
            />

            {/* Right decorations */}
            <img
                src={HeroImage11}
                alt="HeroImage11"
                className="pointer-events-none absolute right-[14%] top-5 hidden h-[150px] w-[150px] object-contain lg:block"
            />

            <img
                src={HeroImage10}
                alt="HeroImage10"
                className="pointer-events-none absolute -right-12 top-[8%] hidden h-[320px] w-[210px] object-contain lg:block"
            />

            <img
                src={HeroImage12}
                alt="HeroImage12"
                className="pointer-events-none absolute -bottom-24 right-[4%] hidden h-[260px] w-[220px] object-contain lg:block"
            />

            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-[980px] flex-col items-center text-center">
                <h2 className="max-w-[700px] text-[38px] leading-[1.08] font-semibold tracking-[-0.035em] text-white md:text-[48px] lg:text-[52px]">
                    Unlock Your Potential as a
                    <br />
                    Creator with ByteSpace
                </h2>

                <p className="mt-10 max-w-[960px] text-[15px] leading-7 text-white/90 md:text-[17px]">
                    Experience the collaboration of numerous creators and an expanding
                    selection of courses. Register now and become a part of a community
                    comprising over 10,000 local and international creators. Utilize our
                    Course Editor, and showcase your expertise by publishing your finest
                    course on the ByteSpace Course Library.
                </p>

                <button
                    type="button"
                    className="mt-10 rounded-full bg-[#D7FF00] px-8 py-3 text-[16px] font-medium text-[#151515] transition-transform duration-200 hover:scale-[1.03]"
                >
                    Join as Creator
                </button>
            </div>
        </section>
    )
}

export default CreatorCtaSection