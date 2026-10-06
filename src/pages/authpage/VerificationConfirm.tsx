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
  const { verificationLoadingState, setverificationLoadingState, clearAuthState } = useAuthStore();

  const proceedToDashboard = () => {
    navigate("/learneractionpage/dashboard", { replace: true });
  };

  useEffect(() => {
    clearAuthState();

    setTimeout(() => {
      setverificationLoadingState();
    }, 3000);
  }, [setverificationLoadingState, clearAuthState]);

  return (
    <>
      <div className="flex flex-col justify-center items-center text-primary text-pretty">
        <section className="py-4">{verificationLoadingState ? <img className="w-25 h-25" src={checkmark} alt="CheckmarkAnimation" /> : <Spinner className="size-15" />}</section>

        {verificationLoadingState ? <p className="text-xl font-bold transition-all duration-200">Email Verifed Successfully</p> : <p className="animate-pulse">Confirming verification link .....</p>}

        {verificationLoadingState && (
          <Button onClick={() => proceedToDashboard()} className="w-80 h-10 mt-6 flex flex-row self-center items-center text-[15px] bg-green-500 text-primary-foreground hover:text-secondary">
            Go to Dashboard
            <ArrowRight />
          </Button>
        )}
      </div>
    </>
  );
};
