import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

type LearnerQuizStoreType = {
  continueQuizDialogShow: boolean;
  forfeitQuizDialogShow: boolean;
  attemptQuizDialogShow: boolean;
  quizDetailDialogShow: boolean;

  setContinueQuizDialogShow: () => void;
  setForfeitQuizDialogShow: () => void;
  setAttemptQuizDialogShow: () => void;
  setQuizDetailDialogShow: () => void;

  resetLearnerQuizStore: () => void;
};

const learnerQuizStore = create<LearnerQuizStoreType>((set) => ({
  continueQuizDialogShow: false,
  forfeitQuizDialogShow: false,
  attemptQuizDialogShow: false,
  quizDetailDialogShow: false,

  setContinueQuizDialogShow: () => set((state) => ({ continueQuizDialogShow: !state.continueQuizDialogShow })),
  setForfeitQuizDialogShow: () => set((state) => ({ forfeitQuizDialogShow: !state.forfeitQuizDialogShow })),
  setAttemptQuizDialogShow: () => set((state) => ({ attemptQuizDialogShow: !state.attemptQuizDialogShow })),
  setQuizDetailDialogShow: () => set((state) => ({ quizDetailDialogShow: !state.quizDetailDialogShow })),

  resetLearnerQuizStore: () => set({ continueQuizDialogShow: false, forfeitQuizDialogShow: false, attemptQuizDialogShow: false }),
}));

export const useLearnerQuizStore = () =>
  learnerQuizStore(
    useShallow((state) => ({
      continueQuizDialogShow: state.continueQuizDialogShow,
      forfeitQuizDialogShow: state.forfeitQuizDialogShow,
      attemptQuizDialogShow: state.attemptQuizDialogShow,
      quizDetailDialogShow: state.quizDetailDialogShow,

      setContinueQuizDialogShow: state.setContinueQuizDialogShow,
      setForfeitQuizDialogShow: state.setForfeitQuizDialogShow,
      setAttemptQuizDialogShow: state.setAttemptQuizDialogShow,
      setQuizDetailDialogShow: state.setQuizDetailDialogShow,

      resetLearnerQuizStore: state.resetLearnerQuizStore,
    })),
  );
