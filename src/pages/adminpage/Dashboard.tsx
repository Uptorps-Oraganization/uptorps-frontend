import { AccountUserStatCard } from "@/components/PageComponents/adminpage/dashboardcomponents/AccountUserStatCard";
import { SiteVisitStatCard } from "@/components/PageComponents/adminpage/dashboardcomponents/SiteVisitStatCard";
import { TrendingUp } from "@animateicons/react/lucide";

export const AdminDashboard = () => {
  return (
    <>
      <div className="p-2 pt-6 space-y-6">
        <section className="px-4">
          <p className="font-semibold">Accounts & User Statistics</p>
          <div id="adminOverviewSection" className="grid grid-cols-3 gap-4 pt-2">
            <AccountUserStatCard
              title={"Total Users"}
              figure={"10,345"}
              trend={"+12.5%"}
              trendicon={TrendingUp}
              overallcomment={"Total for the last 6 months: 3,345 (3k)"}
            />

            <AccountUserStatCard
              title={"Total Learners"}
              figure={"10,000"}
              trend={"+2.5%"}
              trendicon={TrendingUp}
              overallcomment={"Learners for the last 6 months: 1,453"}
            />

            <AccountUserStatCard
              title={"Total Tutors"}
              figure={"345"}
              trend={"+10.5%"}
              trendicon={TrendingUp}
              overallcomment={"Tutors for the last 6 months: 45"}
            />
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Site Visits Statistics</p>

          <div className="pt-2">
            <SiteVisitStatCard />
          </div>
        </section>
      </div>
    </>
  );
};
