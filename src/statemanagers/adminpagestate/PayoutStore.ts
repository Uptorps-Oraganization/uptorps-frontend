import type { PayoutApprovalStoreType, PayoutPendingStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const payoutPendingStore = create<PayoutPendingStoreType>((set) => ({
  showApprovePayoutDialog: false,
  showRejectPayoutDialog: false,

  setShowApprovePayoutDialog: () => set((state) => ({ showApprovePayoutDialog: !state.showApprovePayoutDialog })),
  setShowRejectPayoutDialog: () => set((state) => ({ showRejectPayoutDialog: !state.showRejectPayoutDialog })),

  resetPendingPayoutStoreState: () =>
    set({
      showApprovePayoutDialog: false,
      showRejectPayoutDialog: false,
    }),
}));

export const usePayoutPendingStore = () =>
  payoutPendingStore(
    useShallow((state) => ({
      showApprovePayoutDialog: state.showApprovePayoutDialog,
      showRejectPayoutDialog: state.showRejectPayoutDialog,

      setShowApprovePayoutDialog: state.setShowApprovePayoutDialog,
      setShowRejectPayoutDialog: state.setShowRejectPayoutDialog,

      resetPayoutStoreState: state.resetPendingPayoutStoreState,
    })),
  );

const payoutApprovalStore = create<PayoutApprovalStoreType>((set) => ({
  showApprovedPayoutDetailsDialog: false,
  showApprovedPayoutRetryDialog: false,

  setShowApprovedPayoutDetailsDialog: () => set((state) => ({ showApprovedPayoutDetailsDialog: !state.showApprovedPayoutDetailsDialog })),
  setShowApprovedPayoutRetryDialog: () => set((state) => ({ showApprovedPayoutRetryDialog: !state.showApprovedPayoutRetryDialog })),

  resetApprovalPayoutStoreState: () => set({ showApprovedPayoutDetailsDialog: false, showApprovedPayoutRetryDialog: false }),
}));

export const usePayoutApprovalStore = () =>
  payoutApprovalStore(
    useShallow((state) => ({
      showApprovedPayoutDetailsDialog: state.showApprovedPayoutDetailsDialog,
      showApprovedPayoutRetryDialog: state.showApprovedPayoutRetryDialog,

      setShowApprovedPayoutDetailsDialog: state.setShowApprovedPayoutDetailsDialog,
      setShowApprovedPayoutRetryDialog: state.setShowApprovedPayoutRetryDialog,

      resetApprovalPayoutStoreState: state.resetApprovalPayoutStoreState,
    })),
  );
