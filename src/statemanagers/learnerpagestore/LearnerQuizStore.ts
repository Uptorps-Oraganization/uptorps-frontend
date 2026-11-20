import type { LearnerQuizStoreType } from "@/typesnschemas/types/StoreTypes";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const learnerQuizStore = create<LearnerQuizStoreType>((set) => ({
  randomquizDialogShow: false,

  setRandomQuizDialogShow: () => set((state) => ({ randomquizDialogShow: !state.randomquizDialogShow })),

  resetLearnerQuizStore: () => set({ randomquizDialogShow: false }),
}));

export const useLearnerQuizStore = () =>
  learnerQuizStore(
    useShallow((state) => ({
      randomquizDialogShow: state.randomquizDialogShow,

      setRandomQuizDialogShow: state.setRandomQuizDialogShow,

      resetLearnerQuizStore: state.resetLearnerQuizStore,
    })),
  );
