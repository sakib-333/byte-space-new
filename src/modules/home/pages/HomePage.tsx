import usePageTitle from "@/shared/hooks/usePageTitle"
import CategorySection from "../components/CategorySection"
import CreatorCtaSection from "../components/CreatorCtaSection"
import GrowthSection from "../components/GrowthSection"
import HeroSection from "../components/HeroSection"
import LearningPathSection from "../components/LearningPathSection"
import PartnerSection from "../components/PartnerSection"
import TestimonialSection from "../components/TestimonialSection"

const HomePage = () => {
  usePageTitle("Home")
  
  return (
    <div className="">
      <HeroSection />
      <PartnerSection />
      <CategorySection />
      <LearningPathSection />
      <GrowthSection />
      <CreatorCtaSection />
      <TestimonialSection />
    </div>
  )
}

export default HomePage