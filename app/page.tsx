import CourseCatalog from "./_components/courses/course-catalog";
import CreatorCta from "./_components/creator-cta";
import GrowthSection from "./_components/growth-section";
import HeroSection from "./_components/hero";
import LearningPaths from "./_components/learning-paths";
import PartnerLogoSection from "./_components/partner-logo";
import Testimonials from "./_components/testmonials";

export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden bg-blueprint bg-brand text-white">
        <HeroSection />
      </div>
      <PartnerLogoSection />
      <CourseCatalog />
      <LearningPaths />
      <GrowthSection />
      <CreatorCta />
      <Testimonials />
    </div>
  );
}
