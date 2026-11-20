import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuizConfigDisplayContext } from "@/contexthandlers/QuizConfigDisplayProvider";
import { GitCommitHorizontalIcon } from "@animateicons/react/lucide";
import { ConfigurationBreadcrump } from "./ConfigBreadcrump";
import { ConfigItemContainer } from "./ConfigItemContainer";

export const ConfigContainerCard = () => {
  const { selectedConfiguration } = useQuizConfigDisplayContext();

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
            {selectedConfiguration == 0 && <ConfigItemContainer configType="difficulty" />}
            {selectedConfiguration == 1 && <ConfigItemContainer configType="level" />}
            {selectedConfiguration == 2 && <ConfigItemContainer configType="programme" />}
            {selectedConfiguration == 3 && <ConfigItemContainer configType="course" />}
          </CardContent>
        </Card>
      </div>
    </>
  );
};
