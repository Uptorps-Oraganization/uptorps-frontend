export type HomeStoreType = {
  testimonialIndex: number;
  subscribeLoadingState: boolean;
  setTestimonialIndex: (position: number) => void;
  prevTestimonial: () => void;
  nextTestimonial: () => void;
  setSubscribeLoadingState: () => void;
};

export type AuthStoreType = {
  authLoadingState: boolean;
  mailLoadingState: boolean;
  verificationLoadingState: boolean;
  setAuthLoadingState: () => void;
  setMailLoadingState: () => void;
  setverificationLoadingState: () => void;
  clearAuthState: () => void;
};
