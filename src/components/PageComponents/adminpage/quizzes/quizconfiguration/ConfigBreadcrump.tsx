/* eslint-disable @typescript-eslint/no-explicit-any */
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Database, GraduationCapIcon, LayersIcon, LayoutGridCirclesIcon } from "lucide-react";
import { useDisplayContext } from "./ConfigDisplayContext";

export const ConfigurationBreadcrump = () => {
  const { configQueryData, setselectedConfiguration, setConfigQueryData } = useDisplayContext();

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
              <>
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
              </>
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

    props.setConfigQueryData({ ...props.configQueryData, difficulty: props.item });
    props.setselectedConfiguration(1);
  } else if (props.itemDescription == "level") {
    delete props.configQueryData.programme;
    props.setConfigQueryData({ ...props.configQueryData, level: props.item });
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
