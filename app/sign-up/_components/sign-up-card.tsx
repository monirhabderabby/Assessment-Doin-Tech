import Link from "next/link";
import SignUpForm from "./sign-up-form";

export default function SignUpCard() {
  return (
    <section className="flex min-h-[660px] flex-col rounded-3xl bg-white px-7 py-9 text-[#252628] max-[375px]:px-5 md:min-h-[720px] md:rounded-[26px] md:py-11 lg:min-h-[784px] lg:px-10 lg:pt-[62px] lg:pb-[52px] xl:px-[63px]" aria-labelledby="sign-up-heading">
      <div>
        <p className="text-lg leading-7 text-[#003cff]">Create an Account</p>
        <h1 id="sign-up-heading" className="mt-[3px] text-[40px] leading-[47px] font-bold tracking-[-1.1px] max-[375px]:text-[35px] max-[375px]:leading-[42px] md:text-[38px] md:leading-[45px] lg:text-[46px] lg:leading-[53px]">Welcome to<br />ByteSpace</h1>
      </div>
      <SignUpForm />
      <p className="mt-auto pt-[38px] text-center text-base leading-6 text-[#55565e] max-[375px]:text-sm">Already have an account? <Link href="/login" className="text-[#003cff] hover:underline">Login</Link></p>
    </section>
  );
}
