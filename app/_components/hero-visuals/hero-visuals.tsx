import Image from "next/image";
import HeroCourseCard from "./hero-course-card";
import HeroProgressCard from "./hero-progress-card";
import HeroStudentsCard from "./hero-students-card";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-360 shrink-0 lg:min-h-64 lg:flex-1">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[5%] top-12 bottom-0 rounded-t-[50%] bg-lime sm:inset-x-[11%]"
      />
      <div className="relative mx-auto w-full max-w-180 sm:h-107.5 lg:absolute lg:inset-0 lg:h-full">
        <Image
          src="/hero-person.png"
          alt="Smiling student wearing headphones and holding a laptop"
          width={720}
          height={515}
          priority
          sizes="(max-width: 767px) 100vw, 720px"
          className="mx-auto block h-auto w-full sm:absolute sm:bottom-0 sm:left-1/2 sm:h-full sm:w-auto sm:max-w-none sm:-translate-x-1/2"
        />
      </div>
      <div className="relative z-20 grid grid-cols-1 items-start gap-3 px-5 pb-7 min-[400px]:grid-cols-2 lg:absolute lg:inset-0 lg:block lg:p-0">
        <div className="min-[400px]:col-span-2 lg:absolute lg:top-[16%] lg:left-[23%] lg:w-65 lg:motion-safe:animate-float">
          <HeroCourseCard />
        </div>
        <div className="lg:absolute lg:top-[20%] lg:right-[17%] lg:w-70 lg:motion-safe:animate-float lg:[animation-delay:-2s]">
          <HeroProgressCard />
        </div>
        <div className="lg:absolute lg:bottom-[13%] lg:left-[18%] lg:w-70 lg:motion-safe:animate-float lg:[animation-delay:-4s]">
          <HeroStudentsCard />
        </div>
      </div>
    </div>
  );
}
