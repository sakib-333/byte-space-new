import CategorySection from "../components/CategorySection"
import CreatorCtaSection from "../components/CreatorCtaSection"
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
      <CreatorCtaSection />
    </div>
  )
}

export default HomePage