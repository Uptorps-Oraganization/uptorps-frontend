import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { useQuizConfigDisplayContext } from "@/contexthandlers/QuizConfigDisplayProvider";
import type { ConfigItemType } from "@/typesnschemas/types/DataTypes";
import { SquarePenIcon, Trash2Icon } from "@animateicons/react/lucide";
import { Database, GraduationCapIcon, LayersIcon, LayoutGridCirclesIcon } from "lucide-react";
import { useState } from "react";
import { ConfigItemDeleteDialog } from "../quizpagedialogs/ConfigItemDeleteDialog";
import { ConfigItemEditDialog } from "../quizpagedialogs/ConfigItemEditDialog";

export const ConfigItem = (props: ConfigItemType) => {
  const { setselectedConfiguration, configQueryData, setconfigQueryData } = useQuizConfigDisplayContext();
  const [configItemEditDialogOpen, setConfigItemEditDialogOpen] = useState(false);
  const [configItemDeleteDialogOpen, setConfigItemDeleteDialogOpen] = useState(false);

  return (
    <>
      <Card className="max-w-100 flex flex-row items-center justify-between p-0">
        <CardContent
          className={`w-full h-full flex flex-col gap-0.5 py-3 ${!(props.type === "course") && "hover:bg-accent cursor-pointer"}`}
          onClick={() => ConfigItemClickCondition({ type: props.type, name: props.name, setselectedConfiguration, configQueryData, setconfigQueryData })}
        >
          <ConfigItemIcon type={props.type} />
          <CardHeader className="px-0 text-sm font-semibold">{props.name}</CardHeader>
          <CardDescription className="pb-0 text-xs font-light">{props.description}</CardDescription>
        </CardContent>

        {props.type !== "difficulty" && (
          <article className="w-fit flex flex-row justify-center items-center">
            <Button onClick={() => setConfigItemEditDialogOpen(true)} variant="ghost" size="icon" className="border">
              <SquarePenIcon className="size-4!" />
            </Button>

            <Button onClick={() => setConfigItemDeleteDialogOpen(true)} variant="ghost" size="icon" className="border">
              <Trash2Icon className="text-destructive" />
            </Button>
          </article>
        )}
      </Card>

      {configItemEditDialogOpen && <ConfigItemEditDialog type={props.type} name={props.name} setConfigItemEditDialogOpen={setConfigItemEditDialogOpen} />}
      {configItemDeleteDialogOpen && <ConfigItemDeleteDialog type={props.type} name={props.name} setConfigItemDeleteDialogOpen={setConfigItemDeleteDialogOpen} />}
    </>
  );
};

const ConfigItemClickCondition = (props: any) => {
  if (props.type == "difficulty") {
    props.setconfigQueryData({ difficulty: props.name });
    props.setselectedConfiguration(1);
  } else if (props.type == "level") {
    props.setconfigQueryData({ level: props.name });
    props.setselectedConfiguration(2);
  } else if (props.type == "programme") {
    props.setconfigQueryData({ programme: props.name });
    props.setselectedConfiguration(3);
  }
};

const ConfigItemIcon = ({ type: type }: { type: string }) => {
  return (
    <>
      {type === "difficulty" && <LayoutGridCirclesIcon className="size-3" />}
      {type === "level" && <LayersIcon className="size-3" />}
      {type === "programme" && <Database className="size-3" />}
      {type === "course" && <GraduationCapIcon className="size-3" />}
    </>
  );
};
