import { Badge } from "@/components/ui/badge";
import { formatAmountWithCurrencySymbol } from "@/lib/utils";

type ReferralLevelCardType = {
  percentage: number;
  level: number;
  refsCount: number;
  refsAmount: number;
};

export const ReferralLevelCard = (props: ReferralLevelCardType) => {
  return (
    <>
      <div className="flex flex-row justify-start items-center border p-2 gap-2">
        <Badge className="text-green-500 bg-green-500/10 font-semibold py-3">{props.percentage}%</Badge>

        <section className="flex flex-col justify-start">
          <p className="text-[15px] font-semibold">Level {props.level}</p>
          <span className="text-xs">{props.refsCount} referrals</span>
        </section>

        <span className="ms-auto text-sm font-semibold">{formatAmountWithCurrencySymbol(props.refsAmount)}</span>
      </div>
    </>
  );
};
