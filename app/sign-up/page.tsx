import type { Metadata } from "next";
import AuthLayout from "@/components/auth/auth-layout";
import SignUpCard from "./_components/sign-up-card";
import SignUpShowcase from "./_components/sign-up-showcase";

export const metadata: Metadata = {
  title: "Create an Account | ByteSpace",
  description:
    "Join ByteSpace and start learning alongside a community of curious creators.",
};

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpShowcase />
      <SignUpCard />
    </AuthLayout>
  );
}
