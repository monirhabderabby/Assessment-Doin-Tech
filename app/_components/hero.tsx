import { Search } from "lucide-react";
import Image from "next/image";
import HeroVisual from "./hero-visuals/hero-visuals";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex h-[calc(100dvh-var(--navbar-height))] flex-col overflow-x-hidden overflow-y-auto"
    >
      <Image
        src="/shapes/3d ornament.png"
        alt=""
        width={1440}
        height={801}
        sizes="100vw"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-auto w-full lg:block motion-safe:animate-ornament-drift"
      />
      <section className="relative z-10 shrink-0 pt-10 text-center sm:pt-12 lg:pt-14">
        <h1
          id="hero-heading"
          className="mx-auto max-w-245 text-[40px] leading-[1.13] font-semibold tracking-[-0.04em] sm:text-6xl lg:text-[72px]"
        >
          Get Access to Hundreds
          <br className="hidden sm:block" /> Courses Available
        </h1>
        <p className="mx-auto mt-7 max-w-212.5 text-sm leading-6 text-white/70 sm:text-base lg:mt-9">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <form
          action="/search"
          method="get"
          role="search"
          className="mx-auto mt-9 flex max-w-145 gap-3 pb-6 sm:mt-14 sm:gap-4 lg:pb-9"
        >
          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 text-muted">
            <Search
              aria-hidden="true"
              className="size-4 shrink-0"
              strokeWidth={1.7}
            />
            <label htmlFor="course-search" className="sr-only">
              Search courses, topics, or creators
            </label>
            <input
              id="course-search"
              name="q"
              type="search"
              placeholder="Course, topic, creator"
              className="w-full min-w-0 bg-transparent py-3.5 text-sm text-ink outline-none placeholder:text-muted"
            />
          </div>
          <button
            className="rounded-full bg-lime px-5 text-sm font-medium text-ink transition-colors hover:bg-white sm:px-7"
            type="submit"
          >
            Search
          </button>
        </form>
      </section>
      <HeroVisual />
    </section>
  );
}
