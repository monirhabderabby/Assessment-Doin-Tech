"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function SiteShell({ children, navbar, footer }: {
  children: ReactNode;
  navbar: ReactNode;
  footer: ReactNode;
}) {
  const pathname = usePathname();
  const isSignUp = pathname === "/sign-up" || pathname.startsWith("/sign-up/");

  return (
    <>
      {!isSignUp && navbar}
      <main id="main-content" className="flex-1">{children}</main>
      {!isSignUp && footer}
    </>
  );
}
