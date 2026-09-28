export default function HeroProgressCard() {
  const value = 55;

  return (
    <div className="rounded-[22px] bg-white p-5 text-left text-[#252525] shadow-sm sm:p-6">
      <h2 className="text-base sm:text-lg">Learning Progress</h2>
      <p className="mt-3 text-5xl leading-none font-bold tracking-tight sm:text-6xl">
        {value}%
      </p>
      <div
        role="progressbar"
        aria-label="Learning Progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        className="mt-5 h-2.5 overflow-hidden rounded-full bg-neutral-100"
      >
        <div
          style={{ width: `${value}%` }}
          className="h-full origin-left rounded-full bg-lime motion-safe:animate-progress-fill"
        />
      </div>
    </div>
  );
}
