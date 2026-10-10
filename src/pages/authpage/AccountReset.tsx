import { TextInputField } from "@/components/PageComponents/AuthPage/TextInputField";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useAuthStore } from "@/statemanagers/AuthStore";
import { forgotPasswordDataSchema, type ForgotPasswordDataType } from "@/typesnschemas/schemas/AuthSchemas";
import { MailIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "lucide-react";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const AccountReset = () => {
  const navigate = useNavigate();
  const { passwordResetLoadingState, setPasswordResetLoadingState, clearAuthState } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordDataType>({
    resolver: zodResolver(forgotPasswordDataSchema),
  });

  const handleEmailSubmit: SubmitHandler<ForgotPasswordDataType> = (data) => {
    setPasswordResetLoadingState();
    setTimeout(() => {
      console.log(data);
      setPasswordResetLoadingState();
      showToast();
    }, 1000);
  };

  const showToast = () => {
    return toast.success("Reset Request Successful", {
      className: "!text-green-600",
      onAutoClose: () => {
        navigate("/auth/passwordreset/resetlinksent", { replace: true });
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
    <div className="flex flex-col justify-center items-center text-primary space-y-6">
      <p className="font-bold text-4xl ">Account Password Reset</p>

      <form onSubmit={handleSubmit(handleEmailSubmit)} className="flex flex-col w-85 text-primary space-y-1">
        <TextInputField
          type={"email"}
          label="Confirm Account Email"
          fieldname={"email"}
          fieldicon={MailIcon}
          register={register}
          placeholder={"Enter your account email"}
          required={true}
          errors={errors}
        />

        <Button
          type="submit"
          className="w-80 h-10 mt-6 flex flex-row self-center items-center text-[15px] bg-green-500 text-primary-foreground hover:text-secondary"
          disabled={passwordResetLoadingState && true}
        >
          {passwordResetLoadingState ? <Spinner /> : <Link />}
          Get Reset Link
        </Button>
      </form>
    </div>
  );
};
