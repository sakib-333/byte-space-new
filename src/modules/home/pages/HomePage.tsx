import CategorySection from "../components/CategorySection"
import GrowthSection from "../components/GrowthSection"
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
      <GrowthSection />
    </div>
  )
}

export default HomePage