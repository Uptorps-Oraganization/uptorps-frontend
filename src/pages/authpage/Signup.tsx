import { AccountSelect } from "@/components/PageComponents/AuthPage/AccountSelect";
import { PasswordInputField } from "@/components/PageComponents/AuthPage/PasswordInputField";
import { TextInputField } from "@/components/PageComponents/AuthPage/TextInputField";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { maildelivery } from "@/lib/assets";
import { useAuthStore } from "@/statemanagers/AuthStore";
import { signUpDataSchema, type SignUpDataType } from "@/typesnschemas/schemas/AuthSchemas";
import { MailIcon, UserIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, UserPlus } from "lucide-react";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

export const SignUp = () => {
  const { authLoadingState, authDetailsPassCheck, mailLoadingState, setAuthLoadingState, setAuthDetailsPassCheck, setMailLoadingState, clearAuthState } = useAuthStore();

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
      setAuthDetailsPassCheck();
    }, 1000);
  };

  const resendVerification = () => {
    setMailLoadingState();
    setTimeout(() => {
      setMailLoadingState();
    }, 1000);
  };

  useEffect(() => {
    clearAuthState();
  }, [clearAuthState]);

  return (
    <>
      {authDetailsPassCheck ? (
        <div className="flex flex-col justify-center items-center text-primary space-y-10">
          <img className="w-25 h-25" src={maildelivery} alt="CheckmarkAnimation" />

          <section className="flex flex-col justify-center items-center px-2 space-y-4">
            <span className="text-xl text-center">If you entered a correct email address, then you will find a mail containing a verification link in your mailbox.</span>
            <span className="text-[14px] text-center">{"(Also check spam folder if you cannot see verification mail in mailbox)"}</span>
          </section>

          <Button onClick={() => resendVerification()} className="w-80 h-10 mt-6 text-[15px] bg-green-500 text-primary-foreground hover:text-secondary" disabled={mailLoadingState && true}>
            {mailLoadingState ? <Spinner /> : <Send />}
            Resend Verification Mail
          </Button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-primary space-y-6">
          <p className="font-bold text-4xl">Create a new account</p>
          <form onSubmit={handleSubmit(handleSignUpSubmit)} className="flex flex-col w-85 text-primary space-y-1">
            <AccountSelect control={control} errors={errors} />

            <TextInputField type={"text"} fieldname={"username"} fieldicon={UserIcon} register={register} placeholder={"Enter your username"} errors={errors} />

            <TextInputField type={"email"} fieldname={"email"} fieldicon={MailIcon} register={register} placeholder={"Enter your email"} errors={errors} />

            <PasswordInputField fieldname="password" register={register} errors={errors} />

            <PasswordInputField fieldname="confirmpassword" register={register} errors={errors} />

            <Button type="submit" className="w-80 h-10 mt-6  self-center text-[15px] bg-green-500 text-primary-foreground hover:text-secondary" disabled={authLoadingState && true}>
              {authLoadingState ? <Spinner /> : <UserPlus />}
              Create Account
            </Button>
          </form>
        </div>
      )}
    </>
  );
};
