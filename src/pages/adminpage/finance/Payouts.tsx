import { PayoutApprovalDetailDialog } from "@/components/PageComponents/adminpage/finance/payouts/payoutapproval/dialogs/PayoutApprovalDetailDialog";
import { PayoutApprovalRetryDialog } from "@/components/PageComponents/adminpage/finance/payouts/payoutapproval/dialogs/PayoutApprovalRetryDialog";
import { PayoutManagementDisplay } from "@/components/PageComponents/adminpage/finance/payouts/PayoutManagementDisplay";
import { PayoutPendingApprovalDialog } from "@/components/PageComponents/adminpage/finance/payouts/payoutpending/dialogs/PayoutPendingApprovalDialog";
import { PayoutPendingRejectDialog } from "@/components/PageComponents/adminpage/finance/payouts/payoutpending/dialogs/PayoutPendingRejectDialog";
import { UserStatCard } from "@/components/PageComponents/sharedcomponents/UserStatCard";
import { usePayoutApprovalStore, usePayoutPendingStore } from "@/statemanagers/adminpagestore/PayoutStore";
import { CircleDotIcon } from "@animateicons/react/lucide";

export const AdminPayouts = () => {
  const { showApprovePayoutDialog, showRejectPayoutDialog } = usePayoutPendingStore();
  const { showApprovedPayoutDetailsDialog, showApprovedPayoutRetryDialog } = usePayoutApprovalStore();

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
            <p className="font-semibold">Payout Management & Status Check</p>
          </div>

          <PayoutManagementDisplay />
        </section>
      </div>

      {showApprovePayoutDialog && <PayoutPendingApprovalDialog />}
      {showRejectPayoutDialog && <PayoutPendingRejectDialog />}

      {showApprovedPayoutDetailsDialog && <PayoutApprovalDetailDialog />}
      {showApprovedPayoutRetryDialog && <PayoutApprovalRetryDialog />}
    </>
  );
};
