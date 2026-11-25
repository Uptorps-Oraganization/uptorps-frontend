import { PendingCourseCard } from "@/components/PageComponents/learnerpage/courses/PendingCourseCard";
import { RecentActivityCard } from "@/components/PageComponents/learnerpage/dashboard/RecentActivityCard";
import { ReferralNetworkCard } from "@/components/PageComponents/learnerpage/dashboard/ReferralNetworkCard";
import { PendingQuizCard } from "@/components/PageComponents/learnerpage/quizzes/PendingQuizCard";
import { RevenueStatCard } from "@/components/PageComponents/sharedcomponents/RevenueStatCard";
import { UserStatCard } from "@/components/PageComponents/sharedcomponents/UserStatCard";
import { Badge } from "@/components/ui/badge";
import { pendingQuizzes } from "@/lib/data";
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
            {[...pendingQuizzes]
              .reverse()
              .map(
                ({ title, description, timing, remainingTime, numbOfAnsweredQuestions, numbOfQuestions }, index) =>
                  index < 3 && (
                    <PendingQuizCard
                      key={index}
                      title={title}
                      description={description}
                      timing={timing}
                      numbOfQuestions={numbOfQuestions}
                      remainingTime={remainingTime}
                      numbOfAnsweredQuestions={numbOfAnsweredQuestions}
                    />
                  ),
              )}
          </div>

          <div className="flex flex-row justify-center pt-2">
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
            <PendingCourseCard title="Course 1" />
            <PendingCourseCard title="Course 2" />
            <PendingCourseCard title="Course 3" />
          </div>

          <div className="flex flex-row justify-center pt-2">
            <Badge onClick={() => navigate("/userpage/learneractionpage/courses")} className="p-0" variant="link" {...trigger}>
              Go to Courses
              <ArrowRight02Icon {...courses} size={18} />
            </Badge>
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Account Activity</p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <RecentActivityCard />

            <ReferralNetworkCard />
          </div>
        </section>
      </div>
    </>
  );
};
