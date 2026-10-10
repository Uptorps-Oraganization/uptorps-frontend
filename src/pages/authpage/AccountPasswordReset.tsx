import { PasswordInputField } from "@/components/PageComponents/AuthPage/PasswordInputField";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useAuthStore } from "@/statemanagers/AuthStore";
import { resetPasswordDataSchema, type ResetPasswordDataType } from "@/typesnschemas/schemas/AuthSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { RotateCcwKey } from "lucide-react";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const AccountPasswordReset = () => {
  const navigate = useNavigate();
  const { passwordResetLoadingState, setPasswordResetLoadingState, clearAuthState } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordDataType>({
    resolver: zodResolver(resetPasswordDataSchema),
  });

  const handleEmailSubmit: SubmitHandler<ResetPasswordDataType> = (data) => {
    setPasswordResetLoadingState();
    setTimeout(() => {
      console.log(data);
      setPasswordResetLoadingState();
      showToast();
    }, 1000);
  };

  const showToast = () => {
    return toast.success("Password Reset Successful", {
      className: "!text-green-600",
      onAutoClose: () => {
        navigate("/auth/signin", { replace: true });
      },
      duration: 2000,
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

      <p className="text-sm">Please enter your email to receive account reset link</p>

      <form onSubmit={handleSubmit(handleEmailSubmit)} className="flex flex-col w-85 text-primary space-y-1">
        <PasswordInputField label="New Password" fieldname="password" register={register} placeholder="Enter new password" required={true} errors={errors} />

        <PasswordInputField label="Confirm New Password" fieldname="confirmpassword" register={register} placeholder="Enter new password again" required={true} errors={errors} />

        <Button
          type="submit"
          className="w-80 h-10 mt-6 flex flex-row self-center items-center text-[15px] bg-green-500 text-primary-foreground hover:text-secondary"
          disabled={passwordResetLoadingState && true}
        >
          {passwordResetLoadingState ? <Spinner /> : <RotateCcwKey />}
          Reset Password
        </Button>
      </form>
    </div>
  );
};
