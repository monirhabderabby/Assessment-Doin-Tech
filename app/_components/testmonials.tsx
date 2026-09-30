import { testimonials } from "@/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="bg-[#f9f9f9] bg-[radial-gradient(ellipse_at_70%_24%,#e9ff9f_0%,transparent_43%),radial-gradient(ellipse_at_0%_100%,#cbd5f5_0%,transparent_45%)] py-16 sm:py-20"
    >
      <div className="container">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-20">
          <h2
            id="community-heading"
            className="max-w-137.5 text-3xl leading-[1.15] font-semibold tracking-[-0.035em] sm:text-[44px]"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="text-sm leading-7 text-[#777b70] sm:text-base">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-3 lg:mt-16 lg:gap-10">
          {testimonials.map((person) => (
            <figure
              key={person.name}
              className="rounded-[24px] bg-white p-6 lg:p-7"
            >
              <Image
                src={`/images/${person.image}.webp`}
                alt={person.name}
                width={82}
                height={82}
                className="size-20 rounded-full"
              />
              <figcaption className="mt-6">
                <span className="block text-lg font-semibold">
                  {person.name}
                </span>
                <span className="mt-1 block text-sm text-brand/80">
                  {person.role}
                </span>
              </figcaption>
              <blockquote className="mt-7 text-sm leading-[1.8] text-[#84868a] sm:text-base">
                “{person.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
