import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <main
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#003BE2] px-6 py-16"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)
                `,
                backgroundSize: "120px 120px",
            }}
        >
            <div className="relative mx-auto flex w-full max-w-[1000px] flex-col items-center text-center">
                {/* 404 */}
                <div
                    className="select-none text-[220px] leading-[0.75] font-semibold tracking-[-0.07em] md:text-[330px] lg:text-[400px]"
                    style={{
                        background:
                            "linear-gradient(180deg, #D7FF00 0%, #CFFF18 45%, rgba(215,255,0,0) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    404
                </div>

                {/* Content */}
                <div className="relative z-10 -mt-2 md:-mt-8 lg:-mt-12">
                    <h1 className="mx-auto max-w-[760px] text-[40px] leading-[1.08] font-semibold tracking-[-0.04em] text-white md:text-[56px] lg:text-[66px]">
                        The page you are looking
                        <br />
                        for doesn’t exist
                    </h1>

                    <p className="mx-auto mt-10 max-w-[620px] text-[15px] leading-6 text-white/85 md:text-[17px]">
                        Try to use a correct url or go back to homepage to start again
                    </p>

                    <Link
                        to="/"
                        className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-[#D7FF00] px-7 text-[16px] font-medium text-[#111111] transition-transform duration-200 hover:scale-[1.03]"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default NotFoundPage