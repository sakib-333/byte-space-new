import { useEffect, useRef, useState } from "react"
import ShoppingBagIcon from "@/assets/icons/shopping_bag.svg?react"
import HeaderLogo from "/header_logo.png"
import { Link } from "react-router-dom"

const Header = () => {
    const headerRef = useRef<HTMLElement>(null)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = headerRef.current?.offsetHeight ?? 0
            setScrolled(window.scrollY > headerHeight)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            ref={headerRef}
            className={`fixed inset-x-0 top-0 z-50 h-28 transition-colors duration-300 ${scrolled && "bg-black"} `}
        >
            <div className="mx-auto flex h-full max-w-360 items-center justify-between px-6">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5">
                    <img src={HeaderLogo} alt="ByteSpace Logo" />
                </Link>

                {/* Navigation */}
                <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6">
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

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <Link
                        to="/search"
                        className="font-['Satoshi'] text-base text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Search
                    </Link>
                    <Link
                        to="/sign-in"
                        className="font-['Satoshi'] text-base text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Sign In
                    </Link>

                    <Link
                        to="/join"
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

            </div>
        </header>
    )
}

export default Header