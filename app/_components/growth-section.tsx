import Reveal from "@/components/motion/reveal";
import { Check } from "lucide-react";
import Image from "next/image";

export default function GrowthSection() {
  return (
    <section
      id="creators"
      aria-label="Learn and create with ByteSpace"
      className="overflow-hidden bg-[#f9f9f9] bg-[radial-gradient(ellipse_at_28%_4%,#eaff9a_0%,transparent_30%),radial-gradient(ellipse_at_0%_92%,#e6ff84_0%,transparent_24%),radial-gradient(ellipse_at_100%_100%,#cdd6f3_0%,transparent_38%),radial-gradient(ellipse_at_0%_50%,#dbe2f5_0%,transparent_35%)] py-14 sm:py-24"
    >
      <div className="container space-y-14 sm:space-y-16">
        <Reveal className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="max-w-135">
            <h2 className="text-3xl leading-[1.15] font-semibold tracking-[-0.035em] sm:text-[42px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-7 max-w-115 text-sm leading-7 text-[#74767d] sm:text-base">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="mt-10 flex gap-12">
              {[
                { value: "12K", label: "Students" },
                { value: "70+", label: "Courses" },
                { value: "16", label: "Creators" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[32px] font-semibold tracking-tight text-brand">
                    {stat.value}
                  </dt>
                  <dd className="text-sm text-[#74767d]">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Image
            src="/images/student-art.webp"
            alt="A ByteSpace student with a design course and a learning progress card showing 55 percent"
            width={1270}
            height={1240}
            sizes="(max-width: 767px) 90vw, 600px"
            className="mx-auto w-full max-w-150 mask-[linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
          />
        </Reveal>
        <Reveal className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Image
            src="/images/creator-art.webp"
            alt="A course creator with her tablet, revenue dashboard, and happy student community"
            width={1130}
            height={1280}
            sizes="(max-width: 767px) 90vw, 560px"
            className="order-2 mx-auto w-full max-w-140 mask-[linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] md:order-1"
          />
          <div className="order-1 max-w-137.5 md:order-2">
            <h2 className="max-w-112.5 text-3xl leading-[1.15] font-semibold tracking-[-0.035em] sm:text-[42px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-8 text-sm leading-7 text-[#74767d] sm:text-base">
              <strong className="font-semibold text-[#4c4e53]">
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="rounded-full bg-brand p-0.5 text-white">
                    <Check aria-hidden="true" className="size-4" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
