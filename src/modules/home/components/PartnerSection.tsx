import PartnerImage1 from "../assets/partner/partner_1.png"
import PartnerImage2 from "../assets/partner/partner_2.png"
import PartnerImage3 from "../assets/partner/partner_3.png"
import PartnerImage4 from "../assets/partner/partner_4.png"
import PartnerImage5 from "../assets/partner/partner_5.png"

const PartnerSection = () => {
    const partners = [
        PartnerImage1,
        PartnerImage2,
        PartnerImage3,
        PartnerImage4,
        PartnerImage5,
    ]

    return (
        <section className="bg-[#F5F5F7] py-16 md:py-20">
            <div className="mx-auto max-w-300 px-6">
                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 md:justify-between">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex h-12 w-42.5 items-center justify-center"
                        >
                            <img
                                src={partner}
                                alt={`Partner ${index + 1}`}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PartnerSection