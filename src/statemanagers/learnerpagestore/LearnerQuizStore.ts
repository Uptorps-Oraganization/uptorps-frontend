import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

type LearnerQuizStoreType = {
  continueQuizDialogShow: boolean;
  forfeitQuizDialogShow: boolean;

  setContinueQuizDialogShow: () => void;
  setForfeitQuizDialogShow: () => void;

  resetLearnerQuizStore: () => void;
};

const learnerQuizStore = create<LearnerQuizStoreType>((set) => ({
  continueQuizDialogShow: false,
  forfeitQuizDialogShow: false,

  setContinueQuizDialogShow: () => set((state) => ({ continueQuizDialogShow: !state.continueQuizDialogShow })),
  setForfeitQuizDialogShow: () => set((state) => ({ forfeitQuizDialogShow: !state.forfeitQuizDialogShow })),

  resetLearnerQuizStore: () => set({ continueQuizDialogShow: false, forfeitQuizDialogShow: false }),
}));

export const useLearnerQuizStore = () =>
  learnerQuizStore(
    useShallow((state) => ({
      continueQuizDialogShow: state.continueQuizDialogShow,
      forfeitQuizDialogShow: state.forfeitQuizDialogShow,

      setContinueQuizDialogShow: state.setContinueQuizDialogShow,
      setForfeitQuizDialogShow: state.setForfeitQuizDialogShow,

      resetLearnerQuizStore: state.resetLearnerQuizStore,
    })),
  );
