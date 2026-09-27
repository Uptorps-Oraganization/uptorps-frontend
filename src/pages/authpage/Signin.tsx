import { AccountSelect } from "@/components/PageComponents/AuthPage/AccountSelect";
import { PasswordInputField } from "@/components/PageComponents/AuthPage/PasswordInputField";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/statemanagers/AuthStore";
import { signInDataSchema, type SignInDataType } from "@/typesnschemas/schemas/AuthSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, LogIn, Mail } from "lucide-react";
import { type SubmitHandler, useForm } from "react-hook-form";

export const SignIn = () => {
  const { authLoadingState, setAuthLoadingState } = useAuthStore();

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

  return (
    <div className="flex flex-col justify-center items-center text-primary space-y-6">
      <p className="font-bold text-4xl ">Log into your account</p>
      <form onSubmit={handleSubmit(handleSignInSubmit)} className="flex flex-col w-85 text-primary space-y-1">
        <Label htmlFor="username" className="text-[14px] mb-3">
          Select Account Type
        </Label>

        <AccountSelect control={control} />
        {errors?.accounttype && <p className="text-xs text-destructive">{errors?.accounttype?.message}</p>}

        <Label htmlFor="email" className="text-[14px]">
          Email
        </Label>

        <InputGroup id="email">
          <InputGroupAddon align="inline-end">
            <Mail />
          </InputGroupAddon>
          <InputGroupInput {...register("email")} type="email" className="text-[14px]! text-primary" placeholder="Enter your email" />
        </InputGroup>

        {errors?.email && <p className="text-xs text-destructive">{errors?.email?.message}</p>}

        <Label htmlFor="password" className="text-[14px]">
          Password
        </Label>

        <PasswordInputField fieldname="password" register={register} />
        {errors?.password && <p className="text-xs text-destructive">{errors?.password?.message}</p>}

        <Button
          type="submit"
          className="w-80 h-10 mt-6 flex flex-row self-center items-center gap-4 text-[15px] bg-green-500 text-primary-foreground hover:text-secondary"
          disabled={authLoadingState && true}
        >
          {authLoadingState ? <LoaderCircle className="animate-spin" /> : <LogIn size={12} />}
          Sign In
        </Button>
      </form>
    </div>
  );
};
