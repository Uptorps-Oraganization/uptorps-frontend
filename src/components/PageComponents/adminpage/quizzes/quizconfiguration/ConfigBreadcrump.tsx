/* eslint-disable @typescript-eslint/no-explicit-any */
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useQuizPageStore } from "@/statemanagers/adminpagestate/QuizPageStore";
import { Database, GraduationCapIcon, LayersIcon, LayoutGridCirclesIcon } from "lucide-react";
import React from "react";

export const ConfigurationBreadcrump = () => {
  const { configQueryData, setselectedConfiguration, setConfigQueryData } = useQuizPageStore();

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {Object.entries<string>(configQueryData).map((value, index) =>
            Object.keys(configQueryData).length - 1 === index ? (
              <BreadcrumbItem key={index}>
                <BreadcrumbPage className="flex flex-row items-center space-x-1">
                  <CrumpItemIcon itemDescription={value[0]} />
                  <span>{value[1]}</span>
                </BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <React.Fragment key={index}>
                <BreadcrumbItem
                  key={index}
                  onClick={() => CrumpItemClickCondition({ itemDescription: value[0], item: value[1], setselectedConfiguration, configQueryData, setConfigQueryData })}
                >
                  <BreadcrumbLink className="flex flex-row items-center space-x-1 cursor-pointer">
                    <CrumpItemIcon itemDescription={value[0]} />
                    <span>{value[1]}</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            ),
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

const CrumpItemClickCondition = (props: any) => {
  if (props.itemDescription == "difficulty") {
    delete props.configQueryData.level;
    delete props.configQueryData.programme;

    props.setConfigQueryData({ difficulty: props.item });
    props.setselectedConfiguration(1);
  } else if (props.itemDescription == "level") {
    delete props.configQueryData.programme;

    props.setConfigQueryData({ level: props.item });
    props.setselectedConfiguration(2);
  }
};

const CrumpItemIcon = ({ itemDescription }: { itemDescription: string }) => {
  return (
    <>
      {itemDescription === "difficulty" && <LayoutGridCirclesIcon className="size-3" />}
      {itemDescription === "level" && <LayersIcon className="size-3" />}
      {itemDescription === "programme" && <Database className="size-3" />}
      {itemDescription === "course" && <GraduationCapIcon className="size-3" />}
    </>
  );
};
