import ShoppingBagIcon from "@/assets/icons/shopping_bag.svg?react"

const Header = () => {
    return (
        <div>
            <div className="w-[1440px] h-28 relative overflow-hidden">
                <div className="size- left-[615px] top-[52px] absolute inline-flex justify-start items-start gap-6">
                    <div className="justify-start text-neutral-100 text-base font-medium font-['Satoshi'] leading-5">Home</div>
                    <div className="justify-start text-neutral-100 text-base font-normal font-['Satoshi'] leading-6">Courses</div>
                    <div className="justify-start text-neutral-100 text-base font-normal font-['Satoshi'] leading-6">Creators</div>
                </div>
                <div className="size- left-[1146px] top-[48px] absolute inline-flex justify-end items-start gap-6">
                    <div className="justify-start text-neutral-100 text-base font-normal font-['Satoshi'] leading-6">Sign In</div>
                    <div className="justify-start text-neutral-100 text-base font-normal font-['Satoshi'] leading-6">Join Us</div>
                    <ShoppingBagIcon />
                </div>
                <div className="w-7 h-8 left-[122px] top-[35px] absolute bg-lime-400" />
                <div className="left-[159px] top-[42px] absolute justify-start text-neutral-100 text-2xl font-bold font-['Clash_Display']">ByteSpace</div>
            </div>
        </div>
    )
}

export default Header

