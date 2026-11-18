import type { QuizPageStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const adminQuizStore = create<QuizPageStoreType>((set) => ({
  configItemEditDialogOpen: false,
  configItemDeleteDialogOpen: false,
  quizCreationDialogOpen: false,
  quizDetailDialogOpen: false,
  quizEditDialogOpen: false,
  quizDeletionDialogOpen: false,

  setConfigItemEditDialogOpen: () => set((state) => ({ configItemEditDialogOpen: !state.configItemEditDialogOpen })),
  setConfigItemDeleteDialogOpen: () => set((state) => ({ configItemDeleteDialogOpen: !state.configItemDeleteDialogOpen })),
  setQuizCreationDialogOpen: () => set((state) => ({ quizCreationDialogOpen: !state.quizCreationDialogOpen })),
  setQuizDetailDialogOpen: () => set((state) => ({ quizDetailDialogOpen: !state.quizDetailDialogOpen })),
  setQuizEditDialogOpen: () => set((state) => ({ quizEditDialogOpen: !state.quizEditDialogOpen })),
  setQuizDeletionDialogOpen: () => set((state) => ({ quizDeletionDialogOpen: !state.quizDeletionDialogOpen })),

  resetQuizPageStoreState: () =>
    set({
      quizCreationDialogOpen: false,
      quizDetailDialogOpen: false,
      quizEditDialogOpen: false,
      quizDeletionDialogOpen: false,
    }),
}));

export const useAdminQuizStore = () =>
  adminQuizStore(
    useShallow((state) => ({
      configItemEditDialogOpen: state.configItemEditDialogOpen,
      configItemDeleteDialogOpen: state.configItemDeleteDialogOpen,
      quizCreationDialogOpen: state.quizCreationDialogOpen,
      quizDetailDialogOpen: state.quizDetailDialogOpen,
      quizEditDialogOpen: state.quizEditDialogOpen,
      quizDeletionDialogOpen: state.quizDeletionDialogOpen,

      setConfigItemEditDialogOpen: state.setConfigItemEditDialogOpen,
      setConfigItemDeleteDialogOpen: state.setConfigItemDeleteDialogOpen,
      setQuizCreationDialogOpen: state.setQuizCreationDialogOpen,
      setQuizDetailDialogOpen: state.setQuizDetailDialogOpen,
      setQuizEditDialogOpen: state.setQuizEditDialogOpen,
      setQuizDeletionDialogOpen: state.setQuizDeletionDialogOpen,

      resetQuizPageStoreState: state.resetQuizPageStoreState,
    })),
  );
