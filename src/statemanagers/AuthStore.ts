import type { AuthStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const authStore = create<AuthStoreType>((set) => ({
  authLoadingState: false,
  mailLoadingState: false,
  verificationLoadingState: false,
  passwordResetLoadingState: false,

  setAuthLoadingState: () => set((state) => ({ authLoadingState: !state.authLoadingState })),
  setMailLoadingState: () => set((state) => ({ mailLoadingState: !state.mailLoadingState })),
  setVerificationLoadingState: () => set((state) => ({ verificationLoadingState: !state.verificationLoadingState })),
  setPasswordResetLoadingState: () => set((state) => ({ passwordResetLoadingState: !state.passwordResetLoadingState })),

  clearAuthState: () => set(() => ({ authLoadingState: false, mailLoadingState: false, verificationLoadingState: false, passwordResetLoadingState: false })),
}));

export const useAuthStore = () =>
  authStore(
    useShallow((state) => ({
      authLoadingState: state.authLoadingState,
      mailLoadingState: state.mailLoadingState,
      verificationLoadingState: state.verificationLoadingState,
      passwordResetLoadingState: state.passwordResetLoadingState,

      setAuthLoadingState: state.setAuthLoadingState,
      setMailLoadingState: state.setMailLoadingState,
      setVerificationLoadingState: state.setVerificationLoadingState,
      setPasswordResetLoadingState: state.setPasswordResetLoadingState,

      clearAuthState: state.clearAuthState,
    })),
  );
