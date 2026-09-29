"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function SiteShell({ children, navbar, footer }: {
  children: ReactNode;
  navbar: ReactNode;
  footer: ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = ["/sign-up", "/login"].some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  return (
    <>
      {!isAuthPage && navbar}
      <main id="main-content" className="flex-1">{children}</main>
      {!isAuthPage && footer}
    </>
  );
}
