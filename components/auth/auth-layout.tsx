import type { ReactNode } from "react";
import AuthBrand from "./auth-brand";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-brand bg-[linear-gradient(to_right,#ffffff12_2px,transparent_2px),linear-gradient(to_bottom,#ffffff12_2px,transparent_2px)] bg-size-[120px_120px] bg-position-[0_-2px] text-white">
      <div className="mx-auto max-w-145 px-5 pt-6 pb-10 md:mx-7 md:max-w-300 md:px-0 md:pt-8.5 md:pb-15 lg:mx-10 xl:mx-auto xl:pb-30">
        <AuthBrand />
        <div className="mt-7 flex flex-col gap-7.5 md:mt-13.25 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.16fr)] md:gap-8 lg:gap-15 xl:grid-cols-[500px_580px] xl:gap-30">
          {children}
        </div>
      </div>
    </div>
  );
}
