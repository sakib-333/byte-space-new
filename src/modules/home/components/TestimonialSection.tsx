import TestomonialBackground from "../assets/testimonial/testimonials_bg.png"
import SarahM from "../assets/testimonial/sarah_m.png"
import JamesL from "../assets/testimonial/james_l.png"
import AlexB from "../assets/testimonial/alex_b.png"

const testimonials = [
    {
        image: SarahM,
        name: "Sarah M.",
        designation: "Enthusiastic Learner",
        testimonial:
            "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
        image: JamesL,
        name: "James L.",
        designation: "Lifelong Learner",
        testimonial:
            "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
        image: AlexB,
        name: "Alex B.",
        designation: "Inspired Creator",
        testimonial:
            "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
]

const TestimonialSection = () => {
    return (
        <section
            className="relative overflow-hidden bg-[#FAFAFA] bg-cover bg-center bg-no-repeat px-6 py-20 md:py-24 lg:py-28"
            style={{
                backgroundImage: `url(${TestomonialBackground})`, // add background image here
            }}
        >
            <div className="mx-auto max-w-[1200px]">

                {/* Header */}
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-24">
                    <div>
                        <h2 className="max-w-[520px] text-[38px] leading-[1.08] font-semibold tracking-[-0.035em] text-black md:text-[46px]">
                            Discover What Our
                            <br />
                            Community Is Saying
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[590px] text-[16px] leading-7 text-[#62646B]">
                            At ByteSpace, our vibrant community of learners and creators is
                            at the heart of what we do. Hear directly from those who have
                            experienced the transformative journey of learning and creating
                            on our platform. Explore testimonials that reflect the diverse
                            perspectives of enthusiastic learners and accomplished creators.
                        </p>
                    </div>
                </div>

                {/* Testimonial cards */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item) => (
                        <article
                            key={item.name}
                            className="rounded-[24px] bg-white px-6 py-6 md:px-7 md:py-7"
                        >
                            {/* Profile image */}
                            <div className="size-20 overflow-hidden rounded-full bg-[#F1F1F1]">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="mt-6 text-[21px] font-semibold leading-none text-[#111111]">
                                {item.name}
                            </h3>

                            {/* Designation */}
                            <p className="mt-2 text-[16px] text-[#0649ED]">
                                {item.designation}
                            </p>

                            {/* Testimonial */}
                            <p className="mt-7 text-[16px] leading-7 text-[#62646B]">
                                "{item.testimonial}"
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection