import { useEffect, useRef, useState } from "react"
import HeaderLogo from "/site_icon.png"
import { Link } from "react-router-dom"

const AuthHeader = () => {
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
                    <img src={HeaderLogo} className="size-8" alt="ByteSpace Logo" />
                </Link>
            </div>
        </header>
    )
}

export default AuthHeader