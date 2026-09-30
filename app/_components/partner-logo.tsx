import Reveal from "@/components/motion/reveal";
import Image from "next/image";

const partnerLogos = [
  { src: "/partnerLogo/partner-logo1.png", alt: "Logoipsum", width: 167, height: 41 },
  { src: "/partnerLogo/partner-logo2.png", alt: "Logoipsum", width: 168, height: 41 },
  { src: "/partnerLogo/partner-logo3.png", alt: "Logoipsum", width: 170, height: 41 },
  { src: "/partnerLogo/partner-logo4.png", alt: "Logoipsum", width: 170, height: 41 },
  { src: "/partnerLogo/partner-logo5.png", alt: "Logoipsum", width: 169, height: 42 },
];

export default function PartnerLogoSection() {
  return (
    <section aria-label="Our partners" className="bg-[#f5f5f7] py-12 lg:py-20">
      <ul className="container flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:justify-between">
        {partnerLogos.map((logo, index) => (
          <Reveal as="li" key={logo.src} delay={index * 0.06}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              sizes="150px"
              className="h-auto w-37.5 object-contain"
            />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
