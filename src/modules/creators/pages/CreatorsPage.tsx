import CreatorCard from "../components/CreatorCard"
import PurePearnStudioAvatar from "../assets/perl_studio_avater.png"
import DanielCooperAvater from "../assets/brooklyn_simmons.png"
import SarahMiller from "../assets/cody_fisher.png"
import AlexMorgan from "../assets/pure_pearl_studio.png"

const creators = [
  {
    id: 1,
    name: "PurePearl Studio",
    designation: "UI/UX Designer",
    image: PurePearnStudioAvatar,
    courses: 12,
    students: "2.4K",
  },
  {
    id: 2,
    name: "Daniel Cooper",
    designation: "Web Developer",
    image: DanielCooperAvater,
    courses: 8,
    students: "1.8K",
  },
  {
    id: 3,
    name: "Sarah Miller",
    designation: "Digital Marketer",
    image: SarahMiller,
    courses: 15,
    students: "3.2K",
  },
  {
    id: 4,
    name: "Alex Morgan",
    designation: "Photographer",
    image: AlexMorgan,
    courses: 6,
    students: "1.2K",
  },
  {
    id: 5,
    name: "Emma Wilson",
    designation: "Graphic Designer",
    image: PurePearnStudioAvatar,
    courses: 10,
    students: "2.1K",
  },
  {
    id: 6,
    name: "James Parker",
    designation: "Business Mentor",
    image: DanielCooperAvater,
    courses: 9,
    students: "1.7K",
  },
]

const CreatorsPage = () => {
  return (
    <main className="bg-[#003BE2] px-6 pb-20 pt-40">
      <div className="mx-auto max-w-300">
        <div className="text-center">
          <h1 className="text-[36px] font-semibold tracking-[-0.03em] text-white md:text-[44px]">
            Explore Creators
          </h1>

          <p className="mx-auto mt-4 max-w-150 text-[15px] leading-6 text-[#ced0d6]">
            Learn from experienced creators and discover courses
            designed to help you build new skills.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default CreatorsPage