import type { AuthStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const authStore = create<AuthStoreType>((set) => ({
  authLoadingState: false,
  authDetailsPassCheck: false,
  mailLoadingState: false,

  setAuthLoadingState: () => set((state) => ({ authLoadingState: !state.authLoadingState })),
  setAuthDetailsPassCheck: () => set((state) => ({ authDetailsPassCheck: !state.authDetailsPassCheck })),
  setMailLoadingState: () => set((state) => ({ mailLoadingState: !state.mailLoadingState })),

  clearAuthState: () => set(() => ({ authLoadingState: false, authDetailsPassCheck: false, mailLoadingState: false })),
}));

export const useAuthStore = () =>
  authStore(
    useShallow((state) => ({
      authLoadingState: state.authLoadingState,
      authDetailsPassCheck: state.authDetailsPassCheck,
      mailLoadingState: state.mailLoadingState,

      setAuthLoadingState: state.setAuthLoadingState,
      setAuthDetailsPassCheck: state.setAuthDetailsPassCheck,
      setMailLoadingState: state.setMailLoadingState,
      clearAuthState: state.clearAuthState,
    })),
  );
