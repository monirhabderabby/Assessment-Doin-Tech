export default function HeroCourseCard() {
  return (
    <div className="rounded-[22px] bg-white px-5 py-4 text-left text-[#252525] shadow-sm sm:px-6 sm:py-5">
      <h2 className="text-lg leading-snug sm:text-xl">UI/UX Design</h2>
      <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-neutral-500">
        <span>200 Courses</span>
        <span aria-hidden="true">·</span>
        <span>1000+ Students</span>
      </p>
    </div>
  );
}
