import type { LearnerStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const leanerStore = create<LearnerStoreType>((set) => ({
  logOutLoadingState: false,

  setlogOutLoadingState: () => set((state) => ({ logOutLoadingState: !state.logOutLoadingState })),
}));

export const useLearnerStore = () =>
  leanerStore(
    useShallow((state) => ({
      logOutLoadingState: state.logOutLoadingState,
      setlogOutLoadingState: state.setlogOutLoadingState,
    })),
  );
