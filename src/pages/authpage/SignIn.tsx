import { AccountSelect } from "@/components/PageComponents/authpage/AccountSelect";
import { AuthMobileHeader } from "@/components/PageComponents/authpage/AuthMobileHeader";
import { PasswordInputField } from "@/components/PageComponents/authpage/PasswordInputField";
import { TextInputField } from "@/components/PageComponents/authpage/TextInputField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useAuthStore } from "@/statemanagers/AuthStore";
import { signInDataSchema, type SignInDataType } from "@/typesnschemas/schemas/AuthSchemas";
import { MailIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn } from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export const SignIn = () => {
  const navigate = useNavigate();
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
      remember_me: false,
    },
  });

  const handleSignInSubmit: SubmitHandler<SignInDataType> = (data) => {
    setAuthLoadingState();
    setTimeout(() => {
      console.log(data);
      setAuthLoadingState();
      showToast();
    }, 1000);
  };

  const showToast = () => {
    return toast.success("Sign in Successful.", {
      className: "text-green-600!",
      onAutoClose: () => {
        navigate("/userpage/learneractionpage/dashboard", { replace: true });
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
      <Helmet>
        <title>Sign In | Uptorps</title>
      </Helmet>

      <div className="flex flex-col justify-center items-center text-primary space-y-6">
        <AuthMobileHeader />

        <p className="font-bold text-sm md:text-2xl lg:text-4xl">Log into your account</p>

        <form onSubmit={handleSubmit(handleSignInSubmit)} className="flex flex-col w-75 md:w-85 text-primary space-y-1">
          <AccountSelect control={control} errors={errors} />

          <TextInputField
            type="email"
            label="Email"
            fieldname="email"
            fieldicon={MailIcon}
            register={register}
            placeholder="Enter your email"
            required={true}
            errors={errors}
          />

          <PasswordInputField
            label="Password"
            fieldname="password"
            register={register}
            placeholder="Enter your password"
            required={true}
            errors={errors}
          />

          <section className="flex flex-row justify-start items-center space-x-2 mt-4">
            <Checkbox id="remember-me" {...register("remember_me")} />
            <Label htmlFor="remember-me">Remember me</Label>
          </section>

          <Button
            type="submit"
            className="w-80 h-12 md:h-10 mt-6 flex flex-row self-center items-center text-sm bg-green-500 text-primary-foreground hover:text-secondary"
            disabled={authLoadingState && true}
          >
            {authLoadingState ? <Spinner /> : <LogIn />}
            Sign In
          </Button>
        </form>

        <div>
          <span>Demo Access Buttons</span>
          <Button
            onClick={() => navigate("/adminpage/dashboard", { replace: true })}
            className="w-80 h-9 flex flex-row self-center items-center text-sm bg-green-500 text-primary-foreground hover:text-secondary"
          >
            Go to Admin Page
          </Button>

          <Button
            onClick={() => navigate("/userpage/tutoractionpage/dashboard", { replace: true })}
            className="w-80 h-9 flex flex-row self-center items-center text-sm bg-green-500 text-primary-foreground hover:text-secondary"
          >
            Go to Tutor Page
          </Button>
        </div>

        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="text-sm text-primary">
            Forgot your password?{" "}
            <Link to={"/auth/passwordreset"} className="text-green-500 transition-[font] hover:font-semibold">
              Reset Password
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
