import { Button } from "@/components/ui/button";
import { CirclePlusIcon } from "lucide-react";
import { useEffect } from "react";
import { useDisplayContext } from "./ConfigDisplayContext";
import { ConfigurationItem } from "./ConfigItem";

export const ConfigDifficultyDisplay = () => {
  const { selectedConfiguration } = useDisplayContext();

  return (
    <>
      <div className="px-10 py-3 space-y-4" hidden={selectedConfiguration == 0 ? false : true}>
        <section className="grid grid-cols-3 gap-3">
          <ConfigurationItem name="Nursery" type="difficulty" />
          <ConfigurationItem name="Basic" type="difficulty" />
          <ConfigurationItem name="Secondary" type="difficulty" />
          <ConfigurationItem name="Tetiary" type="difficulty" />
        </section>
      </div>
    </>
  );
};

export const ConfigLevelDisplay = () => {
  const { selectedConfiguration, configQueryData } = useDisplayContext();

  useEffect(() => {
    console.log(configQueryData);
  }, [configQueryData]);

  return (
    <>
      <div className="px-10 pt-1 space-y-4" hidden={selectedConfiguration == 1 ? false : true}>
        <Button className="px-6 h-10 min-w-50">
          <CirclePlusIcon />
          Add Level
        </Button>

        <section className="grid grid-cols-3 gap-3">
          <ConfigurationItem name="Level 1" type="level" />
          <ConfigurationItem name="Level 2" type="level" />
          <ConfigurationItem name="Level 3" type="level" />
          <ConfigurationItem name="Level 4" type="level" />
        </section>
      </div>
    </>
  );
};

export const ConfigProgrammeDisplay = () => {
  const { selectedConfiguration, configQueryData } = useDisplayContext();

  useEffect(() => {
    console.log(configQueryData);
  }, [configQueryData]);

  return (
    <>
      <div className="px-10 pt-1 space-y-4" hidden={selectedConfiguration == 2 ? false : true}>
        <Button className="px-6 h-10 min-w-50">
          <CirclePlusIcon />
          Add Programme
        </Button>

        <section className="grid grid-cols-3 gap-3">
          <ConfigurationItem name="Arts" type="programme" />
          <ConfigurationItem name="History" type="programme" />
          <ConfigurationItem name="Mathematics" type="programme" />
          <ConfigurationItem name="Science" type="programme" />
        </section>
      </div>
    </>
  );
};

export const ConfigCourseDisplay = () => {
  const { selectedConfiguration, configQueryData } = useDisplayContext();

  useEffect(() => {
    console.log(configQueryData);
  }, [configQueryData]);

  return (
    <>
      <div className="px-10 pt-1 space-y-4" hidden={selectedConfiguration == 3 ? false : true}>
        <Button className="px-6 h-10 min-w-50">
          <CirclePlusIcon />
          Add Course
        </Button>

        <section className="grid grid-cols-3 gap-3">
          <ConfigurationItem name="Dance" type="course" />
          <ConfigurationItem name="War & Culture" type="course" />
          <ConfigurationItem name="Algebra" type="course" />
          <ConfigurationItem name="Elements" type="course" />
        </section>
      </div>
    </>
  );
};
