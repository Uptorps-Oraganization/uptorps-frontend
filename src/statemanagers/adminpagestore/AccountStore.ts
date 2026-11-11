import type { AccountStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const accountStore = create<AccountStoreType>((set) => ({
  suspendAccountOpen: false,
  deleteAccoutOpen: false,
  sendEmailOpen: false,

  setSuspendAccountOpen: () => set((state) => ({ suspendAccountOpen: !state.suspendAccountOpen })),
  setDeleteAccoutOpen: () => set((state) => ({ deleteAccoutOpen: !state.deleteAccoutOpen })),
  setSendEmailOpen: () => set((state) => ({ sendEmailOpen: !state.sendEmailOpen })),

  resetAccountStoreState: () =>
    set({
      suspendAccountOpen: false,
      deleteAccoutOpen: false,
      sendEmailOpen: false,
    }),
}));

export const useAccountStore = () =>
  accountStore(
    useShallow((state) => ({
      suspendAccountOpen: state.suspendAccountOpen,
      deleteAccoutOpen: state.deleteAccoutOpen,
      sendEmailOpen: state.sendEmailOpen,

      setSuspendAccountOpen: state.setSuspendAccountOpen,
      setDeleteAccoutOpen: state.setDeleteAccoutOpen,
      setSendEmailOpen: state.setSendEmailOpen,

      resetAccountStoreState: state.resetAccountStoreState,
    })),
  );
