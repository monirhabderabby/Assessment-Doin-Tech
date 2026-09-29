import type { Metadata } from "next";
import AuthLayout from "@/components/auth/auth-layout";
import LoginCard from "./_components/login-card";
import LoginShowcase from "./_components/login-showcase";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
  description: "Sign in to ByteSpace and continue your learning journey.",
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginShowcase />
      <LoginCard />
    </AuthLayout>
  );
}
