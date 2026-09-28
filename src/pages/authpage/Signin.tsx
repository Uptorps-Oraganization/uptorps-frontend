import { AccountSelect } from "@/components/PageComponents/AuthPage/AccountSelect";
import { PasswordInputField } from "@/components/PageComponents/AuthPage/PasswordInputField";
import { TextInputField } from "@/components/PageComponents/AuthPage/TextInputField";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useAuthStore } from "@/statemanagers/AuthStore";
import { signInDataSchema, type SignInDataType } from "@/typesnschemas/schemas/AuthSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn, Mail } from "lucide-react";
import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

export const SignIn = () => {
  const { authLoadingState, setAuthLoadingState, clearAuthState } = useAuthStore();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInDataType>({
    resolver: zodResolver(signInDataSchema),
    defaultValues: {
      accounttype: "learner",
    },
  });

  const handleSignInSubmit: SubmitHandler<SignInDataType> = (data) => {
    setAuthLoadingState();
    setTimeout(() => {
      console.log(data);
      setAuthLoadingState();
    }, 1000);
  };

  useEffect(() => {
    clearAuthState();
  }, [clearAuthState]);

  return (
    <div className="flex flex-col justify-center items-center text-primary space-y-6">
      <p className="font-bold text-4xl ">Log into your account</p>
      <form onSubmit={handleSubmit(handleSignInSubmit)} className="flex flex-col w-85 text-primary space-y-1">
        <AccountSelect control={control} errors={errors} />

        <TextInputField type={"email"} fieldname={"email"} fieldicon={Mail} register={register} placeholder={"Enter your email"} errors={errors} />

        <PasswordInputField fieldname="password" register={register} errors={errors} />

        <Button
          type="submit"
          className="w-80 h-10 mt-6 flex flex-row self-center items-center text-[15px] bg-green-500 text-primary-foreground hover:text-secondary"
          disabled={authLoadingState && true}
        >
          {authLoadingState ? <Spinner /> : <LogIn />}
          Sign In
        </Button>
      </form>
    </div>
  );
};
