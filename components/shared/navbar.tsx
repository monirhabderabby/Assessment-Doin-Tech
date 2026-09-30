"use client";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/search" },
  { label: "Creators", href: "/#creators" },
];

function subscribeToScroll(onScroll: () => void) {
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}

function getScrollSnapshot() {
  return window.scrollY > 0;
}

function getServerScrollSnapshot() {
  return false;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolling = useSyncExternalStore(
    subscribeToScroll,
    getScrollSnapshot,
    getServerScrollSnapshot,
  );
  const pathname = usePathname();
  return (
    <header
      className={`sticky top-0 z-40 shrink-0 text-white transition-[background-color,box-shadow,backdrop-filter] duration-300 motion-reduce:transition-none ${
        scrolling
          ? "bg-brand/95 shadow-lg shadow-black/10 backdrop-blur-md"
          : "bg-blueprint bg-brand"
      }`}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <div className="container flex h-(--navbar-height) items-center justify-between">
        <Logo light />
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm text-white/75 md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="transition-colors hover:text-lime"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 text-sm text-white/75 md:flex">
          <Link href="/login">Sign In</Link>
          <Link href="/sign-up" className="hover:text-lime">
            Join Us
          </Link>
          <Link
            href="/search"
            aria-label="Browse courses"
            className="hover:text-lime"
          >
            <ShoppingBag aria-hidden="true" className="size-5" strokeWidth={1.7} />
          </Link>
        </div>
        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X aria-hidden="true" className="size-7" strokeWidth={1.7} />
          ) : (
            <Menu aria-hidden="true" className="size-7" strokeWidth={1.7} />
          )}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="absolute inset-x-4 top-full mt-2 flex flex-col gap-1 rounded-2xl border border-white/20 bg-brand p-4 shadow-xl md:hidden"
        >
          {[...links, { label: "Join Us", href: "/sign-up" }].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
