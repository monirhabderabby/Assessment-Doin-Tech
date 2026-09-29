import Image from "next/image";
import { cn } from "@/lib/utils";

export default function AuthArtwork({ className }: { className?: string }) {
  return (
    <div className={cn("relative mt-14 hidden aspect-500/558 w-[500px] max-w-full md:block", className)} aria-hidden="true">
      <Image src="/images/sign-up/Course_Card_1.png" alt="" width={373} height={384} className="absolute top-[15.95%] left-0 h-auto w-[74.6%]" preload />
      <Image src="/images/sign-up/Course_Card_1-1.png" alt="" width={373} height={384} className="absolute top-0 left-[22.2%] h-auto w-[74.6%]" preload />
      <Image src="/images/sign-up/Cone.png" alt="" width={148} height={147} className="absolute top-[2.5%] left-[5.4%] h-auto w-[29.6%]" />
      <Image src="/images/sign-up/Cone-1.png" alt="" width={190} height={189} className="absolute top-[71%] -left-[5.6%] h-auto w-[38%]" />
      <Image src="/images/sign-up/Auto Layout Vertical.png" alt="" width={258} height={123} className="absolute top-[77.96%] left-[45.2%] h-auto w-[51.6%]" />
      <div className="absolute top-[62.7%] left-[76.2%] aspect-115/123 w-[23%] bg-[url('/shapes/3d%20ornament.png')] bg-size-[1252.174%_653.659%] bg-position-[16.226%_41.85%]" />
    </div>
  );
}
