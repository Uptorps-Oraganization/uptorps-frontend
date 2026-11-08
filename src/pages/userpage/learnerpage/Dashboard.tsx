import { RevenueStatCard } from "@/components/PageComponents/sharedcomponents/RevenueStatCard";
import { UserStatCard } from "@/components/PageComponents/sharedcomponents/UserStatCard";
import { PendingCourseCard } from "@/components/PageComponents/userpage/leanerpage/PendingCourseCard";
import { PendingQuizCard } from "@/components/PageComponents/userpage/leanerpage/PendingQuizCard";
import { Badge } from "@/components/ui/badge";
import { useIconHover } from "@animateicons/react";
import { ArrowRight02Icon } from "@animateicons/react/huge";
import { BrainIcon, GraduationCapIcon, TrendingUpIcon, UserGroupIcon, WalletIcon } from "@animateicons/react/lucide";
import { useNavigate } from "react-router";

const iconTriggerConfig = [
  { icon: "quizzes", trigger: "hover" },
  { icon: "courses", trigger: "hover" },
] as const;

export const LearnerDashboard = () => {
  const navigate = useNavigate();
  const {
    icon: { quizzes, courses },
    trigger,
  } = useIconHover({ trigger: iconTriggerConfig });

  return (
    <>
      <div className="p-1 pt-2 pb-10 space-y-6">
        <section className="px-4">
          <p className="font-semibold">User Activity Overview</p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <RevenueStatCard title={"Total Earnings"} amount={1200} trend={"+1.5%"} trendicon={TrendingUpIcon} />

            <RevenueStatCard title={"Wallet Balance"} amount={1000} trendicon={WalletIcon} />

            <RevenueStatCard title={"Referral Earnings"} amount={120} trend={"+2.5%"} trendicon={TrendingUpIcon} />
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <UserStatCard title={"Completed Quizzes"} figure={15} trendicon={BrainIcon} />

            <UserStatCard title={"Enrolled Courses"} figure={10} trendicon={GraduationCapIcon} />

            <UserStatCard title={"Referrals Count"} figure={35} trendicon={UserGroupIcon} />
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Pending Quiz Attempt</p>
          <span className="text-xs">Showing recent 3</span>

          <div className="grid grid-cols-3 gap-2 pt-2">
            <PendingQuizCard />
            <PendingQuizCard />
            <PendingQuizCard />
          </div>

          <div className="flex flex-row justify-center pt-3">
            <Badge onClick={() => navigate("/userpage/learneractionpage/quizzes")} className="p-0" variant="link" {...trigger}>
              Go to Quizzes
              <ArrowRight02Icon {...quizzes} size={18} />
            </Badge>
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Pending Enrolled Courses</p>
          <span className="text-xs">Showing recent 3</span>

          <div className="grid grid-cols-3 gap-2 pt-2">
            <PendingCourseCard />
            <PendingCourseCard />
            <PendingCourseCard />
          </div>

          <div className="flex flex-row justify-center pt-3">
            <Badge onClick={() => navigate("/userpage/learneractionpage/courses")} className="p-0" variant="link" {...trigger}>
              Go to Courses
              <ArrowRight02Icon {...courses} size={18} />
            </Badge>
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Recent Account Activity</p>
        </section>
      </div>
    </>
  );
};
