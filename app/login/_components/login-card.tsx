import Link from "next/link";
import LoginForm from "./login-form";
import SocialLogin from "./social-login";

export default function LoginCard() {
  return (
    <section
      aria-labelledby="login-heading"
      className="flex min-h-[720px] flex-col rounded-3xl bg-white px-7 py-9 text-[#252628] max-[375px]:px-5 md:rounded-[26px] md:py-11 lg:min-h-[784px] lg:px-10 lg:pt-[62px] lg:pb-[42px] xl:px-[63px]"
    >
      <div>
        <p className="text-lg leading-7 text-[#003cff]">Sign In</p>
        <h1 id="login-heading" className="mt-[3px] text-[36px] leading-[44px] font-bold tracking-[-1.1px] max-[375px]:text-[30px] md:text-[34px] md:leading-[45px] lg:text-[44px] lg:leading-[53px]">
          Welcome Back
        </h1>
      </div>
      <LoginForm />
      <SocialLogin />
      <p className="mt-auto pt-12 text-center text-base leading-6 text-[#999999] max-[375px]:text-sm">
        New user? <Link href="/sign-up" className="text-[#003cff] hover:underline">Create an account</Link>
      </p>
    </section>
  );
}
