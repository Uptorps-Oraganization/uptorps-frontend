import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIconHover } from "@animateicons/react";
import { EyeIcon, NetworkIcon } from "@animateicons/react/lucide";
import { useNavigate } from "react-router";
import { ReferralNetworkLevelItem } from "./ReferralNetworkLevelItem";

export const ReferralNetworkCard = () => {
  const navigate = useNavigate();
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

        <CardContent className="flex flex-col gap-4">
          <ReferralNetworkLevelItem percentage={20} level={1} refsCount={5} refsAmount={250} />
          <ReferralNetworkLevelItem percentage={10} level={2} refsCount={12} refsAmount={180} />
          <ReferralNetworkLevelItem percentage={5} level={3} refsCount={7} refsAmount={45} />
        </CardContent>

        <CardFooter className="justify-center">
          <Button
            onClick={() => navigate("/userpage/learneractionpage/referrals")}
            className="text-green-500 bg-green-500/10"
            variant="ghost"
            {...triggerProps}
          >
            <EyeIcon ref={eyeRef} />
            View Full Referral Tree
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
