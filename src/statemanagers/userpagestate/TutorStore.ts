import type { TutorStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const tutorStore = create<TutorStoreType>((set) => ({
  logOutLoadingState: false,

  setlogOutLoadingState: () => set((state) => ({ logOutLoadingState: !state.logOutLoadingState })),
}));

export const useTutorStore = () =>
  tutorStore(
    useShallow((state) => ({
      logOutLoadingState: state.logOutLoadingState,
      setlogOutLoadingState: state.setlogOutLoadingState,
    })),
  );
