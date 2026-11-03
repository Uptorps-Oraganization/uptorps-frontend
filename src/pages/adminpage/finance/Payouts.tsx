import { UserStatCard } from "@/components/PageComponents/adminpage/accounts/UserStatCard";
import { PayoutApprovalDialog } from "@/components/PageComponents/adminpage/finance/payouts/payoutdialogs/PayoutApprovalDialog";
import { PayoutDetailDialog } from "@/components/PageComponents/adminpage/finance/payouts/payoutdialogs/PayoutDetailDialog";
import { PayoutRejectDialog } from "@/components/PageComponents/adminpage/finance/payouts/payoutdialogs/PayoutRejectDialog";
import { PayoutDisplayCard } from "@/components/PageComponents/adminpage/finance/payouts/PayoutDisplayCard";
import { usePayoutStore } from "@/statemanagers/adminpagestate/PayoutStore";
import { CircleDotIcon } from "@animateicons/react/lucide";

export const AdminPayouts = () => {
  const { showPayoutDetailsDialog, showApprovePayoutDialog, showRejectPayoutDialog } = usePayoutStore();

  return (
    <>
      <div className="p-1 pt-2 pb-10 space-y-6">
        <section className="px-4">
          <p className="font-semibold">Payouts Statistics</p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <UserStatCard title={"Pending Payout Requests"} figure={100} trendicon={CircleDotIcon} />

            <UserStatCard title={"Successful Payouts"} figure={9234} trendicon={CircleDotIcon} />

            <UserStatCard title={"Failed Payouts"} figure={34} trendicon={CircleDotIcon} />
          </div>
        </section>

        <section className="px-4">
          <div className="flex flex-col pb-2">
            <p className="font-semibold">Current Pending Payout Requests</p>
            <i className="text-xs">Please verify withdrawal details and approve</i>
          </div>

          <PayoutDisplayCard />
        </section>
      </div>

      {showPayoutDetailsDialog && <PayoutDetailDialog />}
      {showApprovePayoutDialog && <PayoutApprovalDialog />}
      {showRejectPayoutDialog && <PayoutRejectDialog />}
    </>
  );
};
