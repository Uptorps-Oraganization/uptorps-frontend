import { AuthMobileHeader } from "@/components/PageComponents/AuthPage/AuthMobileHeader";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { maildelivery } from "@/lib/assets";
import { useAuthStore } from "@/statemanagers/AuthStore";
import { ClockIcon } from "@animateicons/react/lucide";
import { MailsIcon, Send } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export const AccountResetLinkSent = () => {
  const { mailLoadingState, setMailLoadingState, clearAuthState } = useAuthStore();

  const resendLink = () => {
    setMailLoadingState();
    setTimeout(() => {
      setMailLoadingState();
      showToastForResetLinkResent();
    }, 3000);
  };

  const showToastForResetLinkResent = () => {
    return toast.message("Verification Mail Resent.", {
      icon: <MailsIcon className="size-4 mr-1" />,
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
    <div className="flex flex-col justify-center items-center text-primary space-y-10">
      <AuthMobileHeader welcome={false} />

      <img className="size-20 md:size-25" src={maildelivery} alt="CheckmarkAnimation" />

      <section className="flex flex-col justify-center items-center px-2 lg:px-6 space-y-4 text-center text-pretty">
        <span className="text-sm md:text-[15px] font-bold">Click on the reset link you will find in your mailbox to reset your password.</span>
        <span className="text-sm md:text-[15px]">{"(Also check spam folder if you cannot see reset mail in mailbox)"}</span>
        <span className="text-sm md:text-[15px] inline-flex justify-center items-center">
          <ClockIcon className="text-green-600 size-4 mr-2" />
          Link has a life span of <b className="ml-1 animate-pulse"> 10 minutes </b>
        </span>

        <span className="text-xs md:text-sm">If you didn't receive the reset link or it has expired, click the button below</span>
      </section>

      <Button onClick={() => resendLink()} className="w-80 h-12 md:h-10 text-sm bg-green-500 text-primary-foreground hover:text-secondary" disabled={mailLoadingState && true}>
        {mailLoadingState ? <Spinner /> : <Send />}
        Resend Reset Mail
      </Button>
    </div>
  );
};
