import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

type QuestionPageStoreType = {
  questionCreationDialogOpen: boolean;
  questionEditOpen: boolean;
  questionDeleteOpen: boolean;
  answerCreationDialogOpen: boolean;
  answerEditOpen: boolean;
  answerDeleteOpen: boolean;

  setQuestionCreationDialogOpen: () => void;
  setQuestionEditOpen: () => void;
  setQuestionDeleteOpen: () => void;
  setAnswerCreationDialogOpen: () => void;
  setAnswerEditOpen: () => void;
  setAnswerDeleteOpen: () => void;
};

const questionPageStore = create<QuestionPageStoreType>((set) => ({
  questionCreationDialogOpen: false,
  questionEditOpen: false,
  questionDeleteOpen: false,
  answerCreationDialogOpen: false,
  answerEditOpen: false,
  answerDeleteOpen: false,

  setQuestionCreationDialogOpen: () => set((state) => ({ questionCreationDialogOpen: !state.questionCreationDialogOpen })),
  setQuestionEditOpen: () => set((state) => ({ questionEditOpen: !state.questionEditOpen })),
  setQuestionDeleteOpen: () => set((state) => ({ questionDeleteOpen: !state.questionDeleteOpen })),
  setAnswerCreationDialogOpen: () => set((state) => ({ answerCreationDialogOpen: !state.answerCreationDialogOpen })),
  setAnswerEditOpen: () => set((state) => ({ answerEditOpen: !state.answerEditOpen })),
  setAnswerDeleteOpen: () => set((state) => ({ answerDeleteOpen: !state.answerDeleteOpen })),
}));

export const useQuestionPageStore = () =>
  questionPageStore(
    useShallow((state) => ({
      questionCreationDialogOpen: state.questionCreationDialogOpen,
      questionEditOpen: state.questionEditOpen,
      questionDeleteOpen: state.questionDeleteOpen,
      answerCreationDialogOpen: state.answerCreationDialogOpen,
      answerEditOpen: state.answerEditOpen,
      answerDeleteOpen: state.answerDeleteOpen,

      setQuestionCreationDialogOpen: state.setQuestionCreationDialogOpen,
      setQuestionEditOpen: state.setQuestionEditOpen,
      setQuestionDeleteOpen: state.setQuestionDeleteOpen,
      setAnswerCreationDialogOpen: state.setAnswerCreationDialogOpen,
      setAnswerEditOpen: state.setAnswerEditOpen,
      setAnswerDeleteOpen: state.setAnswerDeleteOpen,
    })),
  );
