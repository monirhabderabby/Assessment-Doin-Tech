import HeroSection from "./_components/hero";
import PartnerLogoSection from "./_components/partner-logo";
import CourseCatalog from "./_components/courses/course-catalog";

export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden bg-blueprint bg-brand text-white">
        <HeroSection />
      </div>
      <PartnerLogoSection />
      <CourseCatalog />
    </div>
  );
}
