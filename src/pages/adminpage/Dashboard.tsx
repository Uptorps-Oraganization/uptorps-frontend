import { AccountStatCard } from "@/components/PageComponents/adminpage/dashboardcomponents/AccountStatCard";
import { ActiveAccountStatCard } from "@/components/PageComponents/adminpage/dashboardcomponents/ActiveAccountStatCard";
import { RevenueStatCard } from "@/components/PageComponents/adminpage/dashboardcomponents/RevenueStatCard";
import { SiteVisitStatCard } from "@/components/PageComponents/adminpage/dashboardcomponents/SiteVisitStatCard";
import { TrendingUp } from "@animateicons/react/lucide";
import { CircleDotIcon } from "lucide-react";

export const AdminDashboard = () => {
  return (
    <>
      <div className="p-1 pt-2 space-y-6">
        <section className="px-4">
          <p className="font-semibold">Accounts & User Statistics</p>

          <div id="adminOverviewSection" className="grid grid-cols-3 gap-4 pt-2">
            <AccountStatCard title={"Total Users"} figure={"10,345"} trend={"+12.5%"} trendicon={TrendingUp} overallcomment={"Total for the last 6 months: 3,345 (3k)"} />

            <AccountStatCard title={"Total Learners"} figure={"10,000"} trend={"+2.5%"} trendicon={TrendingUp} overallcomment={"Learners for the last 6 months: 1,453"} />

            <AccountStatCard title={"Total Tutors"} figure={"345"} trend={"+10.5%"} trendicon={TrendingUp} overallcomment={"Tutors for the last 6 months: 45"} />
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Revenue Statistics</p>

          <div id="adminOverviewSection" className="grid grid-cols-3 gap-4 pt-2">
            <AccountStatCard title={"Overall Revenue"} figure={"GHC 100,200"} trendicon={CircleDotIcon} overallcomment={"All time revenue generated"} />

            <AccountStatCard title={"Recent Revenue"} figure={"GHC 20,265"} trend={"+1.5%"} trendicon={TrendingUp} overallcomment={"Revenue for the last 6 months"} />

            <AccountStatCard title={"Total Payouts"} figure={"GHC 40,200"} trendicon={CircleDotIcon} overallcomment={"All time successful payouts"} />
          </div>
        </section>

        <div className="grid grid-cols-2 gap-2 px-4">
          <section>
            <p className="font-semibold">Revenue Metrics</p>

            <div className="pt-2">
              <RevenueStatCard />
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
            <SiteVisitStatCard />
          </div>
        </section>
      </div>
    </>
  );
};
