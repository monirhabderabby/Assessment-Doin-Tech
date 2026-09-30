import Image from "next/image";
import Link from "next/link";
import { Signal, Star } from "lucide-react";
import type { Course } from "./course-data";

const studentAvatars = [
  "/images/avatar-sarah.webp",
  "/images/avatar-james.webp",
  "/images/avatar-alex.webp",
];

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group h-full rounded-3xl border border-[#dedee3] bg-white p-3 transition-shadow hover:shadow-lg sm:p-4">
      <div className="relative aspect-[1.75] overflow-hidden rounded-xl">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 639px) calc(100vw - 72px), (max-width: 1023px) 45vw, 370px"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
        <div className="absolute inset-x-2 bottom-3 flex flex-wrap justify-between gap-1 text-[10px] text-ink sm:text-[11px]">
          <span className="rounded-full bg-white/80 px-2 py-1 backdrop-blur-sm">{course.lessons} Lessons</span>
          <span className="rounded-full bg-white/80 px-2 py-1 backdrop-blur-sm">{course.duration}</span>
          <span className="rounded-full bg-white/80 px-2 py-1 backdrop-blur-sm">{course.comments} Comments</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <h3 className="min-w-0 text-lg font-bold leading-tight tracking-tight">
          <Link href={`/courses/${course.id}`} title={course.title} className="block truncate hover:text-brand">
            {course.title}
          </Link>
        </h3>
        <span aria-label={`${course.rating} out of 5 stars`} className="flex shrink-0 items-center gap-1 text-sm text-neutral-500">
          {course.rating}<Star aria-hidden="true" className="size-4 fill-gray-300 text-gray-300" />
        </span>
      </div>
      <p className="mt-1 text-[11px] text-muted-foreground">by <span className="text-brand">{course.instructor}</span></p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-1.5 rounded-full bg-[#f5f5f7] px-3 py-1.5 text-[11px]">
          <Signal aria-hidden="true" className="size-3.5" />{course.level}
        </span>
        <div aria-label={`${course.students}+ learners`} className="flex -space-x-2">
          {studentAvatars.map((src) => (
            <Image key={src} src={src} alt="" width={30} height={30} className="size-7 rounded-full border-2 border-white object-cover" />
          ))}
          <span className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-lime text-[9px] font-semibold">{course.students}+</span>
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground"><span className="text-lg font-bold text-brand">${course.price}</span>/lifetime</p>
    </article>
  );
}
