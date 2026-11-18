import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useQuizConfigDisplayContext } from "@/contexthandlers/QuizConfigDisplayProvider";
import { HouseIcon } from "@animateicons/react/lucide";
import { Database, GraduationCapIcon, LayersIcon, LayoutGridCirclesIcon } from "lucide-react";
import React from "react";

export const ConfigurationBreadcrump = () => {
  const { configQueryData, setselectedConfiguration, clearConfigQueryData } = useQuizConfigDisplayContext();

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {Object.keys(configQueryData).length > 0 && (
            <>
              <BreadcrumbItem>
                <HouseIcon
                  onClick={() => {
                    setselectedConfiguration(0);
                    clearConfigQueryData();
                  }}
                  className="text-primary size-3 cursor-pointer"
                />
              </BreadcrumbItem>

              <BreadcrumbSeparator />
            </>
          )}
          {Object.entries<string>(configQueryData).map(([type, name], index) =>
            Object.keys(configQueryData).length - 1 === index ? (
              <BreadcrumbItem key={index}>
                <BreadcrumbPage className="flex flex-row items-center space-x-1">
                  <CrumpItemIcon type={type} />
                  <span>{name}</span>
                </BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <React.Fragment key={index}>
                <BreadcrumbItem key={index} onClick={() => CrumpItemClickCondition({ type, setselectedConfiguration, configQueryData })}>
                  <BreadcrumbLink className="flex flex-row items-center space-x-1 cursor-pointer">
                    <CrumpItemIcon type={type} />
                    <span>{name}</span>
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
  if (props.type == "difficulty") {
    delete props.configQueryData.level;
    delete props.configQueryData.programme;

    props.setselectedConfiguration(1);
  } else if (props.type == "level") {
    delete props.configQueryData.programme;

    props.setselectedConfiguration(2);
  }
};

const CrumpItemIcon = ({ type }: { type: string }) => {
  return (
    <>
      {type === "difficulty" && <LayoutGridCirclesIcon className="size-3" />}
      {type === "level" && <LayersIcon className="size-3" />}
      {type === "programme" && <Database className="size-3" />}
      {type === "course" && <GraduationCapIcon className="size-3" />}
    </>
  );
};
