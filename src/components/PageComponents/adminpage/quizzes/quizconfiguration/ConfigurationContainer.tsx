import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitCommitHorizontalIcon } from "@animateicons/react/lucide";
import { ConfigurationBreadcrump } from "./ConfigBreadcrump";
import { ConfigCourseDisplay, ConfigDifficultyDisplay, ConfigLevelDisplay, ConfigProgrammeDisplay } from "./ConfigDisplayContainer";

export const ConfigurationContainer = () => {
  return (
    <>
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
          <ConfigDifficultyDisplay />
          <ConfigLevelDisplay />
          <ConfigProgrammeDisplay />
          <ConfigCourseDisplay />
        </CardContent>
      </Card>
    </>
  );
};
