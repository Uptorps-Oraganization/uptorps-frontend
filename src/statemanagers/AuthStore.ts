import type { AuthStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const authStore = create<AuthStoreType>((set) => ({
  authLoadingState: false,

  setAuthLoadingState: () => set((state) => ({ authLoadingState: !state.authLoadingState })),
}));

export const useAuthStore = () =>
  authStore(
    useShallow((state) => ({
      authLoadingState: state.authLoadingState,
      setAuthLoadingState: state.setAuthLoadingState,
    })),
  );
