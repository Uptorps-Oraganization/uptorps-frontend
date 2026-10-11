import { Button } from "@/components/ui/button";
import { DynamicUptorpLogo } from "@/components/ui/DynamicUptorpLogo";
import { Spinner } from "@/components/ui/spinner";
import { useTheme } from "@/contexthandlers/ThemeProvider";
import { maildelivery } from "@/lib/assets";
import { useAuthStore } from "@/statemanagers/AuthStore";
import { ClockIcon } from "@animateicons/react/lucide";
import { MailsIcon, Send } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export const AccountResetLinkSent = () => {
  const { mailLoadingState, setMailLoadingState, clearAuthState } = useAuthStore();

  const { theme } = useTheme();

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
      <div className="flex lg:hidden flex-row items-center p-1 space-x-3">
        <DynamicUptorpLogo className="size-6 md:size-10 mr-2" theme={theme} />
        <h1 className="text-xl font-bold">Uptorps</h1>
      </div>

      <img className="w-25 h-25" src={maildelivery} alt="CheckmarkAnimation" />

      <section className="flex flex-col justify-center items-center px-5 lg:px-10 space-y-4 text-center text-pretty">
        <span className="text-[15px] font-bold">Click on the reset link you will find in your mailbox to reset your password.</span>
        <span className="text-[14px]">{"(Also check spam folder if you cannot see reset mail in mailbox)"}</span>
        <span className="text-[15px] inline-flex justify-center items-center">
          <ClockIcon className="text-green-600 size-4 mr-2" />
          Link has a life span of <b className="ml-1 animate-pulse"> 10 minutes </b>
        </span>

        <span className="mt-4">If you didn't receive the reset link or it has expired, click the button below</span>
      </section>

      <Button onClick={() => resendLink()} className="w-80 h-10 text-[15px] bg-green-500 text-primary-foreground hover:text-secondary" disabled={mailLoadingState && true}>
        {mailLoadingState ? <Spinner /> : <Send />}
        Resend Reset Mail
      </Button>
    </div>
  );
};
