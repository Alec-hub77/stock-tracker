"use client";

import { CountrySelectField } from "@/components/forms/CountrySelectField";
import { FooterLink } from "@/components/forms/FooterLink";
import { InputField } from "@/components/forms/InputField";
import { SelectField } from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constants";
import { useForm } from "react-hook-form";

const defaultFormData: SignUpFormData = {
  fullName: "",
  email: "",
  password: "",
  country: "US",
  investmentGoals: "Growth",
  riskTolerance: "Medium",
  preferredIndustry: "Technology",
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({ defaultValues: defaultFormData, mode: "onBlur" });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full Name is required", minLength: 2 }}
        />
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
        <CountrySelectField name="county" control={control} label="Select your country" error={errors.country} />

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goal"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />
        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk tolerance"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectField
          name="preferedIndustry"
          label="Prefered Industry"
          placeholder="Select your prefered industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />
        <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
          {isSubmitting ? "Creating account" : "Start Your Investing Journey"}
        </Button>
        <FooterLink text="Already have an account ?" linkText="Sign in" href="/sign-in" />
      </form>
    </>
  );
};

export default SignUp;
