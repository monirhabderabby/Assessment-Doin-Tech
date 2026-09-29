"use client";

import { useState } from "react";

export default function SocialLogin() {
  const [notice, setNotice] = useState("");
  const buttonClassName = "flex size-[72px] items-center justify-center rounded-[24px] border border-[#d5d5d5] bg-white text-black transition-colors hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-brand";

  return (
    <div className="mt-14 md:mt-[76px]">
      <div className="flex items-center gap-3 text-lg leading-6 text-[#999999]">
        <span className="h-px flex-1 bg-[#d5d5d5]" />
        <span>or</span>
        <span className="h-px flex-1 bg-[#d5d5d5]" />
      </div>
      <div className="mt-10 flex justify-center gap-4 md:mt-[43px]">
        <button type="button" aria-label="Sign in with Facebook" className={buttonClassName} onClick={() => setNotice("Facebook sign-in is not available yet. Please try again later.")}>
          <svg className="size-9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.095 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.931-1.956 1.887v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.095 24 18.1 24 12.073Z" />
          </svg>
        </button>
        <button type="button" aria-label="Sign in with Google" className={buttonClassName} onClick={() => setNotice("Google sign-in is not available yet. Please try again later.")}>
          <svg className="size-9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.89-1.74 2.98-4.31 2.98-7.36Z" />
            <path d="M12 22c2.7 0 4.96-.9 6.62-2.41l-3.24-2.51c-.89.6-2.03.96-3.38.96-2.61 0-4.82-1.76-5.61-4.12H3.05v2.59A10 10 0 0 0 12 22ZM6.39 13.92a6 6 0 0 1 0-3.84V7.49H3.05a10 10 0 0 0 0 9.02l3.34-2.59ZM12 5.96c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.95 5.49l3.34 2.59C7.18 7.72 9.39 5.96 12 5.96Z" />
          </svg>
        </button>
      </div>
      {notice && <p role="status" className="mt-4 text-center text-sm leading-5 text-[#575961]">{notice}</p>}
    </div>
  );
}
