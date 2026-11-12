import { AvailableQuizzesPanel } from "@/components/PageComponents/leanerpage/quizzes/AvailableQuizzesPanel";
import { QuizContinueDialog } from "@/components/PageComponents/leanerpage/quizzes/dialogs/QuizContinueDialog";
import { QuizForfeitDialog } from "@/components/PageComponents/leanerpage/quizzes/dialogs/QuizForfeitDialog";
import { PendingQuizzesContainer } from "@/components/PageComponents/leanerpage/quizzes/PendingQuizzesContainer";
import { UserStatCard } from "@/components/PageComponents/sharedcomponents/UserStatCard";
import { Button } from "@/components/ui/button";
import { useLearnerQuizStore } from "@/statemanagers/learnerpagestore/LearnerQuizStore";
import { useIconHover } from "@animateicons/react";
import { BrainIcon, CircleDotIcon } from "@animateicons/react/lucide";
import { useEffect } from "react";

export const LearnerQuizzes = () => {
  const { ref: BrainIconRef, triggerProps } = useIconHover({ trigger: "hover" });
  const { continueQuizDialogShow, forfeitQuizDialogShow, resetLearnerQuizStore } = useLearnerQuizStore();

  useEffect(() => {
    return () => {
      resetLearnerQuizStore();
    };
  }, [resetLearnerQuizStore]);

  return (
    <>
      <div className="p-1 pt-2 pb-10 space-y-6">
        <section className="px-4">
          <p className="font-semibold">Quiz Statistcs</p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <UserStatCard title={"Completed Quizzes"} figure={15} trendicon={CircleDotIcon} />

            <UserStatCard title={"Pending Quizzes"} figure={3} trendicon={CircleDotIcon} />
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Quiz Actions</p>

          <div className="pt-2">
            <Button className="px-6 h-10 min-w-50" {...triggerProps}>
              <BrainIcon ref={BrainIconRef} />
              Attempt a Randomized Quiz
            </Button>
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Pending Quiz Attempt</p>

          <PendingQuizzesContainer />
        </section>

        <section className="px-4">
          <p className="font-semibold">Available Quizzes</p>

          <AvailableQuizzesPanel />
        </section>
      </div>

      {continueQuizDialogShow && <QuizContinueDialog />}
      {forfeitQuizDialogShow && <QuizForfeitDialog />}
    </>
  );
};
