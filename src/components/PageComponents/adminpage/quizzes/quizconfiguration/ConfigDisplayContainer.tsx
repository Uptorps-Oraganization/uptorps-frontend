import { Button } from "@/components/ui/button";
import { useQuizPageStore } from "@/statemanagers/adminpagestate/QuizPageStore";
import { useIconHover } from "@animateicons/react";
import { CirclePlusIcon, HouseIcon } from "@animateicons/react/lucide";
import { ConfigurationItem } from "./ConfigItem";

export const ConfigDifficultyDisplay = () => {
  const { selectedConfiguration } = useQuizPageStore();

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
  const { clearConfigQueryData, selectedConfiguration, setselectedConfiguration } = useQuizPageStore();
  const { ref: homeref, triggerProps: hometrigger } = useIconHover({ trigger: "hover" });
  const { ref, triggerProps } = useIconHover({ trigger: "hover" });

  return (
    <>
      <div className="px-10 pt-1 space-y-4" hidden={selectedConfiguration == 1 ? false : true}>
        <section className="flex flex-row gap-2">
          <Button
            onClick={() => {
              setselectedConfiguration(0);
              clearConfigQueryData();
            }}
            className="px-4 h-10"
            variant={"ghost"}
            {...hometrigger}
          >
            <HouseIcon ref={homeref} />
          </Button>

          <Button className="px-10 h-10" {...triggerProps}>
            <CirclePlusIcon ref={ref} />
            Add Level
          </Button>
        </section>

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
  const { selectedConfiguration } = useQuizPageStore();
  const { ref, triggerProps } = useIconHover({ trigger: "hover" });

  return (
    <>
      <div className="px-10 pt-1 space-y-4" hidden={selectedConfiguration == 2 ? false : true}>
        <Button className="px-10 h-10" {...triggerProps}>
          <CirclePlusIcon ref={ref} />
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
  const { selectedConfiguration } = useQuizPageStore();
  const { ref, triggerProps } = useIconHover({ trigger: "hover" });

  return (
    <>
      <div className="px-10 pt-1 space-y-4" hidden={selectedConfiguration == 3 ? false : true}>
        <Button className="px-10 h-10" {...triggerProps}>
          <CirclePlusIcon ref={ref} />
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
