import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AvailableQuizzesContainer } from "./AvailableQuizzesContainer";

export const AvailableQuizzesPanel = () => {
  return (
    <>
      <Tabs defaultValue="free" className="pt-4">
        <TabsList>
          <TabsTrigger value="free">Free</TabsTrigger>
          <TabsTrigger value="premium">Premium</TabsTrigger>
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
