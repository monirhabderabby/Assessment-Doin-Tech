import AuthArtwork from "@/components/auth/auth-artwork";

export default function SignUpShowcase() {
  return (
    <section className="pl-0.5" aria-labelledby="sign-up-intro">
      <h2
        id="sign-up-intro"
        className="text-[22px] leading-7 font-bold tracking-[-0.5px]"
      >
        Sign up and come in
      </h2>
      <p className="mt-3.5 max-w-115 text-base leading-6.75 md:max-w-120 lg:text-lg lg:leading-7.25">
        The registration process is straightforward, uncomplicated, and
        efficient, allowing users to sign up quickly, easily, and at no cost
      </p>
      <AuthArtwork />
    </section>
  );
}
