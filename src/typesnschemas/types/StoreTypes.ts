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
  authDetailsPassCheck: boolean;
  mailLoadingState: boolean;
  setAuthLoadingState: () => void;
  setAuthDetailsPassCheck: () => void;
  setMailLoadingState: () => void;
  clearAuthState: () => void;
};
