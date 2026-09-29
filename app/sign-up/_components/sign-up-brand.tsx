import Link from "next/link";

export default function SignUpBrand() {
  return (
    <Link href="/" aria-label="ByteSpace home" className="ml-0.5 flex h-[33px] w-8">
      <svg width="30" height="33" viewBox="0 0 30 33" fill="none" aria-hidden="true">
        <path d="M0 0C7 0 11 5 11 11V22C11 27 8 31 4 31C1 28 0 25 0 21V0Z" fill="#D0FF00" />
        <path d="M11 11H18C24 11 29 15 29 21.5S24 32 18 32H11V11Z" fill="#D0FF00" />
        <path d="M11 13L20 21.5L11 30V13Z" fill="#003BE2" />
      </svg>
    </Link>
  );
}
