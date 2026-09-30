"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "");
    try {
      localStorage.setItem("bytespace-newsletter-interest", email);
      setMessage(
        "Your interest is saved on this device. Newsletter subscriptions will open soon.",
      );
      event.currentTarget.reset();
    } catch {
      setMessage(
        "We couldn’t save your interest on this device. Please try again with browser storage enabled.",
      );
    }
  }
  return (
    <div>
      <form onSubmit={submit} className="mt-9 flex flex-wrap gap-4">
        <label htmlFor="newsletter-email" className="sr-only">
          Your email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Enter your email"
          className="min-w-0 flex-1 rounded-full border border-[#dedee3] px-6 py-3.5 text-sm placeholder:text-muted"
        />
        <button
          type="submit"
          className="rounded-full bg-lime px-7 py-3.5 text-sm font-medium hover:bg-lime/70"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-4 text-xs leading-5 text-muted">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates from our company.
      </p>
      <p role="status" className="mt-3 text-sm text-brand">
        {message}
      </p>
    </div>
  );
}
