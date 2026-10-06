import type { AuthStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const authStore = create<AuthStoreType>((set) => ({
  authLoadingState: false,
  mailLoadingState: false,
  verificationLoadingState: false,

  setAuthLoadingState: () => set((state) => ({ authLoadingState: !state.authLoadingState })),
  setMailLoadingState: () => set((state) => ({ mailLoadingState: !state.mailLoadingState })),
  setverificationLoadingState: () => set((state) => ({ verificationLoadingState: !state.verificationLoadingState })),

  clearAuthState: () => set(() => ({ authLoadingState: false, mailLoadingState: false, verificationLoadingState: false })),
}));

export const useAuthStore = () =>
  authStore(
    useShallow((state) => ({
      authLoadingState: state.authLoadingState,
      mailLoadingState: state.mailLoadingState,
      verificationLoadingState: state.verificationLoadingState,

      setAuthLoadingState: state.setAuthLoadingState,
      setMailLoadingState: state.setMailLoadingState,
      setverificationLoadingState: state.setverificationLoadingState,

      clearAuthState: state.clearAuthState,
    })),
  );
