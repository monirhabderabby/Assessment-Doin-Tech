import Logo from "@/components/ui/logo";
import Link from "next/link";
import NewsletterForm from "./news-letter-form";

const footerLinkGroups = [
  {
    id: "courses",
    links: [
      { label: "Featured Courses", href: "/search" },
      { label: "Featured Categories", href: "/#learning-paths" },
      { label: "Business", href: "/search?category=Business" },
      { label: "IT", href: "/search?category=IT%20%26%20Software" },
      { label: "Design", href: "/search?category=Design" },
    ],
  },
  {
    id: "categories",
    links: [
      { label: "Development", href: "/search?category=Development" },
      { label: "Marketing", href: "/search?category=Marketing" },
      { label: "Photography", href: "/search?category=Photography" },
      { label: "Finance", href: "/search?category=Finance" },
      { label: "Sport", href: "/search?category=Sport" },
    ],
  },
  {
    id: "community",
    links: [
      { label: "Become a Creator", href: "/#creators" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "/#community" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="newsletter"
      className="border-t border-[#dedee3] bg-white pt-16 sm:pt-20 container"
    >
      <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-28">
        <div>
          <Logo />
          <p className="mt-5 text-xs leading-6 text-[#77797f]">
            Stay Up to date with our latest features and releases by joining our
            newsletter.
          </p>
          <NewsletterForm />
        </div>
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-8 text-xs text-[#74767d] sm:grid-cols-3"
        >
          {footerLinkGroups.map((group) => (
            <div key={group.id} className="flex flex-col items-start gap-5">
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-6 border-t border-[#e9e9ee] py-7 text-[11px] text-[#74767d] sm:mt-28 sm:flex-row">
        <p>© 2023 Bytespace. All rights reserved.</p>
        <div className="flex flex-wrap gap-6">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
