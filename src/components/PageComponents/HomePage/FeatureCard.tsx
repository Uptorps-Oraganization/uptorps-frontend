import type { FeatureDataType } from "@/typesnschemas/types/DataTypes";
import { Card, CardDescription, CardTitle } from "../../ui/card";

export const FeatureCard = ({ icon: Icon, title, description }: FeatureDataType) => {
  return (
    <Card className="w-100 flex flex-col justify-center items-start p-4 space-x-0">
      <div className="w-fit bg-green-500/90 p-2">
        <Icon size={60} />
      </div>

      <div className="">
        <CardTitle className="text-[20px] font-bold">{title}</CardTitle>
        <CardDescription className="text-[14px]">{description}</CardDescription>
      </div>
    </Card>
  );
};
