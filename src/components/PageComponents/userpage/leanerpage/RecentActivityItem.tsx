import { Badge } from "@/components/ui/badge";
import { GraduationCapIcon } from "@animateicons/react/lucide";

export const RecentActivityItem = () => {
  return (
    <>
      <div className="flex flex-row justify-start items-center border p-2 gap-2">
        <Badge className="text-green-500 bg-green-500/10 font-semibold py-4">
          <GraduationCapIcon size={20} />
        </Badge>

        <section className="flex flex-col justify-start">
          <p className="text-[15px] font-semibold">Completed Course</p>
          <span className="text-xs">A lucky Course</span>
        </section>

        <span className="ms-auto text-sm font-semibold">5 hours ago</span>
      </div>
    </>
  );
};
