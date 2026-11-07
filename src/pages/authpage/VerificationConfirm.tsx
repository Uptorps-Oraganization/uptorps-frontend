import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useAuthStore } from "@/statemanagers/AuthStore";
import { CheckmarkCircle01Icon, type CheckmarkCircle01IconHandle } from "@animateicons/react/huge";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

export const VerificationConfirm = () => {
  //const { token } = useParams();
  const navigate = useNavigate();
  const { verificationLoadingState, setVerificationLoadingState, clearAuthState } = useAuthStore();

  const checkmarkRef = useRef<CheckmarkCircle01IconHandle>(null);

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
  

  useEffect(() => {
    if (verificationLoadingState && checkmarkRef.current) {
      checkmarkRef.current?.startAnimation();
    }
  }, [verificationLoadingState]);

  return (
    <>
      <div className="flex flex-col justify-center items-center text-primary text-pretty">
        <section className="py-4">
          {verificationLoadingState ? (
            <CheckmarkCircle01Icon ref={checkmarkRef} className="[&_svg]:size-25! md:[&_svg]:size-20! text-green-500" />
          ) : (
            <Spinner className="size-6 md:size-8 lg:size-10" />
          )}
        </section>

        {verificationLoadingState ? (
          <p className="text-lg md:text-xl font-bold transition-all duration-200">Email Verifed Successfully</p>
        ) : (
          <p className="animate-pulse">Verification in progress.....</p>
        )}

        {verificationLoadingState && (
          <Button
            onClick={() => proceedToDashboard()}
            className="w-80 h-12 md:h-10 mt-6 flex flex-row self-center items-center text-sm bg-green-500 text-primary-foreground hover:text-secondary"
          >
            Go to Dashboard
            <ArrowRight />
          </Button>
        )}
      </div>
    </>
  );
};
