import SiteLogo from "/site_icon.png"
import Shape1 from "../assets/1.png"
import Shape2 from "../assets/2.png"
import Shape3 from "../assets/3.png"
import Shape4 from "../assets/4.png"
import Shape5 from "../assets/5.png"
import Shape6 from "../assets/6.png"
import { Link } from "react-router-dom"

const AuthShowcase = () => {
    return (
        <div className="relative h-full overflow-hidden">
            {/* Brand icon */}
            <Link to="/" className="absolute left-0 top-0">
                <div className="flex size-8 items-center justify-center">
                    <img src={SiteLogo} alt="ByteSpace Logo" className="h-5 w-5" />
                </div>
            </Link>

            {/* Content */}
            <div className="absolute left-0 top-24 max-w-[490px]">
                <h2 className="text-[22px] font-semibold text-white">
                    Sign up and come in
                </h2>

                <p className="mt-4 text-[17px] leading-7 text-white/90">
                    The registration process is straightforward, uncomplicated,
                    and efficient, allowing users to sign up quickly, easily,
                    and at no cost.
                </p>
            </div>

            {/* Image 1 - back course card */}
            <img
                src={Shape1}
                alt={"Shape1"}
                className="absolute bottom-[18%] left-0 h-[384px] w-[373px] object-contain"
            />

            {/* Image 2 - front course card */}
            <img
                src={Shape2}
                alt={"Shape2"}
                className="absolute bottom-[28%] left-[110px] z-10 h-[384px] w-[373px] object-contain"
            />

            {/* Image 3 - lime circle */}
            <img
                src={Shape6}
                alt={"Shape6"}
                className="absolute bottom-[52%] left-[45px] z-20 h-[110px] w-[110px] object-contain"
            />

            {/* Image 4 - lime triangle */}
            <img
                src={Shape4}
                alt={"Shape4"}
                className="absolute bottom-[5%] left-0 z-20  object-contain"
            />

            {/* Image 5 - white zigzag */}
            <img
                src={Shape5}
                alt={"Shape5"}
                className="absolute bottom-[16%] right-[10px] z-31 h-[140px] w-[140px] object-contain"
            />

            {/* Image 6 - Happy Students card */}
            <img
                src={Shape3}
                alt={"Shape3"}
                className="absolute bottom-[5%] right-[25px] z-30 h-[130px] w-[270px] object-contain"
            />
        </div>
    )
}

export default AuthShowcase