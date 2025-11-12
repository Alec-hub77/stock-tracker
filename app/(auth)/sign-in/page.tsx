"use client";

import { FooterLink } from "@/components/forms/FooterLink";
import { InputField } from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { signInWithEmail } from "@/lib/actions/auth.actions";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const defaultFormData: SignInFormData = {
  email: "",
  password: "",
};

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({ defaultValues: defaultFormData, mode: "onBlur" });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signInWithEmail(data);
      console.log(result);
      if (result.success) {
        router.push("/");
      }
    } catch (err) {
      console.error(err);
      toast.error("Sign in failed", {
        description: err instanceof Error ? err.message : "Failed to sign in",
      });
    }
  };
  return (
    <>
      <h1 className="form-title">Log In Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          placeholder="example@mail.com"
          register={register}
          error={errors.email}
          validation={{ required: "Email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
          type="email"
        />
        <InputField
          name="password"
          label="Password"
          placeholder="Enter password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 5 }}
          type="password"
        />
        <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
          {isSubmitting ? "Logining into account" : "Log In"}
        </Button>
        <FooterLink text="Dont have an account ?" linkText="Sign up" href="/sign-up" />
      </form>
    </>
  );
};

export default SignIn;
