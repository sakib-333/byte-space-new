import { useEffect, useRef, useState } from "react"
import ShoppingBagIcon from "@/assets/icons/shopping_bag.svg?react"
import SiteLogo from "@/assets/icons/logo.svg?react"

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
            className={`fixed inset-x-0 top-0 z-50 h-28 transition-colors duration-300 ${scrolled && "backdrop-blur-md"} `}
        >
            <div className="mx-auto flex h-full max-w-360 items-center justify-between px-6">

                {/* Logo */}
                <a href="/" className="flex items-center gap-2.5">
                    <SiteLogo className="size-6 text-neutral-100" />

                    <span className="font-['Clash_Display'] text-2xl font-bold text-neutral-100">
                        ByteSpace
                    </span>
                </a>

                {/* Navigation */}
                <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6">
                    <a
                        href="/"
                        className="font-['Satoshi'] text-base font-medium text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Home
                    </a>

                    <a
                        href="/courses"
                        className="font-['Satoshi'] text-base text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Courses
                    </a>

                    <a
                        href="/creators"
                        className="font-['Satoshi'] text-base text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Creators
                    </a>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <a
                        href="/sign-in"
                        className="font-['Satoshi'] text-base text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Sign In
                    </a>

                    <a
                        href="/join"
                        className="font-['Satoshi'] text-base text-neutral-100 transition-opacity hover:opacity-70"
                    >
                        Join Us
                    </a>

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