import { DeleteAccountDialog } from "@/components/PageComponents/adminpage/accounts/accountdialogs/DeleteAccountDialog";
import { SuspendAccountDialog } from "@/components/PageComponents/adminpage/accounts/accountdialogs/SuspendAccountDialog";
import { AccountTransactionDisplayCard } from "@/components/PageComponents/adminpage/accounts/AccountTransactionDisplayCard";
import { UserStatCard } from "@/components/PageComponents/adminpage/accounts/UserStatCard";
import { RevenueStatCard } from "@/components/PageComponents/adminpage/finance/RevenueStatCard";
import { UserProfileImg } from "@/components/PageComponents/sharedcomponents/UserProfileImg";
import { Button } from "@/components/ui/button";
import { useAccountStore } from "@/statemanagers/adminpagestate/AccountStore";
import { SendIcon } from "@animateicons/react/huge";
import { BanIcon, BrainIcon, CircleDotIcon, GraduationCapIcon, Trash2Icon, UserGroupIcon } from "@animateicons/react/lucide";
import { useParams } from "react-router";

export const UserAccountActivity = () => {
  const { userID } = useParams();
  const { suspendAccountOpen, setSuspendAccountOpen, deleteAccoutOpen, setDeleteAccoutOpen } = useAccountStore();

  return (
    <>
      <div className="flex flex-col gap-4">
        <section className="flex flex-row justify-start items-center px-10">
          <div className="p-4">
            <UserProfileImg
              size="size-40"
              borderStyle="border-8"
              headerImgUrl={
                "https://api.dicebear.com/10.x/lorelei/svg?backgroundColor=d6bd97&skinColor=e9d3b0&hairColor=4a3526&outlineColor=4a3526&eyebrowsColor=4a3526&eyesColor=4a3526&noseColor=4a3526&mouthColor=4a3526&frecklesColor=4a3526&glassesColor=4a3526&earringsColor=4a3526&hairAccessoriesColor=4a3526&seed=62tesywc"
              }
              altText={"UserImg"}
            />
          </div>

          <div className="flex flex-col">
            <section className="flex flex-col justify-start">
              <p className="font-semibold">Jessica Annum Doe</p>
              <span className="text-xs">User ID: {userID}</span>
              <span className="text-xs">Account Type: Learner</span>
              <span className="text-xs">Account Status: Active</span>
              <span className="text-xs">Subscription Status: Free</span>
            </section>

            <section className="flex flex-row gap-2 pt-3">
              <Button variant="outline">
                <SendIcon />
                Send Email
              </Button>

              <Button onClick={setSuspendAccountOpen} className="text-amber-500" variant="outline">
                <BanIcon />
                Suspend Account
              </Button>

              <Button onClick={setDeleteAccoutOpen} className="text-destructive" variant="outline">
                <Trash2Icon />
                Delete Account
              </Button>
            </section>
          </div>
        </section>

        <section className="px-8">
          <p className="font-semibold">Activity Summary</p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <UserStatCard title={"Quizzes Completed"} figure={23} trendicon={BrainIcon} />
            <UserStatCard title={"Courses Completed"} figure={10} trendicon={GraduationCapIcon} />
            <UserStatCard title={"Referrals Achieved"} figure={22} trendicon={UserGroupIcon} />
          </div>
        </section>

        <section className="px-8">
          <p className="font-semibold">Wallet Summary</p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <RevenueStatCard title={"Total Earnings"} amount={2300} trendicon={CircleDotIcon} />
            <RevenueStatCard title={"Total Withdrawal"} amount={1300} trendicon={CircleDotIcon} />
          </div>
        </section>

        <section className="px-8">
          <p className="font-semibold">Transactions & Cash Flow</p>

          <div className="pt-2 pb-4">
            <AccountTransactionDisplayCard />
          </div>
        </section>
      </div>

      {suspendAccountOpen && <SuspendAccountDialog />}
      {deleteAccoutOpen && <DeleteAccountDialog />}
    </>
  );
};
