import FoortLogo from "/footer_logo.png"
const footerColumns = [
    [
        { label: "Featured Courses", href: "#" },
        { label: "Featured Categories", href: "#" },
        { label: "Business", href: "#" },
        { label: "IT", href: "#" },
        { label: "Design", href: "#" },
    ],
    [
        { label: "Development", href: "#" },
        { label: "Marketing", href: "#" },
        { label: "Photography", href: "#" },
        { label: "Finance", href: "#" },
        { label: "Sport", href: "#" },
    ],
    [
        { label: "Become a Creator", href: "#" },
        { label: "Affiliate Program", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Help", href: "#" },
        { label: "About", href: "#" },
    ],
]

const Footer = () => {
    return (
        <footer className="border-t border-[#E7E7E7] bg-white px-6 py-16 md:py-20">
            <div className="mx-auto max-w-[1200px]">
                {/* Main footer */}
                <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
                    {/* Newsletter */}
                    <div>
                        {/* Logo */}
                        <a href="/">
                            <img src={FoortLogo} alt="ByteSpace Logo" className="" />
                        </a>

                        <p className="mt-5 text-[13px] leading-5 text-[#44464D]">
                            Stay Up to date with our latest features and releases by joining
                            our newsletter.
                        </p>

                        {/* Newsletter form */}
                        <form className="mt-12 flex max-w-[510px] items-center gap-6">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="h-[52px] min-w-0 flex-1 rounded-full border border-[#D2D4D8] bg-white px-6 text-[15px] text-[#25262A] outline-none transition-colors placeholder:text-[#6B6E75] focus:border-[#003BE2]"
                            />

                            <button
                                type="submit"
                                className="h-[48px] shrink-0 rounded-full bg-[#D7FF00] px-7 text-[16px] font-medium text-[#111] transition-transform duration-200 hover:scale-[1.03]"
                            >
                                Search
                            </button>
                        </form>

                        <p className="mt-6 max-w-[490px] text-[11px] leading-5 text-[#55575E]">
                            By subscribing, you agree to our Privacy Policy and consent to
                            receive updates from our company.
                        </p>
                    </div>

                    {/* Footer navigation */}
                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
                        {footerColumns.map((column, columnIndex) => (
                            <nav
                                key={columnIndex}
                                className="flex flex-col gap-6"
                                aria-label={`Footer navigation ${columnIndex + 1}`}
                            >
                                {column.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="text-[13px] text-[#404249] transition-colors hover:text-[#003BE2]"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-28 border-t border-[#D3D5D8] pt-7">
                    <div className="flex flex-col gap-5 text-[11px] text-[#55575E] md:flex-row md:items-center md:justify-between">
                        <p>© 2023 ByteSpace. All rights reserved.</p>

                        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                            <a
                                href="#"
                                className="transition-colors hover:text-[#003BE2]"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#"
                                className="transition-colors hover:text-[#003BE2]"
                            >
                                Terms of Service
                            </a>

                            <a
                                href="#"
                                className="transition-colors hover:text-[#003BE2]"
                            >
                                Cookies Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer