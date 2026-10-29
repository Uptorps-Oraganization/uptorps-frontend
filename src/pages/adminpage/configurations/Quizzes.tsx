import { ConfigurationCard } from "@/components/PageComponents/adminpage/quizzes/quizconfiguration/ConfigurationCard";
import { QuizDisplayCard } from "@/components/PageComponents/adminpage/quizzes/quizdisplayparts/QuizDisplayCard";
import { QuizCreationDialog } from "@/components/PageComponents/adminpage/quizzes/quizpagedialogs/QuizCreationDialog";
import { QuizDeletionDialog } from "@/components/PageComponents/adminpage/quizzes/quizpagedialogs/QuizDeletionDialog";
import { QuizDetailDialog } from "@/components/PageComponents/adminpage/quizzes/quizpagedialogs/QuizDetailDialog";
import { QuizEditDialog } from "@/components/PageComponents/adminpage/quizzes/quizpagedialogs/QuizEditDialog";
import { QuizStatCard } from "@/components/PageComponents/adminpage/quizzes/QuizStatCard";
import { Button } from "@/components/ui/button";
import { CircleDotIcon } from "@/components/ui/circle-dot-icon";
import { Dashboard02Icon } from "@/components/ui/dashboard-0-2-icon";
import { DatabaseIcon } from "@/components/ui/database-icon";
import { GraduationCapIcon } from "@/components/ui/graduation-cap-icon";
import { Separator } from "@/components/ui/separator";
import { useQuizPageStore } from "@/statemanagers/adminpagestate/QuizPageStore";
import { BrainIcon } from "@animateicons/react/lucide";

export const AdminQuizzes = () => {
  const { quizCreationDialogOpen, quizDetailDialogOpen, quizEditDialogOpen, quizDeletionDialogOpen, setQuizCreationDialogOpen } = useQuizPageStore();

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
            <QuizStatCard title={"Levels Count"} figure={18} trendicon={Dashboard02Icon} />

            <QuizStatCard title={"Programmes Count"} figure={16} trendicon={DatabaseIcon} />

            <QuizStatCard title={"Courses Count"} figure={24} trendicon={GraduationCapIcon} />
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Quizzes Configurations</p>

          <ConfigurationCard />
        </section>

        <section className="px-4">
          <p className="font-semibold">Quizzes Uploads & Details</p>

          <div className="pt-2 space-y-4">
            <Button className="px-6 h-10 min-w-50" onClick={setQuizCreationDialogOpen}>
              <BrainIcon />
              Create A Quiz
            </Button>

            <Separator />

            <QuizDisplayCard />
          </div>
        </section>

        {quizCreationDialogOpen && <QuizCreationDialog />}
        {quizDetailDialogOpen && <QuizDetailDialog />}
        {quizEditDialogOpen && <QuizEditDialog />}
        {quizDeletionDialogOpen && <QuizDeletionDialog />}
      </div>
    </>
  );
};
