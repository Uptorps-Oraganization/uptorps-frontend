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
  passwordResetLoadingState: boolean;

  setAuthLoadingState: () => void;
  setMailLoadingState: () => void;
  setVerificationLoadingState: () => void;
  setPasswordResetLoadingState: () => void;

  clearAuthState: () => void;
};

export type AdminStoreType = {
  logOutLoadingState: boolean;
  setlogOutLoadingState: () => void;
};

export type TutorStoreType = {
  logOutLoadingState: boolean;
  setlogOutLoadingState: () => void;
};

export type LearnerStoreType = {
  logOutLoadingState: boolean;
  setlogOutLoadingState: () => void;
};

export type QuizPageStoreType = {
  selectedConfiguration: number;
  configQueryData: Record<string, string>;
  quizCreationDialogOpen: boolean;
  quizDetailDialogOpen: boolean;
  quizEditDialogOpen: boolean;
  quizDeletionDialogOpen: boolean;

  setselectedConfiguration: (selected: number) => void;
  setConfigQueryData: (data: Record<string, string>) => void;
  clearConfigQueryData: () => void;
  setQuizCreationDialogOpen: () => void;
  setQuizDetailDialogOpen: () => void;
  setQuizEditDialogOpen: () => void;
  setQuizDeletionDialogOpen: () => void;
};
