import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useQuizConfigDisplayContext } from "@/contexthandlers/QuizConfigurationDisplayProvider";
import { quizConfigNameSchema, type QuizConfigNameType } from "@/typesnschemas/schemas/QuizSchema";
import type { QuizConfigType, QuizConfigUpdateStatusType } from "@/typesnschemas/types/DataTypes";
import { useIconHover } from "@animateicons/react";
import { CirclePlusIcon, HouseIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckIcon, CircleXIcon, LayersIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { ConfigurationItem } from "./ConfigItem";

import { AnimatePresence, motion } from "motion/react";

export const ConfigDisplayContainer = (props: { configType: QuizConfigType }) => {
  const { configQueryData, clearConfigQueryData, setselectedConfiguration } = useQuizConfigDisplayContext();
  const { ref: homeRef, triggerProps: hometrigger } = useIconHover({ trigger: "hover" });
  const { ref: addRef, triggerProps: addtrigger } = useIconHover({ trigger: "hover" });

  const [showInput, setShowInput] = useState(false);
  const [acceptLoading, setAcceptLoading] = useState(false);

  const [uploadStatus, setUploadStatus] = useState<QuizConfigUpdateStatusType>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: formReset,
  } = useForm<QuizConfigNameType>({
    resolver: zodResolver(quizConfigNameSchema),
  });

  const handleConfigUpload: SubmitHandler<QuizConfigNameType> = (data) => {
    setAcceptLoading(true);
    setTimeout(() => {
      if (props.configType === "level") {
        const refinedLevelRequestData = { difficulty: configQueryData.difficulty, name: data.name };
        console.log("Level Added", refinedLevelRequestData);
        setAcceptLoading(false);
      }

      if (props.configType === "programme") {
        const refinedProgrammeRequestData = { difficulty: configQueryData.difficulty, level: configQueryData.level, name: data.name };
        console.log("Programme Added", refinedProgrammeRequestData);
        setAcceptLoading(false);
      }

      if (props.configType === "course") {
        const refinedCourseRequestData = {
          difficulty: configQueryData.difficulty,
          level: configQueryData.level,
          programme: configQueryData.programme,
          name: data.name,
        };
        console.log("Course Added", refinedCourseRequestData);
        setAcceptLoading(false);
      }

      showUploadStatusBadge("failure");
      formReset();
    }, 1000);
  };

  const showUploadStatusBadge = (status: QuizConfigUpdateStatusType) => {
    setUploadStatus(status);
    setTimeout(() => {
      setUploadStatus(null);
    }, 1000);
  };

  if (props.configType === "difficulty") {
    return (
      <>
        <motion.div
          key={props.configType}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="px-10 space-y-4"
        >
          <section className="grid grid-cols-3 gap-3">
            <ConfigurationItem name="Nursery" type="difficulty" description="For nusery minds" />
            <ConfigurationItem name="Basic" type="difficulty" description="For basic minds" />
            <ConfigurationItem name="Secondary" type="difficulty" description="For secondary minds" />
            <ConfigurationItem name="Tetiary" type="difficulty" description="For tetiary minds" />
          </section>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <motion.div
        key={props.configType}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="px-10 space-y-4"
      >
        <section className="flex flex-row gap-2">
          {props.configType === "level" && (
            <Button
              onClick={() => {
                setselectedConfiguration(0);
                clearConfigQueryData();
              }}
              className="px-4 h-10"
              variant={"ghost"}
              {...hometrigger}
            >
              <HouseIcon ref={homeRef} />
            </Button>
          )}

          {props.configType === "level" && (
            <Button onClick={() => setShowInput(true)} className="px-10 h-10" {...addtrigger}>
              <CirclePlusIcon ref={addRef} />
              Add Level
            </Button>
          )}

          {props.configType === "programme" && (
            <Button onClick={() => setShowInput(true)} className="px-10 h-10" {...addtrigger}>
              <CirclePlusIcon ref={addRef} />
              Add Programme
            </Button>
          )}

          {props.configType === "course" && (
            <Button onClick={() => setShowInput(true)} className="px-10 h-10" {...addtrigger}>
              <CirclePlusIcon ref={addRef} />
              Add Course
            </Button>
          )}
        </section>

        <AnimatePresence mode="popLayout">
          {showInput && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.5,
              }}
              className="flex flex-col"
            >
              <section className="w-fit flex flex-row items-center gap-2">
                <form id="config-input-form" onSubmit={handleSubmit(handleConfigUpload)}>
                  <Input
                    className="min-w-60"
                    {...register("name")}
                    type="text"
                    placeholder={
                      props.configType === "level" ? "Type the level here....." : props.configType === "programme" ? "Type the programme here....." : "Type the course here....."
                    }
                  />
                </form>

                <div className="w-fit flex flex-row items-center gap-2">
                  {acceptLoading && <Spinner className="mr-0! size-3!" />}

                  <Button type="submit" form="config-input-form" className="size-7 text-white bg-green-500 rounded-full hover:text-green-500" variant="ghost">
                    <CircleCheckIcon />
                  </Button>

                  <Button
                    onClick={() => {
                      setShowInput(false);
                      formReset();
                    }}
                    className="size-7 text-white bg-destructive rounded-full hover:text-destructive"
                    variant="ghost"
                  >
                    <CircleXIcon />
                  </Button>
                </div>

                {uploadStatus == "success" && (
                  <Badge className="badge_in_table text-green-500 bg-green-500/10">
                    <LayersIcon className="size-3" />
                    {props.configType === "level" && "Level Added"}
                    {props.configType === "programme" && "Programme Added"}
                    {props.configType === "course" && "Course Added"}
                  </Badge>
                )}

                {uploadStatus == "failure" && (
                  <Badge className="badge_in_table text-destructive bg-destructive/10">
                    <XIcon className="size-3" />
                    {props.configType === "level" && "Level Not Added"}
                    {props.configType === "programme" && "Programme Not Added"}
                    {props.configType === "course" && "Course Not Added"}
                  </Badge>
                )}
              </section>

              {errors && <p className="text-[12px] font-medium text-destructive">{errors.name?.message}</p>}
            </motion.div>
          )}
        </AnimatePresence>

        {props.configType === "level" && (
          <section className="grid grid-cols-3 gap-3">
            <ConfigurationItem name="Level 1" type="level" />
            <ConfigurationItem name="Level 2" type="level" />
            <ConfigurationItem name="Level 3" type="level" />
            <ConfigurationItem name="Level 4" type="level" />
          </section>
        )}
        {props.configType === "programme" && (
          <section className="grid grid-cols-3 gap-3">
            <ConfigurationItem name="Arts" type="programme" />
            <ConfigurationItem name="History" type="programme" />
            <ConfigurationItem name="Mathematics" type="programme" />
            <ConfigurationItem name="Science" type="programme" />
          </section>
        )}
        {props.configType === "course" && (
          <section className="grid grid-cols-3 gap-3">
            <ConfigurationItem name="Dance" type="course" />
            <ConfigurationItem name="War & Culture" type="course" />
            <ConfigurationItem name="Algebra" type="course" />
            <ConfigurationItem name="Elements" type="course" />
          </section>
        )}
      </motion.div>
    </>
  );
};
