import Reveal from "@/components/motion/reveal";
import Image from "next/image";

export default function CreatorCta() {
  return (
    <section
      aria-labelledby="creator-heading"
      className="relative isolate overflow-hidden bg-blueprint bg-brand py-20 text-center text-white sm:py-24"
    >
      <Image
        src="/images/cta-coils.webp"
        alt=""
        width={660}
        height={400}
        className="pointer-events-none absolute top-0 left-0 -z-10 hidden w-[23%] md:block"
      />
      <Image
        src="/images/cta-ring.webp"
        alt=""
        width={500}
        height={260}
        className="pointer-events-none absolute bottom-0 left-[4%] -z-10 hidden w-[17.4%] md:block"
      />
      <Image
        src="/images/cta-shape.webp"
        alt=""
        width={265}
        height={320}
        className="pointer-events-none absolute top-3 right-[14.4%] -z-10 hidden w-[9.2%] lg:block"
      />
      <Image
        src="/images/cta-spring.webp"
        alt=""
        width={400}
        height={315}
        className="pointer-events-none absolute right-[4.5%] bottom-0 -z-10 hidden w-[14%] md:block"
      />
      <div
        aria-hidden="true"
        className="absolute top-14 -right-16 -z-10 hidden h-64 w-40 -rotate-25 rounded-[50px] bg-white lg:block"
      />
      <Reveal className="container">
        <h2
          id="creator-heading"
          className="mx-auto max-w-162.5 text-3xl leading-[1.16] font-semibold tracking-tight sm:text-[44px]"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-10 max-w-235 text-sm leading-7 text-white/70 sm:text-base">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <a
          href="#newsletter"
          className="mt-10 inline-flex rounded-full bg-lime px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-white"
        >
          Join as Creator
        </a>
      </Reveal>
    </section>
  );
}
