import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuizConfigDisplayContext } from "@/contexthandlers/QuizConfigurationDisplayProvider";
import { GitCommitHorizontalIcon } from "@animateicons/react/lucide";
import { AnimatePresence } from "motion/react";
import { ConfigurationBreadcrump } from "./ConfigBreadcrump";
import { ConfigDisplayContainer } from "./ConfigDisplayContainer";

export const ConfigurationCard = () => {
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
            <AnimatePresence mode="sync">
              {selectedConfiguration == 0 && <ConfigDisplayContainer configType="difficulty" />}
              {selectedConfiguration == 1 && <ConfigDisplayContainer configType="level" />}
              {selectedConfiguration == 2 && <ConfigDisplayContainer configType="programme" />}
              {selectedConfiguration == 3 && <ConfigDisplayContainer configType="course" />}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
