"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { loginSchema, type LoginValues } from "@/schemas/auth";

const inputClassName = "h-[53px] w-full rounded-[13px] border border-[#e1e1e5] bg-white px-[23px] py-0 text-lg leading-[26px] text-[#252628] shadow-none placeholder:text-[#858995] placeholder:opacity-100 aria-invalid:border-destructive md:text-lg";

export default function LoginForm() {
  const [notice, setNotice] = useState("");
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  function onSubmit() {
    // Connect the authentication API here when it is available.
    setNotice("Sign-in is not available yet. Please try again later.");
  }

  return (
    <Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="mt-8.5 md:mt-[45px]">
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem className="mb-6 space-y-1.5">
            <FormLabel className="block text-sm leading-4.5 font-normal">Email</FormLabel>
            <FormControl>
              <Input {...field} type="email" autoComplete="email" placeholder="designer@example.com" className={inputClassName} />
            </FormControl>
            <FormMessage role="alert" />
          </FormItem>
        )} />
        <FormField control={form.control} name="password" render={({ field }) => (
          <FormItem className="space-y-1.5">
            <FormLabel className="block text-sm leading-4.5 font-normal">Password</FormLabel>
            <FormControl>
              <Input {...field} type="password" autoComplete="current-password" placeholder="********" className={inputClassName} />
            </FormControl>
            <FormMessage role="alert" />
          </FormItem>
        )} />
        <div className="mt-6 flex justify-end">
          <Button type="submit" variant="secondary" disabled={form.formState.isSubmitting} className="h-11.5 min-w-26 rounded-full bg-lime px-6 text-lg font-normal text-[#202020] hover:bg-[#bfe900]">
            Sign In
          </Button>
        </div>
        {notice && <p role="status" className="mt-4 text-sm leading-5 text-[#575961]">{notice}</p>}
      </form>
    </Form>
  );
}
