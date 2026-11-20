import { Badge } from "@/components/ui/badge";
import { Certificate } from "lucide-react";

export const RecentActivityItem = () => {
  return (
    <>
      <div className="flex flex-row justify-start items-center border p-2 gap-2">
        <Badge className="text-green-500 bg-green-500/10 font-semibold px-4 py-4 [&>svg]:size-5!">
          <Certificate />
        </Badge>

        <section className="flex flex-col justify-start">
          <p className="text-[14px] font-semibold">Completed Course</p>
          <span className="text-xs">A lucky Course</span>
        </section>

        <span className="ms-auto text-sm font-semibold">5 hours ago</span>
      </div>
    </>
  );
};
