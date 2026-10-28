import type { QuizPageStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const quizPageStore = create<QuizPageStoreType>((set) => ({
  selectedConfiguration: 0,
  configQueryData: {},
  quizCreationDialogOpen: false,
  quizDetailDialogOpen: false,
  quizEditDialogOpen: false,
  quizDeletionDialogOpen: false,

  setselectedConfiguration: (selected: number) => set(() => ({ selectedConfiguration: selected })),
  setConfigQueryData: (data: Record<string, string>) => set((state) => ({ configQueryData: { ...state.configQueryData, ...data } })),
  setQuizCreationDialogOpen: () => set((state) => ({ quizCreationDialogOpen: !state.quizCreationDialogOpen })),
  setQuizDetailDialogOpen: () => set((state) => ({ quizDetailDialogOpen: !state.quizDetailDialogOpen })),
  setQuizEditDialogOpen: () => set((state) => ({ quizEditDialogOpen: !state.quizEditDialogOpen })),
  setQuizDeletionDialogOpen: () => set((state) => ({ quizDeletionDialogOpen: !state.quizDeletionDialogOpen })),
}));

export const useQuizPageStore = () =>
  quizPageStore(
    useShallow((state) => ({
      selectedConfiguration: state.selectedConfiguration,
      configQueryData: state.configQueryData,
      quizCreationDialogOpen: state.quizCreationDialogOpen,
      quizDetailDialogOpen: state.quizDetailDialogOpen,
      quizEditDialogOpen: state.quizEditDialogOpen,
      quizDeletionDialogOpen: state.quizDeletionDialogOpen,

      setselectedConfiguration: state.setselectedConfiguration,
      setConfigQueryData: state.setConfigQueryData,
      setQuizCreationDialogOpen: state.setQuizCreationDialogOpen,
      setQuizDetailDialogOpen: state.setQuizDetailDialogOpen,
      setQuizEditDialogOpen: state.setQuizEditDialogOpen,
      setQuizDeletionDialogOpen: state.setQuizDeletionDialogOpen,
    })),
  );
