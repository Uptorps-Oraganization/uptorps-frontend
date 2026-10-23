import { QuizLevelCard } from "@/components/PageComponents/adminpage/quizzes/QuizLevelCard";
import { QuizStatCard } from "@/components/PageComponents/adminpage/quizzes/QuizStatCard";
import { CircleDotIcon } from "@/components/ui/circle-dot-icon";

export const AdminQuizzes = () => {
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
        </section>

        <section className="px-4">
          <p className="font-semibold">Quizzes Configurations</p>

          <div className="pt-2">
            <QuizLevelCard />
          </div>
        </section>
      </div>
    </>
  );
};
