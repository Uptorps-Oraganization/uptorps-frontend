import { AccountSelect } from "@/components/PageComponents/AuthPage/AccountSelect";
import { PasswordInputField } from "@/components/PageComponents/AuthPage/PasswordInputField";
import { TextInputField } from "@/components/PageComponents/AuthPage/TextInputField";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useAuthStore } from "@/statemanagers/AuthStore";
import { signUpDataSchema, type SignUpDataType } from "@/typesnschemas/schemas/AuthSchemas";
import { MailIcon, UserIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailWarning, UserPlus } from "lucide-react";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const SignUp = () => {
  const navigate = useNavigate();
  const { authLoadingState, setAuthLoadingState, clearAuthState } = useAuthStore();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDataType>({
    resolver: zodResolver(signUpDataSchema),
    defaultValues: {
      accounttype: "learner",
    },
  });

  const handleSignUpSubmit: SubmitHandler<SignUpDataType> = (data) => {
    setAuthLoadingState();
    setTimeout(() => {
      console.log(data);
      setAuthLoadingState();
      showToastForVerificationRequired();
    }, 1000);
  };

  const showToastForVerificationRequired = () => {
    return toast.message("Verification Required.", {
      icon: <MailWarning className="size-4 mr-1" />,
      onAutoClose: () => {
        navigate("/auth/verificationemailsent", { replace: true });
      },
      duration: 1000,
    });
  };

  useEffect(() => {
    clearAuthState();

    return () => {
      toast.dismiss();
    };
  }, [clearAuthState]);

  return (
    <>
      <div className="flex flex-col justify-center items-center text-primary space-y-6">
        <p className="font-bold text-4xl">Create a new account</p>
        <form onSubmit={handleSubmit(handleSignUpSubmit)} className="flex flex-col w-85 text-primary space-y-1">
          <AccountSelect control={control} errors={errors} />

          <TextInputField type={"text"} label="Username" fieldname={"username"} fieldicon={UserIcon} register={register} placeholder={"Enter your username"} errors={errors} />

          <TextInputField type={"email"} label="Email" fieldname={"email"} fieldicon={MailIcon} register={register} placeholder={"Enter your email"} errors={errors} />

          <PasswordInputField label="Password" fieldname="password" register={register} errors={errors} />

          <PasswordInputField label="Confirm Password" fieldname="confirmpassword" register={register} errors={errors} />

          <Button type="submit" className="w-80 h-10 mt-6  self-center text-[15px] bg-green-500 text-primary-foreground hover:text-secondary" disabled={authLoadingState && true}>
            {authLoadingState ? <Spinner /> : <UserPlus />}
            Create Account
          </Button>
        </form>
      </div>
    </>
  );
};
