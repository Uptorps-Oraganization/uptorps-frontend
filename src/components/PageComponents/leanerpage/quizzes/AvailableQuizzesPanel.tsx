import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AvailableQuizzesPanelType } from "@/typesnschemas/types/DataTypes";
import { LockKeyhole, LockOpenIcon } from "lucide-react";
import { AvailableQuizzesContainer } from "./AvailableQuizzesContainer";

export const AvailableQuizzesPanel = (props: AvailableQuizzesPanelType) => {
  return (
    <>
      <Tabs defaultValue="free" className="pt-2">
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

        <TabsContent value="free">
          <AvailableQuizzesContainer />
        </TabsContent>

        <TabsContent value="premium">
          <AvailableQuizzesContainer />
        </TabsContent>
      </Tabs>
    </>
  );
};
