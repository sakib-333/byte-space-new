import CategorySection from "../components/CategorySection"
import HeroSection from "../components/HeroSection"
import LearningPathSection from "../components/LearningPathSection"
import PartnerSection from "../components/PartnerSection"

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <PartnerSection />
      <CategorySection />
      <LearningPathSection />
    </div>
  )
}

export default HomePage