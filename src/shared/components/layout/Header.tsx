import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

import ShoppingBagIcon from "@/assets/icons/shopping_bag.svg?react"
import HeaderLogo from "/header_logo.png"

const Header = () => {
    const headerRef = useRef<HTMLElement>(null)

    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight =
                headerRef.current?.offsetHeight ?? 0

            setScrolled(window.scrollY > headerHeight)
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        })

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll,
            )
    }, [])

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <header
            ref={headerRef}
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || mobileMenuOpen
                    ? "bg-black"
                    : "bg-transparent"
                }`}
        >
            {/* Header */}
            <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-6 lg:h-28">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="flex items-center"
                >
                    <img
                        src={HeaderLogo}
                        alt="ByteSpace Logo"
                        className="h-auto w-[150px] md:w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
                    <Link
                        to="/"
                        className="font-['Satoshi'] text-base font-medium text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Home
                    </Link>

                    <Link
                        to="/courses"
                        className="font-['Satoshi'] text-base text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Courses
                    </Link>

                    <Link
                        to="/creators"
                        className="font-['Satoshi'] text-base text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Creators
                    </Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-6 lg:flex">
                    <Link
                        to="/search"
                        className="font-['Satoshi'] text-base text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Search
                    </Link>

                    <Link
                        to="/login"
                        className="font-['Satoshi'] text-base text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Sign In
                    </Link>

                    <Link
                        to="/register"
                        className="font-['Satoshi'] text-base text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Join Us
                    </Link>

                    <button
                        type="button"
                        aria-label="Shopping bag"
                        className="text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        <ShoppingBagIcon className="size-6" />
                    </button>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-4 lg:hidden">
                    <button
                        type="button"
                        aria-label="Shopping bag"
                        className="text-white"
                    >
                        <ShoppingBagIcon className="size-5" />
                    </button>

                    <button
                        type="button"
                        aria-label={
                            mobileMenuOpen
                                ? "Close navigation"
                                : "Open navigation"
                        }
                        aria-expanded={mobileMenuOpen}
                        onClick={() =>
                            setMobileMenuOpen(
                                (previous) => !previous,
                            )
                        }
                        className="flex size-10 items-center justify-center text-white"
                    >
                        {mobileMenuOpen ? (
                            <X className="size-6" />
                        ) : (
                            <Menu className="size-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 lg:hidden ${mobileMenuOpen
                        ? "max-h-[500px] border-t border-white/10 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
            >
                <div className="mx-auto flex max-w-[1440px] flex-col px-5 pb-6 pt-4">
                    <nav className="flex flex-col">
                        <Link
                            to="/"
                            onClick={closeMobileMenu}
                            className="border-b border-white/10 py-4 font-['Satoshi'] text-base text-white"
                        >
                            Home
                        </Link>

                        <Link
                            to="/courses"
                            onClick={closeMobileMenu}
                            className="border-b border-white/10 py-4 font-['Satoshi'] text-base text-white"
                        >
                            Courses
                        </Link>

                        <Link
                            to="/creators"
                            onClick={closeMobileMenu}
                            className="border-b border-white/10 py-4 font-['Satoshi'] text-base text-white"
                        >
                            Creators
                        </Link>

                        <Link
                            to="/search"
                            onClick={closeMobileMenu}
                            className="border-b border-white/10 py-4 font-['Satoshi'] text-base text-white"
                        >
                            Search
                        </Link>
                    </nav>

                    <div className="mt-5 flex items-center gap-3">
                        <Link
                            to="/login"
                            onClick={closeMobileMenu}
                            className="flex h-11 flex-1 items-center justify-center rounded-full border border-white/30 text-[15px] text-white"
                        >
                            Sign In
                        </Link>

                        <Link
                            to="/register"
                            onClick={closeMobileMenu}
                            className="flex h-11 flex-1 items-center justify-center rounded-full bg-[#D7FF00] text-[15px] font-medium text-black"
                        >
                            Join Us
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header