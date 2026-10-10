import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { maildelivery } from "@/lib/assets";
import { useAuthStore } from "@/statemanagers/AuthStore";
import { Check, ClockIcon, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const VerificationSent = () => {
  const { mailLoadingState, setMailLoadingState, clearAuthState } = useAuthStore();
  const [confirmVerificationLoadingState, setConfirmVerificationLoadingState] = useState(false);
  const navigate = useNavigate();

  const resendVerification = () => {
    setMailLoadingState();
    setTimeout(() => {
      setMailLoadingState();
      showToastForVerificationResent();
    }, 3000);
  };

  const confirmVerification = () => {
    setConfirmVerificationLoadingState(true);
    setTimeout(() => {
      setConfirmVerificationLoadingState(false);
      showToastForVerificationConfirmed();
    }, 3000);
  };

  const showToastForVerificationResent = () => {
    return toast.success("Verification Mail Resent.", {
      className: "text-green-600!",
      duration: 1000,
    });
  };

  const showToastForVerificationConfirmed = () => {
    return toast.success("Email verification Confirmed.", {
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
    <div className="flex flex-col justify-center items-center text-primary space-y-6">
      <img className="w-25 h-25" src={maildelivery} alt="CheckmarkAnimation" />

      <section className="flex flex-col justify-center items-center px-10 space-y-4 text-center text-pretty">
        <span className="text-[15px] font-bold">If you entered a correct email address, then you will find a mail containing a verification link in your mailbox.</span>
        <span className="text-[14px]">{"(Also check spam folder if you cannot see verification mail in mailbox)"}</span>
        <span className="text-[15px] inline-flex justify-center items-center">
          <ClockIcon className="text-green-600 size-4 mr-2" />
          Link has a life span of <b className="ml-1 animate-pulse"> 5 minutes </b>
        </span>

        <span className="mt-4">If you didn't receive the verification link or it has expired, click the button below</span>
      </section>

      <Button onClick={() => resendVerification()} className="w-80 h-10 text-[15px] bg-green-500 text-primary-foreground hover:text-secondary" disabled={mailLoadingState && true}>
        {mailLoadingState ? <Spinner /> : <Send />}
        Resend Verification Mail
      </Button>

      <Button onClick={() => confirmVerification()} className="w-80 h-10 text-[15px] bg-green-500 text-primary-foreground hover:text-secondary" disabled={confirmVerificationLoadingState && true}>
        {confirmVerificationLoadingState ? <Spinner /> : <Check />}
        Confirm Verification
      </Button>
    </div>
  );
};
