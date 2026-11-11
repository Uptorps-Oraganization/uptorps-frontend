import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

type LearnerCourseStoreType = {
  continueCourseDialogShow: boolean;
  forfeitCourseDialogShow: boolean;

  setContinueCourseDialogShow: () => void;
  setForfeitCourseDialogShow: () => void;

  resetLearnerCourseStore: () => void;
};

const learnerCourseStore = create<LearnerCourseStoreType>((set) => ({
  continueCourseDialogShow: false,
  forfeitCourseDialogShow: false,

  setContinueCourseDialogShow: () => set((state) => ({ continueCourseDialogShow: !state.continueCourseDialogShow })),
  setForfeitCourseDialogShow: () => set((state) => ({ forfeitCourseDialogShow: !state.forfeitCourseDialogShow })),

  resetLearnerCourseStore: () => set({ continueCourseDialogShow: false, forfeitCourseDialogShow: false }),
}));

export const useLearnerCourseStore = () =>
  learnerCourseStore(
    useShallow((state) => ({
      continueCourseDialogShow: state.continueCourseDialogShow,
      forfeitCourseDialogShow: state.forfeitCourseDialogShow,

      setContinueCourseDialogShow: state.setContinueCourseDialogShow,
      setForfeitCourseDialogShow: state.setForfeitCourseDialogShow,

      resetLearnerCourseStore: state.resetLearnerCourseStore,
    })),
  );
