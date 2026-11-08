import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIconHover } from "@animateicons/react";
import { EyeIcon, NetworkIcon } from "@animateicons/react/lucide";

export const ReferralNetworkCard = () => {
  const { ref: eyeRef, triggerProps } = useIconHover({ trigger: "hover" });

  return (
    <>
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="w-fit flex flex-row items-center gap-1">
            <NetworkIcon size={16} color="var(--color-green-500)" />
            Referral Network
          </CardTitle>
          <CardDescription>Your referral performance and earnings</CardDescription>
          <CardAction>
            <Badge className="text-green-500 bg-green-500/10 font-semibold py-3">Active</Badge>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="flex flex-row items-center bg-secondary p-2 gap-2">
            <Badge className="text-green-500 bg-green-500/10 font-semibold py-3">20%</Badge>

            <section className="flex flex-col justify-start">
                <p className="text-[16px] font-semibold">Level 1</p>
                <span className="text-xs">12 referrals</span>
            </section>
          </div>
        </CardContent>

        <CardFooter className="justify-center">
          <Button className="text-green-500 bg-green-500/10" variant="ghost" {...triggerProps}>
            <EyeIcon ref={eyeRef} />
            View Full Referral Tree
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
