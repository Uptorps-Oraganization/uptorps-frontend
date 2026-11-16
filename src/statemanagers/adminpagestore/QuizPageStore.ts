import type { QuizPageStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const quizPageStore = create<QuizPageStoreType>((set) => ({
  quizCreationDialogOpen: false,
  quizDetailDialogOpen: false,
  quizEditDialogOpen: false,
  quizDeletionDialogOpen: false,

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

export const useQuizPageStore = () =>
  quizPageStore(
    useShallow((state) => ({
      quizCreationDialogOpen: state.quizCreationDialogOpen,
      quizDetailDialogOpen: state.quizDetailDialogOpen,
      quizEditDialogOpen: state.quizEditDialogOpen,
      quizDeletionDialogOpen: state.quizDeletionDialogOpen,

      setQuizCreationDialogOpen: state.setQuizCreationDialogOpen,
      setQuizDetailDialogOpen: state.setQuizDetailDialogOpen,
      setQuizEditDialogOpen: state.setQuizEditDialogOpen,
      setQuizDeletionDialogOpen: state.setQuizDeletionDialogOpen,

      resetQuizPageStoreState: state.resetQuizPageStoreState,
    })),
  );
