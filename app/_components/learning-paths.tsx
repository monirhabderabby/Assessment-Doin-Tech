import {
  BriefcaseBusiness,
  Camera,
  CodeXml,
  Laptop,
  Megaphone,
  Palette,
} from "lucide-react";
import Link from "next/link";

const paths = [
  { name: "Design", icon: Palette },
  { name: "Development", icon: CodeXml },
  { name: "IT & Software", icon: Laptop },
  { name: "Business", icon: BriefcaseBusiness },
  { name: "Marketing", icon: Megaphone },
  { name: "Photography", icon: Camera },
] as const;
export default function LearningPaths() {
  return (
    <section
      id="learning-paths"
      aria-labelledby="paths-heading"
      className="container py-16 sm:pt-20 sm:pb-28"
    >
      <h2
        id="paths-heading"
        className="text-center text-2xl font-semibold tracking-[-0.035em] sm:text-[36px]"
      >
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className="mx-auto mt-4 max-w-240 text-center text-sm leading-7 text-muted sm:text-base">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there’s
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-16 lg:grid-cols-6 lg:gap-10">
        {paths.map((path) => (
          <Link
            key={path.name}
            href={`/search?category=${encodeURIComponent(path.name)}`}
            className="flex min-h-40 flex-col items-center justify-center gap-4 rounded-[24px] border border-[#dedee3] px-3 py-7 text-center text-sm transition hover:-translate-y-1 hover:border-lime hover:bg-lime/10"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-lime">
              <path.icon aria-hidden="true" className="size-7" />
            </span>
            {path.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
