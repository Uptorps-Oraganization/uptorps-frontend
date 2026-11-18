import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { useQuizConfigDisplayContext } from "@/contexthandlers/QuizConfigDisplayProvider";
import type { QuizConfigType } from "@/typesnschemas/types/DataTypes";
import { SquarePenIcon, Trash2Icon } from "@animateicons/react/lucide";
import { Database, GraduationCapIcon, LayersIcon, LayoutGridCirclesIcon } from "lucide-react";

type ConfigItemType = {
  name: string;
  type: QuizConfigType;
  description?: string;
};

export const ConfigItem = (props: ConfigItemType) => {
  const { setselectedConfiguration, configQueryData, setconfigQueryData } = useQuizConfigDisplayContext();

  return (
    <>
      <Card className="max-w-100 flex flex-row items-center justify-between p-0">
        <CardContent
          className={`w-full h-full flex flex-col gap-0.5 py-3 ${!(props.type === "course") && "hover:bg-accent cursor-pointer"}`}
          onClick={() => ConfigItemClickCondition({ itemDescription: props.type, item: props.name, setselectedConfiguration, configQueryData, setconfigQueryData })}
        >
          <ConfigItemIcon itemDescription={props.type} />
          <CardHeader className="px-0 text-sm font-semibold">{props.name}</CardHeader>
          <CardDescription className="pb-0 text-xs font-light">{props.description}</CardDescription>
        </CardContent>

        {props.type !== "difficulty" && (
          <article className="w-fit flex flex-row justify-center items-center">
            <Button variant="ghost" size="icon" className="border">
              <SquarePenIcon className="size-4!" />
            </Button>

            <Button variant="ghost" size="icon" className="border">
              <Trash2Icon className="text-destructive" />
            </Button>
          </article>
        )}
      </Card>
    </>
  );
};

const ConfigItemClickCondition = (props: any) => {
  if (props.itemDescription == "difficulty") {
    props.setconfigQueryData({ difficulty: props.item });
    props.setselectedConfiguration(1);
  } else if (props.itemDescription == "level") {
    props.setconfigQueryData({ level: props.item });
    props.setselectedConfiguration(2);
  } else if (props.itemDescription == "programme") {
    props.setconfigQueryData({ programme: props.item });
    props.setselectedConfiguration(3);
  }
};

const ConfigItemIcon = ({ itemDescription }: { itemDescription: string }) => {
  return (
    <>
      {itemDescription === "difficulty" && <LayoutGridCirclesIcon className="size-3" />}
      {itemDescription === "level" && <LayersIcon className="size-3" />}
      {itemDescription === "programme" && <Database className="size-3" />}
      {itemDescription === "course" && <GraduationCapIcon className="size-3" />}
    </>
  );
};
