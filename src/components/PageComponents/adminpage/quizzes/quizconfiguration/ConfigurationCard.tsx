import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuizPageStore } from "@/statemanagers/adminpagestate/QuizPageStore";
import { GitCommitHorizontalIcon } from "@animateicons/react/lucide";
import { ConfigurationBreadcrump } from "./ConfigBreadcrump";
import { ConfigCourseDisplay, ConfigDifficultyDisplay, ConfigLevelDisplay, ConfigProgrammeDisplay } from "./ConfigDisplayContainer";

export const ConfigurationCard = () => {
  const { selectedConfiguration } = useQuizPageStore();

  return (
    <>
      <div className="pt-2">
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="flex flex-row justify-between items-center">
              <span className="flex flex-row items-center">
                Difficulty
                <GitCommitHorizontalIcon />
                Levels
                <GitCommitHorizontalIcon />
                Programmes
                <GitCommitHorizontalIcon />
                Courses
              </span>
            </CardTitle>

            <CardDescription>
              <ConfigurationBreadcrump />
            </CardDescription>
          </CardHeader>

          <CardContent className="px-2">
            {selectedConfiguration == 0 && <ConfigDifficultyDisplay />}
            {selectedConfiguration == 1 && <ConfigLevelDisplay />}
            {selectedConfiguration == 2 && <ConfigProgrammeDisplay />}
            {selectedConfiguration == 3 && <ConfigCourseDisplay />}
          </CardContent>
        </Card>
      </div>
    </>
  );
};
