import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SquarePenIcon } from "@/components/ui/square-pen-icon";
import { CirclePlusIcon, GitCommitHorizontalIcon, Trash2Icon } from "@animateicons/react/lucide";

export const QuizLevelCard = () => {
  return (
    <>
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex flex-row items-center">
            Difficulty
            <GitCommitHorizontalIcon />
            Levels
            <GitCommitHorizontalIcon />
            Programmes
            <GitCommitHorizontalIcon />
            Courses
          </CardTitle>
          <CardDescription>Configure difficulty, levels, programmes, courses</CardDescription>
        </CardHeader>

        <CardContent className="px-4">
          <Breadcrumb className="px-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<a>Difficulty</a>} />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink render={<a>Level</a>} />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink render={<a>Programme</a>} />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Course</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="px-4 pt-3">
            <Button className="px-6 h-10">
              <CirclePlusIcon />
              Add Difficulty
            </Button>

            <section className="pt-4">
              <Card className="max-w-100">
                <CardContent className="flex flex-row items-center justify-between">
                  <span>Nursery</span>

                  <article>
                    <Button variant="ghost" size="icon" className="border">
                      <SquarePenIcon className="size-4!" />
                    </Button>
                    <Button variant="ghost" size="icon" className="border">
                      <Trash2Icon className="text-destructive" />
                    </Button>
                  </article>
                </CardContent>
              </Card>
            </section>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
