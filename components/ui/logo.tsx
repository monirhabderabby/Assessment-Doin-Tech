import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={`inline-flex items-center gap-1.5 text-[22px] font-extrabold tracking-tight ${light ? "text-white" : "text-[#252525]"}`}
    >
      <svg
        width="31"
        height="35"
        viewBox="0 0 31 35"
        fill="none"
        aria-hidden="true"
      >
        <path d="M3 1h9v12h7c7 0 11 4 11 10S25 34 18 34H3V1Z" fill="#D0FF00" />
        <path d="m12 17 11 6-11 6V17Z" fill={light ? "#0739e5" : "white"} />
      </svg>
      ByteSpace
    </Link>
  );
}
