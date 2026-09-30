import Image from "next/image";
import { Star } from "lucide-react";

// একই ফাইলে ডেটা প্রস্তুত করা হলো
const studentsData = {
  label: "Happy Students",
  rating: 4.5,
  reviewCount: 240,
  studentCount: "2K+",
  avatars: [
    { src: "/images/avatar-alex.webp", name: "Alex" },
    { src: "/images/avatar-james.webp", name: "James" },
    { src: "/images/avatar-sarah.webp", name: "Sarah" },
  ],
};

export default function HeroStudentsCard() {
  const { label, rating, reviewCount, studentCount, avatars } = studentsData;

  return (
    <div className="rounded-[22px] bg-white px-5 py-4 text-left text-[#252525] shadow-sm">
      <h2 className="text-lg sm:text-xl">{label}</h2>
      <p
        aria-label={`${rating} out of 5 from ${reviewCount} reviews`}
        className="flex items-center gap-1 text-sm text-neutral-500"
      >
        {rating} ({reviewCount}){" "}
        <Star aria-hidden="true" className="size-4 fill-lime text-lime" strokeWidth={1.7} />
      </p>
      <div className="mt-3 flex items-center -space-x-3">
        {avatars.slice(0, 7).map((avatar) => (
          <Image
            key={avatar.src}
            src={avatar.src}
            alt={avatar.name}
            width={48}
            height={48}
            className="size-12 rounded-full border-2 border-white object-cover"
          />
        ))}
        <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-lime text-sm font-semibold">
          {studentCount}
        </span>
      </div>
    </div>
  );
}
