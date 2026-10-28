import type { AdminStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const adminStore = create<AdminStoreType>((set) => ({
  logOutLoadingState: false,

  setlogOutLoadingState: () => set((state) => ({ logOutLoadingState: !state.logOutLoadingState })),
}));

export const useAdminStore = () =>
  adminStore(
    useShallow((state) => ({
      logOutLoadingState: state.logOutLoadingState,
      setlogOutLoadingState: state.setlogOutLoadingState,
    })),
  );
