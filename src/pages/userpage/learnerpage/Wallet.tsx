import { AccountTransactionDisplayCard } from "@/components/PageComponents/adminpage/accounts/transactions/AccountTransactionDisplayCard";
import { PayoutDisplayCard } from "@/components/PageComponents/learnerpage/wallet/PayoutRequestDisplayCard";
import { RevenueStatCard } from "@/components/PageComponents/sharedcomponents/RevenueStatCard";
import { Button } from "@/components/ui/button";
import { useIconHover } from "@animateicons/react";
import { BanknoteArrowDownIcon, CircleDotIcon } from "@animateicons/react/lucide";

export const LearnerWallet = () => {
  const { ref: WithdrawalIconRef, triggerProps } = useIconHover({ trigger: "hover" });

  return (
    <>
      <div className="p-1 pt-2 pb-10 space-y-6">
        <section className="px-4">
          <p className="font-semibold">Wallet Statistcs</p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <RevenueStatCard title={"Wallet Balance"} amount={120} trendicon={CircleDotIcon} />
            <RevenueStatCard title={"Total Earnings"} amount={200} trendicon={CircleDotIcon} />
            <RevenueStatCard title={"Total Withdrawal"} amount={80} trendicon={CircleDotIcon} />
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Wallet Action</p>

          <div className="flex flex-row items-center pt-2">
            <Button className="px-6 h-10 max-w-fit" {...triggerProps}>
              <BanknoteArrowDownIcon ref={WithdrawalIconRef} />
              Request a payout
            </Button>
          </div>
        </section>

        <section className="px-8">
          <p className="font-semibold">Payout Requests</p>

          <div className="pt-2 pb-4">
            <PayoutDisplayCard />
          </div>
        </section>

        <section className="px-8">
          <p className="font-semibold">Transactions & Cash Flow</p>

          <div className="pt-2 pb-4">
            <AccountTransactionDisplayCard />
          </div>
        </section>
      </div>
    </>
  );
};
