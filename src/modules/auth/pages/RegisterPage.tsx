import { Link } from "react-router-dom"

import AuthShowcase from "../components/AuthShowcase"

const RegisterPage = () => {
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
            <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1200px] items-center gap-16 lg:grid-cols-[1fr_580px]">
                {/* Left showcase */}
                <div className="hidden h-full lg:block">
                    <AuthShowcase />
                </div>

                {/* Register card */}
                <div className="w-full rounded-[28px] bg-white px-6 py-10 sm:px-10 md:px-14 lg:px-16 lg:py-16">
                    <p className="text-[17px] font-medium text-[#003BE2]">
                        Create an Account
                    </p>

                    <h1 className="mt-2 text-[42px] leading-[1.12] font-semibold tracking-[-0.03em] text-[#292A2E] md:text-[48px]">
                        Welcome to
                        <br />
                        ByteSpace
                    </h1>

                    <form className="mt-12 space-y-6">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-[14px] text-[#292A2E]"
                            >
                                Full Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Jamie Davis"
                                className="h-[54px] w-full rounded-[14px] border border-[#DADCE0] px-5 text-[15px] text-[#292A2E] outline-none transition-colors placeholder:text-[#9B9EA6] focus:border-[#003BE2]"
                            />
                        </div>

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

                        <div className="flex justify-end pt-1">
                            <button
                                type="submit"
                                className="h-12 rounded-full bg-[#D7FF00] px-8 text-[16px] font-medium text-[#111] transition-colors hover:bg-[#C8EF00]"
                            >
                                Continue
                            </button>
                        </div>
                    </form>

                    <p className="mt-24 text-center text-[14px] text-[#666970]">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-[#003BE2] hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default RegisterPage