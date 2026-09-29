import { Link } from "react-router-dom"

import AuthShowcase from "../components/AuthShowcase"
import FacebookIcon from "../assets/facebook_icon.svg?react"
import GoogleIcon from "../assets/google_icon.svg?react"

const LoginPage = () => {
    return (
        <main
            className="min-h-screen bg-[#003BE2] px-5 py-8 lg:px-10 lg:py-10"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)
                `,
                backgroundSize: "120px 120px",
            }}
        >
            <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1200px] items-center gap-16 lg:grid-cols-[minmax(0,1fr)_580px]">

                {/* Left showcase */}
                <div className="hidden h-full min-w-0 lg:block">
                    <AuthShowcase />
                </div>

                {/* Login card */}
                <div className="w-full rounded-[28px] bg-white px-6 py-10 sm:px-10 md:px-14 lg:px-16 lg:py-16">
                    <p className="text-[17px] font-medium text-[#003BE2]">
                        Sign In
                    </p>

                    <h1 className="mt-2 text-[42px] leading-[1.12] font-semibold tracking-[-0.03em] text-[#292A2E] md:text-[48px]">
                        Welcome Back
                    </h1>

                    <form className="mt-12 space-y-6">

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-[14px] text-[#292A2E]"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="designer@example.com"
                                className="h-[54px] w-full rounded-[14px] border border-[#DADCE0] px-5 text-[15px] text-[#292A2E] outline-none transition-colors placeholder:text-[#9B9EA6] focus:border-[#003BE2]"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-[14px] text-[#292A2E]"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                placeholder="********"
                                className="h-[54px] w-full rounded-[14px] border border-[#DADCE0] px-5 text-[15px] text-[#292A2E] outline-none transition-colors placeholder:text-[#9B9EA6] focus:border-[#003BE2]"
                            />
                        </div>

                        {/* Sign In */}
                        <div className="flex justify-end pt-1">
                            <button
                                type="submit"
                                className="h-12 rounded-full bg-[#D7FF00] px-8 text-[16px] font-medium text-[#111] transition-colors hover:bg-[#C8EF00]"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="mt-20 flex items-center gap-4">
                        <div className="h-px flex-1 bg-[#DADCE0]" />

                        <span className="text-[14px] text-[#8B8E95]">
                            or
                        </span>

                        <div className="h-px flex-1 bg-[#DADCE0]" />
                    </div>

                    {/* Social login */}
                    <div className="mt-10 flex items-center justify-center gap-4">
                        {/* Facebook */}
                        <button
                            type="button"
                            aria-label="Continue with Facebook"
                            className="flex size-[72px] items-center justify-center rounded-[20px] border border-[#DADCE0] bg-white transition-colors hover:bg-[#F7F7F8]"
                        >
                            <FacebookIcon /> {/* Add Facebook icon here */}
                        </button>

                        {/* Google */}
                        <button
                            type="button"
                            aria-label="Continue with Google"
                            className="flex size-[72px] items-center justify-center rounded-[20px] border border-[#DADCE0] bg-white transition-colors hover:bg-[#F7F7F8]"
                        >
                            <GoogleIcon /> {/* Add Google icon here */}
                        </button>
                    </div>

                    {/* Register */}
                    <p className="mt-20 text-center text-[14px] text-[#9A9CA3]">
                        New user?{" "}
                        <Link
                            to="/register"
                            className="text-[#003BE2] hover:underline"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default LoginPage