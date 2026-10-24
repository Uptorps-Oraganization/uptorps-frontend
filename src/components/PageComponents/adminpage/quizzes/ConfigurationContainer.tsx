import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitCommitHorizontalIcon } from "@animateicons/react/lucide";
import { ConfigurationBreadcrump } from "./ConfigBreadcrump";
import { ConfigCourseDisplay, ConfigDifficultyDisplay, ConfigLevelDisplay, ConfigProgrammeDisplay } from "./ConfigDisplayContainer";
import { ConfigDisplayProvider } from "./ConfigDisplayContext";

export const ConfigurationContainer = () => {
  return (
    <>
      <ConfigDisplayProvider>
        <Accordion>
          <AccordionItem>
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
                  <AccordionTrigger></AccordionTrigger>
                </CardTitle>

                <CardDescription>
                  <ConfigurationBreadcrump />
                </CardDescription>
              </CardHeader>

              <AccordionContent>
                <CardContent className="px-2">
                  <ConfigDifficultyDisplay />
                  <ConfigLevelDisplay />
                  <ConfigProgrammeDisplay />
                  <ConfigCourseDisplay />
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        </Accordion>
      </ConfigDisplayProvider>
    </>
  );
};
