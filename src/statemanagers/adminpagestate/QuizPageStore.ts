import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

type QuizPageStateType = {
  selectedConfiguration: number;
  configQueryData: Record<string, string>;
  quizCreationDialogOpen: boolean;
  quizDetailDialogOpen: boolean;

  setselectedConfiguration: (selected: number) => void;
  setConfigQueryData: (data: Record<string, string>) => void;
  setQuizCreationDialogOpen: () => void;
  setQuizDetailDialogOpen: () => void;
};

const quizPageStore = create<QuizPageStateType>((set) => ({
  selectedConfiguration: 0,
  configQueryData: {},
  quizCreationDialogOpen: false,
  quizDetailDialogOpen: false,

  setselectedConfiguration: (selected: number) => set(() => ({ selectedConfiguration: selected })),
  setConfigQueryData: (data: Record<string, string>) => set((state) => ({ configQueryData: { ...state.configQueryData, ...data } })),
  setQuizCreationDialogOpen: () => set((state) => ({ quizCreationDialogOpen: !state.quizCreationDialogOpen })),
  setQuizDetailDialogOpen: () => set((state) => ({ quizDetailDialogOpen: !state.quizDetailDialogOpen })),
}));

export const useQuizPageStore = () =>
  quizPageStore(
    useShallow((state) => ({
      selectedConfiguration: state.selectedConfiguration,
      configQueryData: state.configQueryData,
      quizCreationDialogOpen: state.quizCreationDialogOpen,
      quizDetailDialogOpen: state.quizDetailDialogOpen,

      setselectedConfiguration: state.setselectedConfiguration,
      setConfigQueryData: state.setConfigQueryData,
      setQuizCreationDialogOpen: state.setQuizCreationDialogOpen,
      setQuizDetailDialogOpen: state.setQuizDetailDialogOpen,
    })),
  );
