import { AccountDisplayCard } from "@/components/PageComponents/adminpage/accounts/AccountDisplayCard";
import { UserStatCard } from "@/components/PageComponents/adminpage/accounts/UserStatCard";

import { CircleDotIcon, TrendingUp } from "@animateicons/react/lucide";

export const AdminUserAccounts = () => {
  return (
    <>
      <div className="p-1 pt-2 pb-10 space-y-6">
        <section className="px-4">
          <p className="font-semibold">User Account Statistics</p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <UserStatCard title={"Total Users"} figure={10345} trend={"+12.5%"} trendicon={TrendingUp} />

            <UserStatCard title={"Total Learners"} figure={10000} trend={"+2.5%"} trendicon={TrendingUp} />

            <UserStatCard title={"Total Tutors"} figure={345} trend={"+10.5%"} trendicon={TrendingUp} />
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <UserStatCard title={"Premium Accounts"} figure={9234} trendicon={CircleDotIcon} />

            <UserStatCard title={"Free Accounts"} figure={1000} trendicon={CircleDotIcon} />

            <UserStatCard title={"Suspended Accounts"} figure={345} trendicon={CircleDotIcon} />
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Account Details & Status</p>

          <div className="w-full px-4 pt-2">
            <AccountDisplayCard />
          </div>
        </section>
      </div>
    </>
  );
};
