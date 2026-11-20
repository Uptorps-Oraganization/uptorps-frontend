import { Badge } from "@/components/ui/badge";
import { formatAmountWithCurrencySymbol } from "@/lib/utils";
import type { ReferralLevelCardType } from "@/typesnschemas/types/DataTypes";

export const ReferralNetworkLevelItem = (props: ReferralLevelCardType) => {
  return (
    <>
      <div className="flex flex-row justify-start items-center border p-2 gap-2">
        <Badge className="text-green-500 bg-green-500/10 font-semibold py-3">{props.percentage}%</Badge>

        <section className="flex flex-col justify-start">
          <p className="text-[14px] font-semibold">Level {props.level}</p>
          <span className="text-xs">{props.refsCount} referrals</span>
        </section>

        <span className="ms-auto text-sm font-semibold">{formatAmountWithCurrencySymbol(props.refsAmount)}</span>
      </div>
    </>
  );
};
