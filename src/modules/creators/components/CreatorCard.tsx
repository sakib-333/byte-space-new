import { Link } from "react-router-dom"

interface Creator {
    id: number
    name: string
    designation: string
    image: string
    courses: number
    students: string
}

interface CreatorCardProps {
    creator: Creator
}

const CreatorCard = ({ creator }: CreatorCardProps) => {
    return (
        <Link to={`/creators/${creator.id}`}>
            <article className="rounded-[20px] border border-[#E4E5E7] bg-white p-6">
                <div className="flex items-center gap-4">
                    <div className="size-16 overflow-hidden rounded-full bg-[#F1F1F2]">
                        <img
                            src={creator.image}
                            alt={creator.name}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#202126]">
                            {creator.name}
                        </h2>

                        <p className="mt-1 text-[13px] text-[#73767E]">
                            {creator.designation}
                        </p>
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-8 border-t border-[#EEEEF0] pt-5">
                    <div>
                        <p className="text-[17px] font-semibold text-[#202126]">
                            {creator.courses}
                        </p>

                        <p className="mt-1 text-[12px] text-[#8A8D94]">
                            Courses
                        </p>
                    </div>

                    <div>
                        <p className="text-[17px] font-semibold text-[#202126]">
                            {creator.students}
                        </p>

                        <p className="mt-1 text-[12px] text-[#8A8D94]">
                            Students
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className="mt-6 h-11 w-full rounded-full hover:bg-[#F3F3F5] text-[14px] font-medium text-[#33353B] transition-colors bg-[#D7FF00]"
                >
                    View Profile
                </button>
            </article>
        </Link>
    )
}

export default CreatorCard