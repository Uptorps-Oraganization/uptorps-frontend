import { ConfigContainerCard } from "@/components/PageComponents/adminpage/quizzes/quizconfiguration/ConfigContainerCard";
import { QuizDisplayCard } from "@/components/PageComponents/adminpage/quizzes/quizdisplayparts/QuizDisplayCard";
import { QuizCreationDialog } from "@/components/PageComponents/adminpage/quizzes/quizpagedialogs/QuizCreationDialog";
import { QuizDeletionDialog } from "@/components/PageComponents/adminpage/quizzes/quizpagedialogs/QuizDeletionDialog";
import { QuizDetailDialog } from "@/components/PageComponents/adminpage/quizzes/quizpagedialogs/QuizDetailDialog";
import { QuizEditDialog } from "@/components/PageComponents/adminpage/quizzes/quizpagedialogs/QuizEditDialog";
import { QuizStatCard } from "@/components/PageComponents/adminpage/quizzes/QuizStatCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { QuizConfigDisplayProvider } from "@/contexthandlers/QuizConfigDisplayProvider";
import { useAdminQuizStore } from "@/statemanagers/adminpagestore/AdminQuizStore";
import { useIconHover } from "@animateicons/react";
import { BrainIcon, CircleDotIcon, DatabaseIcon, GraduationCapIcon, LayersIcon } from "@animateicons/react/lucide";
import { useEffect } from "react";

export const AdminQuizzes = () => {
  const { ref: BrainIconRef, triggerProps } = useIconHover({ trigger: "hover" });

  const {
    quizCreationDialogOpen,
    quizDetailDialogOpen,
    quizEditDialogOpen,
    quizDeletionDialogOpen,
    setQuizCreationDialogOpen,
    resetQuizPageStoreState,
  } = useAdminQuizStore();

  useEffect(() => {
    return () => resetQuizPageStoreState();
  }, [resetQuizPageStoreState]);

  return (
    <>
      <div className="p-1 pt-2 pb-10 space-y-6">
        <section className="px-4">
          <p className="font-semibold">Quizzes Statistics</p>

          <div id="adminOverviewSection" className="grid grid-cols-3 gap-4 pt-2">
            <QuizStatCard title={"Total Quizzes"} figure={10} trendicon={CircleDotIcon} />

            <QuizStatCard title={"Total Free Quizzes"} figure={6} trendicon={CircleDotIcon} />

            <QuizStatCard title={"Total Premium Quizzes"} figure={4} trendicon={CircleDotIcon} />
          </div>

          <div id="adminOverviewSection" className="grid grid-cols-3 gap-4 pt-2">
            <QuizStatCard title={"Levels Count"} figure={18} trendicon={LayersIcon} />

            <QuizStatCard title={"Programmes Count"} figure={16} trendicon={DatabaseIcon} />

            <QuizStatCard title={"Courses Count"} figure={24} trendicon={GraduationCapIcon} />
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Quizzes Configurations</p>

          <QuizConfigDisplayProvider>
            <ConfigContainerCard />
          </QuizConfigDisplayProvider>
        </section>

        <section className="flex flex-col px-4 space-y-3">
          <p className="font-semibold">Quizzes Uploads & Details</p>

          <div className="flex flex-row items-center">
            <Button className="px-6 h-10 max-w-fit" onClick={setQuizCreationDialogOpen} {...triggerProps}>
              <BrainIcon ref={BrainIconRef} />
              Create A New Quiz
            </Button>
          </div>

          <Separator />

          <QuizDisplayCard />
        </section>
      </div>

      {quizCreationDialogOpen && <QuizCreationDialog />}
      {quizDetailDialogOpen && <QuizDetailDialog />}
      {quizEditDialogOpen && <QuizEditDialog />}
      {quizDeletionDialogOpen && <QuizDeletionDialog />}
    </>
  );
};
