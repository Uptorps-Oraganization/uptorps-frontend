/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuizPageStore } from "@/statemanagers/adminpagestate/QuizPageStore";
import { SquarePenIcon, Trash2Icon } from "@animateicons/react/lucide";
import { Database, GraduationCapIcon, LayersIcon, LayoutGridCirclesIcon } from "lucide-react";

type ConfItemType = {
  name: string;
  type: "difficulty" | "level" | "programme" | "course";
};

export const ConfigurationItem = (props: ConfItemType) => {
  const { selectedConfiguration, setselectedConfiguration, configQueryData, setConfigQueryData } = useQuizPageStore();

  return (
    <>
      <Card className="max-w-100 flex flex-row items-center justify-between p-0">
        <CardContent
          className={`w-full py-3 ${!(selectedConfiguration === 3) && "hover:bg-accent cursor-pointer"}`}
          onClick={() => ConfigItemClickCondition({ itemDescription: props.type, item: props.name, setselectedConfiguration, configQueryData, setConfigQueryData })}
        >
          <span className="grid grid-rows-1 gap-1 text-sm font-semibold">
            <ConfigItemIcon itemDescription={props.type} />
            {props.name}
          </span>
        </CardContent>

        <article className="w-fit flex flex-row justify-center items-center">
          <Button variant="ghost" size="icon" className="border">
            <SquarePenIcon className="size-4!" />
          </Button>
          
          <Button variant="ghost" size="icon" className="border">
            <Trash2Icon className="text-destructive" />
          </Button>
        </article>
      </Card>
    </>
  );
};

const ConfigItemClickCondition = (props: any) => {
  if (props.itemDescription == "difficulty") {
    props.setConfigQueryData({ difficulty: props.item });
    props.setselectedConfiguration(1);
  } else if (props.itemDescription == "level") {
    props.setConfigQueryData({ level: props.item });
    props.setselectedConfiguration(2);
  } else if (props.itemDescription == "programme") {
    props.setConfigQueryData({ programme: props.item });
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
