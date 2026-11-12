import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

type LearnerQuizStoreType = {
  randomquizDialogShow: boolean;
  continueQuizDialogShow: boolean;
  forfeitQuizDialogShow: boolean;
  attemptQuizDialogShow: boolean;

  setRandomQuizDialogShow: () => void;
  setContinueQuizDialogShow: () => void;
  setForfeitQuizDialogShow: () => void;
  setAttemptQuizDialogShow: () => void;

  resetLearnerQuizStore: () => void;
};

const learnerQuizStore = create<LearnerQuizStoreType>((set) => ({
  randomquizDialogShow: false,
  continueQuizDialogShow: false,
  forfeitQuizDialogShow: false,
  attemptQuizDialogShow: false,

  setRandomQuizDialogShow: () => set((state) => ({ randomquizDialogShow: !state.randomquizDialogShow })),
  setContinueQuizDialogShow: () => set((state) => ({ continueQuizDialogShow: !state.continueQuizDialogShow })),
  setForfeitQuizDialogShow: () => set((state) => ({ forfeitQuizDialogShow: !state.forfeitQuizDialogShow })),
  setAttemptQuizDialogShow: () => set((state) => ({ attemptQuizDialogShow: !state.attemptQuizDialogShow })),

  resetLearnerQuizStore: () => set({ continueQuizDialogShow: false, forfeitQuizDialogShow: false, attemptQuizDialogShow: false }),
}));

export const useLearnerQuizStore = () =>
  learnerQuizStore(
    useShallow((state) => ({
      randomquizDialogShow: state.randomquizDialogShow,
      continueQuizDialogShow: state.continueQuizDialogShow,
      forfeitQuizDialogShow: state.forfeitQuizDialogShow,
      attemptQuizDialogShow: state.attemptQuizDialogShow,

      setRandomQuizDialogShow: state.setRandomQuizDialogShow,
      setContinueQuizDialogShow: state.setContinueQuizDialogShow,
      setForfeitQuizDialogShow: state.setForfeitQuizDialogShow,
      setAttemptQuizDialogShow: state.setAttemptQuizDialogShow,

      resetLearnerQuizStore: state.resetLearnerQuizStore,
    })),
  );
