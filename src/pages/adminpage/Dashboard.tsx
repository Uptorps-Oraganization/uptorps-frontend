import { UserStatCard } from "@/components/PageComponents/adminpage/accounts/UserStatCard";
import { ActiveAccountStatCard } from "@/components/PageComponents/adminpage/dashboard/ActiveAccountStatCard";
import { RevenueChartCard } from "@/components/PageComponents/adminpage/dashboard/RevenueChartCard";
import { SiteVisitChartCard } from "@/components/PageComponents/adminpage/dashboard/SiteVisitChartCard";
import { RevenueStatCard } from "@/components/PageComponents/adminpage/finance/RevenueStatCard";

import { CircleDotIcon, TrendingUp } from "@animateicons/react/lucide";

export const AdminDashboard = () => {
  return (
    <>
      <div className="p-1 pt-2 pb-10 space-y-6">
        <section className="px-4">
          <p className="font-semibold">Account Statistics</p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <UserStatCard title={"Total Users"} figure={10345} trend={"+12.5%"} trendicon={TrendingUp} overallcomment={"Total for the last 6 months: 3,345 (3k)"} />

            <UserStatCard title={"Total Learners"} figure={10000} trend={"+2.5%"} trendicon={TrendingUp} overallcomment={"Learners for the last 6 months: 1,453"} />

            <UserStatCard title={"Total Tutors"} figure={345} trend={"+10.5%"} trendicon={TrendingUp} overallcomment={"Tutors for the last 6 months: 45"} />
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Revenue Statistics</p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <RevenueStatCard title={"Overall Revenue"} amount={100200} trendicon={CircleDotIcon} overallcomment={"All time revenue generated"} />

            <RevenueStatCard title={"Recent Revenue"} amount={20265} trend={"+1.5%"} trendicon={TrendingUp} overallcomment={"Revenue for the last 6 months"} />

            <RevenueStatCard title={"Total Payouts"} amount={40200} trendicon={CircleDotIcon} overallcomment={"All time successful payouts"} />
          </div>
        </section>

        <div className="grid grid-cols-2 gap-2 px-4">
          <section>
            <p className="font-semibold">Revenue Metrics</p>

            <div className="pt-2">
              <RevenueChartCard />
            </div>
          </section>

          <section>
            <p className="font-semibold">Accounts Metrics</p>

            <div className="pt-2">
              <ActiveAccountStatCard />
            </div>
          </section>
        </div>

        <section className="px-4">
          <p className="font-semibold">Site Visits Metrics</p>

          <div className="pt-2">
            <SiteVisitChartCard />
          </div>
        </section>
      </div>
    </>
  );
};
