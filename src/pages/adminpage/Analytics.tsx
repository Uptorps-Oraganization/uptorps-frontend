import { Button } from "@/components/ui/button";
import { umamiIcon } from "@/lib/assets";
import { useIconHover } from "@animateicons/react";
import { ArrowUpRight } from "@animateicons/react/lucide";

export const AdminAnalytics = () => {
  const { ref, triggerProps } = useIconHover({ trigger: "hover" });

  return (
    <>
      <div className="flex flex-1 justify-center items-center">
        <section className="flex flex-col justify-center items-center">
          <p className="font-sans">
            Site Analytics Handled With <b className="text-green-500">Umami</b>
          </p>

          <img className="size-50 my-2 animate-pulse" src={umamiIcon} alt="umami" />

          <Button className="p-4" {...triggerProps}>
            <ArrowUpRight ref={ref} />
            Visit Analytics Dashbord
          </Button>
        </section>
      </div>
    </>
  );
};
