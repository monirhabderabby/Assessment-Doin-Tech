import AuthArtwork from "@/components/auth/auth-artwork";

export default function LoginShowcase() {
  return (
    <section className="pl-0.5" aria-labelledby="login-intro">
      <h2 id="login-intro" className="text-[22px] leading-7 font-bold tracking-[-0.5px]">
        Sign in with ease
      </h2>
      <p className="mt-3.5 max-w-115 text-base leading-6.75 md:max-w-120 lg:text-lg lg:leading-7.25">
        Experience a seamless and efficient sign-in process that grants you instant
        access to a world of knowledge.
      </p>
      <AuthArtwork className="mt-[85px]" />
    </section>
  );
}
