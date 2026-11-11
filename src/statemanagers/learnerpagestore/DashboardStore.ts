import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

type LearnerDashboardStoreType = {
  continueQuizDialogShow: boolean;
  forfeitQuizDialogShow: boolean;
  continueCourseDialogShow: boolean;
  forfeitCourseDialogShow: boolean;

  setContinueQuizDialogShow: () => void;
  setForfeitQuizDialogShow: () => void;
  setContinueCourseDialogShow: () => void;
  setForfeitCourseDialogShow: () => void;
};

const learnerDashboardStore = create<LearnerDashboardStoreType>((set) => ({
  continueQuizDialogShow: false,
  forfeitQuizDialogShow: false,
  continueCourseDialogShow: false,
  forfeitCourseDialogShow: false,

  setContinueQuizDialogShow: () => set((state) => ({ continueQuizDialogShow: !state.continueQuizDialogShow })),
  setForfeitQuizDialogShow: () => set((state) => ({ forfeitQuizDialogShow: !state.forfeitQuizDialogShow })),
  setContinueCourseDialogShow: () => set((state) => ({ continueCourseDialogShow: !state.continueCourseDialogShow })),
  setForfeitCourseDialogShow: () => set((state) => ({ forfeitCourseDialogShow: !state.forfeitCourseDialogShow })),
}));

export const useLearnerDashboardStore = () =>
  learnerDashboardStore(
    useShallow((state) => ({
      continueQuizDialogShow: state.continueQuizDialogShow,
      forfeitQuizDialogShow: state.forfeitQuizDialogShow,
      continueCourseDialogShow: state.continueCourseDialogShow,
      forfeitCourseDialogShow: state.forfeitCourseDialogShow,

      setContinueQuizDialogShow: state.setContinueQuizDialogShow,
      setForfeitQuizDialogShow: state.setForfeitQuizDialogShow,
      setContinueCourseDialogShow: state.setContinueCourseDialogShow,
      setForfeitCourseDialogShow: state.setForfeitCourseDialogShow,
    })),
  );
