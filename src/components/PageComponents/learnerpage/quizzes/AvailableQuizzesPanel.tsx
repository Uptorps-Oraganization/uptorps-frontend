import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AvailableQuizzesPanelType } from "@/typesnschemas/types/DataTypes";
import { LockKeyhole, LockOpenIcon } from "lucide-react";
import { useState } from "react";
import { AvailableQuizzesContainer } from "./AvailableQuizzesContainer";

export const AvailableQuizzesPanel = (props: AvailableQuizzesPanelType) => {
  const [quizzesType, setQuizzesType] = useState<"free" | "premium">("free");

  return (
    <>
      <Tabs defaultValue="free" onValueChange={(value) => setQuizzesType(value)} className="pt-2">
        <TabsList>
          <TabsTrigger value="free" className="focus:font-semibold!">
            <LockOpenIcon />
            Free
          </TabsTrigger>

          <TabsTrigger value="premium" className="focus:font-semibold!" disabled={props.userSubcriptionType === "free"}>
            <LockKeyhole />
            Premium
          </TabsTrigger>
        </TabsList>

        <TabsContent value={quizzesType}>
          <AvailableQuizzesContainer />
        </TabsContent>
      </Tabs>
    </>
  );
};
