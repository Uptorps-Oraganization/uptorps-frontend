import type { PayoutStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const payoutStore = create<PayoutStoreType>((set) => ({
  showPayoutDetailsDialog: false,
  showApprovePayoutDialog: false,
  showRejectPayoutDialog: false,

  setShowPayoutDetailsDialog: () => set((state) => ({ showPayoutDetailsDialog: !state.showPayoutDetailsDialog })),
  setShowApprovePayoutDialog: () => set((state) => ({ showApprovePayoutDialog: !state.showApprovePayoutDialog })),
  setShowRejectPayoutDialog: () => set((state) => ({ showRejectPayoutDialog: !state.showRejectPayoutDialog })),

  resetPayoutStoreState: () =>
    set({
      showPayoutDetailsDialog: false,
      showApprovePayoutDialog: false,
      showRejectPayoutDialog: false,
    }),
}));

export const usePayoutStore = () =>
  payoutStore(
    useShallow((state) => ({
      showPayoutDetailsDialog: state.showPayoutDetailsDialog,
      showApprovePayoutDialog: state.showApprovePayoutDialog,
      showRejectPayoutDialog: state.showRejectPayoutDialog,

      setShowPayoutDetailsDialog: state.setShowPayoutDetailsDialog,
      setShowApprovePayoutDialog: state.setShowApprovePayoutDialog,
      setShowRejectPayoutDialog: state.setShowRejectPayoutDialog,

      resetPayoutStoreState: state.resetPayoutStoreState,
    })),
  );
