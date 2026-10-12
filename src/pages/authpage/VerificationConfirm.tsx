import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { checkmark } from "@/lib/assets";
import { useAuthStore } from "@/statemanagers/AuthStore";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const VerificationConfirm = () => {
  //const { token } = useParams();
  const navigate = useNavigate();
  const { verificationLoadingState, setVerificationLoadingState, clearAuthState } = useAuthStore();

  const proceedToDashboard = () => {
    navigate("/userpage/learneractionpage/dashboard", { replace: true });
  };

  useEffect(() => {
    clearAuthState();

    const timeoutId = setTimeout(() => {
      setVerificationLoadingState();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [clearAuthState, setVerificationLoadingState]);

  return (
    <>
      <div className="flex flex-col justify-center items-center text-primary text-pretty">
        <section className="py-4">{verificationLoadingState ? <img className="w-25 h-25" src={checkmark} alt="CheckmarkAnimation" /> : <Spinner className="size-15" />}</section>

        {verificationLoadingState ? (
          <p className="text-lg md:text-xl font-bold transition-all duration-200">Email Verifed Successfully</p>
        ) : (
          <p className="animate-pulse">Confirming verification link .....</p>
        )}

        {verificationLoadingState && (
          <Button onClick={() => proceedToDashboard()} className="w-80 h-12 md:h-10 mt-6 flex flex-row self-center items-center text-sm bg-green-500 text-primary-foreground hover:text-secondary">
            Go to Dashboard
            <ArrowRight />
          </Button>
        )}
      </div>
    </>
  );
};
