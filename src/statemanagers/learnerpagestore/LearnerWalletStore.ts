import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

type LearnerWalletStoreType = {
  payoutRequestDialogShow: boolean;

  setPayoutRequestDialogShow: () => void;

  resetLearnerWalletStore: () => void;
};

const learnerWalletStore = create<LearnerWalletStoreType>((set) => ({
  payoutRequestDialogShow: false,

  setPayoutRequestDialogShow: () => set((state) => ({ payoutRequestDialogShow: !state.payoutRequestDialogShow })),

  resetLearnerWalletStore: () => set({ payoutRequestDialogShow: false }),
}));

export const useLearnerWalletStore = () =>
  learnerWalletStore(
    useShallow((state) => ({
      payoutRequestDialogShow: state.payoutRequestDialogShow,

      setPayoutRequestDialogShow: state.setPayoutRequestDialogShow,

      resetLearnerWalletStore: state.resetLearnerWalletStore,
    })),
  );
