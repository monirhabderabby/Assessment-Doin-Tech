"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { signUpSchema, type SignUpValues } from "@/schemas/auth/index";

const inputClassName =
  "h-[53px] w-full rounded-[13px] border border-[#e1e1e5] bg-white px-[23px] py-0 text-lg leading-[26px] text-[#252628] shadow-none placeholder:text-[#858995] placeholder:opacity-100 aria-invalid:border-destructive md:text-lg";

export default function SignUpForm() {
  const [notice, setNotice] = useState("");
  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { fullName: "", email: "", password: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  function onSubmit() {
    // Replace this notice with the registration API call when auth is connected.
    setNotice("Registration is not available yet. Please try again later.");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="mt-8.5 md:mt-9.75"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="mb-6 space-y-1.5">
              <FormLabel className="block text-sm leading-4.5 font-normal">
                Full Name
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="name"
                  placeholder="Jamie Davis"
                  className={inputClassName}
                />
              </FormControl>
              <FormMessage role="alert" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-6 space-y-1.5">
              <FormLabel className="block text-sm leading-4.5 font-normal">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  autoComplete="email"
                  placeholder="designer@example.com"
                  className={inputClassName}
                />
              </FormControl>
              <FormMessage role="alert" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-6 space-y-1.5">
              <FormLabel className="block text-sm leading-4.5 font-normal">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  autoComplete="new-password"
                  placeholder="********"
                  className={inputClassName}
                />
              </FormControl>
              <FormMessage role="alert" />
            </FormItem>
          )}
        />
        <div className="mt-6 flex justify-end">
          <Button
            type="submit"
            variant="secondary"
            className="h-11.5 min-w-30.75 rounded-full bg-lime px-6 text-lg font-normal text-[#202020] hover:bg-[#bfe900]"
            disabled={form.formState.isSubmitting}
          >
            Continue
          </Button>
        </div>
        {notice && (
          <p role="status" className="mt-4 text-sm leading-5 text-[#575961]">
            {notice}
          </p>
        )}
      </form>
    </Form>
  );
}
